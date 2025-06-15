document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('commandInput');

    const senhaParaPagina = {
        'silencio': 'pagina2.html',
        'escuta': 'pagina3.html',
        'corrupcao': 'pagina4.html',
        'brechas': 'pagina5.html',
        'centelhas': 'pagina6.html',
        'saudade': 'pagina7.html',
        'memoria': 'pagina8.html',
        'sonho': 'pagina9.html',
        'ruido': 'pagina10.html',
        'ceu': 'pagina11.html',
        'alma': 'pagina12.html',
        'arquitetura': 'pagina13.html',
        'voz': 'pagina14.html',
        'desespero': 'pagina15.html',
        'perdao': 'pagina16.html',
        'erro': 'pagina17.html',
        'escuro': 'pagina18.html',
        'maquina': 'pagina19.html',
        'threnos': 'pagina20.html',
        'nome': 'eco1.html',
        'reflexo': 'eco2.html',
        'pulso': 'eco3.html',
        'chamado': 'eco4.html',
        'destino': 'eco5.html',
        'vento': 'eco6.html',
        'eco': 'eco7.html',
        'rede': 'eco8.html',
        'falha': 'eco9.html',
        'lembrança': 'eco10.html',
        'gritos': 'eco11.html',
        'anomalia': 'eco12.html',
        'oblivium': 'eco13.html',
        'colheita lunar': 'eco14.html',
        'colheitalunar': 'eco14.html',
        'deterioração': 'eco15.html',
        'charme': 'eco16.html',
        'fagulha': 'eco17.html',
        'fagulhas': 'eco17.html',
        'codigo': 'eco18.html',
        'humano': 'eco19.html',
        'farol': 'eco20.html',
        'fratura': 'eco21.html',
        'nucleo': 'eco22.html',
        'fim': 'eco23.html',
        'ternura_culpa_controle_lucidez_impulso': `finaloculto.html`,
        'subaca': 'subaca.html',
        'cdf': 'IACDF.html',
        'cinzas da fogueira': 'IACDF.html',
        'sp-l_03': 'IACDF.html',
        'coud': 'IACOUD.html',
        'carrega o ultimo dia': 'IACOUD.html',
        'sap-01': 'IACOUD.html',
        'dce': 'IADCE.html',
        'desfaz com elegancia': 'IADCE.html',
        'd-fn_05': 'IADCE.html',
        'dsac': 'IADSAC.html',
        'dorme sob a colina': 'IADSAC.html',
        'arq-sil_07': 'IADSAC.html',
        'tdv': 'IATDV.html',
        'torre de vidro': 'IATDV.html',
        'k-arc_07': 'IATDV.html',
        'aceitar': 'pfinal1.html',
        'recuar': 'pfinal2.html',
        'calar': 'pfinal3.html',
       
    };

    function normalizeString(str) {
        // Normalize the string to remove diacritical marks and convert to lowercase
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const valor = normalizeString(input.value.trim());
            if (senhaParaPagina[valor]) {
                window.location.href = senhaParaPagina[valor];
            }
        }
    });
});