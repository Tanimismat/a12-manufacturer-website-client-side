import axios from 'axios';
import { useState, useEffect } from 'react';

const useTools = () => {

    const [tools, setTools] = useState([]);

    useEffect(() => {
        axios('http://localhost:5000/tools')
            .then(data => {
                setTools(data.data)
            });
    }, []);

    return [tools, setTools];
};

export default useTools;