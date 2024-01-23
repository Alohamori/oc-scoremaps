const data = [
 [
  [1,0,2,20],
  [1,1,1,12],
  [2,0,1,264],
  [2,1,13,13],
  [2,2,15,1],
  [3,0,3,144],
  [3,1,22,4],
  [3,2,19,122],
  [3,3,13,8],
  [4,0,6,14],
  [4,1,16,118],
  [4,2,33,6],
  [4,3,35,10],
  [4,4,23,30],
  [5,0,6,53],
  [5,1,14,5],
  [5,2,23,23],
  [5,3,32,3],
  [5,4,23,7],
  [5,5,6,60],
  [6,0,3,15],
  [6,1,15,48],
  [6,2,18,19],
  [6,3,12,54],
  [6,4,20,76],
  [6,5,5,11],
  [6,6,3,2],
  [7,0,3,89],
  [7,1,8,39],
  [7,2,11,18],
  [7,3,10,22],
  [7,4,7,52],
  [7,5,6,40],
  [7,6,4,105],
  [8,1,4,232],
  [8,2,5,136],
  [8,3,2,110],
  [8,4,5,32],
  [8,5,1,349],
  [8,6,2,124],
  [8,8,1,59],
  [9,0,1,90],
  [9,1,2,159],
  [9,2,2,236],
  [9,3,3,123],
  [9,4,1,320],
  [10,3,1,246],
  [10,4,1,243],
  [12,0,1,47],
 ],
 [
  [0,0,1,388],
  [1,0,1,274],
  [1,1,3,226],
  [2,0,4,11],
  [2,1,9,55],
  [2,2,4,112],
  [3,0,3,268],
  [3,1,13,72],
  [3,2,19,20],
  [3,3,13,9],
  [4,0,7,41],
  [4,1,8,23],
  [4,2,20,35],
  [4,3,31,4],
  [4,4,13,26],
  [5,0,5,101],
  [5,1,8,16],
  [5,2,22,27],
  [5,3,23,31],
  [5,4,15,13],
  [5,5,16,59],
  [6,0,11,54],
  [6,1,10,5],
  [6,2,16,21],
  [6,3,23,24],
  [6,4,21,3],
  [6,5,10,120],
  [6,6,4,151],
  [7,0,8,33],
  [7,1,2,158],
  [7,2,14,1],
  [7,3,9,30],
  [7,4,3,8],
  [7,5,8,6],
  [7,6,5,50],
  [7,7,2,153],
  [8,0,6,43],
  [8,1,1,249],
  [8,2,9,44],
  [8,3,7,22],
  [8,4,4,109],
  [8,5,2,393],
  [8,6,6,7],
  [8,7,1,108],
  [8,8,1,440],
  [9,0,7,93],
  [9,1,1,92],
  [9,2,8,15],
  [9,3,4,19],
  [9,4,5,52],
  [9,5,4,2],
  [9,6,1,174],
  [10,0,2,80],
  [10,2,4,36],
  [10,3,1,134],
  [10,5,1,89],
  [11,0,1,310],
  [11,2,1,414],
  [11,5,1,118],
  [12,0,1,403],
 ],
 [
  [2,2,1,22],
  [3,2,5,28],
  [3,3,2,68],
  [4,1,1,86],
  [4,2,3,23],
  [4,3,10,17],
  [4,4,4,9],
  [5,1,1,340],
  [5,2,3,38],
  [5,3,7,27],
  [5,4,9,140],
  [5,5,10,12],
  [6,3,3,144],
  [6,4,16,11],
  [6,5,13,1],
  [6,6,8,71],
  [7,1,1,401],
  [7,2,6,34],
  [7,3,7,39],
  [7,4,19,20],
  [7,5,23,10],
  [7,6,18,48],
  [7,7,14,30],
  [10,1,1,222],
  [10,2,3,13],
  [10,3,10,51],
  [10,4,25,21],
  [10,5,46,5],
  [10,6,31,6],
  [10,7,68,2],
  [10,10,95,3],
 ],
 [
  [1,0,1,398],
  [2,1,1,13],
  [2,2,5,11],
  [3,1,1,7],
  [3,2,5,175],
  [3,3,4,73],
  [4,0,1,191],
  [4,1,7,14],
  [4,2,10,1],
  [4,3,16,59],
  [4,4,7,110],
  [5,-3,1,43],
  [5,-1,3,143],
  [5,0,2,188],
  [5,1,8,6],
  [5,2,11,20],
  [5,3,16,22],
  [5,4,18,9],
  [5,5,13,123],
  [6,-1,2,201],
  [6,0,4,100],
  [6,1,10,93],
  [6,2,12,102],
  [6,3,13,86],
  [6,4,14,10],
  [6,5,23,30],
  [6,6,7,137],
  [7,-1,2,131],
  [7,0,1,79],
  [7,1,11,29],
  [7,2,10,3],
  [7,3,20,32],
  [7,4,19,16],
  [7,5,12,21],
  [7,6,12,37],
  [7,7,4,272],
  [8,0,3,76],
  [8,1,10,203],
  [8,2,12,34],
  [8,3,7,2],
  [8,4,12,158],
  [8,5,8,85],
  [8,6,4,8],
  [8,7,5,84],
  [9,-1,2,51],
  [9,0,4,170],
  [9,1,3,38],
  [9,2,4,103],
  [9,3,9,88],
  [9,4,8,91],
  [9,5,12,56],
  [9,6,1,176],
  [10,1,1,378],
  [10,2,4,118],
  [10,3,6,61],
  [10,4,4,5],
  [10,5,4,4],
  [10,6,1,154],
  [10,7,2,156],
  [10,9,2,41],
  [11,1,2,149],
  [11,2,3,63],
  [11,3,5,19],
  [11,4,1,31],
  [11,5,1,153],
  [11,7,4,47],
  [11,10,1,60],
  [12,-2,1,24],
  [12,2,3,33],
  [12,3,1,26],
  [12,9,1,52],
  [13,2,1,151],
  [13,5,1,57],
  [15,1,1,45],
  [17,4,1,48],
  [17,6,1,25],
  [22,3,1,40],
 ],
 [
  [3,2,1,143],
  [4,1,1,388],
  [4,2,1,20],
  [4,4,2,102],
  [5,2,1,35],
  [5,3,4,195],
  [5,4,5,12],
  [5,5,7,112],
  [6,2,1,354],
  [6,3,8,144],
  [6,4,11,9],
  [6,5,10,4],
  [6,6,3,263],
  [7,2,2,187],
  [7,3,3,27],
  [7,4,1,340],
  [7,5,12,13],
  [7,6,16,5],
  [7,7,2,342],
  [8,2,7,16],
  [8,3,4,29],
  [8,4,11,49],
  [8,5,13,11],
  [8,6,9,65],
  [8,7,9,37],
  [8,8,8,21],
  [9,2,4,239],
  [9,3,5,23],
  [9,4,11,1],
  [9,5,11,60],
  [9,6,12,116],
  [9,7,12,62],
  [9,8,14,26],
  [9,9,6,139],
  [10,2,2,401],
  [10,3,3,17],
  [10,4,6,182],
  [10,5,2,260],
  [10,6,12,99],
  [10,7,18,8],
  [10,8,9,76],
  [10,9,7,32],
  [10,10,3,358],
  [11,1,3,43],
  [11,2,4,53],
  [11,3,1,33],
  [11,4,4,129],
  [11,5,7,45],
  [11,6,17,24],
  [11,7,10,3],
  [11,8,8,18],
  [11,9,7,163],
  [11,10,3,10],
  [11,11,1,162],
  [12,2,1,128],
  [12,3,3,54],
  [12,4,2,90],
  [12,5,3,31],
  [12,6,6,63],
  [12,7,3,61],
  [12,8,4,64],
  [12,9,6,40],
  [12,10,5,214],
  [12,11,2,320],
  [12,12,2,315],
  [13,3,3,93],
  [13,4,7,39],
  [13,5,7,181],
  [13,6,6,115],
  [13,7,1,186],
  [13,8,4,145],
  [13,9,3,95],
  [13,10,1,7],
  [13,11,2,52],
  [13,12,1,50],
  [13,13,2,59],
  [14,0,1,434],
  [14,2,1,91],
  [14,3,1,443],
  [14,4,1,382],
  [14,5,2,232],
  [14,7,1,223],
  [14,8,2,303],
  [14,13,1,108],
  [15,1,1,119],
  [15,2,2,15],
  [15,3,4,80],
  [15,4,1,92],
  [15,5,3,19],
  [15,6,1,22],
  [15,7,2,146],
  [15,9,3,109],
  [15,11,1,2],
  [16,0,1,310],
  [16,4,1,229],
  [16,5,1,236],
  [16,6,1,461],
  [16,7,1,47],
  [17,5,1,89],
  [18,4,1,403],
 ],
 [
  [8,6,1,143],
  [8,8,1,305],
  [9,5,1,321],
  [9,7,1,226],
  [9,8,2,20],
  [9,9,1,144],
  [10,5,1,343],
  [10,6,1,29],
  [10,8,3,9],
  [10,9,3,12],
  [10,10,1,430],
  [11,8,3,273],
  [11,9,4,113],
  [11,11,2,102],
  [12,5,1,340],
  [12,6,1,268],
  [12,7,2,66],
  [12,8,5,86],
  [12,9,3,263],
  [12,10,4,230],
  [12,11,5,11],
  [12,12,1,271],
  [13,4,1,354],
  [13,5,1,23],
  [13,6,2,34],
  [13,7,2,17],
  [13,8,3,69],
  [13,9,3,41],
  [13,10,3,136],
  [13,11,2,38],
  [13,12,6,187],
  [13,13,3,142],
  [14,6,1,360],
  [14,8,4,56],
  [14,10,2,1],
  [14,11,4,71],
  [14,12,7,16],
  [14,13,5,104],
  [14,14,3,85],
  [15,6,1,35],
  [15,7,2,79],
  [15,8,1,14],
  [15,9,4,51],
  [15,10,5,212],
  [15,11,7,49],
  [15,12,4,112],
  [15,13,10,4],
  [15,14,7,101],
  [15,15,6,154],
  [16,7,1,43],
  [16,10,2,222],
  [16,11,9,60],
  [16,12,7,5],
  [16,13,4,98],
  [16,14,6,42],
  [16,15,5,103],
  [17,3,1,401],
  [17,6,1,438],
  [17,7,2,13],
  [17,8,1,22],
  [17,9,4,48],
  [17,10,6,97],
  [17,11,6,58],
  [17,12,3,61],
  [17,13,6,54],
  [17,14,5,76],
  [17,15,6,57],
  [17,16,8,63],
  [17,17,6,342],
  [18,6,1,67],
  [18,9,2,87],
  [18,10,2,44],
  [18,11,3,135],
  [18,12,4,21],
  [18,13,4,137],
  [18,14,10,30],
  [18,15,7,10],
  [18,16,5,65],
  [18,17,3,221],
  [18,18,5,25],
  [19,7,2,141],
  [19,8,1,437],
  [19,9,3,110],
  [19,10,1,392],
  [19,11,8,62],
  [19,12,8,26],
  [19,13,3,70],
  [19,14,5,160],
  [19,15,5,36],
  [19,16,6,118],
  [19,17,5,124],
  [19,18,4,117],
  [19,19,4,40],
  [20,7,2,39],
  [20,8,1,94],
  [20,9,1,132],
  [20,10,5,182],
  [20,11,2,236],
  [20,12,2,235],
  [20,14,6,8],
  [20,15,2,32],
  [20,16,4,194],
  [20,17,9,168],
  [20,18,4,84],
  [20,19,4,130],
  [21,7,2,33],
  [21,11,3,252],
  [21,12,5,171],
  [21,13,4,6],
  [21,14,1,404],
  [21,15,1,327],
  [21,16,3,158],
  [21,17,3,3],
  [21,18,2,324],
  [21,19,2,163],
  [22,10,3,31],
  [22,11,1,431],
  [22,13,4,217],
  [22,15,2,64],
  [22,16,1,105],
  [22,17,1,313],
  [22,18,1,50],
  [22,19,5,150],
  [22,20,2,381],
  [22,21,1,2],
  [22,22,1,315],
  [23,8,1,181],
  [23,12,2,218],
  [23,13,2,123],
  [23,14,2,229],
  [23,15,2,298],
  [23,16,4,115],
  [23,18,2,52],
  [23,19,1,108],
  [23,20,3,7],
  [24,4,1,91],
  [24,7,1,434],
  [24,8,1,443],
  [24,15,2,232],
  [25,5,1,119],
  [25,7,2,80],
  [25,9,1,323],
  [25,10,1,134],
  [25,11,1,19],
  [25,12,2,15],
  [25,19,1,109],
  [26,5,1,310],
  [26,17,1,47],
  [27,15,1,89],
  [28,9,1,403],
 ],
 [
  [11,7,1,143],
  [12,11,1,68],
  [13,9,1,321],
  [13,11,1,20],
  [14,11,1,12],
  [14,12,1,230],
  [14,13,2,9],
  [15,11,1,207],
  [15,12,1,201],
  [15,13,2,113],
  [15,14,6,27],
  [16,10,3,140],
  [16,12,2,161],
  [16,13,2,69],
  [16,14,1,66],
  [16,15,1,433],
  [17,6,1,274],
  [17,7,1,29],
  [17,9,2,197],
  [17,10,1,192],
  [17,11,3,226],
  [17,13,1,102],
  [17,14,5,133],
  [17,15,2,237],
  [17,16,6,99],
  [18,9,3,13],
  [18,10,1,371],
  [18,11,2,86],
  [18,12,2,1],
  [18,13,2,206],
  [18,15,2,142],
  [18,16,3,189],
  [18,17,5,104],
  [19,9,2,14],
  [19,11,3,273],
  [19,12,2,360],
  [19,13,2,355],
  [19,15,1,400],
  [19,16,3,87],
  [19,17,4,96],
  [19,18,13,16],
  [20,9,1,17],
  [20,11,2,100],
  [20,12,1,336],
  [20,13,3,248],
  [20,14,2,159],
  [20,15,2,53],
  [20,16,9,73],
  [20,17,1,223],
  [20,18,1,139],
  [20,19,6,54],
  [21,4,1,43],
  [21,5,1,401],
  [21,8,1,138],
  [21,11,2,28],
  [21,12,1,126],
  [21,14,3,276],
  [21,15,1,136],
  [21,16,6,187],
  [21,17,2,202],
  [21,18,2,296],
  [21,19,3,101],
  [21,20,12,112],
  [22,10,1,35],
  [22,11,2,22],
  [22,12,1,38],
  [22,13,1,464],
  [22,14,3,116],
  [22,15,6,250],
  [22,16,2,335],
  [22,17,3,58],
  [22,18,6,6],
  [22,19,8,39],
  [22,20,9,5],
  [22,21,5,194],
  [23,10,1,177],
  [23,11,1,44],
  [23,12,1,266],
  [23,13,3,56],
  [23,14,1,357],
  [23,15,4,195],
  [23,16,2,148],
  [23,18,8,41],
  [23,19,5,65],
  [23,20,7,30],
  [23,21,6,168],
  [23,22,5,32],
  [24,8,2,51],
  [24,10,1,128],
  [24,14,4,145],
  [24,15,2,212],
  [24,16,2,282],
  [24,17,2,225],
  [24,18,4,157],
  [24,19,6,10],
  [24,21,3,37],
  [24,22,6,178],
  [24,23,5,3],
  [25,9,1,249],
  [25,10,3,172],
  [25,11,1,437],
  [25,13,3,182],
  [25,14,4,76],
  [25,15,2,198],
  [25,16,1,179],
  [25,17,4,21],
  [25,18,5,4],
  [25,19,2,260],
  [25,20,2,255],
  [25,21,5,117],
  [25,22,3,169],
  [25,23,1,270],
  [25,24,4,156],
  [26,11,1,141],
  [26,12,2,147],
  [26,14,1,211],
  [26,15,4,240],
  [26,16,2,319],
  [26,17,2,62],
  [26,18,3,49],
  [26,19,2,229],
  [26,20,1,365],
  [26,21,3,95],
  [26,22,3,60],
  [26,23,2,295],
  [26,24,2,59],
  [26,25,3,349],
  [27,9,1,94],
  [27,11,1,409],
  [27,14,2,170],
  [27,15,3,61],
  [27,16,2,111],
  [27,17,1,376],
  [27,18,1,171],
  [27,19,2,63],
  [27,20,3,174],
  [27,21,2,36],
  [27,22,2,358],
  [27,23,1,243],
  [27,24,2,64],
  [27,25,1,163],
  [27,26,4,84],
  [28,10,1,119],
  [28,14,1,92],
  [28,15,1,431],
  [28,17,1,18],
  [28,18,2,123],
  [28,19,4,146],
  [28,20,3,8],
  [28,21,2,130],
  [28,22,2,57],
  [28,23,1,288],
  [28,24,1,105],
  [28,25,1,121],
  [28,26,1,152],
  [28,27,2,46],
  [29,9,1,67],
  [29,10,1,80],
  [29,11,2,383],
  [29,13,1,203],
  [29,15,2,283],
  [29,16,1,461],
  [29,19,2,115],
  [29,20,3,158],
  [29,22,1,281],
  [29,24,1,315],
  [29,28,1,440],
  [30,12,1,181],
  [30,13,2,149],
  [30,14,1,134],
  [30,18,2,275],
  [30,19,1,45],
  [30,21,1,444],
  [30,24,1,2],
  [30,25,1,381],
  [30,28,1,109],
  [31,13,1,90],
  [31,15,1,26],
  [31,19,2,277],
  [31,24,1,186],
  [32,14,1,15],
  [32,18,1,450],
  [32,30,1,52],
  [33,8,1,91],
  [33,9,1,33],
  [33,11,1,24],
  [33,13,1,391],
  [33,14,1,31],
  [33,21,1,151],
  [33,24,1,153],
  [33,28,1,47],
  [34,10,1,310],
  [34,13,1,48],
  [34,18,1,89],
  [35,24,1,25],
  [36,10,1,443],
  [36,14,1,19],
  [41,22,1,40],
 ],
 [
  [1,0,281,1],
  [1,1,86,1],
  [2,0,197,2],
  [2,1,170,1],
  [2,2,91,1],
  [3,0,139,4],
  [3,1,140,4],
  [3,2,148,2],
  [3,3,74,2],
  [4,0,69,6],
  [4,1,93,6],
  [4,2,126,1],
  [4,3,117,3],
  [4,4,67,7],
  [5,0,42,15],
  [5,1,63,4],
  [5,2,82,1],
  [5,3,93,3],
  [5,4,91,5],
  [5,5,41,13],
  [6,0,23,15],
  [6,1,37,4],
  [6,2,60,19],
  [6,3,81,2],
  [6,4,106,7],
  [6,5,78,4],
  [6,6,35,2],
  [7,0,14,31],
  [7,1,32,17],
  [7,2,47,1],
  [7,3,47,10],
  [7,4,70,6],
  [7,5,64,5],
  [7,6,63,2],
  [7,7,29,30],
  [8,0,7,47],
  [8,1,15,43],
  [8,2,35,16],
  [8,3,42,3],
  [8,4,54,9],
  [8,5,57,3],
  [8,6,59,16],
  [8,7,54,7],
  [8,8,28,21],
  [9,0,8,15],
  [9,1,11,126],
  [9,2,27,1],
  [9,3,46,17],
  [9,4,45,1],
  [9,5,52,11],
  [9,6,54,2],
  [9,7,53,6],
  [9,8,52,1],
  [9,9,24,20],
  [10,0,3,15],
  [10,1,10,43],
  [10,2,15,39],
  [10,3,24,17],
  [10,4,37,9],
  [10,5,38,12],
  [10,6,42,22],
  [10,7,48,5],
  [10,8,41,7],
  [10,9,42,1],
  [10,10,21,9],
  [11,1,6,43],
  [11,2,7,18],
  [11,3,24,24],
  [11,4,13,96],
  [11,5,34,3],
  [11,6,38,24],
  [11,7,35,3],
  [11,8,40,18],
  [11,9,49,12],
  [11,10,35,1],
  [11,11,18,3],
  [12,0,5,15],
  [12,1,1,411],
  [12,2,6,15],
  [12,3,17,54],
  [12,4,17,55],
  [12,5,23,11],
  [12,6,29,2],
  [12,7,28,29],
  [12,8,36,16],
  [12,9,48,11],
  [12,10,43,9],
  [12,11,50,2],
  [12,12,21,9],
  [13,0,1,310],
  [13,1,2,119],
  [13,2,9,35],
  [13,3,11,23],
  [13,4,17,39],
  [13,5,27,23],
  [13,6,30,4],
  [13,7,22,17],
  [13,8,37,26],
  [13,9,39,38],
  [13,10,38,7],
  [13,11,38,11],
  [13,12,53,9],
  [13,13,36,9],
  [14,0,1,434],
  [14,2,3,15],
  [14,3,8,48],
  [14,4,13,56],
  [14,5,16,23],
  [14,6,16,63],
  [14,7,28,5],
  [14,8,28,28],
  [14,9,27,32],
  [14,10,41,1],
  [14,11,38,1],
  [14,12,38,16],
  [14,13,57,9],
  [14,14,27,16],
  [15,0,1,47],
  [15,1,2,119],
  [15,2,8,15],
  [15,3,9,33],
  [15,4,8,92],
  [15,5,20,13],
  [15,6,21,4],
  [15,7,24,6],
  [15,8,29,14],
  [15,9,42,28],
  [15,10,44,4],
  [15,11,48,1],
  [15,12,44,15],
  [15,13,59,4],
  [15,14,59,16],
  [15,15,34,36],
  [16,0,1,310],
  [16,2,2,253],
  [16,3,1,47],
  [16,4,9,47],
  [16,5,7,23],
  [16,6,15,35],
  [16,7,17,5],
  [16,8,23,5],
  [16,9,22,41],
  [16,10,36,28],
  [16,11,46,1],
  [16,12,49,5],
  [16,13,52,4],
  [16,14,54,4],
  [16,15,71,4],
  [16,16,34,55],
  [17,2,2,89],
  [17,3,7,48],
  [17,4,3,234],
  [17,5,14,13],
  [17,6,23,22],
  [17,7,26,13],
  [17,8,23,14],
  [17,9,32,14],
  [17,10,51,7],
  [17,11,59,1],
  [17,12,53,1],
  [17,13,71,5],
  [17,14,73,5],
  [17,15,73,3],
  [17,16,78,16],
  [17,17,37,16],
  [18,0,1,434],
  [18,2,1,67],
  [18,3,2,401],
  [18,4,11,67],
  [18,5,4,236],
  [18,6,11,35],
  [18,7,19,8],
  [18,8,19,13],
  [18,9,26,13],
  [18,10,29,10],
  [18,11,32,41],
  [18,12,41,1],
  [18,13,54,41],
  [18,14,62,5],
  [18,15,62,4],
  [18,16,72,5],
  [18,17,73,5],
  [18,18,45,25],
  [19,1,1,252],
  [19,2,1,391],
  [19,3,8,33],
  [19,4,5,234],
  [19,5,8,19],
  [19,6,9,43],
  [19,7,18,6],
  [19,8,19,17],
  [19,9,25,14],
  [19,10,23,22],
  [19,11,35,2],
  [19,12,57,15],
  [19,13,59,21],
  [19,14,63,21],
  [19,15,79,4],
  [19,16,80,30],
  [19,17,74,3],
  [19,18,88,16],
  [19,19,42,40],
  [20,0,1,310],
  [20,3,1,94],
  [20,4,6,43],
  [20,5,6,43],
  [20,6,10,43],
  [20,7,18,8],
  [20,8,14,17],
  [20,9,21,17],
  [20,10,32,17],
  [20,11,32,8],
  [20,12,35,22],
  [20,13,35,26],
  [20,14,45,8],
  [20,15,67,4],
  [20,16,71,4],
  [20,17,68,5],
  [20,18,67,5],
  [20,19,74,5],
  [20,20,32,5],
  [21,1,1,252],
  [21,3,2,33],
  [21,4,3,43],
  [21,5,7,33],
  [21,6,4,67],
  [21,7,12,6],
  [21,8,12,18],
  [21,9,8,6],
  [21,10,18,7],
  [21,11,22,22],
  [21,12,32,62],
  [21,13,34,6],
  [21,14,48,6],
  [21,15,53,6],
  [21,16,68,4],
  [21,17,59,3],
  [21,18,58,3],
  [21,19,70,3],
  [21,20,61,3],
  [21,21,25,3],
  [22,0,1,434],
  [22,3,1,217],
  [22,4,3,90],
  [22,6,3,67],
  [22,7,6,33],
  [22,8,11,83],
  [22,9,7,31],
  [22,10,17,31],
  [22,11,19,2],
  [22,12,30,24],
  [22,13,29,24],
  [22,14,39,18],
  [22,15,42,2],
  [22,16,44,4],
  [22,17,54,4],
  [22,18,60,6],
  [22,19,75,2],
  [22,20,51,5],
  [22,21,45,2],
  [22,22,19,2],
  [23,2,1,391],
  [23,3,3,80],
  [23,4,1,283],
  [23,5,5,19],
  [23,6,4,141],
  [23,7,8,33],
  [23,8,10,128],
  [23,9,11,31],
  [23,10,13,7],
  [23,11,11,24],
  [23,12,28,15],
  [23,13,29,56],
  [23,14,35,7],
  [23,15,33,26],
  [23,16,38,41],
  [23,17,45,4],
  [23,18,51,4],
  [23,19,49,8],
  [23,20,43,7],
  [23,21,40,7],
  [23,22,33,2],
  [23,23,18,2],
  [24,0,2,310],
  [24,4,2,91],
  [24,7,7,33],
  [24,8,9,33],
  [24,9,9,31],
  [24,10,5,48],
  [24,11,4,24],
  [24,12,14,110],
  [24,13,19,111],
  [24,14,26,18],
  [24,15,23,21],
  [24,16,22,21],
  [24,17,35,21],
  [24,18,31,4],
  [24,19,30,8],
  [24,20,25,40],
  [24,21,39,7],
  [24,22,27,7],
  [24,23,25,2],
  [24,24,8,108],
  [25,2,1,391],
  [25,3,2,80],
  [25,4,2,91],
  [25,5,3,19],
  [25,6,1,391],
  [25,7,7,19],
  [25,8,4,33],
  [25,9,11,31],
  [25,10,13,31],
  [25,11,12,19],
  [25,12,12,15],
  [25,13,16,109],
  [25,14,20,18],
  [25,15,14,89],
  [25,16,9,61],
  [25,17,25,21],
  [25,18,25,4],
  [25,19,25,8],
  [25,20,18,50],
  [25,21,27,40],
  [25,22,22,40],
  [25,23,18,2],
  [25,24,18,46],
  [25,25,3,152],
  [26,0,1,310],
  [26,2,1,310],
  [26,4,3,91],
  [26,5,2,119],
  [26,6,1,119],
  [26,7,6,67],
  [26,8,8,33],
  [26,9,6,90],
  [26,10,7,90],
  [26,11,10,19],
  [26,12,6,15],
  [26,13,5,203],
  [26,14,15,18],
  [26,15,12,18],
  [26,16,11,18],
  [26,17,18,18],
  [26,18,17,25],
  [26,19,18,8],
  [26,20,13,64],
  [26,21,16,60],
  [26,22,17,40],
  [26,23,15,2],
  [26,24,20,46],
  [26,25,12,46],
  [26,26,5,84],
  [27,4,1,91],
  [27,5,2,91],
  [27,6,1,91],
  [27,7,3,67],
  [27,8,8,33],
  [27,9,3,80],
  [27,10,7,24],
  [27,11,11,19],
  [27,12,4,15],
  [27,13,6,15],
  [27,14,13,26],
  [27,15,12,61],
  [27,16,8,18],
  [27,17,13,62],
  [27,18,14,47],
  [27,19,14,8],
  [27,20,11,25],
  [27,21,11,25],
  [27,22,11,40],
  [27,23,6,2],
  [27,24,9,52],
  [27,25,8,46],
  [27,26,8,46],
  [27,27,2,46],
  [28,4,1,403],
  [28,5,1,310],
  [28,6,1,403],
  [28,7,2,80],
  [28,8,7,33],
  [28,9,2,181],
  [28,10,6,24],
  [28,11,9,19],
  [28,12,4,90],
  [28,13,5,15],
  [28,14,6,26],
  [28,15,8,26],
  [28,16,4,18],
  [28,17,6,18],
  [28,18,10,115],
  [28,19,9,8],
  [28,20,6,8],
  [28,21,7,25],
  [28,22,7,25],
  [28,23,3,2],
  [28,24,5,105],
  [28,25,4,52],
  [28,26,4,52],
  [28,27,5,46],
  [28,28,2,109],
  [29,5,1,310],
  [29,8,4,33],
  [29,9,3,67],
  [29,10,3,24],
  [29,11,7,19],
  [29,12,5,48],
  [29,13,6,15],
  [29,14,5,15],
  [29,15,4,26],
  [29,16,2,18],
  [29,17,4,18],
  [29,18,5,115],
  [29,19,6,45],
  [29,20,4,151],
  [29,21,4,47],
  [29,22,6,25],
  [29,23,2,2],
  [29,24,4,2],
  [29,25,2,47],
  [29,26,1,47],
  [29,27,1,52],
  [29,28,2,109],
  [30,5,1,310],
  [30,7,1,91],
  [30,8,2,33],
  [30,9,3,24],
  [30,10,2,24],
  [30,11,5,19],
  [30,12,5,19],
  [30,13,7,15],
  [30,14,6,15],
  [30,15,4,26],
  [30,16,1,89],
  [30,17,2,275],
  [30,18,3,275],
  [30,19,2,45],
  [30,20,1,151],
  [30,21,1,444],
  [30,22,3,25],
  [30,23,2,25],
  [30,24,3,2],
  [30,25,2,47],
  [30,26,1,47],
  [30,27,1,52],
  [30,28,1,109],
  [31,5,1,310],
  [31,6,1,310],
  [31,7,2,91],
  [31,8,3,33],
  [31,9,3,24],
  [31,10,1,24],
  [31,11,3,31],
  [31,12,4,19],
  [31,13,4,19],
  [31,14,2,15],
  [31,15,3,26],
  [31,16,2,89],
  [31,17,1,450],
  [31,18,1,277],
  [31,19,2,277],
  [31,20,1,151],
  [31,21,1,151],
  [31,22,1,40],
  [31,23,1,153],
  [31,24,2,25],
  [31,25,1,47],
  [31,26,1,47],
  [31,27,1,52],
  [31,28,1,52],
  [31,29,1,52],
  [32,8,2,91],
  [32,9,2,33],
  [32,10,1,24],
  [32,11,1,31],
  [32,12,3,31],
  [32,13,4,19],
  [32,14,1,15],
  [32,16,1,89],
  [32,17,2,89],
  [32,18,1,450],
  [32,21,1,151],
  [32,22,1,40],
  [32,23,1,153],
  [32,24,1,25],
  [32,26,1,47],
  [32,27,2,47],
  [32,28,2,47],
  [32,29,1,52],
  [32,30,1,52],
  [33,8,2,91],
  [33,9,3,33],
  [33,10,2,24],
  [33,11,1,24],
  [33,13,4,19],
  [33,14,1,31],
  [33,17,1,89],
  [33,18,2,89],
  [33,21,1,151],
  [33,22,1,40],
  [33,23,1,153],
  [33,24,2,25],
  [33,28,1,47],
  [34,9,1,310],
  [34,10,2,310],
  [34,13,2,19],
  [34,14,1,19],
  [34,18,2,89],
  [34,22,1,40],
  [34,23,1,40],
  [34,24,1,25],
  [35,10,1,443],
  [35,14,1,19],
  [35,23,1,40],
  [35,24,1,25],
  [36,10,1,443],
  [36,14,1,19],
  [36,23,1,40],
  [37,23,1,40],
  [38,22,1,40],
  [38,23,1,40],
  [39,22,1,40],
  [40,22,1,40],
  [41,22,1,40],
 ],
];
