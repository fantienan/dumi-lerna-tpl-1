import React, { useState } from 'react';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { Input, InputNumber} from 'antd'
import Field from '@ant-design/pro-field';


export default () => {
    const [state, setState] = useState<ProFieldFCMode>('edit');
    const [plain, setPlain] = useState<boolean>(false);
    
    function onChange(value) {
        console.log('changed', value)
    }
    
    return (
        <>
            <p>antd 普通输入框 Input</p>
            
            <Input size="large" placeholder="large size" prefix={'$'} />

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

            <p>ProField 金额：valueType： money </p>
            <Field text="100" valueType="money" mode={state} plain={plain} />

        </>
    )
    
}
