import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/alvescarolinasantana/apiOP/main/quantidadeviews.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: getCSS('--color-graficos')
            }
        }
    ]

    const laytout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Os mais assitidos',
           
            font: {
                color: getCSS('--color-graficos'),
                size: 30,
                font: getCSS('--font')
            }
        },
        
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Temporadas',
                font: {
                    color: getCSS('--color-graficos')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Número de pessoas',
                font: {
                    color: getCSS('--color-graficos')
                }
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, laytout)
}

quantidadeUsuariosPorRede()
