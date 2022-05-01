import millify from 'millify';
import _ from 'lodash';

export const getPrecisedData = (value,precisionNumber="") => {
    if(value<Number.MAX_SAFE_INTEGER){
        if(precisionNumber!=="") return millify(value,{precision:precisionNumber}); 
        if(value>1) return millify(value,{precision: 2})
        if(value>0.01 && value<1) return millify(value,{precision: 2})
        if(value>0.001 && value<0.01) return millify(value,{precision: 3})
        if(value>0.0001 && value<0.001) return millify(value,{precision: 4})
        if(value>0.00001 && value<0.0001) return millify(value,{precision: 5})
        if(value>0.000001 && value<0.00001) return millify(value,{precision: 6})
        if(value>0.0000001 && value<0.000001) return millify(value,{precision: 7})
        if(value>0.00000001 && value<0.0000001) return millify(value,{precision: 8})
        if(value>0.000000001 && value<0.00000001) return millify(value,{precision: 9})
        if(value>0.0000000001 && value<0.000000001) return millify(value,{precision: 10})
        else return value.toString()
    }
    return '0.00';
}
export const beautifyAddress = (address) => {
  return address.substring(0, 5)+"..."+address.slice(-5);
}
export const setStringMaxChar = (str,max_length) => {
  if(str.length >= max_length){
    return str.substring(0, 5)+" ... "+str.slice(-5);
  }
  return str;
}
export const setChartData = (values,colors)=>{
    const config = {
     data :{
       datasets: [{
         label: 'Portfolio',
         data: values,
         backgroundColor: colors,
         hoverOffset: 4
       }]
     },
     options: {
       cutout : 130,
       borderRadius: 25,
       borderJoinStyle : 'round',
       spacing: 20,
       borderWidth: 0,
     }
     };
     return config;
}

export const getSumArrayWith2Digits = (values) => {
    return getPrecisedData(_.sum(values),2);
}

