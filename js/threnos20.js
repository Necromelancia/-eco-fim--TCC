document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('commandInput');

    const senhaParaPagina = {
        'silencio': 'QJXNWTR.html', //pagina2
        'escuta': 'ALPZKHE.html', //pagina3
        'corrupcao': 'BMQCYUV.html', //pagina4
        'brechas': 'TNRJXWO.html', //pagina5
        'brecha': 'TNRJXWO.html', //pagina5
        'centelhas': 'DZEHKLM.html', //pagina6
        'centelha': 'DZEHKLM.html', //pagina6
        'saudade': 'VYCPXAG.html', //pagina7
        'memoria': 'RMZTQWD.html', //pagina8
        'sonho': 'KJULEHN.html', //pagina9
        'sonhos': 'KJULEHN.html', //pagina9
        'ruido': 'WHYBZXR.html', //pagina10
        'ceu': 'XOPQKJD.html', //pagina11
        'alma': 'LZEGRNM.html', //pagina12
        'arquitetura': 'PYTVCBW.html', //pagina13
        'voz': 'SDUJXPA.html', //pagina14
        'desespero': 'MJQWERT.html', //pagina15
        'perdao': 'HKXPOAZ.html', //pagina16
        'erro': 'NRLCEYV.html', //pagina17
        'escuro': 'ZJUKWHB.html', //pagina18
        'maquina': 'EOYVBQT.html', //pagina19
        'threnos': 'UCMRZLX.html', //pagina20
        'nome': 'BXJAKWP.html', //eco1
        'reflexo': 'TGZYKHD.html', //eco2
        'pulso': 'JNQMRTS.html', //eco3
        'chamado': 'WPHECZL.html', //eco4
        'destino': 'VBLUOJM.html', //eco5
        'vento': 'CZXQUYA.html', //eco6
        'eco': 'FKHLPQW.html', //eco7
        'rede': 'OYNDJTE.html', //eco8
        'falha': 'QZEUKRH.html', //eco9
        'lembranca': 'LMPBXCV.html', //eco10
        'gritos': 'RWTKJOZ.html', //eco11
        'grito': 'RWTKJOZ.html', //eco11
        'anomalia': 'AZKPLNY.html', //eco12
        'oblivium': 'YCWVMTE.html', //eco13
        'colheita lunar': 'HBZKXJL.html', //eco14
        'colheitalunar': 'HBZKXJL.html', //eco14
        'deterioracao': 'UJWXOVB.html', //eco15
        'charme': 'OYQZMBR.html', //eco16
        'fagulha': 'TLEJXNF.html', //eco17
        'fagulhas': 'TLEJXNF.html', //eco17
        'codigo': 'MGHKRCP.html', //eco18
        'humano': 'JQAZXWE.html', //eco19
        'farol': 'VCTMBKL.html', //eco20
        'fratura': 'KRNLYUJ.html', //eco21
        'nucleo': 'PQZHXND.html', //eco22
        'fim': 'WUXPLRT.html', //eco23
        '/ternura_culpa_controle_lucidez_impulso': `DQELTYC.html`, //finaloculto
        'subaca': 'subaca.html', //subaca
        'cdf': 'IACDFYKZUJPH.html', //CDF
        'cinzas da fogueira': 'IACDFYKZUJPH.html', //CDF
        'sp-l_03': 'IACDFYKZUJPH.html', //CDF
        'coud': 'IACOUDRCPVXWO.html', //COUD
        'carrega o ultimo dia': 'IACOUDRCPVXWO.html', //COUD
        'sap-01': 'IACOUDRCPVXWO.html', //COUD
        'dce': 'IADCEZXYUNBQ.html', //DCE
        'desfaz com elegancia': 'IADCEZXYUNBQ.html', //DCE
        'd-fn_05': 'IADCEZXYUNBQ.html', //DCE
        'dsac': 'IADSACLJCWTPA.html', //DSAC
        'dorme sob a colina': 'IADSACLJCWTPA.html', //DSAC
        'arq-sil_07': 'IADSACLJCWTPA.html', //DSAC
        'tdv': 'IATDVEXNRKMV.html', //TDV
        'torre de vidro': 'IATDVEXNRKMV.html', //TDV
        'k-arc_07': 'IATDVEXNRKMV.html', //TDV
        'info': 'info.html', //info
        'aceitar': 'JQWPTZY.html', //final1
        'recuar': 'UDYCBLH.html', //final2
        'calar': 'OXFKRJN.html', //final3
       
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
