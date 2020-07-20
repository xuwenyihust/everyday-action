import moment from 'moment';

const initialData = {

    itemTypes: ["运动", "生活", "学习", "工作", "娱乐"],
    items: {
        '1593920420073': {
            id: '1593920420073',
            created_timestamp: '1593920420073',
            content: "跑步",
            type: "运动",
            due_date: moment().day(1),
            sub_tasks: {},
            done: false
        },
        '1593920427447': {
            id: '1593920427447',
            created_timestamp: '1593920420073',
            content: "混合有氧",
            type: "运动",
            due_date: null,
            sub_tasks: {},
            done: false
        },
        '1593920442267': {
            id: '1593920442267',
            created_timestamp: '1593920420073',
            content: "洗牙",
            type: "生活",
            due_date: null,
            sub_tasks: {},
            done: false
        },
        '1593988570469': {
            id: '1593988570469',
            created_timestamp: '1593988570469',
            content: "课程 MIT Introduction to Deep Learning",
            type: "学习",
            due_date: moment().day(-2),
            sub_tasks: {
                '1595192263174': {
                    content: "第一集",
                    done: true
                },
                '1595192276071': {
                    content: "第二集",
                    done: false
                },
                '1595192284200': {
                    content: "第三集",
                    done: false
                }
            },
            done: false
        },
        '1594592079699': {
            id: '1594592079699',
            created_timestamp: '1594592079699',
            content: "最后生还者2",
            type: "娱乐",
            due_date: moment().day(30),
            sub_tasks: {},
            done: false
        }
    },

    columns: {
        '感兴趣': {
            id: '感兴趣',
            title: '感兴趣',
            taskIds: ['1593920420073', '1593920427447'],
            itemToSubmit: {
                id: null,
                content: "新任务",
                type: null,
                created_timestamp: null,
                done: false
            },
        },
        '行动中': {
            id: '行动中',
            title: '行动中',
            taskIds: ['1593920442267', '1593988570469', '1594592079699'],
            itemToSubmit: {
                id: null,
                content: "新任务",
                type: null,
                created_timestamp: null,
                done: false
            },
        },
        '完成': {
            id: '完成',
            title: '完成',
            taskIds: [],
            itemToSubmit: {
                id: null,
                content: "新任务",
                type: null,
                created_timestamp: null,
                done: false
            },
        }
    },

    columnOrder: ['感兴趣', '行动中', '完成'],

    editingItem: false,
    itemUnderEditing: {},
    dueDatePickFocused: false,

    subTaskToSubmit: {}
}

export default initialData;