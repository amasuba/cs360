// CS360 Dashboard Charts - Chart.js Configuration

document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
});

function initializeCharts() {
    // Initialize QoE Distribution Chart
    const qoeChartElement = document.getElementById('qoeChart');
    if (qoeChartElement) {
        createQoEDistributionChart(qoeChartElement);
    }
    
    // Initialize Session Status Chart
    const sessionChartElement = document.getElementById('sessionChart');
    if (sessionChartElement) {
        createSessionStatusChart(sessionChartElement);
    }
}

// QoE Distribution Chart
function createQoEDistributionChart(ctx) {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Very Poor\n(0-1)', 'Poor\n(1-2)', 'Fair\n(2-3)', 'Good\n(3-4)', 'Excellent\n(4-5)'],
            datasets: [{
                label: 'Number of Sessions',
                data: [45, 120, 280, 520, 882],
                backgroundColor: [
                    '#FF5252',
                    '#FFC107',
                    '#FF9800',
                    '#4CAF50',
                    '#2196F3'
                ],
                borderColor: [
                    '#FF5252',
                    '#FFC107',
                    '#FF9800',
                    '#4CAF50',
                    '#2196F3'
                ],
                borderWidth: 1,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 12
                        },
                        padding: 15,
                        usePointStyle: true
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Session Status Chart
function createSessionStatusChart(ctx) {
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Active', 'Paused', 'Completed', 'Error'],
            datasets: [{
                data: [1247, 156, 892, 34],
                backgroundColor: [
                    '#4CAF50',
                    '#FFC107',
                    '#2196F3',
                    '#FF5252'
                ],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        font: {
                            size: 12
                        },
                        padding: 15,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return context.label + ': ' + context.parsed + ' (' + percentage + '%)';
                        }
                    }
                }
            }
        }
    });
}

// Function to create a Time Series Chart (for other pages)
function createTimeSeriesChart(ctx, title, labels, dataPoints, borderColor = '#0283C2') {
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: title,
                data: dataPoints,
                borderColor: borderColor,
                backgroundColor: 'rgba(2, 131, 194, 0.05)',
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointBackgroundColor: borderColor,
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 12
                        },
                        padding: 15
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: 12,
                    borderRadius: 4,
                    titleFont: {
                        size: 13
                    },
                    bodyFont: {
                        size: 12
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Function to create a Radar Chart (for multi-metric comparison)
function createRadarChart(ctx, title, labels, data) {
    return new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: title,
                data: data,
                borderColor: '#0283C2',
                backgroundColor: 'rgba(2, 131, 194, 0.1)',
                borderWidth: 2,
                pointBackgroundColor: '#0283C2',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 12
                        },
                        padding: 15
                    }
                }
            },
            scales: {
                r: {
                    min: 0,
                    max: 100,
                    ticks: {
                        stepSize: 20,
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            }
        }
    });
}