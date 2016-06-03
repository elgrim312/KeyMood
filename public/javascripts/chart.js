var ctx = document.getElementById("myChart");
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            "Classique",
            "Electro",
            "Jazz",
            "Metal",
            "Disco",
            "Pop",
            "RnB",
            "Rock"
        ],
        datasets: [
            {
                data: [300, 50, 100, 40,200, 50, 100, 40 ],
                backgroundColor: [
                    "#E0E0E0",
                    "#7986CB",
                    "#FFD54F",
                    "#A1887F",
                    "#E57373",
                    "#AED581",
                    "#64B5F6",
                    "#FFB74D"
                ],
                hoverBackgroundColor: [
                    "#E0E0E0",
                    "#7986CB",
                    "#FFD54F",
                    "#A1887F",
                    "#E57373",
                    "#AED581",
                    "#64B5F6",
                    "#FFB74D"
                ]
            }]
    }
});
