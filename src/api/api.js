import { readString } from 'react-papaparse';
import { ID } from '../methods/ID';
import { setLayers } from '../redux-store/layersReducer';
import store from '../redux-store/redux-store';


const str = `FullName,Phone,Email,Age,Experience,YearlyIncome,HasChildren,LicenseStates,ExpirationDate,LicenseNumber
"",blablabla,cho.co,12,45,1200.11,TRUE,Alabama,2030-12-31,1xr567
Alex Cho,+18900991919,cho.cho,bla,45,1200.11,TRUE,Tennessee,32-12-2030,1xr567
Alex Cho,+18900991919,cho.cho,12,45,1200.11,' ',Alabama,12-12-2030,1**567
Alex Cho,+18900991919,chocho.cho,32,45,1200.11,TRUE,Utah,12-12,1xr567
Alex Cho,+1890099n919,chochocho.cho,12,45,1200,TRUE,Alaska,12-12-2020,1xr567
Alex Cho,+18900991919,lenbylo@gmail.com,21,2,1200000,TRUE,Oklahoma,12-12-2020,1x$567
Alex Cho,+18900991919,cho.cho,44,12,-1200.11,FALSE,Alabama,12-12-2030,1xr567
Alex Cho,+1890091919,cho.cho,25,-2,0,TRUE,Alabama,12-12-2030,1xr567
Alex Cho,+18900991919,cho.cho,12,45,1200.11,'',New York,14-12-2030,1xr567
Alex Cho,+18900991919,cho.cho,12,45,1200.11,3,Alabama,12-12-2030,1xr67`

export let response =  readString(str, { header: true })

function setId(obj){
    for(let i = 0; i< obj.data.length; i++){
        obj.data[i].ID = ID()
    }
    return obj
}

response = setId(response)

store.dispatch(setLayers(response.data))
