<template>
    <div id="app" class="m-5">
        <h1 class="font-bold text-2xl text-blue-600 uppercase mb-10">Create your SVG PieChart</h1>
        <div class="flex">
            <div class="w-60 mr-20">
                <pie-chart :slices="slices"></pie-chart>
            </div>
            <div class="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <button @click="addSlice" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add a slice
                </button>
                <div v-for="(slice, index) in slices"
                     :key="index"
                     class="mt-5 flex items-stretch">
                    <div class="mr-5 flex flex-col justify-between">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Percentage
                        </label>
                        <circle-slider
                                v-model="slice.percent"
                                :min="0.05"
                                :max="1"
                                :step-size="0.01"
                                :knob-radius="6"
                                :progress-width="4"
                                :side="70">
                        </circle-slider>
                    </div>
                    <div class="mr-10 flex flex-col justify-between">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            color
                        </label>
                        <v-swatches
                                v-model="slice.color"
                                :swatches="swatches"
                                row-length="5"
                                popover-x="left"
                        ></v-swatches>
                    </div>
                    <div class="flex flex-col justify-end">
                        <button @click="deleteSlice(index)" class="bg-red-600 hover:bg-red-800 text-white font-semibold py-2 px-2 rounded">
                            <svg class="fill-current w-6 h-6" viewBox="0 0 24 24">
                                <path d="M15.516 3.984h3.469v2.016h-13.969v-2.016h3.469l1.031-0.984h4.969zM8.438 11.859l2.156 2.156-2.109 2.109 1.406 1.406 2.109-2.109 2.109 2.109 1.406-1.406-2.109-2.109 2.109-2.156-1.406-1.406-2.109 2.156-2.109-2.156zM6 18.984v-12h12v12q0 0.797-0.609 1.406t-1.406 0.609h-7.969q-0.797 0-1.406-0.609t-0.609-1.406z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PieChart from "./components/PieChart";
    import VSwatches from 'vue-swatches';

    export default {
        name: 'App',
        components: {
            PieChart,
            VSwatches
        },
        data() {
            return {
                slices: [
                    {
                        percent: '0.1',
                        color: '#F64272'
                    },
                    {
                        percent: '0.5',
                        color: '#8b5aff'
                    },
                    {
                        percent: '0.3',
                        color: '#51e5db'
                    }
                ],
                swatches: [
                    ['#F64272', '#F6648B', '#F493A7', '#F891A6', '#FFCCD5' ],
                    ['#8b5aff', '#a27bff', '#b99cff', '#d0bdff', '#e8deff' ],
                    ['#51e5db', '#74ebe3', '#96f0ea', '#b9f5f1', '#dcfaf8' ],
                    ['#ffa51a', '#ffb748', '#ffc976', '#ffdba3', '#ffedd1' ]
                ]
            }
        },
        methods: {
            addSlice() {
                this.slices.push({ percent: '0.1', color: 'black' })
            },
            deleteSlice(index) {
                this.slices.splice(index, 1);
            }
        }
    }
</script>

<style src="./assets/css/tailwind.css">
</style>
