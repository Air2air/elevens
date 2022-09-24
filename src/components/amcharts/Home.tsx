import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";


function NavHome(props: any) {
  useLayoutEffect(() => {

    // Create root and chart
    var root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    var container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout
      })
    );

    var series = container.children.push(
      am5hierarchy.ForceDirected.new(root, {
        downDepth: 1,
        initialDepth: 1,
        singleBranchOnly: true,
        valueField: "value",
        categoryField: "name",
        childDataField: "children"
      })
    );

    series.data.setAll([{
      name: "Root",
      children: [{
        name: "A0",
        children: [{
          name: "A0A1",
          children: [{
            name: "A0A0A2",
            value: 71
          }, {
            name: "A0A0B2",
            children: [{
              name: "A0A0B1A3",
              value: 69
            }, {
              name: "A0A0B1B3",
              value: 85
            }]
          }, {
            name: "A0A0C2",
            value: 48
          }]
        }, {
          name: "A0B1",
          value: 27
        }, {
          name: "A0C1",
          children: [{
            name: "A0C2A2",
            value: 2
          }, {
            name: "A0C2B2",
            children: [{
              name: "A0C2B1A3",
              value: 54
            }, {
              name: "A0C2B1B3",
              value: 16
            }]
          }]
        }, {
          name: "A0D1",
          value: 89
        }]
      }, {
        name: "B0",
        children: [{
          name: "B1A1",
          value: 9
        }, {
          name: "B1B1",
          children: [{
            name: "B1B1A2",
            children: [{
              name: "B1B1A0A3",
              value: 35
            }, {
              name: "B1B1A0B3",
              value: 40
            }]
          }, {
            name: "B1B1B2",
            value: 55
          }]
        }]
      }, {
        name: "C0",
        children: [{
          name: "C2A1",
          children: [{
            name: "C2A0A2",
            value: 24
          }, {
            name: "C2A0B2",
            value: 89
          }, {
            name: "C2A0C2",
            children: [{
              name: "C2A0C2A3",
              children: [{
                name: "C2A0C2A0A4",
                children: [{
                  name: "C2A0C2A0A00",
                  value: 90
                }, {
                  name: "C2A0C2A0A01",
                  value: 70
                }, {
                  name: "C2A0C2A0A02",
                  value: 66
                }, {
                  name: "C2A0C2A0A03",
                  value: 58
                }]
              }, {
                name: "C2A0C2A0B4",
                children: [{
                  name: "C2A0C2A0B10",
                  value: 80
                }, {
                  name: "C2A0C2A0B11",
                  value: 40
                }]
              }]
            }, {
              name: "C2A0C2B3",
              value: 44
            }]
          }, {
            name: "C2A0D2",
            children: [{
              name: "C2A0D3A3",
              value: 28
            }, {
              name: "C2A0D3B3",
              value: 14
            }]
          }]
        }, {
          name: "C2B1",
          value: 40
        }, {
          name: "C2C1",
          children: [{
            name: "C2C2A2",
            children: [{
              name: "C2C2A0A3",
              value: 28
            }, {
              name: "C2C2A0B3",
              children: [{
                name: "C2C2A0B1A4",
                value: 19
              }, {
                name: "C2C2A0B1B4",
                children: [{
                  name: "C2C2A0B1B10",
                  value: 11
                }, {
                  name: "C2C2A0B1B11",
                  value: 10
                }, {
                  name: "C2C2A0B1B12",
                  value: 97
                }, {
                  name: "C2C2A0B1B13",
                  value: 47
                }]
              }, {
                name: "C2C2A0B1C4",
                children: [{
                  name: "C2C2A0B1C20",
                  value: 40
                }, {
                  name: "C2C2A0B1C21",
                  value: 37
                }, {
                  name: "C2C2A0B1C22",
                  value: 53
                }]
              }]
            }, {
              name: "C2C2A0C3",
              value: 96
            }]
          }, {
            name: "C2C2B2",
            value: 66
          }]
        }]
      }]
    }]);
    series.set("selectedDataItem", series.dataItems[0]);


    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
  );
}
export default NavHome;