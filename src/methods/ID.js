import moment from 'moment'
import React from 'react'
import styles from '../components/listStyles.module.css'
import store from '../redux-store/redux-store'



export const ID = () => (Math.random() * 1000).toFixed(0)


export const ageValidation = (value) => {
    if (value >= 21) {
        return (
            <div className={styles.header__table_item__valid}>
                <div className={styles.header__table_text}>{value}</div>
            </div>
        )
    }
    if (value < 21 || typeof value !== 'number') {
        return (
            <div className={styles.header__table_item__invalid}>
                <div className={styles.header__table_text}>{value}</div>
            </div>
        )
    }
}

export const salaryValidation = (value) => {
    if (value > 1000000 || value <= 0) {
        return (
            <div className={styles.header__table_item__invalid}>
                <div className={styles.header__table_text}>{value.toFixed(2)}</div>
            </div>
        )
    }
    else return (
        <div className={styles.header__table_item__valid}>
            <div className={styles.header__table_text}>{value.toFixed(2)}</div>
        </div>
    )
}

export const childrenValidation = (boolean) => {
    if (boolean === "TRUE" || boolean === 'FALSE') {
        return (
            <div className={styles.header__table_item__valid}>
                <div className={styles.header__table_text}>{boolean}</div>
            </div>
        )
    }
    else return (<div className={styles.header__table_item__invalid}>
        <div className={styles.header__table_text}>{boolean}</div>
    </div>
    )
}


export const ExperienceValidation = (experience, age) => {
    if (experience >= 0 && experience < age) {
        return (
            <div className={styles.header__table_item__valid}>
                <div className={styles.header__table_text}>{experience}</div>
            </div>
        )
    }
    else return (
        <div className={styles.header__table_item__invalid}>
            <div className={styles.header__table_text}>{experience}</div>
        </div>
    )
}

export const PhoneNumberValidation = (number) => {
    let phoneNumber = number.split('').map(a => +a).filter(a => a >= 0)
    if (phoneNumber.length === 11) {
        return (
            <div className={styles.header__table_item__valid}>
                <div className={styles.header__table_text}>{number}</div>
            </div>
        )
    }
    else return (
        <div className={styles.header__table_item__invalid}>
            <div className={styles.header__table_text}>{number}</div>
        </div>
    )
}

export const LicenseNumberValidation = (value) => {
    let validation = /\w/g;
    let valid = value.match(validation).length
    if (value.length === valid && value.length === 6) {
        return (
            <div className={styles.header__table_item__valid}>
                <div className={styles.header__table_text}>{value}</div>
            </div>
        )
    }
    else return (
        <div className={styles.header__table_item__invalid}>
            <div className={styles.header__table_text}>{value}</div>
        </div>
    )
}


export const ExpirationDateValidation = (date) => {
    let YMD = moment(date, 'YYYY-MM-DD', true).isValid()
    let MDY = moment(date, 'MM-DD-YYYY', true).isValid()
    let todayYMD = moment().format('YYYY-MM-DD')
    let todayMDY = moment().format('MM-DD-YYYY')
    let isExpiredYMD = moment(todayYMD).isBefore(date)
    let isExpiredMDY = moment(todayMDY).isBefore(date)
    if (YMD || MDY && isExpiredMDY || isExpiredYMD) {
        return (
            <div className={styles.header__table_item__valid}>
                <div className={styles.header__table_text}>{date}</div>
            </div>
        )
    }
    else return (
        <div className={styles.header__table_item__invalid}>
            <div className={styles.header__table_text}>{date}</div>
        </div>
    )
}


export const LicenceStatesValidation = (state) => {
    function abbrState(input, to) {

        var states = [
            ['Arizona', 'AZ'],
            ['Alabama', 'AL'],
            ['Alaska', 'AK'],
            ['Arkansas', 'AR'],
            ['California', 'CA'],
            ['Colorado', 'CO'],
            ['Connecticut', 'CT'],
            ['Delaware', 'DE'],
            ['Florida', 'FL'],
            ['Georgia', 'GA'],
            ['Hawaii', 'HI'],
            ['Idaho', 'ID'],
            ['Illinois', 'IL'],
            ['Indiana', 'IN'],
            ['Iowa', 'IA'],
            ['Kansas', 'KS'],
            ['Kentucky', 'KY'],
            ['Louisiana', 'LA'],
            ['Maine', 'ME'],
            ['Maryland', 'MD'],
            ['Massachusetts', 'MA'],
            ['Michigan', 'MI'],
            ['Minnesota', 'MN'],
            ['Mississippi', 'MS'],
            ['Missouri', 'MO'],
            ['Montana', 'MT'],
            ['Nebraska', 'NE'],
            ['Nevada', 'NV'],
            ['New Hampshire', 'NH'],
            ['New Jersey', 'NJ'],
            ['New Mexico', 'NM'],
            ['New York', 'NY'],
            ['North Carolina', 'NC'],
            ['North Dakota', 'ND'],
            ['Ohio', 'OH'],
            ['Oklahoma', 'OK'],
            ['Oregon', 'OR'],
            ['Pennsylvania', 'PA'],
            ['Rhode Island', 'RI'],
            ['South Carolina', 'SC'],
            ['South Dakota', 'SD'],
            ['Tennessee', 'TN'],
            ['Texas', 'TX'],
            ['Utah', 'UT'],
            ['Vermont', 'VT'],
            ['Virginia', 'VA'],
            ['Washington', 'WA'],
            ['West Virginia', 'WV'],
            ['Wisconsin', 'WI'],
            ['Wyoming', 'WY'],
        ];

        if (to == 'abbr') {
            input = input.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
            for (let i = 0; i < states.length; i++) {
                if (states[i][0] == input) {
                    return (states[i][1]);
                }
            }
        } else if (to == 'name') {
            input = input.toUpperCase();
            for (let i = 0; i < states.length; i++) {
                if (states[i][1] == input) {
                    return (states[i][0]);
                }
            }
        }
    }
    let abbr = abbrState(state, 'abbr')
    return (
        <div className={styles.header__table_item__valid}>
            <div className={styles.header__table_text}>{abbr}</div>
        </div>
    )
}



export const ImportantDataValidation = (phone, email, fullName) => {
    let arr = [phone.trim(), email.trim(), fullName.trim()]
    return arr[0].length === 0 || arr[1].length === 0 || arr[2].length === 0 ? true : false
}


export const uniquePhoneNumber = (number, id) => {
    let storeCall = store.getState()
    let storeData = storeCall.layersList.layers
    let filtered = storeData.map(item => item.Phone).filter(a => a === number)
    if (filtered.length > 1) {
        for (let i = 0; i < storeData.length; i++) {
            if (storeData[i].ID === id) {
                return ""
            }
            if (storeData[i].Phone === number) {
                return (
                    < div className={styles.header__table_item__valid} >
                        <div className={styles.header__table_text}>{`Phone: ${storeData[i].ID}`}</div>
                    </div >
                )
            }
        }
    }
}

export const uniqueEmail = (email, id) => {
    let storeCall = store.getState()
    let storeData = storeCall.layersList.layers
    let filtered = storeData.map(item => item.Email).filter(a => a === email)
    if (filtered.length > 1) {
        for (let i = 0; i < storeData.length; i++) {
            if (storeData[i].ID === id) {
                return ""
            }
            if (storeData[i].Email === email) {
                return (
                    < div className={styles.header__table_item__valid} >
                        <div className={styles.header__table_text}>{`Email: ${storeData[i].ID}`}</div>
                    </div >
                )
            }
        }
    }
}


export function emailIsValid(email) {
    if (/\S+@\S+\.\S+/.test(email)) {
        return (<div className={styles.header__table_item__valid}>
            <div className={styles.header__table_text}>{email}</div>
        </div>)
    }
    else return (
        <div className={styles.header__table_item__invalid}>
        <div className={styles.header__table_text}>{email}</div>
    </div>
    )
}

//let dataImport = ()


