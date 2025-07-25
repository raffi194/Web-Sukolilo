import { useEffect, useState } from 'react';
import axios from 'axios';
import Papa from 'papaparse';

export default function FetchCSVData() {
    const [csvData, setCsvData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCSVData();
    }, []);

    const fetchCSVData = () => {
        setLoading(true);
        setError(null);

        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRbVNO--eH_F0Ir7skdl1d1Rue9li7gqLdx6v17V2vKXWFlqfvyZ6MbeDTLFh3ExzCc4w7uYFs4mD5A/pub?output=csv';

        axios.get(csvUrl)
            .then((response) => {
                const parsed = Papa.parse(response.data, {
                    header: true,
                    skipEmptyLines: true,
                });

                // Split kategori jadi array
                const cleanData = parsed.data.map((row) => {
                    return {
                        ...row,
                        'Kategori UMKM': row['Kategori UMKM']
                            ?.split(',')
                            .map((val) => val.trim())
                            .filter((val) => val.length > 0),
                    };
                });

                setCsvData(cleanData);
                console.log(cleanData);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching CSV data:', error);
                setError(error.message);
                setLoading(false);
            });
    };

    return { csvData, loading, error };
}
