<template>
    <svg :width="pieWidth" :height="pieHeight" viewBox="-1 -1 2 2" style="transform: rotate(-0.25turn)">
        <circle r=".7" cx="0" cy="0" :fill="innerColor"/>
        <circle r=".40" cx="0" cy="0" fill="white"/>
        <path v-for="(path, index) in pathData"
              style="transform: scale(.8)"
              :key="index"
              :d="`M ${path.startX} ${path.startY} A 1 1 0 ${path.largeArcFlag} 1 ${path.endX} ${path.endY} L 0 0 Z`"
              :fill="path.color" :stroke="path.color" stroke-width=".08" stroke-linejoin="round">
        </path>
    </svg>
</template>

<script>
    export default {
        name: "PieChart",
        props: {
            pieWidth: {
                type: Number,
                default: 500
            },
            pieHeight: {
                type: Number,
                default: 500
            },
            innerColor: {
                type: String,
                default: '#E9ECF5'
            },
            slices: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                pathData: []
            }
        },
        mounted() {
            this.createSlice();
        },
        watch: {
            slices: {
                handler: 'createSlice',
                deep: true,
                immediate: true,
            }
        },
        methods: {
            createSlice() {
                let cumulativePercent = 0;
                let paths = [];
                this.slices.forEach(slice => {
                    const [startX, startY] = this.getCoordinatesForPercent(cumulativePercent);
                    cumulativePercent += parseFloat(slice.percent);
                    console.log(cumulativePercent);
                    const [endX, endY] = this.getCoordinatesForPercent(cumulativePercent);

                    const largeArcFlag = slice.percent > .5 ? 1 : 0;

                    const pathObject = {
                        startX: startX,
                        startY: startY,
                        endX: endX,
                        endY: endY,
                        largeArcFlag: largeArcFlag,
                        color: slice.color
                    };

                    paths.push(pathObject);
                });

                this.pathData = paths;
            },
            getCoordinatesForPercent(percent) {
                const x = Math.cos(2 * Math.PI * percent);
                const y = Math.sin(2 * Math.PI * percent);

                return [x, y];
            }
        }
    }
</script>

<style scoped>
    path { transition: all .4s ease; }
</style>