const streamers = [
    {
        id: 'YleQR3NYttidUnCyapiOrjWXTClNbIneRv7ZwX4quSlgS-wPNtSQ15QYtw',
        accountId: 'hT6u3D3X4YT0R_kIFhe8sOJbdph1JtcbfQ4SzUTBYb_V8efW2ElaViUw',
        puuid: 'PaCZfA_89BvzTym9M3x2Hq3bXqpYVPVMSGmpqLKl-TqC8aR3k0w_S4BxlkYq74wPH0vI8y0IOYX4Cg',
        name: 'KOI PacoSanz',
        twitter: 'nissaxter',
        twitch: 'nissaxter',
        elo: 'low'
    },
    {
        id: 'SQnGgynIcqCKfaQcpoiAd6unZUHOwU48HKI5P34_Eh5Z_Bwc8jUWrVSuAA',
        accountId: 'wDSFTF1JJ6hIglbP1MWuyq9TmfdSTkuhOS32BqzMuwLiv0UpF9EQzd26',
        puuid: '1rkuBEhOX2dr6SVnomq3pHywqaN3kS1iLRKCmf_DIgkce612AhhzJqcMaUO2o3GkmFQm-vpzewrokg',
        name: 'Ladguillos69',
        twitter: 'ElOjoNinja',
        twitch: 'ElOjoNinja',
        elo: 'high'
    },
    {
        id: 'n5JU63hgyB4k3V12pYcr9eyw7Ll6x1gbCShnfEZtMnL7ouoGJ7BWlaxihw',
        accountId: '2NjEJX5Mamya775JOvgDMG6pUMfibVpYvH0bkcNF2Sx4A5VmxgIhhpLB',
        puuid: '_lA86MuWsZKXfsgQ9Vc4XqAO7hTjaOIW_BwauD-GS3N2V7uG5djiWwQy9SkD-vyYXAAodApTFCavSA',
        name: 'KOI ÄITANA',
        twitter: 'Koldo_LoL',
        twitch: 'koldo_lol',
        elo: 'high'
    },
    {
        id: 'EZ7KGrVeXJ9BUUsZT8sSI5aiDIumvFQHNsps30EOz1HCYawiOBF1C8SbBQ',
        accountId: 'xIBnxgleT3F12G7Kip_Ge-0gA_pfO3c69P3MmU1c4OIZn1EPCmfVavDi',
        puuid: 'ibSxy-oWXCfUShkY6haUjsyJC59MUKTH0KMHBFUnWvYb5FEMNGCc_7Xf4pQmxXZeg8lvLmzhKkUQ5Q',
        name: 'CALVONETA',
        twitter: 'FolagoR',
        twitch: 'folagorlives',
        elo: 'low'
    },
    {
        id: 'WodTbi9xdGe9he6AtUSOYsKy8PRnMPcOSUbAShvX8rq5vYGNcK_agkrF8w',
        accountId: '_U_y-wtD_p_DLGwOTrBpJky4_xP81HOEknpcTlrM0bQWCPbb5F3BLkSU',
        puuid: 'kMfs3GwkK891QrAPwsUdm8JYbIqqIraPlniFxUJj8z0veFnLY8rBXakODCjq6zvMabNq2sFji3Nqcg',
        name: 'egirls above all',
        twitter: 'skain24',
        twitch: 'skain',
        elo: 'high'
    },
    {
        id: 'It-wi2LEsmoocq_QoCweeIr6Pp-EYENTy_FmsDkYVTmiZNFP0VUSW0nQgA',
        accountId: 't9GMOE0w-JX4ny6jiAZjNfAOfPDIbVKhcD2atBRlOpGH4JqZsxGJMNjn',
        puuid: 'td8PfSWeM-lAJs-M89Se5883GTAjF5_X2Pgq7fog4xwpDSWEB83U4eD9gZDrrCvYNQBvr5lY_KkOfQ',
        name: 'Amouranth Sister',
        twitter: 'Zeling',
        twitch: 'zeling',
        elo: 'low'
    },
    {
        id: 'VizjZUj3oAEcVrzdvi_uNzrXetIgpNX3p_SLMfl3x6TrHL2ZAaD9a_3YCQ',
        accountId: 'KVi0v15dwJgFKZ-nb09LNjsmAw8zLhTMW4qj3BPszP_jNpP_POfrIJAR',
        puuid: 'vrXzJ4fivQMlpkdccLIhMAwYAsdJ7IS9wtoK7SjsvmPgJd2QsejB1aSqd9L8HA2tjoAEJxI2rF6XXw',
        name: 'gg fructis',
        twitter: 'Elyoya_LoL',
        twitch: 'elyoyalol',
        elo: 'high'
    },
    {
        id: 'cIwLr8O3Ke6F8fhNYLXvvynf2twcpAgfAIBZkZeArfiGDIzvB2NUOCUsfA',
        accountId: '7PN7xeF4ao4HYOyE_BaYPKnpkxHHWTAEHAncsjKm0CB2l_ocmfBu2VOE',
        puuid: 'sDYTD-fnLNJv26OZNvpnJLaBvnrq65n_cmx6plAXISzAfIqz1ww_4WmJd5v_0qmWpLCGhoFEobSvIQ',
        name: 'Goku que',
        twitter: 'missPolaroid',
        twitch: 'misspolaroid',
        elo: 'high'
    },
    {
        id: 'SCYGQM0S1hrJCNldxPZTa7IMrjBRPZNOykPbdNukpz4K4US7E6KlBt905w',
        accountId: 's5uGHcWLWrvkFlH8mElZ-pggbzG1GNxsjKU9j79GyeghPlVC21nuBLej',
        puuid: 'D-aKOwVRhI72sHsT9mVbPSMmyOMg7vrc52TCs6mMHl3K5InBsViWNIvIkecK8ywIaE8gkFiKDI88gg',
        name: 'EviIpain',
        twitter: 'KNekro',
        twitch: 'knekro',
        elo: 'low'
    },
    {
        id: 'vgW2C9O8_Ibsw7F14Q1A2mBva0z3t2cipn5I5_LsoiisvGwoHiTSEqpajQ',
        accountId: 'a6AOC0f66orEwjF5rf3rTSKWYo15rU5grXLjUnbK1Y5rkKOlx8lRj8QA',
        puuid: '3D_m7jzJZuoBAG-Pq33QsEm5DJHlddthUrogebmjlnUIGPGIgvS71UbTZfATNLejcf-zZ71-mscUXA',
        name: 'Berri Vuelve Xfa',
        twitter: 'Carritoskami',
        twitch: 'kxmi',
        elo: 'high'
    },
    {
        id: 'D4SNXIz62ZURAgaFFNWt5YQn9SXey1o-1d-Dof1eclxq-c-dg7TvHWX0wg',
        accountId: 'q4unMYLL1zSTD9SeY7X0XGp0qfVkY-aHPkCk6zqvv3Mu3LR-1Ae3Xnb4',
        puuid: 'hQjOS5AyfZmdhCaCUapq9UPQOxsk-JnP0KgsNBt2PlQRp0JGhvxdy-Hvk-11QGTaL039U-QtV5ioXQ',
        name: 'ESINJUSTO',
        twitter: 'CooLifeGame',
        twitch: 'coolifegame',
        elo: 'low'
    },
    {
        id: '8_EAp6GK4WwwlAWY35DohMvzxxgLWAmMW_CORPtpDgvfFirN5cyPtJhwRw',
        accountId: 'r4-BM6TguTaw97W8IUGUI7X2UUhUTDuf0IUoP4V_nR8Pwz4vkn7ap502',
        puuid: 'S3JBxc7myaeDEJx1kPm_OoxjNeqmUPvmUsHDQMCoZAZEjtMK0qU4WvXFK1nDvYIMxuzFYxyguTEJIA',
        name: 'Laccek',
        twitter: 'SilerLol',
        twitch: 'silerr8',
        elo: 'high'
    },
    {
        id: 'dqR5Obz_Pb4hQiL5VjIWXwYyXWhR3cyv1Pk1iNCjle5S30d7pzjJmAqxNA',
        accountId: 'KTnBByCX8FtSqx7_FGysOiltnOxdcgjyiBkP-2hntUUtK_VthFxFMlB8',
        puuid: 'JJ6AvRWoLY8MB7TYFY5T8OkdslJ91XWTKwJgO69KupOXB2wQmCDoBM1yzW7TmzQN4kXKO00TTYnDIw',
        name: 'XAM PING',
        twitter: 'Champi_14',
        twitch: 'champi14',
        elo: 'low'
    },
    {
        id: 'UCcKh_xrbFBSCdRBYSG5rnhnpgIPzmAntNsbCWptYYqOO1kwX51hMnfcNg',
        accountId: 'iMIRTQL7VWlXezXnyyPDzWCyQvkwtvna9NCOdYdrmBHbg7J5ZdcVLYXE',
        puuid: '5afotxlHFdKzXq8ll5XMQhrdAb6Q3nhIq7Z79dZ8Q2nKlwD7CYsxBo0BSQCdJWFe6RINwmLOJpKpXQ',
        name: 'IreliaCosplayer',
        twitter: 'werlyb',
        twitch: 'werlyb',
        elo: 'high'
    },
    {
        id: 'VgY1kTqOvjvh2T6DwUF3nr8C-2_9hI_lQyzN5Rt7o6m94QZN3EttNGuSFg',
        accountId: 'nxF-x1QivIMGMOZHcD65O1YhlvubC-thUXdB3ycVsp2qiEPz5hi2QKWH',
        puuid: 'INyRnyFG4ILEuzrAPEw2P9kXxfCKgCaAsqd_zwlT1vtbecDIgBD-Qt2EVx1MwovK1Gq0unCnqu8wUQ',
        name: 'Barriga Humana',
        twitter: 'AdcShiiro',
        twitch: 'adcshiiro',
        elo: 'high'
    },
    {
        id: '-F6XzH-ygGc3g0sDNYZMmp2OBSJFRO3t5jiLV2g6gIzMB03mvPACrnVLUA',
        accountId: 'H0pnFvOuPAO1BY-vE6_J0-HdjkFwVKLKxqZMiagmXJUir8ZQab755SBg',
        puuid: 'bZv62B9N4z4tJg18SkeWJY1PlVQXPoL4Wa2UkrT8rrdi7QSGL_594rfCD1wNgd7FPkngSnUYxsIuBw',
        name: 'MOTONAMl',
        twitter: 'carmensandwich',
        twitch: 'carmensandwich',
        elo: 'high'
    },
    {
        id: 'sLBos06aoo6jA77e2R0ZQ_i-dUgC0SdydgxJrSU1Ff4aeW_zYNL9rXW8Lg',
        accountId: '9n_M0lGwXqmYfx7ppiqLKOUz2k59mguq3XSzDhK6cQ9Z89g3EyZjeF1q',
        puuid: 'Z2lElC4ue_EmKGzT76Lj6Nuomo6yFMDPyrI8E4Tbyr6JIbk9oz9ly2FYwwaLpKSOIVVNsz44IYHIfg',
        name: 'Monje Shacolínn',
        twitter: 'PochiPoom',
        twitch: 'pochipoom',
        elo: 'high'
    },
    {
        id: 'fBnXEKylx7hedKP9IM14eaWk5zvbSKRRmdjVnLNJR6fsTCggUwa5AlIRNA',
        accountId: 'gMgIfUkY0JYMUFyNadbQLuRXPsYmiFBTbRSXDk0z40qiJmGmjWdFQlkW',
        puuid: 'tO75u9BhYxjgpjdfYO-6qF-vD7IxoGqipHLMTp9KDJUm7N5ToD0HbZSLvtj82TJqpYIr0INVTHlgiw',
        name: 'YoGaneAMoscow5',
        twitter: 'Barbesito',
        twitch: 'ernesbarbeq',
        elo: 'low'
    },
    {
        id: 'JwPKGvCwBgc4hDUVCWRMiVvqLNFgqk7wzYjyfUT2VhvV8S2qvO_0_fX7jQ',
        accountId: 'MJ1MtQlolE125YKPl_J2fMKT6Ip9n1_MChebaGXaI3P7kT2m6bsWp9xB',
        puuid: 'UpCIwGRAFbQP7BVlbAiIc1cOkat4i9EsH7Ujb93OWOHL4-RJKiIpJcZPQ5CDTbXedEbiR81ho2UiRw',
        name: 'no tiene sendito',
        twitter: 'Send0o',
        twitch: 'send0o',
        elo: 'high'
    },
    {
        id: 'dwjuNM7aZlyU6xpc0rsa_YBb1SBrUEpN-_OQGfCRYwT1j9vdKw-QKZLBBA',
        accountId: 'esZXoTlZwo6qIbs2IMiNUt-O5XSux3KVwrIk7Echs_OU4Md_10A_5f4L',
        puuid: 'jEWrE9EcfGweoqP8giF-H2V4Q1td9Akmi5en73UHcC2g4K19RV8BF6yrD8zR5bOhTtPG6S5gx7MoUQ',
        name: 'KOI TheGrefg',
        twitter: 'Rafitta_tt',
        twitch: 'rafitta_lol',
        elo: 'high'
    },
    {
        id: 'T44Ie1w5qore9RgLQXHmzH9zze5I87gq_ds8zETV3iRAR6RrHG5Ve3zy9Q',
        accountId: 'AKGqZYwATRGCxTKu6o6fcUWILZ7_QkXmQTNq4VUWBeBme5ctv3eIYGDQ',
        puuid: 'bBuhks5Mh3AXqSZJpYcTo0_Xo-pKPvsswucgTQxOq1TsaT3ydxOqq1Ja36f71Hu_m2jsyqSPJW3L3w',
        name: 'xXTronchamuIasXx',
        twitter: 'inyustificado',
        twitch: 'el_yuste',
        elo: 'low'
    },
    {
        id: '7QDct_bsuxsyCaQOHv-VQuJx9mxF4UkZtFVCqTC65qhnaoW0TtZkf7zSiA',
        accountId: '03sjoFICCnk7DyHGwUeKhNWomtDyLP6_cmBXgdYt3VTXmrynPesnBxg6',
        puuid: 'gw4-d-ZrbLO0pGHRanKATnbrkYyzgdnrdGLI_61etOtsEXJZdAcoIgjpi_DYn4vUqsMLZKlx0Sw-zA',
        name: 'elmi uwu69',
        twitter: 'willyrex_fanboy',
        twitch: 'willyrex_fanboy',
        elo: 'high'
    },
    {
        id: 'VCcJOuX4tz1h4Wvt-fwqulJ7aItEkkfD4XJrHRVTnKTrTL-tAVorl23Mnw',
        accountId: 'b7LPfQIgM9HmNZ9jDSzRSrnBP_kuVL52ZLSe49Kv3u57vdOpdy-HXU4N',
        puuid: 'Ul8bMxMVTAy112yjly4TeauPEcpJpe9GVcHbtBD3lQj0O9HCo--0puZ6Jgz261CAQIU1pHI-XHA-7w',
        name: 'FRA KCasadο',
        twitter: 'jaimemellado_',
        twitch: 'jaimemellado',
        elo: 'low'
    },
    {
        id: '8QsTmBZPwNLwdwMOv0pvPyVWvzgWqnGrhwOs-A4tI6RcKqBFh_pjoNYMsA',
        accountId: 'VzXILSTlbc7BzP_N34zI6KqYCso8n7GI3UKjEI7TaOVFmlMnifpmDiXY',
        puuid: 'wrKzqqti25fTrsvUaTJZjTo5LC20u5Fi4E9bSTKD0ERzdKCunytRZfcVFLOro04DKEda84WpVBCCOQ',
        name: 'abby me arruinó',
        twitter: 'ffaka_',
        twitch: 'ffaka',
        elo: 'high'
    },
    {
        id: '9FHkrtZPDwrzzDUr_yAIXcBHdmZ-5D4wRuCs0_rJs6nVNuQSnkrIQI4A6w',
        accountId: '1N_rVNLNh_7QxcKarLxuhK-BPxf9PU0jx3nnCBsfaWp86XeE_hKjNmpA',
        puuid: 'KOW4FEbtQuDogQ0FzfcXZBXFia_wwn6UGrmAlQ9-aEtzJlt6Zm3YiJrnwM262Shy6mlJXN1hjtIDAQ',
        name: 'TH3TOÑONEN',
        twitter: 'tmartosnen',
        twitch: 'tmartosnen',
        elo: 'low'
    },
    {
        id: 'Nd19hIgCyrm6y5ncAq2da9dOtzIW2vbWBnzV1iagVJz9Bkm60QzM2nmVmQ',
        accountId: 'Nu17-4kJzItzpKp7O2pxLN5HGp2zOTECpCyox8YimgEJNd8yveHOkI-_',
        puuid: 'yd89M3_dlB_in0pLFY5xi_G7T-csIeEHFnUABGLYWXoJfRZ87kipGSTQEgXh_SXZd61BB23qKqq6QQ',
        name: 'DevuelvanEl0ro',
        twitter: 'NeckoLol',
        twitch: 'neckolol',
        elo: 'high'
    },
    {
        id: 'p95NKcnl6Mf9m1rDa8TaIwg9-tAEqm7oaRz4jmZPgKt63A_f3wKoYLQO1Q',
        accountId: 'R7_EUD0jADMYKX7RE4Fd03N6-X2fRBpQR553eeY4sm1qC-Dh9dtSu5dm',
        puuid: 'FAwKpDQNeXqnOtJh31YOnf5beqMaWZgpe_QclFmJAACTi3stfq--xhtQ1_BgztznJ4VzBJlS-CCKrQ',
        name: 'HandSoIo',
        twitter: 'Reventxz',
        twitch: 'reventxz',
        elo: 'low'
    },
    {
        id: 'vrh8bbArR8KZ5YXTNBdJWHr0B8J9ruIylNgNQ0n_dH85b4gwFoPpuYnm5Q',
        accountId: 'eOhkUN-FT4NdK0g63wd-sKsNS373jfIQ2Ly67YF2Cs8QhjOnnF-TrVIi',
        puuid: '5ecMNqY78icK3aLtlsEmO6q734EgOtEy9WjELsN7O6-STlmTSISc261KDD_O-1mFIisyvwO2OAXdHA',
        name: 'Weakside Jayce',
        twitter: 'HoldemHammers',
        twitch: 'holdemhammers',
        elo: 'high'
    },
    {
        id: 'HJ-1Gmh1zY-NafE_GMg5ECw9JHlElkEBZV9Db-NrdPnnj79p53dJ_eWIfA',
        accountId: 'eIOLYvIEoQ8zFJO8opMX75uFQaNOSFGwpcOCmMZIDoHspWsrruP77ukV',
        puuid: 'yp5caQbL_UTTQdwgU8w95c_33OKszS9FBDGYBqX2E5lMqVUwhLT8Wd7nfqPlvyPS-JrxzattRy2YFg',
        name: 'JOLINBO STYLE',
        twitter: 'JolinboTV',
        twitch: 'jolinbotv',
        elo: 'low'
    },
    {
        id: 'GLjL_CdViQhEjiaZai9u7UbQJ8MhdrZ0MjJYcuJKr-mtLk5xLre2ymQWiw',
        accountId: 'Ya4gCAjT-BnGBNYDc_F4rdgdZ0zyduFUMl7Fit-MjMNlb2EMMzqsstcx',
        puuid: 'FgTJqrquB4Z71pPppZPEgGoTNhYNCwocw1Lxc0-xo9JDY-PoFin6vvIiaU8Y1Q3rV9crYq23_CHEbQ',
        name: '2023 Tercera',
        twitter: 'MinidukeLoL',
        twitch: 'miniduke',
        elo: 'high'
    },
    {
        id: 'U6iI912WDv-jfTJBHy074UKmfNuTcYfDcrEPegIGYrSBKNPZpCZBIYG8-w',
        accountId: 'js8muhxorTGO2ywPJe1AeXltCHIIBoQodYu-YtINWJmJn-FUPOk1X1hu',
        puuid: 'ngwx_oks2wM8OtX9sxXJg_16qXT9TezSFS98J3BRrHKglOo3fBrirImG6LB11oDFn_tMzIrtjp3kwQ',
        name: 'Destructor69',
        twitter: 'destructor1963',
        twitch: 'bronzafamily',
        elo: 'low'
    },
    {
        id: 'NnpjhFf96h-eJBjta3df1pup_ynIcgiYQXf-s1jj2DUpGp0WL8kVz-5mWw',
        accountId: 'RwSwM7F7yDXSfhh8uKeG3E3ikpkdmDE_piV7rrLkEXXURYJWNF890LS0',
        puuid: '1uwNrfGNmAvsFl8ZS1QEPcvBhSscuogFZoqNKjyAL9ryX7Cvyla4c0rZVAli8sOV4EMlVuRd7eCdMQ',
        name: 'Cabeza de Huevo',
        twitter: 'KeriosYT',
        twitch: 'kerios',
        elo: 'high'
    },
    {
        id: '3N6P8HLhXDAHOIBEWgSgGlSH2hEt75-EbTHEvLbXJBWMvZhLAKF3iEsYCA',
        accountId: 'Q_RGVS3tEGLjD4pK8HxJyqKCQoiNUv3l-aAHBx4IXTst0-qslRXHyCLR',
        puuid: 'MVWEotbZYZtLAR19GSE_9Zph115K5UCkwvYJcQTN4aqJmOLC0HJlm3vOWvZZuFD8h-W8_MhJ8BWDfg',
        name: 'Pyke Wazowskii',
        twitter: 'Xixauxas',
        twitch: 'xixauxas',
        elo: 'high'
    },
    {
        id: 'ey0gMQ2Uvkn9szmif_sUn9orWnIPgJ5kxIGYyZKwRoHv4a2oSx-BAuwnHg',
        accountId: 'Crt16ihjCtX0yLV4KeakZINBeEDUMLYXAh9r29eBZAblYgrUv5PqWkkZ',
        puuid: 'bUETsIGIVNOE3GAL26N57meu8i8Vywy6QrlCE5OC1cZSfeQNDeXCsLe81M2aEFerf6Elj0xGQrc87w',
        name: 'l Iove FUMAR',
        twitter: 'HolaSoySergio__',
        twitch: 'HolaSoySergio1',
        elo: 'low'
    },
    {
        id: 'EKJPJ896xVEFN2OmqmECaRvET7isYfBwCCG9twIub-AIV8Kg3PXIAxenUA',
        accountId: 'ZttvsxZtBHA7N5eeg8N12eNTSjOGXqfS6RIYxAGzhVrUjH_LVaXCoIKD',
        puuid: 'OwX32SBySZxSa_XZ7PN4leBxsfH2AY8A3qXkYu9ETMqIkCuruTeEbD91gqgATsddZLKKgBYwR86J1g',
        name: 'Amadeu Carvalho',
        twitter: 'Attila',
        twitch: 'attila',
        elo: 'high'
    },
    {
        id: 'H2wMzRHgTV7dJ5He6eEV1xjF166U0Q8ZqJqf0HYuzsuZyLnfTTX4B8OPqg',
        accountId: '0IQUwU6oOnO2YK9Bd5ZjPb3OxyNalw3J1jjAOZDRxcProFiSZgd6Ej_G',
        puuid: '2Melarxt2x27edhifNeVpuqIdfGoSufove6KYKM62jMzH5QIi2hsrdLY7_Om38A6y_F62YpR5Rtv7w',
        name: 'LambOrnnGinyin',
        twitter: 'GGinyin',
        twitch: 'ginyin',
        elo: 'high'
    },
    {
        id: 'ade1tcUR2PEMLpGBNc4AkZn9-3Cactyy0TLmq1eA_tK2S1OETtnmPDwUBw',
        accountId: 'tIAooEd1WROWDHkCSOkS7TxpV4QWcxGmyqxATsBG4ixv90Ay2UXFQY13',
        puuid: 'mlEVKOG6IJmeuhLR7G-4UYIvPI2qybCXlDDZTWG-m4lnCLSipTqm9yZD9u_ISWWTAe2mcAmJHd31fw',
        name: 'LittleRagerMilf',
        twitter: 'Maaylen',
        twitch: 'mayleen',
        elo: 'low'
    },
    {
        id: 'TECT7rS6c91cFizlpgI6oktg08b513yMPJ7rEr4aAMcQUDHYYlGYHs1cow',
        accountId: 'leQ9-HoQZI13NET9taT_ZkcmBINDaAk6KYkfgTI4acTmvHNDljmzhk7t',
        puuid: 'HPyf6-L7EMz1gIFd1j-InCjK4kMYRD93QgiRh4e7r3cPtaOILQ0BvZuTojw9n_y0dF_5Se1FXkAeJg',
        name: 'IamDiamond',
        twitter: 'IamDiamondLoL',
        twitch: 'iamdiamond',
        elo: 'high'
    },
    {
        id: 'z6_zsyEcTMCfJZSNbH_dLVrbhpEIRucnabSDKeGLugHnRT68Diqf0Pc_WA',
        accountId: 'lVWKVeFUp35FWXixxWBNyIp-OU-WD_UyleX6WtvOriHoiE9cX-Y6EucV',
        puuid: 'QBAOL1FPVBq3IY63oDgdGWkmv1UwMUChtx0RRfKWEhuziXNSUpAvtI0pHiMeXQ_wVG7oD55uNo9dXQ',
        name: 'TOAD AZULGRANA',
        twitter: 'ToadAmarillo',
        twitch: 'toadamarillo',
        elo: 'low'
    },
    {
        id: 'YOh17os5z-a_6tJ6H1eC-YTcrtfVde45sq7ejCFj-8j4Qww1lMW4uf18Ug',
        accountId: '9DhdEpHWEZXFf2M602vU9uYCOjjz4Xn0VMUOqa6u3R2mevkeKbTGPuP3',
        puuid: 'OxxWa9PSL3BrnF_9YCFNGtkWKkB8fZv166NId7E4AompGrwyADyH50athhmNXyG5lCo3ATBK4cpsdg',
        name: 'CaiQi fangirl',
        twitter: 'Scarlettplss',
        twitch: 'scarlettplss',
        elo: 'high'
    },
    {
        id: '4BDBr0a6C-6yERenFCOX0Z9sbtWy2BZSVLT1oIM12-3ulbfIJLnIry5sZA',
        accountId: 'YbkfCJ0CmoGYMagr7UPguZ4CmkuEeBfOmNxQ2_3ZfPa_JWoa2yLmQ8yV',
        puuid: 'pS7k91e1IUJoA0DBTYiNbesoQc01RX8WWWHy75Em6ViT2i_RRWntfNaEpQjcBHTu064dZ307OZkQ7A',
        name: 'Tetones',
        twitter: 'Jesskiu_',
        twitch: 'jesskiu',
        elo: 'low'
    },
    {
        id: '_XlxPeAfZWyhdg__ZpDFvnvpsIA-Vemhr94aBiEHYHzNlaQdoeZk7j2cFw',
        accountId: '9HfDz09ItYy41igI_DhQ6LgJxiJOz8bwU4sNkHfMIoSx23UTrOZ-E7ZZ',
        puuid: 's90QizQQ86G7b5OfLkn00Np8JjJb5Abst89H2PDXBv-zc4HqaNu-XEZV2Qa3u-PD4k-7q5onTUBv5g',
        name: 'KeyboardWRLD999',
        twitter: 'DahVysGG',
        twitch: 'dahvys',
        elo: 'high'
    },
    {
        id: 'd8TSFQhsKdi5BH64wurh9ggbQ7IOWFnt7PylfGs6HgFc7xY_nKLQfHrv9g',
        accountId: 'QhwQp0Ht_ydH4odS24hz5Qa_fjf_nqrSdjxDyc8JNStHoPIElzbb5DrN',
        puuid: 'pspWqasgNz0Gzw2ehinhSLNVhX8DH_2hSXrV2pD9dpW1qXR3AaxXT3WuAKiTQEAXytkyn6Q-5ZN8Bw',
        name: 'KatthyVipi',
        twitter: 'KatthTV',
        twitch: 'katthtv',
        elo: 'low'
    },
    {
        id: 'XTWt2SlZGhkX4HIo7W1-bf0agqRyr8yTQUaS_g8z2tr5KKmvSKUts6q26A',
        accountId: 'vICA4ybIg0ineoNcKCBKhdN8mhOeTygVH0p7yZNKyjb02lGtplVYYSvX',
        puuid: 'yQGRSgU09bNRqSayQfAcq-PUVbx0F0BQa_l0UnfvgEalQRoNPt34iPjWIwpeBpLrP73Ha01wxwKrPA',
        name: 'heyy olviyonna',
        twitter: 'yonnareiss',
        twitch: 'yonnareiss',
        elo: 'high'
    },
    {
        id: 'd62un5dzsiFPOhDPJiv0Doa9AtfdUOxp87PB75Xr62kkTzZV7c0PQ1REiA',
        accountId: 'pvwRDoqkWddygfa6BT5lcEI8UYA4WdEGBFKM1tzq7WU5-8T9bCGEe1FU',
        puuid: '954i3_0XHlDFhunhW-9OU6SJa5TUOKBZVaGi1B7ZU0XYWZ5AnwfQPOYvi5K2c1boiXinoRcNXayc1Q',
        name: 'SoloQlona',
        twitter: 'SugusSusanaTW',
        twitch: 'sugussusana',
        elo: 'low'
    },
    {
        id: 'pvM7sdI1yf60mj4OGHyI_AtvFD6NEUGVTM5wuxgFPHURdOFYNm0AMt3IgQ',
        accountId: 'zabFxItMDavVbnQH8TuRT1i_mGs_Slfi1OmuVmiHz_D4dZy7xO-KMo5i',
        puuid: 'wr5fadMmPI8C7jSTwPJlA9FfIxKaOa7A6xrbgXD80SQUf2EAkhVCXUyETevVbZ4FDWK99Cg0yVCO6Q',
        name: 'PEŁUK1NG',
        twitter: 'Th3AntonioGG',
        twitch: 'th3antonio',
        elo: 'high'
    },
    {
        id: 'tLYd4Vr15nDUX_B9Tb6ATDzv1HhND3X-3D2Wg8NVyhCamMsyNzhzKYE0Jw',
        accountId: 'EMA0IEU-hwBVGIMa4FyX-JBK3shmDKd_NWDeBsRGfUEgFnT2y_6Q3Tyd',
        puuid: 'NFiKQsIsz40D2s59PW_aj5j5ajHitCftc16lbMi1Zoe9vLpRLPuy2X1g58uckSuxevy0cZ7A7wwGzA',
        name: 'MLGDoraemon',
        twitter: 'Dazrbn',
        twitch: 'dazrbn',
        elo: 'low'
    },
    {
        id: 'zeJhEKmLvkI__MDU5KCuhg9qmmVPDnR03OwY8oqYzcrM5PNppe9OXw-2YA',
        accountId: 'xqS1-xnP78V65q9IqJDRGo6cV7iklUoZ_d9x2bqOqJBava-sJsE2hs7Q',
        puuid: 'TLo9xPYR0W5arWOKvRX8rGSkRx684D8agdPYyMrpHIpkuNws0DzCIorK-WhQoNCdCyVMQsU5eBMshw',
        name: 'Aesenardo',
        twitter: 'Aesenar',
        twitch: 'aesenar',
        elo: 'high'
    },
    // {
    //     id: '',
    //     accountId: '',
    //     puuid: '',
    //     name: 'AnaMarreLoL',
    //     twitter: 'AnaMarreroo',
    //     twitch: 'anamarrerooph',
    //     elo: 'low'
    // },
    {
        id: 'kZOWRW9BdU2UQS2Xs6W63E7qDYEGX4Z-QmdtA5Bsznlv4Ai9RwSbn2vd_A',
        accountId: 'oUs9DCmsBCbqskrpqY5A_llswkMOC4mcdIy8armtKPzBpMQc0vN8-2ln',
        puuid: 'XVLaDxqWYe0y8mUZ297tvmiCCwiqHbiY6_r56P0cK1l3RBUt3nkj9qBCwv7B3zL61KGUciJ6_DGOtA',
        name: 'EL GRÁFICAS',
        twitter: 'Adri_Dalvenger',
        twitch: 'dalvenger',
        elo: 'high'
    },
    {
        id: 'lvMvHuubckLgC_FtPWRKUdeaQYcQ8_immk8MtzCfrUxXhoR3j5oLP3eZ0w',
        accountId: 'dFmNwwSe0gOQmirNIy3A13CaT8JJ6WAlCWy8YE5c106FV_HfANQHasYC',
        puuid: 'vLYJG7fTdjEvrJJxWeUgkyTXE3gkIpSi2sbeNoNYE5KGbGrak2vwzTEjYx2B7RpK4LAZK4ZYClI6lA',
        name: 'OTP GAZYRA',
        twitter: 'saramartinng',
        twitch: 'saramartinng',
        elo: 'low'
    },
    {
        id: '8PTRDzBees6djmqxWsIWwaYiLb_YsQM75W3JU1TF90n95dOpaoqfZlsTpw',
        accountId: 'ctNpPxhF74FRl6DVMhiBc0PjA2Qqf2rXzFWsck3Ygyom_m5lDGsQP7xr',
        puuid: 'makOHYRyNtLtpoe2ScH80TQ_fSUvVZE1bSTAYd06bYibInjKSpJ9x1ZwxvwWTkTx6VXmYAz3ODQUzg',
        name: 'ChicoRebelde',
        twitter: 'JavierrLoL',
        twitch: 'javierrlol',
        elo: 'high'
    },
    {
        id: 'qWoeFf39HwXnAcJd-ynojJFalaMv6g4Odd88B4qEUEXIhUyyoBR7KKpETQ',
        accountId: 'U-Xn1besXUpm8jKl5vkNkccymqwIKR2FgZ4zTF1K4TVINmT8zUFBRNWL',
        puuid: 'DgMZZz7DmyRIlRNw8-DkkMiyoQ4ayR3qo8_WWohe6-GdKpppk2HXvNNHMYhU5oJb2pb_vlZ6eMRoCg',
        name: 'ahri sIave',
        twitter: 'PauSenpai',
        twitch: 'pausenpaii',
        elo: 'low'
    },
    {
        id: 'E8eGtwNB_-CFi4wvYv-7GGO7VNCIGY0euINjJ69CGZETIxiSnsyca9EBxg',
        accountId: 'Xn3vhtbyrUHMdboLDt_fYnw38uHWPsZHYsGvXC8e9G74U9steaagAYkv',
        puuid: 'sjOpDDvGArqNWKANG8MakzdDZ1lXLKmw_rv3AO_bW2FbcK_jab1As3Xv-PkLizBUXMSiX8Br_ceO5g',
        name: 'TheBoySavior 69',
        twitter: 'EkkoTheNeekoTW',
        twitch: 'ekkotheneeko',
        elo: 'high'
    },
    {
        id: 'PdHy-anFcEFjBy9HAXbTKJThB-HN94SsHhOzFae4gGGUDR6FeZ1zqTaLCw',
        accountId: '0zBHWvGcsn4Nmh2JKc04IJmY_T0jbJT2TAvWq5W4XQe3zReVvY0NaPhe',
        puuid: '9XdOy0IcffTJ39CJnsiIDOwpkAzqdpoIylWxhxRqMWhtKVAQgKolL_0HuGYfJL77nPvMieLIrdRySQ',
        name: 'No soy AMPHeter',
        twitter: 'VisualsAmph',
        twitch: 'amph',
        elo: 'low'
    },
    {
        id: 'wTKTsmU3JOwvLfkw-iH9rNjwGs9YH8NNO4MRiYy31PyyesI3mRuJ44mXjA',
        accountId: 'hBDMYEmbpUOgKZMJ5aI6GuGbBYTPugY78lU_7wFXCP9ToDZyv87kNo-1',
        puuid: 'Ce2XTWs24xgh7ikVmNOwOWeqKsjpesxg894FYuqLKrtbBHmHWa_mb0OoloYJVBdZEG_D3toNvTVcww',
        name: 'XaviSaltayAbraza',
        twitter: 'grekko_7',
        twitch: 'grekko',
        elo: 'low'
    },
    {
        id: 'wDQ_YT5j3k1jLCTqNhb4bVf9aieXEw87u-xZ2C4BOLTGUZpOoxH8oSWu0Q',
        accountId: 'ge_mxOnrFfFkn9Uod9DJXHb_aNFnK6ZHlIgYwy82n-daWUTmJQ2QNuTe',
        puuid: 'JPPgtKzsvDTcxtTDy3XcyXLL25GUs7yQEA-ipPKJvez-VhO7arZcAtr_FRbjthhp6JrqNbLIJpWtKg',
        name: 'IRELIAING69',
        twitter: 'GyalJade',
        twitch: 'gyaljade',
        elo: 'low'
    },
    {
        id: 'TSeuJU2Sqaf9Ich9aKLclHX_unrepj38Gdl7xwVdBZEBb-u7G_u3EBk88g',
        accountId: 'Evse-s2T4A4o4-QU2nHoF8DyILbO2sWZ0OjChgN0cQtl7NzLOamZnX38',
        puuid: 'Gp31v3HLyWoHdcft_Vw_n1o5T9SA4dA4dZ25px1RUcMKyITtojHBqnEh3ORxrTt0GtBMnj11K9im5w',
        name: 'DuaLLipa',
        twitter: 'ImDuaLL',
        twitch: 'duall',
        elo: 'high'
    },
    {
        id: 'O2gdgyItJuwEq8TRcr1d1yv-Ai3dIknPYBQrGkqCYQlceEF9ktmzQytFHQ',
        accountId: '_Nt6JlcjdiH5z4qGW8o--CJE8br0iCM6Y0sfH-840saadWPBra7YdLrv',
        puuid: 'PJmTjFwGEGfUAR11rw4ZAdiz1Oxv1oVunVkfEZmkSqjhbzBz54alr-PtQ2vBVUFHQ1fZFa6J6MDBnQ',
        name: 'Chica qué dices',
        twitter: 'andres_alguacil',
        twitch: 'elbokeron',
        elo: 'low'
    },
    {
        id: 'ste-5D48qdizlUNZtWMe5Qnsqs24iHeAE_XnNKaDlISEfxDt3Mdh61GMhA',
        accountId: 'BSjFLcB0Mbwb-azlJv9VszCWBMAyIdgT5Vnc33hKzCdRaZJOj0_6KMcx',
        puuid: 'xxHqw4qt56J7-0BSEae67YImBSHcIvJ84cv6l7qseasKDWqvkReeVy_9V6Lj0R3Xe9o6imo9jXZqyA',
        name: 'polymσrph',
        twitter: 'Morphains',
        twitch: 'morphains',
        elo: 'low'
    },
    {
        id: 'cAwAsCcITo4XCos1v4SlxlfwAUkpABv3nk01TDHZSLxYEfiz5DrW8iSe5A',
        accountId: 'pi7Ql4HJtVCMhTDevj2tn4kA_BHy8N3o0laAGwYsOxIkmPtBSkyA4WUg',
        puuid: 'wMTy7kPh2WN-Ej-TQ5Hj_KbUoikNAqCTAYxNLGWoJrtLmKEgaO8-u3Yd8v2N1JlBBl6gaW8ZhMEniw',
        name: 'annananashe',
        twitter: 'AnnaBlue_17',
        twitch: 'annabiue',
        elo: 'low'
    },
    {
        id: 'kUMZQ0iRbN8qvgQO7ltX6dcK5oA84L8n3yWPOWvlWysu8qExX3T8XSuJ1g',
        accountId: 'S55LTYHU-AOCfqB85ZlZZD_4jnb7-6EqBMpBg07NH02kN1kjNPO3lLlv',
        puuid: 'YEQZqyoPxRX-LoG7_Y8SMFq11VzHarq-q8qEKSLu4zTflJb4QePPqeVM5Ce13MDNtd5IYZ40OGRHWg',
        name: 'CroketaDeAbuela',
        twitter: 'abuelavengadora',
        twitch: 'abuelavengadora',
        elo: 'low'
    },
    {
        id: 'y3DIwYNvd55VnNIQqPanmd6Xw2wEpfen1GV1TjJq-uh8Vpzl_-a8KK253A',
        accountId: '9s2GR-J-b8bp7_CA8PbZtRxZmxpNFyjVFtiahvYQ3VJ9b41OAbOpp4Mm',
        puuid: 'M4xX4iVwi74274q9X7SaVegNCj3BBM7fB5__HPL9As1zdXWBnRgrD9n-pVlWRH6zW0F-S6g0PviXQw',
        name: 'ahrivedercı',
        twitter: 'mahridia',
        twitch: 'mahriaa',
        elo: 'low'
    },
    {
        id: 'XHwtLsYMCcFShaTjpS1mwyGVN7juP2lW5i3Wp4nU7IdpYYHw7cvQMAZJpg',
        accountId: 'n2c6qR56qtfgqUqFhPqjiANVrFBJOYL16eH7l03HXy_AOewXUw3pR_Pe',
        puuid: 'W7U6wTERWFGPTIa1z6GMki8GqXk3Y5i1y5J3bM6YKdaDxKtmXSCybT_WEJMvSzim38AA88JmnVCCcw',
        name: 'Silicio',
        twitter: 'Silithur',
        twitch: 'silithur',
        elo: 'low'
    },
    {
        id: 'UPHYLR3fd4sWvfwRobxdSgDenBuGB7jLCAZpV8qRAjfPQGYW4VA-YAqmsw',
        accountId: '3uJ77UI33vvIv9zSYoBISrZgGPPQkad4DvLL8jKIFzLIyBjQHQT2RhJJ',
        puuid: 'EZ-aaATNXTBPbZRbQm1nH01j1Rgp4nTmRBhoC-ofxBlOnFHgZq2g1z0RZ0LWnAQN2BpG7Re88HV-ng',
        name: 'FTR ATTACK',
        twitter: 'FTREFORMED',
        twitch: 'ftreformed',
        elo: 'low'
    },
    {
        id: 'Zs8pe9u29T_XhGUfmxI1q57yXhLnu8Eb7pM7VokgF19epxP2E7gAtVg8VQ',
        accountId: 'Zm6o3Uv0ZEH72DXtcI9j7yFRxs_ta-Stas4NXnNAj2PZEwzDMWIB7SUY',
        puuid: 'hu66ye7zvCfJcsFDKhtsyI_4Rd53sS8_Y9ZuFHabfNVikzs_Tt-C57J4wc-2BB4jL4NRSqAO0b2Guw',
        name: 'TetelOl EnjoyeR',
        twitter: 'frizko94',
        twitch: 'frizko94',
        elo: 'low'
    },
    {
        id: '4WZnKXf2Gx3rPHgOOnwBTq5ofgvH0jy3S8NiPlEZWUiP3mYgQ0-l7ns8Mw',
        accountId: 'ZQ6OxElYoInM5bqOqLDGR3Oxc08FrW0BiTZey0kU2Ga29lIHeskEGyBF',
        puuid: 'PHx940bgoQ9V5aHqH3MS9yRgT_mq3Zrl-VYI_sLtVRyg9ysjPX5Iu6-R-uXdb6Jh3qk3d9DM472VyQ',
        name: 'uyquetos',
        twitter: 'lazypopa',
        twitch: 'lazypopa',
        elo: 'low'
    },
    {
        id: '2l3ZvYMDCyLcqJEtqygKw87kxTkEINqIhwuEcdy8e1NqoRFISaEDtPqLmg',
        accountId: '7E8gIT5VF8E6PUN3GIf2OXJHWTiY_Ho92nxBnbiLTdNlZLfWQT_bsJLU',
        puuid: 'W5_d6mZ8x1ORyXcxPM585lk0AmW20Li_rEaxAV8qNuX9GbSYzoRycFocy-4rTk0or4geGLfahVvfWA',
        name: 'Adryos Lepido',
        twitter: 'mcadryh',
        twitch: 'mcadryh',
        elo: 'high'
    },
    {
        id: 'arLwdRfpwBTqscCotbiSIM_8AKiPvNb1gSdMR2nNVHDNwJipkaeEZhmGYQ',
        accountId: 'dX5zQcCvDqrXjjVGD1HJ0DYm_sgOpI9zS6l1awATM9ZhyYf5ClkVwwTI',
        puuid: 'W7OAwevawyUayNz8w0kgzJa-UWvjVWGH6F4HwbaVKWFsiA6mZ27r_u6ifoV1GW0Oy276NaIip40GsA',
        name: 'Remember me mom',
        twitter: 'Sallanman_cat',
        twitch: 'sallanman_cat',
        elo: 'high'
    },
    {
        id: 'iNBA-yTjZjF7AeQTb2Td3SwKNxsjgDGqE0Epf2IvlkrGpvpcEbKSV3FaPQ',
        accountId: 'bRd_Tyt1gqjnUGayAQqhvYaEybiaRx0kfVfU4nM_q0w4dGqXd-y9BuAD',
        puuid: 'Thj6WMHu3VdFua5JYyoZGH-cIvd_LiykEiJZOQhTvZ0OlcTQBIEDa8OTcLTruUPZVvuUU2RYaPYX3A',
        name: 'FrigoPiedra',
        twitter: 'FrigoAdri',
        twitch: 'frigoadri',
        elo: 'low'
    },
    {
        id: 'dON3-fKno-28Xr0osJngSTfzIlCWOXNtkrzv9Xu2icsM2LjLkq-NUGgcxw',
        accountId: 'xk7daGMLNhrAHfvDXtkbzjegb-_dDkRfDKOjdibHDZs-zFhPdJi335lU',
        puuid: '5mnyuAhQi1vw4iMsC6MUVoFoE5C7Jav-qdLI329cGURn4PdmE8_ZYDCStYnW8u9Kfb2KKqnuuh1YpA',
        name: 'Beep bop SIUUUUU',
        twitter: 'RafaL0L',
        twitch: 'rafaL0L',
        elo: 'high'
    },
    {
        id: 'jcy-51XrqMUW1Cp7hvSTS1RlxKMnjmCfckWKUhNCG7E4wEwrBjTcWZPG4w',
        accountId: 'DQJZry8QaCxrNxm6VPlPLAvaV0T2ObbYwhBr9pqEA2fOFnL2nxKCs1h2',
        puuid: 'jjo3M24O5ALvGpzchEWzE3Ue2KBFeQwxQukeux95z5ylAQn1C-kU3g5KVIyApmhWY_6xR-Jo-Q2tCQ',
        name: 'MERY OTP FREGAR',
        twitter: 'mery_soldier',
        twitch: 'mery_soldier',
        elo: 'low'
    },
    {
        id: 'nmdHvLY27HN-ErsN6I7a-pYBEGhVfwAzQbZYgjAqPv9Mx0xnk9XmH5eeqQ',
        accountId: '-A5QjS0mOKWtVo0Wlcd3KIEBSephuso0Uw2q3KqaX5Yjh46unKjbnMSY',
        puuid: 'y5VjWLhnPoy6zycNC98SZay8ztxLZrq0xOdBqhn4GT6aA6HSp7Sy4r6_cIutBp_q0G0Eojm89NribQ',
        name: 'FUNADO PERO RICO',
        twitter: 'elxokas',
        twitch: 'elxokas',
        elo: 'low'
    },
    {
        id: 'b7yEK10w48DsykAD2E48z3XE3U-HGstghDIVvRGrEVqc5lpWptAtk9frkw',
        accountId: 'hed_DZ-IGuGdaxzhoTFdIOLXYSVuMHw5P5yPTClQDuiEOzOsDNmtVYsG',
        puuid: 'U_FpkVcWZ-meEYGgEDJIDKICJsJXOxhh_yzlZ9M2IOAohZIw7loStRYR8niKhPWjrlJw0yl_rRcvew',
        name: 'elmillor is back',
        twitter: 'Elmiillor',
        twitch: 'elmiillor',
        elo: 'high'
    }
]

const streamersUsername = streamers.map(str => {
    return str.name
})

module.exports = {
    streamers,
    streamersUsername
}