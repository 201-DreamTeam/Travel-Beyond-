
'use strict';


let contryArr=['Africa','Czech','Italy','Netherlands','Portugal','Thailand','Croatia',
  'Greece','Indonesia','Mexico'];

function createChart() {

    
    let votesArr = [];

    for (let i = 0; i < contryArr.length; i++) {
        
        votesArr.push(JSON.parse(localStorage.data)[i].clickCon);
    }

    let ctx = document.getElementById('myChart').getContext('2d');

    let myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: contryArr,
            datasets: [{
                label: '# Votes',
                data: votesArr,
                backgroundColor:
                [
                    'RGBA(255,85,80,1)',
                    'rgba(54, 162, 235, 1)',
                    'RGBA(0,255,188,1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'RGBA(251,0,255,1)',
                    'RGBA(41,0,255,1)',
                    'RGBA(255,255,42,1)',
                    'RGBA(0,179,61,1)',


                ],

                borderColor:  [
                    'RGBA(255,85,80,1)',
                    'rgba(54, 162, 235, 1)',
                    'RGBA(0,255,188,1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'RGBA(251,0,255,1)',
                    'RGBA(41,0,255,1)',
                    'RGBA(255,255,42,1)',
                    'RGBA(0,179,61,1)',


                ],
                borderWidth: 2
            }]
        },
        options: {
            
                maintainAspectRatio: false,
            
        }
    });
}

createChart()
