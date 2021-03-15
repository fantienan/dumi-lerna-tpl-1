import React, { useState } from 'react';
import Field from '@ant-design/pro-field';
import moment from 'moment';


export default () => {

    return (
        <>
            <p>ProField 金额：valueType: money,   mode: edit </p>
            <Field text="100" valueType="money" mode='edit' plain={false} />

            <br />
            <br />

            <p>ProField 金额：valueType: money,   mode: read </p>
            <Field text="100" valueType="money" mode={'read'} plain={false} />


            <br />
            <br />

            <p>ProField 金额：valueType: dateTime,   mode: edit </p>
            <Field
                text={moment('2019-11-16 12:50:26').valueOf()}
                valueType="dateTime"
                mode='edit'
                plain={false}
            />
            <br />
            <br />

            <p>ProField 金额：valueType: dateTime,   mode: edit </p>
            <Field
                text={moment('2019-11-16 12:50:26').valueOf()}
                valueType="dateTime"
                mode='read'
                plain={false}
            />
        </>
    )

}
