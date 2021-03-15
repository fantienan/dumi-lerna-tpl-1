import React, { useState } from 'react';
import { Input, InputNumber, DatePicker} from 'antd'


export default () => {
    
    return (
        <>
            <p>antd 普通输入框 Input</p>
            
            <Input size="large" placeholder="请输入" prefix={'$'} />

            <br/>
            <br/>
            
            <p>antd 数字输入框 InputNumber </p>

            <InputNumber
              placeholder="请输入金额"
              defaultValue={1000}
              formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
             
            />

            <br/>
            <br/>
            
            <p>antd 日期选择 DatePicker </p>
            <DatePicker.RangePicker  />

        </>
    )
    
}