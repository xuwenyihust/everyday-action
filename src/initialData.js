const initialData = {

    itemTypes: ["运动", "生活", "学习", "工作", "娱乐"],
    items: {
        1593920420073: {
            id: 1593920420073,
            created_timestamp: 1593920420073,
            content: "跑步",
            type: "运动",
            done: false
        },
        1593920427447: {
            id: 1593920427447,
            created_timestamp: 1593920420073,
            content: "混合有氧",
            type: "运动",
            done: false
        },
        1593920442267: {
            id: 1593920442267,
            created_timestamp: 1593920420073,
            content: "洗牙",
            type: "生活",
            done: false
        },
        1593988570469: {
            id: 1593988570469,
            created_timestamp: 1593988570469,
            content: "看书",
            type: "学习",
            done: false
        }
    },

    columns: {
        'column-1': {
            id: 'column-1',
            title: '感兴趣',
            taskIds: [1593920420073, 1593920427447],
            itemToSubmit: {
                id: null,
                content: "新任务",
                type: null,
                created_timestamp: null,
                done: false
            },
        },
        'column-2': {
            id: 'column-2',
            title: '行动中',
            taskIds: [1593920442267, 1593988570469],
            itemToSubmit: {
                id: null,
                content: "新任务",
                type: null,
                created_timestamp: null,
                done: false
            },
        }
    },

    columnOrder: ['column-1', 'column-2'],

    editingItem: false,
    itemUnderEditing: {}
}

export default initialData;