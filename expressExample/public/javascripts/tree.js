function generateOrgChart(data) {
  var chart = new OrgChart(document.getElementById("tree"), {
    template: "olivia",
    mouseScrool: OrgChart.none,
    layout: OrgChart.mixed,
    enableSearch: false,
    nodeBinding: {
      img_0: "img",
      field_0: "name",
      field_1: "title",
    },
    nodeMenu: {
      add: {
        text: "Add User",
        onClick: function (nodeId) {
          const placement = prompt("Enter placement: left, right, or straight");
          let pid = nodeId;

          if (placement === "left" || placement === "right") {
            const parentNode = chart.get(nodeId);
            console.log(parentNode);
            if (parentNode) {
              const siblingNodes = parentNode.children;
              if (siblingNodes && siblingNodes.length > 0) {
                const insertIndex =
                  placement === "left" ? 0 : siblingNodes.length;
                const siblingId = siblingNodes[insertIndex];
                pid = siblingId;
              }
            }
          }

          const newNodeId = parseInt(Math.random() * 100000);
          chart.add({
            id: newNodeId,
            pid: pid,
            name: "New User",
            title: "New Title",
          });
        },
      },
    },
  });

  chart.load(data);

  document
    .getElementById("selectTemplate")
    .addEventListener("change", function () {
      chart.config.template = this.value;
      chart.draw();
    });
}

async function fetchDataFromAPI() {
  try {
    const response = await fetch("http://localhost:4000/users");
    const data = await response.json();
    return data;
  } catch (err) {
    return [];
  }
}

window.onload = async function () {
  const dynamicData = await fetchDataFromAPI();
  generateOrgChart(dynamicData);
};
