const spec = {
  data: {},
  background: 'transparent',
  padding: 0,
  transform: [
    {calculate: "datum.s1 + '-' + datum.s2", as: 'sc'},
    {as: 'link'}
  ],
  layer: [
    {
      mark: {type: 'rect', width: 20, height: 20, cornerRadius: 1.5, stroke: '#14151e', strokeWidth: 0.5},
      encoding: {
        x: {field: 's1', axis: null},
        y: {field: 's2', axis: null, sort: 'descending'},
        color: {field: 'n', scale: {scheme: 'darkmulti'}, legend: null},
        opacity: {condition: {test: {param: 'hover', empty: false}, value: 0.8}, value: 1},
        href: {field: 'link'}
      },
      params: [{name: 'hover', select: {type: 'point', on: 'pointerover', clear: 'pointerout'}}]
    },
    {
      mark: {type: 'text', dx: -0.5, dy: -3, fontSize: 7},
      encoding: {
        x: {field: 's1', axis: null},
        y: {field: 's2', axis: null, sort: 'descending'},
        text: {field: 'sc'}}
    },
    {
      mark: {type: 'text', dy: 4, fontSize: 5.5},
      encoding: {
        x: {field: 's1', axis: null},
        y: {field: 's2', axis: null, sort: 'descending'},
        text: {field: 'n'}}
    }
  ]
};

const opts = {
  actions: false,
  renderer: 'svg',
  config: {view: {stroke: 0}},
  loader: {target: '_blank'}
};

const hrefs = [
  "'https://prettygr.im/smoci/only-connect?sql=select+printf%28%27%7Blink%7Cconnequences%3Fkind%3Dconnection%26match%3D%25d%7C%25s%7D%27%2C+match%2C+card%29+as+match+from+round_scores+join+matches+m+on+m.id+%3D+match+where+round+%3D+1+group+by+match+having+max%28score%29+%3D+%3Ahigh+%2A+1+and+min%28score%29+%3D+%3Alow+%2A+1&high=' + datum.s1 + '&low=' + datum.s2 + '&_hide_sql=1'",
  "'https://prettygr.im/smoci/only-connect?sql=select+printf%28%27%7Blink%7Cconnequences%3Fkind%3Dsequence%26match%3D%25d%7C%25s%7D%27%2C+match%2C+card%29+as+match+from+round_scores+join+matches+m+on+m.id+%3D+match+where+round+%3D+2+group+by+match+having+max%28score%29+%3D+%3Ahigh+%2A+1+and+min%28score%29+%3D+%3Alow+%2A+1&high=' + datum.s1 + '&low=' + datum.s2 + '&_hide_sql=1'",
  "'https://prettygr.im/smoci/only-connect?sql=select+printf%28%27%7Blink%7Cwall_groups%3Fmatch%3D%25d%7C%25s%7D%27%2C+match%2C+card%29+as+match+from+round_scores+join+matches+m+on+m.id+%3D+match+where+round+%3D+3+group+by+match+having+max%28score%29+%3D+%3Ahigh+%2A+1+and+min%28score%29+%3D+%3Alow+%2A+1&high=' + datum.s1 + '&low=' + datum.s2 + '&_hide_sql=1'",
  "'https://prettygr.im/smoci/only-connect?sql=select+printf%28%27%7Blink%7Cvowel_clues%3Fmatch%3D%25d%7C%25s%7D%27%2C+match%2C+card%29+as+match+from+round_scores+join+matches+m+on+m.id+%3D+match+where+round+%3D+4+group+by+match+having+max%28score%29+%3D+%3Ahigh+%2A+1+and+min%28score%29+%3D+%3Alow+%2A+1&high=' + datum.s1 + '&low=' + datum.s2 + '&_hide_sql=1'",
  "'https://prettygr.im/smoci/only-connect?sql=select+printf%28%27%7Blink%7Cconnequences%3Fmatch%3D%25d%7C%25s%7D%27%2C+match%2C+card%29+as+match+from+round_scores+join+matches+m+on+m.id+%3D+match+where+round+%3D+2+group+by+match+having+max%28cum_score%29+%3D+%3Ahigh+%2A+1+and+min%28cum_score%29+%3D+%3Alow+%2A+1&high=' + datum.s1 + '&low=' + datum.s2 + '&_hide_sql=1'",
  "'https://prettygr.im/smoci/only-connect?sql=select+printf%28%27%7Blink%7Cround_scores%3Fmatch%3D%25d%26round%3D3%7C%25s%7D%27%2C+match%2C+card%29+as+match+from+round_scores+join+matches+m+on+m.id+%3D+match+where+round+%3D+3+group+by+match+having+max%28cum_score%29+%3D+%3Ahigh+%2A+1+and+min%28cum_score%29+%3D+%3Alow+%2A+1&high=' + datum.s1 + '&low=' + datum.s2 + '&_hide_sql=1'",
"'https://prettygr.im/smoci/only-connect?sql=select+printf%28%27%7Blink%7Cmatches%2F%25d%7C%25s%7D%27%2C+match%2C+card%29+as+match+from+match_scores+join+matches+m+on+m.id+%3D+match+group+by+match+having+max%28score%29+%3D+%3Ahigh+%2A+1+and+min%28score%29+%3D+%3Alow+%2A+1&high=' + datum.s1 + '&low=' + datum.s2 + '&_hide_sql=1'",
"'https://prettygr.im/smoci/pbp/' + datum.s1 + '/' + datum.s2"
];

const eps = ',S1E1,S1E2,S1E3,S1E4,S1E5,S1E6,S1E7,S1E8,S1E9,S1E10,S1E11,S1E12,S1E13,S1E14,S1E15,S2E1,S2E2,S2E3,S2E4,S2E5,S2E6,S2E7,S2E8,S0E1,S3E1,S3E2,S3E3,S3E4,S3E5,S3E6,S3E7,S3E8,S3E9,S3E10,S3E11,S3E12,S3E13,S3E14,S3E15,S4E1,S4E2,S4E3,S4E4,S4E5,S4E6,S4E7,S4E8,S4E9,S4E10,S0E2,S4E11,S4E12,S4E13,S4E14,S4E15,S4E16,S0E3,S0E4,S0E5,S5E1,S5E2,S5E3,S5E4,S5E5,S5E6,S5E7,S5E8,S5E9,S5E10,S5E11,S5E12,S5E13,S0E6,S5E14,S5E15,S5E16,S0E7,S0E8,S0E9,S0E10,S0E11,S0E12,S0E13,S6E1,S6E2,S6E3,S6E4,S6E5,S6E6,S6E7,S6E8,S6E9,S6E10,S6E11,S0E14,S6E12,S6E13,S6E14,S6E15,S6E16,S0E15,S0E16,S0E17,S7E1,S7E2,S7E3,S7E4,S7E5,S7E6,S7E7,S7E8,S7E9,S7E10,S7E11,S7E12,S7E13,S8E1,S8E2,S8E3,S8E4,S8E5,S8E6,S8E7,S0E18,S8E8,S8E9,S8E10,S8E11,S8E12,S8E13,S0E19,S9E1,S9E2,S9E3,S9E4,S9E5,S9E6,S9E7,S9E8,S9E9,S9E10,S9E11,S9E12,S9E13,S10E1,S10E2,S10E3,S10E4,S10E5,S10E6,S10E7,S10E8,S10E9,S10E10,S0E20,S10E11,S10E12,S10E13,S10E14,S10E15,S10E16,S10E17,S10E18,S10E19,S10E20,S10E21,S10E22,S10E23,S10E24,S0E21,S10E25,S10E26,S10E27,S11E1,S11E2,S11E3,S11E4,S11E5,S11E6,S11E7,S11E8,S11E9,S11E10,S11E11,S11E12,S11E13,S11E14,S11E15,S11E16,S11E17,S0E22,S11E18,S11E19,S11E20,S11E21,S11E22,S11E23,S11E24,S11E25,S11E26,S11E27,S0E23,S12E1,S12E2,S12E3,S12E4,S12E5,S12E6,S12E7,S12E8,S12E9,S12E10,S12E11,S12E12,S12E13,S12E14,S12E15,S12E16,S12E17,S12E18,S12E19,S12E20,S12E21,S12E22,S12E23,S12E24,S12E25,S12E26,S12E27,S12E28,S12E29,S12E30,S12E31,S12E32,S12E33,S12E34,S12E35,S12E36,S12E37,S13E1,S13E2,S13E3,S13E4,S13E5,S13E6,S13E7,S13E8,S13E9,S13E10,S13E11,S13E12,S13E13,S13E14,S13E15,S13E16,S13E17,S13E18,S13E19,S13E20,S13E21,S13E22,S13E23,S13E24,S13E25,S13E26,S13E27,S13E28,S13E29,S13E30,S13E31,S13E32,S13E33,S13E34,S13E35,S13E36,S13E37,S14E1,S14E2,S14E3,S14E4,S14E5,S14E6,S14E7,S14E8,S14E9,S0E24,S0E25,S0E26,S14E10,S0E27,S14E11,S14E12,S14E13,S14E14,S14E15,S14E16,S14E17,S14E18,S14E19,S14E20,S14E21,S14E22,S14E23,S14E24,S14E25,S14E26,S14E27,S14E28,S15E1,S15E2,S15E3,S15E4,S15E5,S15E6,S15E7,S15E8,S15E9,S15E10,S15E11,S15E12,S15E13,S15E14,S15E15,S0E28,S0E29,S0E30,S0E31,S15E16,S15E17,S15E18,S15E19,S15E20,S15E21,S15E22,S15E23,S15E24,S15E25,S15E26,S15E27,S15E28,S16E1,S16E2,S16E3,S16E4,S16E5,S16E6,S16E7,S16E8,S16E9,S16E10,S16E11,S16E12,S16E13,S16E14,S16E15,S0E32,S0E33,S0E34,S0E35,S16E16,S16E17,S16E18,S16E19,S16E20,S16E21,S16E22,S16E23,S16E24,S16E25,S16E26,S16E27,S16E28,S17E1,S17E2,S17E3,S17E4,S17E5,S17E6,S17E7,S17E8,S17E9,S17E10,S17E11,S17E12,S17E13,S17E14,S17E15,S17E16,S17E17,S17E18,S17E19,S17E20,S17E21,S17E22,S17E23,S17E24,S0E36,S0E37,S0E38,S0E39,S17E25,S17E26,S17E27,S17E28,S18E1,S18E2,S18E3,S18E4,S18E5,S18E6,S18E7,S18E8,S18E9,S18E10,S18E11,S18E12,S18E13,S18E14,S18E15,S18E16,S18E17,S0E40,S0E41,S0E42,S0E43,S18E18,S18E19,S18E20,S18E21,S18E22,S18E23,S18E24,S18E25,S18E26,S18E27,S18E28,S19E1,S19E2,S19E3,S19E4,S19E5,S19E6,S19E7,S19E8,S19E9,S19E10,S19E11,S19E12,S19E13,S19E14,S19E15,S19E16,S19E17,S19E18,S19E19,S19E20,S19E21,S19E22,S19E23,S0E44,S0E45,S0E46,S0E47,S19E24'.split(',');

let round, metric;

const luminance = rgb => {
  const [r, g, b] = rgb.match(/\d+/g).map(c => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return r * 0.2126 + g * 0.7152 + b * 0.0722;
};

const massage = r => {
  const svg = r.view._el.children[0];
  const w = r.view._viewWidth;
  const sf = [0.5, 0.5, 0.35, 0.55, 0.5, 0.66, 0.8, 0.95][round];
  const scale = document.body.clientWidth / w * sf;
  svg.parentNode.style.transform = 'scale(1)';
  svg.parentNode.style.height = svg.getBoundingClientRect().height + 2 + 'px';
  svg.parentNode.style.transform = `scale(${scale})`;

  const blobs = svg.querySelectorAll('.layer_0_marks path');
  const scores = svg.querySelectorAll('.layer_1_marks text');
  const freqs = svg.querySelectorAll('.layer_2_marks text');

  for (let i = 0; i < blobs.length; ++i) {
    const lum = luminance(blobs[i].getAttribute('fill'));
    const fg = lum > 0.179 ? '#000c' : '#fffc';
    scores[i].setAttribute('fill', fg);
    freqs[i].setAttribute('fill', fg);

    if (scores[i].textContent.indexOf('--') > -1) {
      const s = scores[i].textContent.split(/-+/);
      scores[i].innerHTML = `${s[0]}-<tspan fill="#d06">${s[1]}</tspan>`;
    }
  }

  if (metric == 'r')
    freqs.forEach(e => e.textContent = eps[e.textContent]);
};

const update = () => {
  const f = document.forms[0];
  round = f.round.selectedIndex;
  spec.data.values = data[round].map(([s1, s2, n, r]) => ({s1, s2, n, r}));
  spec.layer.forEach(m => m.encoding.y.sort = f.sort.value);
  spec.transform[1].calculate = hrefs[round];

  const l0c = spec.layer[0].encoding.color;
  l0c.scale.scheme = f.scheme.value;
  l0c.scale.reverse = f.scheme.selectedIndex > 4;
  l0c.field = spec.layer[2].encoding.text.field = metric = f.metric.value;
  l0c.scale.type = round == 7 && metric == 'n' ? 'log' : 'linear';

  vegaEmbed('#vis', spec, opts).then(massage).catch(console.warn);
}

addEventListener('DOMContentLoaded', update);
