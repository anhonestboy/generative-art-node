const layersOrder = [
    { name: 'background', number: 1 },
    { name: 'heads', number: 3 },
    { name: 'naso', number: 2 },
    { name: 'bocca', number: 4 },
    { name: 'eyes', number: 4 },
    { name: 'soprae', number: 12},
    { name: 'hair', number: 3 },
];
  
const format = {
    width: 500,
    height: 500
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 50;

module.exports = { layersOrder, format, rarity, defaultEdition };