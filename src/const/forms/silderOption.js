export default {
    labelWidth: 100,
    column: [{
            label: "普通滑块",
            prop: "pt",
            max: 10,
            type: 'silder',
        }, {
            label: "格式化滑块",
            max: 10,
            prop: "pt",
            type: 'silder',
            formatTooltip: function(val) {
                return '格式化的值' + val;
            }
        }, {
            label: "间隔点滑块",
            prop: "pt",
            type: 'silder',
            step: 1,
            max: 10,
            showStops: true,
        }, {
            label: "输入框滑块",
            prop: "pt",
            max: 10,
            showInput: true,
            type: 'silder',
        }, {
            label: "范围滑块",
            prop: "ptwf",
            step: 1,
            max: 10,
            showStops: true,
            range: true,
            type: 'silder',
        }, {
            label: "最大小值",
            prop: "pt",
            min: 3,
            max: 10,
            type: 'silder',
        }

    ]
};