import React from 'react'
import { ageValidation, childrenValidation, emailIsValid, ExperienceValidation, ExpirationDateValidation, ID, LicenceStatesValidation, LicenseNumberValidation, PhoneNumberValidation, salaryValidation, uniqueEmail, uniquePhoneNumber } from '../methods/ID'
import styles from './listStyles.module.css'


const ListItem = ({ data }) => {
    return (
        <div className={styles.header__table_items}>
            <div className={styles.table__item_wrapper}>
                <div className={styles.header__table_item__valid}>
                    <div className={styles.header__table_text}>{data.ID}</div>
                </div>
            </div>
            <div className={styles.table__item_wrapper}>
                <div className={styles.header__table_item__valid}>
                    <div className={styles.header__table_text}>{data.FullName}</div>
                </div>
            </div>
            <div className={styles.table__item_wrapper}>
               {PhoneNumberValidation(data.Phone)}
            </div>
            <div className={styles.table__item_wrapper}>
                {emailIsValid(data.Email)}
            </div>
            <div className={styles.table__item_wrapper}>
                {ageValidation(data.Age)}
            </div>
            <div className={styles.table__item_wrapper}>
                {ExperienceValidation(data.Experience, data.Age)}
            </div>
            <div className={styles.table__item_wrapper}>
                {salaryValidation(+data.YearlyIncome)}
            </div>
            <div className={styles.table__item_wrapper}>
                {childrenValidation(data.HasChildren)}
            </div>
            <div className={styles.table__item_wrapper}>
                {LicenceStatesValidation(data.LicenseStates)}
            </div>
            <div className={styles.table__item_wrapper}>
               {ExpirationDateValidation(data.ExpirationDate)}
            </div>
            <div className={styles.table__item_wrapper}>
                {LicenseNumberValidation(data.LicenseNumber)}
            </div>
            <div className={styles.table__item_wrapper}>
               {uniquePhoneNumber(data.Phone, data.ID)}
               {uniqueEmail(data.Email, data.ID)}
            </div>
        </div>
    )
}


export default ListItem;