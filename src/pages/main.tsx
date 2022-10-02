import { Form, Input, Button, Statistic, Select } from 'antd';
import { useState } from 'react';
import useApi, { Records } from '../hooks/useApi';
import { motion } from 'framer-motion'
const { Option } = Select;

export default function Main() {
    const [form] = Form.useForm();
    const [isRecords, setIsRecords] = useState(false)
    const { GetRecords } = useApi()
    const [records, setRecords] = useState<Records>()

    const onFinish = async (values: any) => {
        setRecords(undefined)
        setIsRecords(true)
        const { vin, type } = values;
        const data = await GetRecords(vin)
        setIsRecords(false)
        setRecords(data)
    };

    return (
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
            <motion.div initial={{ height: 410 }} animate={!records ? { height: 410 } : { height: "auto" }} transition={{ type: "tween" }} className='max-w-lg shadow-lg border-2 px-8 py-5 sm:px-16 sm:py-10  rounded-xl flex-col space-y-8 overflow-hidden'>
                <div className='flex space-x-2'>
                    <div>
                        <img src="/imgs/autocheck.png" alt="" />
                    </div>
                    <div>
                        <img src="/imgs/carfax.png" alt="" />
                    </div>
                </div>
                <Form
                    name="form"
                    layout='vertical'
                    form={form}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="VIN"
                        name="vin"
                        rules={[{ required: true, message: 'Please input VIN' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name="type" label="Report Type" rules={[{ required: true, message: 'Please select a type' }]}>
                        <Select
                            placeholder="Report Type"
                        >
                            <Option value="carfax">Carfax</Option>
                            <Option value="autocheck">AutoCheck</Option>
                        </Select>
                    </Form.Item>
                    <div className="flex space-x-4 mt-2">
                        <Button type="primary" htmlType="submit" loading={isRecords} className="!bg-yellow-500 !border-none outline-none">
                            Check VIN
                        </Button>
                        {/* <Button type="primary" htmlType="submit" loading={isRecords} className="!bg-blue-500 border-none !text-white" >
                            Get Full Report
                        </Button> */}
                    </div>

                </Form>

                <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-2 ${records ? "" : "invisible"}`}>
                    <div className="md:col-span-2">
                        <Statistic title="Vehicle:" value={`${records?.carfax?.Vehicle ?? "No Data"}`} decimalSeparator={""} groupSeparator={""} />
                    </div>
                    <div className="md:col-span-2">
                        <Statistic title="Year:" value={`${records?.carfax?.Year ?? "No Data"}`} decimalSeparator={""} groupSeparator={""} />
                    </div>
                    <Statistic title="Autocheck Record Amount:" value={`${records?.autocheck?.Records ?? "0"} Records`} />
                    <Statistic title="Carfax Record Amount:" value={`${records?.carfax?.Records ?? "0"} Records`} />
                </div>

            </motion.div>
        </div>
    )
}
