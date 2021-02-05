import React from 'react'
import { ImportantDataValidation } from '../methods/ID'
import ListItem from './listItem'
import styles from './listStyles.module.css'

const ListItems = (props) => {

    let invalidData =
        <div className={styles.header__table_items__invalid}>
            <h1 className={styles.header__table_text}>Invalid Data</h1>
        </div>

    let layersData = props.data.map(item => {
        let dataValidation = ImportantDataValidation(item.Phone, item.Email, item.FullName)
        if (dataValidation) {
            return invalidData
        }
        else return <ListItem key={item + 1} data={item} />
    })


    return (
        <div className={styles.container}>
            <div className={styles.header__table_items}>
                <div className={styles.table__item_wrapper}>
                    <div className={styles.header__table_item}>
                        <h4 className={styles.header__table_text}>ID</h4>
                    </div>
                </div>
                <div className={styles.table__item_wrapper}>
                    <div className={styles.header__table_item}>
                        <h4 className={styles.header__table_text}>Full Name</h4>
                    </div>
                </div>
                <div className={styles.table__item_wrapper}>
                    <div className={styles.header__table_item}>
                        <h4 className={styles.header__table_text}>Phone</h4>
                    </div>
                </div>
                <div className={styles.table__item_wrapper}>
                    <div className={styles.header__table_item}>
                        <h4 className={styles.header__table_text}>Email</h4>
                    </div>
                </div>
                <div className={styles.table__item_wrapper}>
                    <div className={styles.header__table_item}>
                        <h4 className={styles.header__table_text}>Age</h4>
                    </div>
                </div>
                <div className={styles.table__item_wrapper}>
                    <div className={styles.header__table_item}>
                        <h4 className={styles.header__table_text}>Experience</h4>
                    </div>
                </div>
                <div className={styles.table__item_wrapper}>
                    <div className={styles.header__table_item}>
                        <h4 className={styles.header__table_text}>Yearly Income</h4>
                    </div>
                </div>
                <div className={styles.table__item_wrapper}>
                    <div className={styles.header__table_item}>
                        <h4 className={styles.header__table_text}>Has children</h4>
                    </div>
                </div>
                <div className={styles.table__item_wrapper}>
                    <div className={styles.header__table_item}>
                        <h4 className={styles.header__table_text}>Licence states</h4>
                    </div>
                </div>
                <div className={styles.table__item_wrapper}>
                    <div className={styles.header__table_item}>
                        <h4 className={styles.header__table_text}>Expiration date</h4>
                    </div>
                </div>
                <div className={styles.table__item_wrapper}>
                    <div className={styles.header__table_item}>
                        <h4 className={styles.header__table_text}>Licence number</h4>
                    </div>
                </div>
                <div className={styles.table__item_wrapper}>
                    <div className={styles.header__table_item}>
                        <h4 className={styles.header__table_text}>Dublicate with</h4>
                    </div>
                </div>
            </div>
            {layersData}
        </div>
    )
}


export default ListItems