<template>
    <div
        class="row gap-20 masonry pos-r"
        style="position: relative; height: 1128px;"
    >
        <div class="masonry-sizer col-md-6 pos-a"></div>
        <div
            class="masonry-item col-md-6"
            style="position: absolute; left: 0%; top: 0px;"
        >
            <div class="bgc-white p-20 bd">
                <h6 class="c-grey-900">Line Chart</h6>
                <div class="mT-30">
                    <div class="chartjs-size-monitor">
                        <div class="chartjs-size-monitor-expand">
                            <div class=""></div>
                        </div>
                        <div class="chartjs-size-monitor-shrink">
                            <div class=""></div>
                        </div>
                    </div>
                    <canvas
                        id="line-chart"
                        height="120"
                        width="452"
                        class="chartjs-render-monitor"
                        style="display: block; width: 452px; height: 120px;"
                    ></canvas>
                </div>
            </div>
        </div>
        <div
            class="masonry-item col-md-6"
            style="position: absolute; left: 50.0002%; top: 0px;"
        >
            <div class="bgc-white p-20 bd">
                <h6 class="c-grey-900">Area Chart</h6>
                <div class="mT-30">
                    <div class="chartjs-size-monitor">
                        <div class="chartjs-size-monitor-expand">
                            <div class=""></div>
                        </div>
                        <div class="chartjs-size-monitor-shrink">
                            <div class=""></div>
                        </div>
                    </div>
                    <canvas
                        id="area-chart"
                        height="331"
                        width="452"
                        class="chartjs-render-monitor"
                        style="display: block; width: 452px; height: 331px;"
                    ></canvas>
                </div>
            </div>
        </div>
        <div
            class="masonry-item col-md-6"
            style="position: absolute; left: 0%; top: 235px;"
        >
            <div class="bgc-white p-20 bd">
                <h6 class="c-grey-900">Scatter Chart</h6>
                <div class="mT-30">
                    <div class="chartjs-size-monitor">
                        <div class="chartjs-size-monitor-expand">
                            <div class=""></div>
                        </div>
                        <div class="chartjs-size-monitor-shrink">
                            <div class=""></div>
                        </div>
                    </div>
                    <canvas
                        id="scatter-chart"
                        height="331"
                        width="452"
                        class="chartjs-render-monitor"
                        style="display: block; width: 452px; height: 331px;"
                    ></canvas>
                </div>
            </div>
        </div>
        <div
            class="masonry-item col-md-6"
            style="position: absolute; left: 50.0002%; top: 448px;"
        >
            <div class="bgc-white p-20 bd">
                <h6 class="c-grey-900">Bar Chart</h6>
                <div class="mT-30">
                    <div class="chartjs-size-monitor">
                        <div class="chartjs-size-monitor-expand">
                            <div class=""></div>
                        </div>
                        <div class="chartjs-size-monitor-shrink">
                            <div class=""></div>
                        </div>
                    </div>
                    <canvas
                        id="bar-chart"
                        height="331"
                        width="452"
                        class="chartjs-render-monitor"
                        style="display: block; width: 452px; height: 331px;"
                    ></canvas>
                </div>
            </div>
        </div>
        <div
            class="masonry-item col-md-6"
            style="position: absolute; left: 0%; top: 683px;"
        >
            <div class="bgc-white p-20 bd">
                <h6 class="c-grey-900">jQuery Sparkline</h6>
                <div class="mT-30">
                    <div class="peers ai-c jc-sb fxw-nw bdB pY-15">
                        <div class="peer"><span>Spark Line</span></div>
                        <div class="peer">
                            <span class="sparkline">
                                <canvas
                                    width="100"
                                    height="18"
                                    style="display: inline-block; width: 100px; height: 18px; vertical-align: top;"
                                ></canvas>
                            </span>
                        </div>
                    </div>
                    <div class="peers ai-c jc-sb fxw-nw bdB pY-15">
                        <div class="peer"><span>Spark Bar</span></div>
                        <div class="peer">
                            <span class="sparkbar">
                                <canvas
                                    width="79"
                                    height="18"
                                    style="display: inline-block; width: 79px; height: 18px; vertical-align: top;"
                                ></canvas>
                            </span>
                        </div>
                    </div>
                    <div class="peers ai-c jc-sb fxw-nw bdB pY-15">
                        <div class="peer"><span>Spark Tristate</span></div>
                        <div class="peer">
                            <span class="sparktri">
                                <canvas
                                    width="59"
                                    height="18"
                                    style="display: inline-block; width: 59px; height: 18px; vertical-align: top;"
                                ></canvas>
                            </span>
                        </div>
                    </div>
                    <div class="peers ai-c jc-sb fxw-nw bdB pY-15">
                        <div class="peer"><span>Spark Discrete</span></div>
                        <div class="peer">
                            <span class="sparkdisc">
                                <canvas
                                    width="100"
                                    height="18"
                                    style="display: inline-block; width: 100px; height: 18px; vertical-align: top;"
                                ></canvas>
                            </span>
                        </div>
                    </div>
                    <div class="peers ai-c jc-sb fxw-nw bdB pY-15">
                        <div class="peer"><span>Spark Bullet</span></div>
                        <div class="peer">
                            <span class="sparkbull">
                                <canvas
                                    width="64"
                                    height="18"
                                    style="display: inline-block; width: 64px; height: 18px; vertical-align: top;"
                                ></canvas>
                            </span>
                        </div>
                    </div>
                    <div class="peers ai-c jc-sb fxw-nw pT-15">
                        <div class="peer"><span>Spark Box</span></div>
                        <div class="peer">
                            <span class="sparkbox">
                                <canvas
                                    width="100"
                                    height="18"
                                    style="display: inline-block; width: 100px; height: 18px; vertical-align: top;"
                                ></canvas>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="masonry-item col-md-6"
            style="position: absolute; left: 50.0002%; top: 896px;"
        >
            <div class="bgc-white p-20 bd">
                <h6 class="c-grey-900">Easy Pie Charts</h6>
                <div class="mT-30">
                    <div class="peers mT-20 fxw-nw@lg+ jc-sb ta-c gap-10">
                        <div class="peer">
                            <div
                                class="easy-pie-chart"
                                data-size="80"
                                data-percent="75"
                                data-bar-color="#f44336"
                            >
                                <span>75 %</span>
                                <canvas height="80" width="80"></canvas>
                            </div>
                            <h6 class="fsz-sm">New Users</h6>
                        </div>
                        <div class="peer">
                            <div
                                class="easy-pie-chart"
                                data-size="80"
                                data-percent="50"
                                data-bar-color="#2196f3"
                            >
                                <span>50 %</span>
                                <canvas height="80" width="80"></canvas>
                            </div>
                            <h6 class="fsz-sm">New Purchases</h6>
                        </div>
                        <div class="peer">
                            <div
                                class="easy-pie-chart"
                                data-size="80"
                                data-percent="65"
                                data-bar-color="#f44336"
                            >
                                <span>65 %</span>
                                <canvas height="80" width="80"></canvas>
                            </div>
                            <h6 class="fsz-sm">New Customers</h6>
                        </div>
                        <div class="peer">
                            <div
                                class="easy-pie-chart"
                                data-size="80"
                                data-percent="90"
                                data-bar-color="#ff9800"
                            >
                                <span>90 %</span>
                                <canvas height="80" width="80"></canvas>
                            </div>
                            <h6 class="fsz-sm">Bounce Rate</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import '@/assets/js/charts/easyPieChart/index.js';
import '@/assets/js/charts/easyPieChart/jquery.easypiechart.min.js';
import '@/assets/js/charts/sparkline/index.js';
import '@/assets/js/charts/sparkline/jquery.sparkline.min.js';
import '@/assets/js/charts/chart.min.js';

export default {};
</script>
