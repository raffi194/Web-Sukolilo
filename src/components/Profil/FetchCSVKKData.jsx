import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Papa from 'papaparse';

export default function FetchCSVKKData() {
    const [csvData, setCsvData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCSVData = useCallback(async () => {
        setLoading(true);
        setError(null);

        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-ToZuGnkdfXdc0bwuwFATWXehB9oxoMnv8grhMTA23SsUnkw10VIbhGyt4o9PSDC8sXiSO7XAbANU/pub?output=csv';

        try {
            const response = await axios.get(csvUrl, {
                timeout: 10000,
                headers: {
                    'Accept': 'text/csv,text/plain,*/*'
                }
            });

            const parsed = Papa.parse(response.data, {
                header: true,
                skipEmptyLines: true,
                dynamicTyping: false,
                transformHeader: (header) => header.trim(),
            });

            const cleanData = parsed.data
                .map(row => ({
                    Tahun: row['Tahun']?.toString().trim(),
                    JumlahKK: Number(row['Jumlah KK']) || 0,
                }))
                .filter(row => row.Tahun);

            setCsvData(cleanData);

        } catch (error) {
            let errorMessage = 'Gagal memuat data';
            if (error.code === 'ECONNABORTED') {
                errorMessage = 'Koneksi timeout. Periksa koneksi internet Anda.';
            } else if (error.response) {
                errorMessage = `Server error: ${error.response.status}`;
            } else if (error.request) {
                errorMessage = 'Tidak dapat terhubung ke server.';
            } else {
                errorMessage = error.message || 'Terjadi kesalahan tidak dikenal';
            }
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCSVData();
    }, [fetchCSVData]);

    return { csvData, loading, error, refetch: fetchCSVData };
}
