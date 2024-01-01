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
          // Create a form for user input
          const name = prompt("Enter user name:");
          const title = prompt("Enter user title:");
          const imgUrl = prompt("Enter image URL:");

          // Add a new node with user details
          const newNodeId = parseInt(Math.random() * 100000);
          chart.add({ id: newNodeId, pid: nodeId, name, title, img: imgUrl });
        },
      },
      update: {
        text: "Update User",
        onClick: function (nodeId) {
          const selectedNode = chart.get(nodeId);

          // Prompt to edit user details
          const newName = prompt("Edit user name:", selectedNode.name);
          const newTitle = prompt("Edit user title:", selectedNode.title);
          const newImgUrl = prompt("Edit image URL:", selectedNode.img);

          // Update node data if user provides new details
          if (newName || newTitle || newImgUrl) {
            chart.updateNode(nodeId, {
              name: newName || selectedNode.name,
              title: newTitle || selectedNode.title,
              img: newImgUrl || selectedNode.img,
            });
          }
        },
      },
      delete: {
        text: "Delete User",
        onClick: function (nodeId) {
          const parentNode = chart.get(nodeId).parent;
          chart.removeNode(nodeId);

          // Update UI or perform other actions if needed after node deletion
          // For example, re-layout the chart
          if (parentNode) {
            chart.draw();
          }
        },
      },
    },
    onClick: function (nodeId) {
        // Prompt for user details
        const name = prompt("Enter user name:");
        const title = prompt("Enter user title:");
        const imgUrl = prompt("Enter image URL:");
      
        // Add a new node with user details
        const newNodeId = parseInt(Math.random() * 100000);
      
        const placement = prompt("Enter placement: left, right, or straight");
        let pid = nodeId;
      
        const parentNode = chart.get(nodeId);
        const siblingNodes = parentNode.children;
      
        if (placement === "left" || placement === "right") {
          if (siblingNodes && siblingNodes.length > 0) {
            const insertIndex = placement === "left" ? 0 : siblingNodes.length;
            const siblingId = siblingNodes[insertIndex];
            pid = siblingId;
          }
        }
      
        chart.add({ id: newNodeId, pid: pid, name, title, img: imgUrl });
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


// async function fetchDataFromAPI() {
//   try {
//     const response = await fetch("http://localhost:4000/users");
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     return [];
//   }
// }

window.onload = function () {
  generateOrgChart([
    {
      id: 1,
      name: "John Doe",
      title: "Chairman and SEO",
      email: "john@example.com",
      img: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Abhi Yadao",
      title: "QA Lead",
      email: "abhi@example.com",
      img: "https://plus.unsplash.com/premium_photo-1669850858863-6fe7bf233483?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      pid: "1",
    },
    {
      id: 3,
      name: "Nayra Khan",
      title: "QA Lead",
      email: "nayra@example.com",
      img: "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pid: "1",
    },
    {
      id: 4,
      name: "Ajit Rahane",
      title: "QA Lead",
      email: "ajit@example.com",
      img: "https://images.unsplash.com/photo-1625698457101-fec2f565a8f0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pid: "1",
    },
    {
        id: 5,
        name: "Ajit Rahane",
        title: "QA Lead",
        email: "ajit@example.com",
        img: "https://images.unsplash.com/photo-1625698457101-fec2f565a8f0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pid: "1",
      },
      {
        id: 6,
        name: "Nayra Khan",
        title: "QA Lead",
        email: "nayra@example.com",
        img: "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pid: "2",
      },
  ]); 
};
