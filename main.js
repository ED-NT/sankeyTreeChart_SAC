(function () {

    let template = document.createElement("template");

    template.innerHTML = `

      <div id="root" style="width: 100%; height: 100%;">

        <div id="chart-container"></div>

      </div>

    `;

 

    class EChartPrepared extends HTMLElement {

      constructor() {

        super();

        this._shadowRoot = this.attachShadow({ mode: "open" });

        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this._root = this._shadowRoot.getElementById("root");

        this._chartContainer = this._shadowRoot.getElementById("chart-container");

      }

 

      connectedCallback() {

        this.drawChart();

      }

 

      drawChart() {

        // Initialize the ECharts instance

        let chart = echarts.init(this._chartContainer);

 

        // Prepare the dummy data for the Sankey tree chart

        let data = {

          nodes: [

            { name: "Node 1" },

            { name: "Node 2" },

            { name: "Node 3" },

            { name: "Node 4" },

          ],

          links: [

            { source: "Node 1", target: "Node 2", value: 5 },

            { source: "Node 1", target: "Node 3", value: 3 },

            { source: "Node 2", target: "Node 4", value: 2 },

            { source: "Node 3", target: "Node 4", value: 6 },

          ],

        };

 

        // Configure the basic chart options

        let option = {

          title: {

            text: "Sankey Tree Chart",

          },

          tooltip: {

            trigger: "item",

            triggerOn: "mousemove",

          },

          series: [

            {

              type: "sankey",

              data: data.nodes,

              links: data.links,

              emphasis: {

                focus: "adjacency",

              },

              levels: [

                {

                  depth: 0,

                  itemStyle: {

                    color: "#fbb4ae",

                  },

                  lineStyle: {

                    color: "source",

                    opacity: 0.6,

                  },

                },

                {

                  depth: 1,

                  itemStyle: {

                    color: "#b3cde3",

                  },

                  lineStyle: {

                    color: "source",

                    opacity: 0.6,

                  },

                },

              ],

              lineStyle: {

                curveness: 0.5,

              },

            },

          ],

        };

 

        // Set the chart option

        chart.setOption(option);

      }

    }

 

    customElements.define("com-sap-sample-echarts-prepared", EChartPrepared);

  })();