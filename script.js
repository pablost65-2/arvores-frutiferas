// CSV Data
const treeData = [
    {id: 1, name: "Videira", location: "Atrás do Bloco 0 próximo ao Galpão de Mineração", lat: -20.8036206676028, lng: -41.154509189705898},
    {id: 2, name: "Coqueiro", location: "Atrás do Bloco 0 próximo ao Galpão de Mineração", lat: -20.803637833415099, lng: -41.154471547935799},
    {id: 3, name: "Coqueiro", location: "Atrás do Bloco 0 próximo ao Galpão de Mineração", lat: -20.8037004500123, lng: -41.154408551319598},
    {id: 4, name: "Amoreira", location: "Atrás do Bloco 0 próximo ao Galpão de Mineração", lat: -20.803690759350001, lng: -41.1544500174452},
    {id: 5, name: "Figueira", location: "Atrás do Bloco 0 próximo ao Galpão de Mineração", lat: -20.8036997045768, lng: -41.1543926028098},
    {id: 6, name: "Limoeiro", location: "Atrás do Bloco 0 próximo ao Galpão de Mineração", lat: -20.803666905409401, lng: -41.154373464598002},
    {id: 7, name: "Mangueira", location: "Atrás do Bloco 0 próximo ao Galpão de Mineração", lat: -20.803700450011899, lng: -41.154601528292297},
    {id: 8, name: "Mangueira", location: "Atrás do Bloco 0 próximo ao Galpão de Mineração", lat: -20.803640429598701, lng: -41.154633181038101},
    {id: 9, name: "Bananeira", location: "Atrás do Bloco 0 próximo ao Galpão de Mineração", lat: -20.8036811847475, lng: -41.154718101258503},
    {id: 10, name: "Bananeira", location: "Atrás do Bloco 0 próximo ao Galpão de Mineração", lat: -20.803684506702002, lng: -41.154723789234303},
    {id: 11, name: "Bananeira", location: "Atrás do Bloco 0 próximo ao Galpão de Mineração", lat: -20.803680612524499, lng: -41.154703293572801},
    {id: 12, name: "Bananeira", location: "Atrás do Bloco 0 próximo ao Galpão de Mineração", lat: -20.803679673759, lng: -41.154710345733697},
    {id: 13, name: "Bananeira", location: "Atrás do Bloco 0 próximo ao Galpão de Mineração", lat: -20.803680975829302, lng: -41.154703682424604},
    {id: 14, name: "Bananeira", location: "Atrás do Bloco 0 próximo ao Galpão de Mineração", lat: -20.803675334321301, lng: -41.154703011872698},
    {id: 15, name: "Mamoeiro", location: "Atrás do Bloco 0 próximo ao Galpão de Mineração", lat: -20.803671999999999, lng: -41.154713999999998},
    {id: 16, name: "Mamoeiro", location: "Atrás do Bloco 0 próximo ao Galpão de Mineração", lat: -20.803657999999999, lng: -41.154800000000002},
    {id: 17, name: "Mamoeiro", location: "Atrás do Bloco 0 próximo ao Galpão de Mineração", lat: -20.803657999999999, lng: -41.154733},
    {id: 18, name: "Mamoeiro", location: "Atrás do Bloco 0 próximo ao Galpão de Mineração", lat: -20.803667000000001, lng: -41.154606000000001},
    {id: 19, name: "Mamoeiro", location: "Atrás do Bloco 0 próximo ao Galpão de Mineração", lat: -20.803667000000001, lng: -41.154617000000002},
    {id: 20, name: "Mamoeiro", location: "Atrás do Bloco 0 próximo ao Galpão de Mineração", lat: -20.803592247220699, lng: -41.154572169113003},
    {id: 21, name: "Goiabeira", location: "Atrás da Biblioteca", lat: -20.803660976910301, lng: -41.154888852441303},
    {id: 22, name: "Aceroleira", location: "Atrás da Biblioteca e da Cantina", lat: -20.8036296351945, lng: -41.155028327309402},
    {id: 23, name: "Mangueira", location: "Atrás da Cantina", lat: -20.8036321510573, lng: -41.155076474754303},
    {id: 24, name: "Mangueira", location: "Atrás da Cantina", lat: -20.803629643719798, lng: -41.155118048993003},
    {id: 25, name: "Laranjeira", location: "Atrás da Cantina", lat: -20.803643434073798, lng: -41.155143529979199},
    {id: 26, name: "Cajueiro", location: "Em frente ao Galpão de Mineração", lat: -20.803580983851202, lng: -41.154264020527201},
    {id: 27, name: "Cajueiro", location: "Em frente ao Galpão de Mineração", lat: -20.803568843406399, lng: -41.154356073415798},
    {id: 28, name: "Cajueiro", location: "Ao lado do Pátio", lat: -20.803492468857101, lng: -41.155335830189301},
    {id: 29, name: "Cajueiro", location: "Ao lado do Pátio", lat: -20.803383631215599, lng: -41.155315346834698},
    {id: 30, name: "Coqueiro", location: "Margem esquerda da Estrada de Saída do Campus", lat: -20.803273066764199, lng: -41.155685709515303},
    {id: 31, name: "Coqueiro", location: "Margem esquerda da Estrada de Saída do Campus", lat: -20.803237790059601, lng: -41.155699237506298},
    {id: 32, name: "Coqueiro", location: "Margem esquerda da Estrada de Saída do Campus", lat: -20.803144211278202, lng: -41.155683431447102},
    {id: 33, name: "Coqueiro", location: "Margem esquerda da Estrada de Saída do Campus", lat: -20.803061186447099, lng: -41.155666120049503},
    {id: 34, name: "Coqueiro", location: "Margem esquerda da Estrada de Saída do Campus", lat: -20.802989837668299, lng: -41.155630829366402},
    {id: 35, name: "Coqueiro", location: "Margem esquerda da Estrada de Saída do Campus", lat: -20.8028571952485, lng: -41.155558382196901},
    {id: 36, name: "Coqueiro", location: "Margem esquerda da Estrada de Saída do Campus", lat: -20.802765609615001, lng: -41.155496253204802},
    {id: 37, name: "Coqueiro", location: "Margem esquerda da Estrada de Saída do Campus", lat: -20.802675140823499, lng: -41.155456825190498},
    {id: 38, name: "Coqueiro", location: "Margem esquerda da Estrada de Saída do Campus", lat: -20.802956259368401, lng: -41.1555985091384},
    {id: 39, name: "Coqueiro", location: "Margem esquerda da Estrada de Saída do Campus", lat: -20.803162133598001, lng: -41.155685181035103},
    {id: 40, name: "Caramboleira", location: "Margem esquerda da Estrada de Saída do Campus", lat: -20.803029311545799, lng: -41.155737752513097},
    {id: 41, name: "Mangueira", location: "Margem esquerda da Estrada de Saída do Campus", lat: -20.802811698157001, lng: -41.155871682525301},
    {id: 42, name: "Mangueira", location: "Margem esquerda da Estrada de Saída do Campus", lat: -20.8027798912943, lng: -41.155750214470899},
    {id: 43, name: "Mangueira", location: "Margem esquerda da Estrada de Saída do Campus", lat: -20.8027498801716, lng: -41.155829629704698},
    {id: 44, name: "Abacateiro", location: "Margem esquerda da Estrada de Saída do Campus", lat: -20.802804516959998, lng: -41.155662428424499},
    {id: 45, name: "Abacateiro", location: "Margem esquerda da Estrada de Saída do Campus", lat: -20.802677007489699, lng: -41.155619802901299},
    {id: 46, name: "Abacateiro", location: "Margem esquerda da Estrada de Saída do Campus", lat: -20.802966560088599, lng: -41.155707895649698},
    {id: 47, name: "Coqueiro", location: "Margem direita da Estrada de Saída do Campus", lat: -20.802617237389001, lng: -41.1552645902091},
    {id: 48, name: "Coqueiro", location: "Margem direita da Estrada de Saída do Campus", lat: -20.802669038144, lng: -41.155268852761402},
    {id: 49, name: "Coqueiro", location: "Margem direita da Estrada de Saída do Campus", lat: -20.802714197762601, lng: -41.155278798716701},
    {id: 50, name: "Coqueiro", location: "Margem direita da Estrada de Saída do Campus", lat: -20.802755372696499, lng: -41.155291586373501},
    {id: 51, name: "Coqueiro", location: "Margem direita da Estrada de Saída do Campus", lat: -20.802730136448002, lng: -41.155233331492497},
    {id: 52, name: "Coqueiro", location: "Margem direita da Estrada de Saída do Campus", lat: -20.802704900195302, lng: -41.155187864268399},
    {id: 53, name: "Coqueiro", location: "Margem direita da Estrada de Saída do Campus", lat: -20.802336981707001, lng: -41.1552802195677},
    {id: 54, name: "Coqueiro", location: "Margem direita da Estrada de Saída do Campus", lat: -20.802266585650301, lng: -41.155310057433603},
    {id: 55, name: "Coqueiro", location: "Margem direita da Estrada de Saída do Campus", lat: -20.802185999999999, lng: -41.155327999999997},
    {id: 56, name: "Coqueiro", location: "Margem direita da Estrada de Saída do Campus", lat: -20.802201502474301, lng: -41.155344157851701},
    {id: 57, name: "Mangueira", location: "Lado esquerdo do Estacionamento", lat: -20.802629191408201, lng: -41.155153763849697},
    {id: 58, name: "Goiabeira", location: "Atrás do Bloco Administrativo", lat: -20.802880225651801, lng: -41.155040095787797},
    {id: 59, name: "Mangueira", location: "Atrás do Bloco 6", lat: -20.802856317644999, lng: -41.155041516637802},
    {id: 60, name: "Mangueira", location: "Atrás do Bloco 6", lat: -20.802634898089199, lng: -41.154855192086799},
    {id: 61, name: "Coqueiro", location: "Entre o Bloco Administrativo e o Bloco 2", lat: -20.802881183007798, lng: -41.154954858384897},
    {id: 62, name: "Coqueiro", location: "Atrás do Bloco 2 e do Bloco 4", lat: -20.802851171906099, lng: -41.154931202783303},
    {id: 63, name: "Coqueiro", location: "Atrás do Bloco 4", lat: -20.802821160798501, lng: -41.154909236867503},
    {id: 64, name: "Coqueiro", location: "Atrás do Bloco 4", lat: -20.802823091994998, lng: -41.154908981192698},
    {id: 65, name: "Coqueiro", location: "Atrás do Bloco 4", lat: -20.802771475546599, lng: -41.154878612350203},
    {id: 66, name: "Coqueiro", location: "Atrás do Bloco 4", lat: -20.802739215257098, lng: -41.154860667125597},
    {id: 67, name: "Coqueiro", location: "Atrás do Bloco 4", lat: -20.802737924845399, lng: -41.154855145517999},
    {id: 68, name: "Coqueiro", location: "Atrás do Bloco 4 e Bloco 6", lat: -20.802727601549901, lng: -41.154857906321197},
    {id: 69, name: "Coqueiro", location: "Atrás do Bloco 4 e Bloco 6", lat: -20.8026759850685, lng: -41.154827537479598},
    {id: 70, name: "Coqueiro", location: "Atrás do Bloco 4 e Bloco 6", lat: -20.802646305584201, lng: -41.154802690245297},
    {id: 71, name: "Coqueiro", location: "Atrás do Bloco 6", lat: -20.802631343762201, lng: -41.154789184654497},
    {id: 72, name: "Coqueiro", location: "Atrás do Bloco 6", lat: -20.8026060233903, lng: -41.1547703064412},
    {id: 73, name: "Coqueiro", location: "Atrás do Bloco 6", lat: -20.802588375855098, lng: -41.154760456938703},
    {id: 74, name: "Coqueiro", location: "Atrás do Bloco 6", lat: -20.802555382632399, lng: -41.154740757933503},
    {id: 75, name: "Coqueiro", location: "Atrás do Bloco 6", lat: -20.8025400369438, lng: -41.154724342095399},
    {id: 76, name: "Coqueiro", location: "Atrás do Bloco 8", lat: -20.802447000000001, lng: -41.154674999999997},
    {id: 77, name: "Coqueiro", location: "Atrás do Bloco 8", lat: -20.802436453512801, lng: -41.154665245078903},
    {id: 78, name: "Coqueiro", location: "Atrás do Bloco 8", lat: -20.802409598537398, lng: -41.154640621322599},
    {id: 79, name: "Coqueiro", location: "Atrás do Bloco 8", lat: -20.802378907131398, lng: -41.154620101525502},
    {id: 80, name: "Coqueiro", location: "Atrás do Bloco 10", lat: -20.802268418016801, lng: -41.154554438174301},
    {id: 81, name: "Coqueiro", location: "Atrás do Bloco 10", lat: -20.8022024314254, lng: -41.154510936204602},
    {id: 82, name: "Coqueirinho", location: "Entre o Bloco 10 e a Quadra", lat: -20.802213999999999, lng: -41.154381000000001},
    {id: 83, name: "Jambeira", location: "Entre o Bloco 8 e o Bloco 10", lat: -20.802389000000002, lng: -41.154383000000003},
    {id: 84, name: "Jambeira", location: "Entre o Bloco 9 e o Bloco 7", lat: -20.802560726497301, lng: -41.1541042849448},
    {id: 85, name: "Jambeira", location: "Entre o Bloco 9 e o Bloco 7", lat: -20.802556855257599, lng: -41.1542478467425},
    {id: 86, name: "Coqueiro", location: "Entre o Bloco 9 e o Bloco 7", lat: -20.802560726497301, lng: -41.154185728656998},
    {id: 87, name: "Coqueiro", location: "Entre o Bloco 9 e o Bloco 7", lat: -20.8025620169105, lng: -41.1541595010208},
    {id: 88, name: "Jambeira", location: "Entre o Bloco 7 e o Bloco 5", lat: -20.802729770537301, lng: -41.154359659298002},
    {id: 89, name: "Jambeira", location: "Entre o Bloco 6 e o Bloco 4", lat: -20.802706543122699, lng: -41.154719944197701},
    {id: 90, name: "Coqueiro", location: "Entre o Bloco 2 e a Passagem", lat: -20.803071729273402, lng: -41.1547682582653},
    {id: 91, name: "Coqueiro", location: "Entre o Bloco 2 e a Passagem", lat: -20.8030614060022, lng: -41.1548607451927},
    {id: 92, name: "Coqueirinho", location: "Entre o Bloco 3 e o Bloco 1", lat: -20.803075077576601, lng: -41.154608964326698},
    {id: 93, name: "Goiabeira", location: "Margem direita da Entrada do CETEM", lat: -20.802449874142901, lng: -41.153920056851099},
    {id: 94, name: "Goiabeira", location: "Margem direita da Entrada do CETEM", lat: -20.802540489355, lng: -41.153966488103102},
    {id: 95, name: "Goiabeira", location: "Margem direita da Entrada do CETEM", lat: -20.802608011385601, lng: -41.154008460040103},
    {id: 96, name: "Goiabeira", location: "Margem direita da Entrada do CETEM", lat: -20.802721156341899, lng: -41.154085571272802},
    {id: 97, name: "Limoeiro", location: "Margem direita da Entrada do CETEM", lat: -20.802627173037301, lng: -41.153988938209203},
    {id: 98, name: "Limoeiro", location: "Margem direita da Entrada do CETEM", lat: -20.802682833060199, lng: -41.154054336343101},
    {id: 99, name: "Mangueira", location: "Margem direita da Entrada do CETEM", lat: -20.802761304532002, lng: -41.154047503702301},
    {id: 100, name: "Goiabeira", location: "Margem direita da Entrada do CETEM", lat: -20.802816052047501, lng: -41.154087523456901},
    {id: 101, name: "Limoeiro", location: "Margem direita da Entrada do CETEM", lat: -20.802777586708, lng: -41.154075074098401},
    {id: 102, name: "Limoeiro", location: "Margem direita da Entrada do CETEM", lat: -20.8027920039805, lng: -41.154098543427999},
    {id: 103, name: "Limoeiro", location: "Margem direita da Entrada do CETEM", lat: -20.802824599546401, lng: -41.154112625025597},
    {id: 104, name: "Limoeiro", location: "Margem direita da Entrada do CETEM", lat: -20.802692359619599, lng: -41.154046238581699},
    {id: 105, name: "Limoeiro", location: "Margem direita da Entrada do CETEM", lat: -20.802856591165199, lng: -41.154120669884897},
    {id: 106, name: "Aceroleira", location: "Margem direita da Entrada do CETEM", lat: -20.803174966258101, lng: -41.154339267310398},
    {id: 107, name: "Aceroleira", location: "Em frente ao Galpão de Mineração", lat: -20.803021051695801, lng: -41.154004331496701},
    {id: 108, name: "Bananeira", location: "Morro do Campo", lat: -20.802960961721801, lng: -41.154067484376597},
    {id: 109, name: "Bananeira", location: "Morro do Campo", lat: -20.802945148567002, lng: -41.154023502906298},
    {id: 110, name: "Bananeira", location: "Morro do Campo", lat: -20.802932498042001, lng: -41.154056207076501},
    {id: 111, name: "Bananeira", location: "Morro do Campo", lat: -20.802962015932, lng: -41.154071995296697},
    {id: 112, name: "Bananeira", location: "Morro do Campo", lat: -20.802919847516002, lng: -41.1540742507567},
    {id: 113, name: "Mangueira", location: "Margem direita da Entrada do CETEM", lat: -20.803183300000001, lng: -41.154350000000001},
    {id: 114, name: "Mangueira", location: "Margem direita da Entrada do CETEM", lat: -20.803243999999999, lng: -41.154353}
];

// Gallery Images
const galleryImages = [
    {url: "https://images.unsplash.com/photo-1709443021072-43b43a77a45e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZydWl0JTIwdHJlZXMlMjBuYXR1cmV8ZW58MHx8fHwxNzczODQyODcwfDA&ixlib=rb-4.1.0&q=85", title: "Árvores Frutíferas do Campus"},
    {url: "https://images.unsplash.com/photo-1717819984372-bc69ed2ef6a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHw0fHx0cm9waWNhbCUyMGZydWl0JTIwdHJlZXMlMjBuYXR1cmV8ZW58MHx8fHwxNzczODQyODcwfDA&ixlib=rb-4.1.0&q=85", title: "Laranja em Árvore"},
    {url: "https://images.unsplash.com/photo-1717819984019-6122b5e9fa3c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwzfHx0cm9waWNhbCUyMGZydWl0JTIwdHJlZXMlMjBuYXR1cmV8ZW58MHx8fHwxNzczODQyODcwfDA&ixlib=rb-4.1.0&q=85", title: "Frutas Cítricas"},
    {url: "https://images.unsplash.com/photo-1573733615141-31ce14806f8e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwyfHx0cm9waWNhbCUyMGZydWl0JTIwdHJlZXMlMjBuYXR1cmV8ZW58MHx8fHwxNzczODQyODcwfDA&ixlib=rb-4.1.0&q=85", title: "Natureza Verde"}
];

// Table functionality
let currentPage = 1;
const rowsPerPage = 10;
let filteredData = [...treeData];
let sortColumn = -1;
let sortAscending = true;

function renderTable() {
    const tableBody = document.getElementById('tableBody');
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = filteredData.slice(start, end);

    tableBody.innerHTML = pageData.map(tree => `
        <tr>
            <td>${tree.id}</td>
            <td><strong>${tree.name}</strong></td>
            <td>${tree.location}</td>
            <td>${tree.lat.toFixed(6)}</td>
            <td>${tree.lng.toFixed(6)}</td>
        </tr>
    `).join('');

    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    document.getElementById('pageInfo').textContent = `Página ${currentPage} de ${totalPages}`;
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages;
}

function changePage(direction) {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    currentPage = Math.max(1, Math.min(currentPage + direction, totalPages));
    renderTable();
}

function sortTable(column) {
    if (sortColumn === column) {
        sortAscending = !sortAscending;
    } else {
        sortColumn = column;
        sortAscending = true;
    }

    filteredData.sort((a, b) => {
        let valA, valB;
        switch(column) {
            case 0: valA = a.id; valB = b.id; break;
            case 1: valA = a.name; valB = b.name; break;
            case 2: valA = a.location; valB = b.location; break;
            case 3: valA = a.lat; valB = b.lat; break;
            case 4: valA = a.lng; valB = b.lng; break;
        }

        if (typeof valA === 'string') {
            return sortAscending ? valA.localeCompare(valB) : valB.localeCompare(valA);
        }
        return sortAscending ? valA - valB : valB - valA;
    });

    currentPage = 1;
    renderTable();
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filteredData = treeData.filter(tree => 
        tree.name.toLowerCase().includes(searchTerm) ||
        tree.location.toLowerCase().includes(searchTerm)
    );
    currentPage = 1;
    renderTable();
});

// Count species
function countSpecies() {
    const counts = {};
    treeData.forEach(tree => {
        counts[tree.name] = (counts[tree.name] || 0) + 1;
    });
    return counts;
}

// Initialize Charts
function initCharts() {
    const speciesCounts = countSpecies();
    const labels = Object.keys(speciesCounts);
    const data = Object.values(speciesCounts);

    // Pie Chart
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    '#2d6a4f', '#52b788', '#74c69d', '#95d5b2', '#b7e4c7',
                    '#d8f3dc', '#1b4332', '#40916c', '#6a994e', '#a7c957',
                    '#bc4749', '#f2cc8f', '#81b29a', '#e07a5f', '#3d5a80', '#98c1d9'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: { size: 12 }
                    }
                }
            }
        }
    });

    // Bar Chart
    const barCtx = document.getElementById('barChart').getContext('2d');
    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Quantidade',
                data: data,
                backgroundColor: '#52b788',
                borderColor: '#2d6a4f',
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize: 5 }
                },
                x: {
                    ticks: {
                        font: { size: 11 }
                    }
                }
            }
        }
    });
}

// Initialize Map
function initMap() {
    const centerLat = treeData.reduce((sum, tree) => sum + tree.lat, 0) / treeData.length;
    const centerLng = treeData.reduce((sum, tree) => sum + tree.lng, 0) / treeData.length;

    const map = L.map('map').setView([centerLat, centerLng], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Create custom icons for different species
    const iconColors = {
        'Coqueiro': '#2d6a4f',
        'Mangueira': '#52b788',
        'Bananeira': '#f2cc8f',
        'Limoeiro': '#e07a5f',
        'Goiabeira': '#81b29a',
        'default': '#74c69d'
    };

    treeData.forEach(tree => {
        const color = iconColors[tree.name] || iconColors.default;
        
        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });

        L.marker([tree.lat, tree.lng], { icon: customIcon })
            .bindPopup(`
                <div class="popup-content">
                    <h4>${tree.name}</h4>
                    <p><strong>ID:</strong> ${tree.id}</p>
                    <p><strong>Local:</strong> ${tree.location}</p>
                    <p><strong>Coordenadas:</strong><br>${tree.lat.toFixed(6)}, ${tree.lng.toFixed(6)}</p>
                </div>
            `)
            .addTo(map);
    });
}

// Initialize Gallery
function initGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = galleryImages.map((img, index) => `
        <div class="gallery-item" onclick="openModal('${img.url}')">
            <img src="${img.url}" alt="${img.title}">
            <div class="gallery-overlay">
                <h4>${img.title}</h4>
            </div>
        </div>
    `).join('');
}

// Modal functions
function openModal(imgUrl) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = imgUrl;
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Close modal on click outside
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Initialize everything on load
window.addEventListener('DOMContentLoaded', () => {
    renderTable();
    initCharts();
    initMap();
    initGallery();
});
