import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Papa from 'papaparse';

export default function FetchCSVNewsData() {
    const [csvData, setCsvData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCSVData = useCallback(async () => {
        setLoading(true);
        setError(null);

        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRnwDxC5x1V1_FVBzYJBdcsYD-Hln0qp4eyyiP15kziAMmhiKaB-YTZDVv-2yM1FzDYoTPKcz5NDBjT/pub?output=csv';

        try {
            const response = await axios.get(csvUrl, {
                timeout: 10000, // 10 second timeout
                headers: {
                    'Accept': 'text/csv,text/plain,*/*'
                }
            });

            const parsed = Papa.parse(response.data, {
                header: true,
                skipEmptyLines: true,
                dynamicTyping: false, // Keep all fields as strings for consistency
                transformHeader: (header) => header.trim(), // Clean headers
            });

            if (parsed.errors.length > 0) {
                console.warn('CSV parsing warnings:', parsed.errors);
            }

            // Clean and validate the data
            const cleanData = parsed.data
                .map((row, index) => {
                    // Clean each field and handle missing values
                    const cleanedRow = {
                        ID: row['ID']?.toString().trim() || `news-${index + 1}`,
                        'Tipe Berita': row['Tipe Berita']?.toString().trim() || 'Umum',
                        Judul: row['Judul']?.toString().trim() || '',
                        Tanggal: row['Tanggal']?.toString().trim() || '',
                        Gambar: row['Gambar']?.toString().trim() || '',
                        Deskripsi: row['Deskripsi']?.toString().trim() || '',
                    };

                    return cleanedRow;
                })
                .filter(row => row.Judul) // Only include rows with a title
                .sort((a, b) => {
                    // Sort by date if available (newest first)
                    if (a.Tanggal && b.Tanggal) {
                        const dateA = new Date(a.Tanggal);
                        const dateB = new Date(b.Tanggal);
                        if (!isNaN(dateA.getTime()) && !isNaN(dateB.getTime())) {
                            return dateB - dateA;
                        }
                    }
                    return 0;
                });

            setCsvData(cleanData);
            console.log('Fetched news data:', cleanData);

        } catch (error) {
            console.error('Error fetching CSV data:', error);

            let errorMessage = 'Gagal memuat data';

            if (error.code === 'ECONNABORTED') {
                errorMessage = 'Koneksi timeout. Periksa koneksi internet Anda.';
            } else if (error.response) {
                errorMessage = `Server error: ${error.response.status}`;
            } else if (error.request) {
                errorMessage = 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.';
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

    // Provide a refetch function for retry functionality
    const refetch = useCallback(() => {
        fetchCSVData();
    }, [fetchCSVData]);

    return {
        csvData,
        loading,
        error,
        refetch
    };
}