import { useState, useEffect } from "react";
import axios, {Method} from 'axios';
import { HOST } from "../../config/contants";

interface fetchPropTypes {
      method?: string,
      url: string,
      data?: string,
      config?: string
}

export const useFetch = ({ method = 'GET', url, data, config }: fetchPropTypes) => {
      const [response, setResponse] = useState(null);
      const [error, setError] = useState("");
      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        axios({
                              method: method as Method,
                              url: `${HOST}${url}`, 
                              data: data ? JSON.parse(data) : null
                        })
                              .then((res: any) => {
                                    setResponse(res.data);
                              })
                              .finally(() => {
                                    setIsLoading(false);
                              });
                  } catch (err) {
                        setError(err);
                  }
            };

            fetchData();
      }, [method, url, data, config]);

      return { response, error, isLoading };
}