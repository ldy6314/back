import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate, {
    events: 'change'
})
VeeValidate.Validator.localize('zh_CN', {
    messages: {
        ...zh_CN.messages,
        required: (field) => `${field}是必填的`,
        validname: (field) => `${field}必须由2-6个汉字组成`,
        validcode: field => `不正确的${field}`,
    },
    attributes: {
        name: '姓名',
        code: '身份证号码'
    }
})

VeeValidate.Validator.extend('validname', {
    validate: value => {
        return /^[\u4E00-\u9FA5]{2,6}$/.test(value)
    }
})
VeeValidate.Validator.extend('validcode', {
    validate: value => {
        return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(value)
    }
})