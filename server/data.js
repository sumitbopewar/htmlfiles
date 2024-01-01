// Sample user data (replace this with your actual user data logic)
const users = [
    { id: 1, name: 'John Doe',title: "Chairman and SEO", email: 'john@example.com', img: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { id: 2, name: 'Abhi Yadao', title: "QA Lead", email: 'abhi@example.com', img: 'https://plus.unsplash.com/premium_photo-1669850858863-6fe7bf233483?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D', pid: "1"},
    { id: 3, name: 'Nayra Khan', title: "QA Lead", email: 'nayra@example.com', img: 'https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', pid: "1"},
    { id: 4, name: 'Ajit Rahane', title: "QA Lead", email: 'ajit@example.com', img: 'https://images.unsplash.com/photo-1625698457101-fec2f565a8f0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', pid: "1"},
  
    { id: 5, name: 'Lisan Jack',title: "Technical Director", email: 'lisan@example.com', img: 'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', pid: "1"},
    { id: 6, name: 'Aish Mock', title: ".NET Team Lead", email: 'aish@example.com', img: 'https://images.unsplash.com/photo-1472417583565-62e7bdeda490?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', pid: "2"},
    { id: 7, name: 'Akhtar jack', title: "Programmer", email: 'akhtar@example.com', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', pid: "8"},
    { id: 8, name: 'Jenny Town', title: "JS Team Lead", email: 'jenny@example.com', img: 'https://images.unsplash.com/photo-1589525231707-f2de2428f59c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', pid: "3"},
    { id: 9, name: 'Nimmy Sharma', title: "Manager", email: 'nimmy@example.com', img: 'https://images.unsplash.com/photo-1554180842-41b1dd69d588?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', pid: "3"},
    // Add more user data as needed
  ];
  module.exports = users;