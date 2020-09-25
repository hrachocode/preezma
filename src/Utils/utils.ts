import axios, {Method} from 'axios';
import { HOST } from '../config/contants';

interface RequestProps {
      url: string,
      method: Method,
      data: any,
      onSuccess: Function,
      onFail: Function,
}

export const setRequest = async ({url, method, data, onSuccess, onFail}: RequestProps) => {
      const request = await axios({
            url: `${HOST}${url}`,
            method,
            data
      })

      if(request.status === 200){
            onSuccess()
      }else{
            onFail()
      }

      return request
}