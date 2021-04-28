import { Divider, InputNumber, Button, Form } from 'antd'
import React from 'react'
import { useForm } from './useForm'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export const Configure = () => {
  const {
    handleOnFinish
  } = useForm()

  return (
    <div>
      <Divider orientation='center'>
        Configure Failures
      </Divider>
      <Form 
        {...layout}
        initialValues={{
          failures: 3
        }}
        size='large'
        onFinish={handleOnFinish}
      >
        <Form.Item
          name='failures'
          label='Failures'
        >
          <InputNumber
            min={0}
            max={10}
          />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType="submit">
            Config
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}