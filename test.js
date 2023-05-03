/*! For license information please see main.js.LICENSE.txt */
(() => {
	var e, t = {
			29374: (e, t, n) => {
				"use strict";
				for (var a = n(67294), r = n(73935), i = n(39704), o = n(40575), l = n(71002), s = n(20573), c = {}, d = 0, m = ["auth_token", "account_type", "build_version", "changelist_number", "device_type", "ffotd", "game_session_id", "game_session_index", "language", "locale", "page_context", "program_type", "region", "title_id", "tu", "user_session_id", "user_id", "last_input_device", "last_input_gamepad", "is_cross_confirm", "resolution", "ccs"]; d < m.length; d++) c[m[d]] = null;
				const u = c;
				var g, p, h, f, v, b = function(e) {
						e.startsWith("#") && (e = encodeURIComponent(e)), e = e.replace(/\[/, "\\[").replace(/[\]]/, "\\]");
						var t = new RegExp("[\\?&]".concat(e, "=([^&#]*)")).exec(location.search);
						return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
					},
					_ = function(e, t) {
						if (!t) {
							var n = u[e];
							if (n) return n
						}
						return b(e) ? n = b(e) : (window.Telescope_API_GetEnvVar ? n = u[e] = Telescope_API_GetEnvVar(e) : y("Could not load env var '".concat(e, "'")), n)
					},
					y = function(e) {
						window.Telescope_API_Print ? ("string" != typeof e && (e = e ? e.toString() : "".concat(e)), window.Telescope_API_Print(e)) : window.console && console.log(e)
					},
					E = {
						english: {
							mp_saba: "Al Mazrah",
							mp_fort: "El Bagra Fortress",
							mp_embassy: "Embassy",
							mp_hydro: "Zarqwa Hydroelectric",
							mp_wartorn: "Taraq",
							mp_wartorn_gw: "Taraq",
							mp_fishtown_gw: "Sarrif Bay",
							mp_sira_gw: "Sa'id",
							mp_crossing: "Santa Seña Border Crossing",
							mp_catedral: "El Asilo ",
							mp_swap_meet: "Mercado  Las Almas ",
							mp_nogales_gw2: "Santa Seña",
							mp_historic_gw2: "Guijarro",
							mp_grandprix_pm_2: "Crown Raceway",
							mp_luxury: "Breenbergh Hotel",
							mp_farm_18: "Farm 18",
							mp_shoothouse2: "Shoot House",
							mp_shipment_iw9: "Shipment",
							mp_shipment_iw9_xmas: "Shipment",
							mp_futbol: "Al Easima Field",
							mp_museum: "Valderas Museum",
							mp_sealion: "Ashika Island",
							mp_saba2: "Al Mazrah",
							mp_observatory: "Dome",
							mp_observe_gw: "Zaya Observatory",
							mp_regional_gw: "Al Malik International",
							mp_bio_lab: "Bio Labs",
							mp_davos: "Himmelmatt Expo",
							mp_skerries_v2: "Pelayo's Lighthouse",
							mp_m_alley: "Alley",
							mp_m_blacksite2: "Blacksite",
							mp_m_exhibit: "Exhibit",
							mp_oilfield_6v6: "Black Gold",
							mp_oilfield_gw: "Rohan Oilfields",
							mp_caves_gw: "Sattiq Cave Complex"
						},
						arabic: {
							mp_saba: "Al Mazrah",
							mp_fort: "البقرة فورتريس",
							mp_embassy: "إمباسي",
							mp_hydro: "زرقاوة هايدروإيلكتريك",
							mp_wartorn: "طراق",
							mp_wartorn_gw: "طراق",
							mp_fishtown_gw: "ساريف باي",
							mp_sira_gw: "سعيد",
							mp_crossing: "سانتا سينيا بوردر كروسينغ",
							mp_catedral: "الأسيلو",
							mp_swap_meet: "ميركادو لاس ألماس",
							mp_nogales_gw2: "سانتا سينيا",
							mp_historic_gw2: "غويجارو",
							mp_grandprix_pm_2: "كراون ريسواي",
							mp_luxury: "برينبرغ هوتيل",
							mp_farm_18: "فارم 18",
							mp_shoothouse2: "شوت هاوس",
							mp_shipment_iw9: "شيبمينت",
							mp_shipment_iw9_xmas: "شيبمينت",
							mp_futbol: "Al Easima Field",
							mp_museum: "فالديراس ميوزيوم",
							mp_sealion: "Ashika Island",
							mp_saba2: "المزرح",
							mp_observatory: "زايا أوبزيرفتوري",
							mp_observe_gw: "أوبزيرف",
							mp_regional_gw: "Al Malik International",
							mp_bio_lab: "Bio Labs",
							mp_skerries_v2: "بيلايو لايتهاوس",
							mp_m_alley: "آليي",
							mp_m_blacksite2: "بلاكسايت",
							mp_m_exhibit: "إيجزيبيت",
							mp_oilfield_6v6: "بلاك غولد",
							mp_oilfield_gw: "روهان أويلفيلدز",
							mp_caves_gw: "ساتك كيف كومبليكس",
							mp_davos: "هيملمات إكسبو"
						},
						dutch: {
							mp_saba: "Al Mazrah",
							mp_fort: "El Bagra Fortress",
							mp_embassy: "Embassy",
							mp_hydro: "Zarqwa Hydroelectric",
							mp_wartorn: "Taraq",
							mp_wartorn_gw: "Taraq",
							mp_fishtown_gw: "Sarrif Bay",
							mp_sira_gw: "Sa'id",
							mp_crossing: "Santa Seña Border Crossing",
							mp_catedral: "El Asilo ",
							mp_swap_meet: "Mercado  Las Almas ",
							mp_nogales_gw2: "Santa Seña",
							mp_historic_gw2: "Guijarro",
							mp_grandprix_pm_2: "Crown Raceway",
							mp_luxury: "Breenbergh Hotel",
							mp_farm_18: "Farm 18",
							mp_shoothouse2: "Shoot House",
							mp_shipment_iw9: "Shipment",
							mp_shipment_iw9_xmas: "Shipment",
							mp_futbol: "Al Easima Field",
							mp_museum: "Valderas Museum",
							mp_sealion: "Ashika Island",
							mp_saba2: "Al Mazrah",
							mp_observatory: "Dome",
							mp_observe_gw: "Zaya Observatory",
							mp_regional_gw: "Al Malik International",
							mp_bio_lab: "Bio Labs",
							mp_davos: "Himmelmatt Expo",
							mp_skerries_v2: "Pelayo's Lighthouse",
							mp_m_alley: "Alley",
							mp_m_blacksite2: "Blacksite",
							mp_m_exhibit: "Exhibit",
							mp_oilfield_6v6: "Black Gold",
							mp_oilfield_gw: "Rohan Oilfields",
							mp_caves_gw: "Sattiq Cave Complex"
						},
						french: {
							mp_saba: "Al Mazrah",
							mp_fort: "El Bagra Fortress",
							mp_embassy: "Embassy",
							mp_hydro: "Zarqwa Hydroelectric",
							mp_wartorn: "Taraq",
							mp_wartorn_gw: "Taraq",
							mp_fishtown_gw: "Sarrif Bay",
							mp_sira_gw: "Sa'id",
							mp_crossing: "Santa Seña Border Crossing",
							mp_catedral: "El Asilo ",
							mp_swap_meet: "Mercado  Las Almas ",
							mp_nogales_gw2: "Santa Seña",
							mp_historic_gw2: "Guijarro",
							mp_grandprix_pm_2: "Crown Raceway",
							mp_luxury: "Breenbergh Hotel",
							mp_farm_18: "Farm 18",
							mp_shoothouse2: "Shoot House",
							mp_shipment_iw9: "Shipment",
							mp_shipment_iw9_xmas: "Shipment",
							mp_futbol: "Al Easima Field",
							mp_museum: "Valderas Museum",
							mp_sealion: "Ashika Island",
							mp_saba2: "Al Mazrah",
							mp_observatory: "Dome",
							mp_observe_gw: "Zaya Observatory",
							mp_regional_gw: "Al Malik International",
							mp_bio_lab: "Bio Labs",
							mp_davos: "Himmelmatt Expo",
							mp_skerries_v2: "Pelayo's Lighthouse",
							mp_m_alley: "Alley",
							mp_m_blacksite2: "Blacksite",
							mp_m_exhibit: "Exhibit",
							mp_oilfield_6v6: "Black Gold",
							mp_oilfield_gw: "Rohan Oilfields",
							mp_caves_gw: "Sattiq Cave Complex"
						},
						german: {
							mp_saba: "Al Mazrah",
							mp_fort: "El Bagra Fortress",
							mp_embassy: "Embassy",
							mp_hydro: "Zarqwa Hydroelectric",
							mp_wartorn: "Taraq",
							mp_wartorn_gw: "Taraq",
							mp_fishtown_gw: "Sarrif Bay",
							mp_sira_gw: "Sa'id",
							mp_crossing: "Santa Seña Border Crossing",
							mp_catedral: "El Asilo ",
							mp_swap_meet: "Mercado  Las Almas ",
							mp_nogales_gw2: "Santa Seña",
							mp_historic_gw2: "Guijarro",
							mp_grandprix_pm_2: "Crown Raceway",
							mp_luxury: "Breenbergh Hotel",
							mp_farm_18: "Farm 18",
							mp_shoothouse2: "Shoot House",
							mp_shipment_iw9: "Shipment",
							mp_shipment_iw9_xmas: "Shipment",
							mp_futbol: "Al Easima Field",
							mp_museum: "Valderas Museum",
							mp_sealion: "Ashika Island",
							mp_saba2: "Al Mazrah",
							mp_observatory: "Dome",
							mp_observe_gw: "Zaya Observatory",
							mp_regional_gw: "Al Malik International",
							mp_bio_lab: "Bio Labs",
							mp_davos: "Himmelmatt Expo",
							mp_skerries_v2: "Pelayo's Lighthouse",
							mp_m_alley: "Alley",
							mp_m_blacksite2: "Blacksite",
							mp_m_exhibit: "Exhibit",
							mp_oilfield_6v6: "Black Gold",
							mp_oilfield_gw: "Rohan Oilfields",
							mp_caves_gw: "Sattiq Cave Complex"
						},
						italian: {
							mp_saba: "Al Mazrah",
							mp_fort: "El Bagra Fortress",
							mp_embassy: "Embassy",
							mp_hydro: "Zarqwa Hydroelectric",
							mp_wartorn: "Taraq",
							mp_wartorn_gw: "Taraq",
							mp_fishtown_gw: "Sarrif Bay",
							mp_sira_gw: "Sa'id",
							mp_crossing: "Santa Seña Border Crossing",
							mp_catedral: "El Asilo ",
							mp_swap_meet: "Mercado  Las Almas ",
							mp_nogales_gw2: "Santa Seña",
							mp_historic_gw2: "Guijarro",
							mp_grandprix_pm_2: "Crown Raceway",
							mp_luxury: "Breenbergh Hotel",
							mp_farm_18: "Farm 18",
							mp_shoothouse2: "Shoot House",
							mp_shipment_iw9: "Shipment",
							mp_shipment_iw9_xmas: "Shipment",
							mp_futbol: "Al Easima Field",
							mp_museum: "Valderas Museum",
							mp_sealion: "Ashika Island",
							mp_saba2: "Al Mazrah",
							mp_observatory: "Dome",
							mp_observe_gw: "Zaya Observatory",
							mp_regional_gw: "Al Malik International",
							mp_bio_lab: "Bio Labs",
							mp_davos: "Himmelmatt Expo",
							mp_skerries_v2: "Pelayo's Lighthouse",
							mp_m_alley: "Alley",
							mp_m_blacksite2: "Blacksite",
							mp_m_exhibit: "Exhibit",
							mp_oilfield_6v6: "Black Gold",
							mp_oilfield_gw: "Rohan Oilfields",
							mp_caves_gw: "Sattiq Cave Complex"
						},
						japanese_full: {
							mp_saba: "アル・マズラ",
							mp_fort: "アル・バグラ・フォートレス",
							mp_embassy: "エンバシー",
							mp_hydro: "ザルクワ・ハイドロエレクトリック",
							mp_wartorn: "タラク",
							mp_wartorn_gw: "タラク",
							mp_fishtown_gw: "サリフベイ",
							mp_sira_gw: "サイード",
							mp_crossing: "サンタ・セニャ・ボーダークロス",
							mp_catedral: "エル・アシーロ",
							mp_swap_meet: "メルカド・ラス・アルマス",
							mp_nogales_gw2: "サンタ・セニャ",
							mp_historic_gw2: "ギハロ",
							mp_grandprix_pm_2: "クラウンレースウェイ",
							mp_luxury: "ブレーンベルフホテル",
							mp_farm_18: "ファーム18",
							mp_shoothouse2: "シュートハウス",
							mp_shipment_iw9: "シップメント",
							mp_shipment_iw9_xmas: "シップメント",
							mp_futbol: "Al Easima Field",
							mp_museum: "ヴァルデラス・ミュージアム",
							mp_sealion: "アシカアイランド",
							mp_saba2: "アル・マズラ",
							mp_observatory: "ザヤオブザーバトリー",
							mp_observe_gw: "オブザーブ",
							mp_regional_gw: "Al Malik International",
							mp_bio_lab: "Bio Labs",
							mp_davos: "Himmelmatt Expo",
							mp_skerries_v2: "ペラーヨライトハウス",
							mp_m_alley: "アリー",
							mp_m_blacksite2: "ブラックサイト",
							mp_m_exhibit: "エグジビット",
							mp_oilfield_6v6: "ブラックゴールド",
							mp_oilfield_gw: "ロハンオイルフィールド",
							mp_caves_gw: "サティーク・ケイブ・コンプレックス"
						},
						spanish: {
							mp_saba: "Al Mazrah",
							mp_fort: "El Bagra Fortress",
							mp_embassy: "Embassy",
							mp_hydro: "Zarqwa Hydroelectric",
							mp_wartorn: "Taraq",
							mp_wartorn_gw: "Taraq",
							mp_fishtown_gw: "Sarrif Bay",
							mp_sira_gw: "Sa'id",
							mp_crossing: "Santa Seña Border Crossing",
							mp_catedral: "El Asilo ",
							mp_swap_meet: "Mercado  Las Almas ",
							mp_nogales_gw2: "Santa Seña",
							mp_historic_gw2: "Guijarro",
							mp_grandprix_pm_2: "Crown Raceway",
							mp_luxury: "Breenbergh Hotel",
							mp_farm_18: "Farm 18",
							mp_shoothouse2: "Shoot House",
							mp_shipment_iw9: "Shipment",
							mp_shipment_iw9_xmas: "Shipment",
							mp_futbol: "Al Easima Field",
							mp_museum: "Valderas Museum",
							mp_sealion: "Ashika Island",
							mp_saba2: "Al Mazrah",
							mp_observatory: "Dome",
							mp_observe_gw: "Zaya Observatory",
							mp_regional_gw: "Al Malik International",
							mp_bio_lab: "Bio Labs",
							mp_davos: "Himmelmatt Expo",
							mp_skerries_v2: "Pelayo's Lighthouse",
							mp_m_alley: "Alley",
							mp_m_blacksite2: "Blacksite",
							mp_m_exhibit: "Exhibit",
							mp_oilfield_6v6: "Black Gold",
							mp_oilfield_gw: "Rohan Oilfields",
							mp_caves_gw: "Sattiq Cave Complex"
						},
						spanishna: {
							mp_saba: "Al Mazrah",
							mp_fort: "El Bagra Fortress",
							mp_embassy: "Embassy",
							mp_hydro: "Zarqwa Hydroelectric",
							mp_wartorn: "Taraq",
							mp_wartorn_gw: "Taraq",
							mp_fishtown_gw: "Sarrif Bay",
							mp_sira_gw: "Sa'id",
							mp_crossing: "Santa Seña Border Crossing",
							mp_catedral: "El Asilo ",
							mp_swap_meet: "Mercado  Las Almas ",
							mp_nogales_gw2: "Santa Seña",
							mp_historic_gw2: "Guijarro",
							mp_grandprix_pm_2: "Crown Raceway",
							mp_luxury: "Breenbergh Hotel",
							mp_farm_18: "Farm 18",
							mp_shoothouse2: "Shoot House",
							mp_shipment_iw9: "Shipment",
							mp_shipment_iw9_xmas: "Shipment",
							mp_futbol: "Al Easima Field",
							mp_museum: "Valderas Museum",
							mp_sealion: "Ashika Island",
							mp_saba2: "Al Mazrah",
							mp_observatory: "Dome",
							mp_observe_gw: "Zaya Observatory",
							mp_regional_gw: "Al Malik International",
							mp_bio_lab: "Bio Labs",
							mp_davos: "Himmelmatt Expo",
							mp_skerries_v2: "Pelayo's Lighthouse",
							mp_m_alley: "Callejón",
							mp_m_blacksite2: "Sitio clandestino",
							mp_m_exhibit: "Exhibit",
							mp_oilfield_6v6: "Oro negro",
							mp_oilfield_gw: "Rohan Oilfields",
							mp_caves_gw: "Sattiq Cave Complex"
						},
						polish_full: {
							mp_saba: "Al Mazrah",
							mp_fort: "El Bagra Fortress",
							mp_embassy: "Embassy",
							mp_hydro: "Zarqwa Hydroelectric",
							mp_wartorn: "Taraq",
							mp_wartorn_gw: "Taraq",
							mp_fishtown_gw: "Sarrif Bay",
							mp_sira_gw: "Sa'id",
							mp_crossing: "Santa Seña Border Crossing",
							mp_catedral: "El Asilo ",
							mp_swap_meet: "Mercado  Las Almas ",
							mp_nogales_gw2: "Santa Seña",
							mp_historic_gw2: "Guijarro",
							mp_grandprix_pm_2: "Crown Raceway",
							mp_luxury: "Breenbergh Hotel",
							mp_farm_18: "Farm 18",
							mp_shoothouse2: "Shoot House",
							mp_shipment_iw9: "Shipment",
							mp_shipment_iw9_xmas: "Shipment",
							mp_futbol: "Al Easima Field",
							mp_museum: "Valderas Museum",
							mp_sealion: "Ashika Island",
							mp_saba2: "Al Mazrah",
							mp_observatory: "Dome",
							mp_observe_gw: "Zaya Observatory",
							mp_regional_gw: "Al Malik International",
							mp_bio_lab: "Bio Labs",
							mp_davos: "Himmelmatt Expo",
							mp_skerries_v2: "Pelayo's Lighthouse",
							mp_m_alley: "Alley",
							mp_m_blacksite2: "Blacksite",
							mp_m_exhibit: "Exhibit",
							mp_oilfield_6v6: "Black Gold",
							mp_oilfield_gw: "Rohan Oilfields",
							mp_caves_gw: "Sattiq Cave Complex"
						},
						portuguese: {
							mp_saba: "Al Mazrah",
							mp_fort: "El Bagra Fortress",
							mp_embassy: "Embassy",
							mp_hydro: "Zarqwa Hydroelectric",
							mp_wartorn: "Taraq",
							mp_wartorn_gw: "Taraq",
							mp_fishtown_gw: "Sarrif Bay",
							mp_sira_gw: "Sa'id",
							mp_crossing: "Santa Seña Border Crossing",
							mp_catedral: "El Asilo ",
							mp_swap_meet: "Mercado  Las Almas ",
							mp_nogales_gw2: "Santa Seña",
							mp_historic_gw2: "Guijarro",
							mp_grandprix_pm_2: "Crown Raceway",
							mp_luxury: "Breenbergh Hotel",
							mp_farm_18: "Farm 18",
							mp_shoothouse2: "Shoot House",
							mp_shipment_iw9: "Shipment",
							mp_shipment_iw9_xmas: "Shipment",
							mp_futbol: "Al Easima Field",
							mp_museum: "Valderas Museum",
							mp_sealion: "Ashika Island",
							mp_saba2: "Al Mazrah",
							mp_observatory: "Dome",
							mp_observe_gw: "Zaya Observatory",
							mp_regional_gw: "Al Malik International",
							mp_bio_lab: "Bio Labs",
							mp_davos: "Himmelmatt Expo",
							mp_skerries_v2: "Pelayo's Lighthouse",
							mp_m_alley: "Alley",
							mp_m_blacksite2: "Blacksite",
							mp_m_exhibit: "Exhibit",
							mp_oilfield_6v6: "Black Gold",
							mp_oilfield_gw: "Rohan Oilfields",
							mp_caves_gw: "Sattiq Cave Complex"
						},
						brazilianportuguese: {
							mp_saba: "Al Mazrah",
							mp_fort: "El Bagra Fortress",
							mp_embassy: "Embassy",
							mp_hydro: "Zarqwa Hydroelectric",
							mp_wartorn: "Taraq",
							mp_wartorn_gw: "Taraq",
							mp_fishtown_gw: "Sarrif Bay",
							mp_sira_gw: "Sa'id",
							mp_crossing: "Santa Seña Border Crossing",
							mp_catedral: "El Asilo ",
							mp_swap_meet: "Mercado  Las Almas ",
							mp_nogales_gw2: "Santa Seña",
							mp_historic_gw2: "Guijarro",
							mp_grandprix_pm_2: "Crown Raceway",
							mp_luxury: "Breenbergh Hotel",
							mp_farm_18: "Farm 18",
							mp_shoothouse2: "Shoot House",
							mp_shipment_iw9: "Shipment",
							mp_shipment_iw9_xmas: "Shipment",
							mp_futbol: "Al Easima Field",
							mp_museum: "Valderas Museum",
							mp_sealion: "Ashika Island",
							mp_saba2: "Al Mazrah",
							mp_observatory: "Dome",
							mp_observe_gw: "Zaya Observatory",
							mp_regional_gw: "Al Malik International",
							mp_bio_lab: "Bio Labs",
							mp_davos: "Himmelmatt Expo",
							mp_skerries_v2: "Pelayo's Lighthouse",
							mp_m_alley: "Alley",
							mp_m_blacksite2: "Blacksite",
							mp_m_exhibit: "Exhibit",
							mp_oilfield_6v6: "Black Gold",
							mp_oilfield_gw: "Rohan Oilfields",
							mp_caves_gw: "Sattiq Cave Complex"
						},
						russian_full: {
							mp_saba: "Al Mazrah",
							mp_fort: "El Bagra Fortress",
							mp_embassy: "Embassy",
							mp_hydro: "Zarqwa Hydroelectric",
							mp_wartorn: "Taraq",
							mp_wartorn_gw: "Taraq",
							mp_fishtown_gw: "Sarrif Bay",
							mp_sira_gw: "Sa'id",
							mp_crossing: "Santa Seña Border Crossing",
							mp_catedral: "El Asilo ",
							mp_swap_meet: "Mercado  Las Almas ",
							mp_nogales_gw2: "Santa Seña",
							mp_historic_gw2: "Guijarro",
							mp_grandprix_pm_2: "Crown Raceway",
							mp_luxury: "Breenbergh Hotel",
							mp_farm_18: "Farm 18",
							mp_shoothouse2: "Shoot House",
							mp_shipment_iw9: "Shipment",
							mp_shipment_iw9_xmas: "Shipment",
							mp_futbol: "Al Easima Field",
							mp_museum: "Valderas Museum",
							mp_sealion: "Ashika Island",
							mp_saba2: "Al Mazrah",
							mp_observatory: "Dome",
							mp_observe_gw: "Zaya Observatory",
							mp_regional_gw: "Al Malik International",
							mp_bio_lab: "Bio Labs",
							mp_davos: "Himmelmatt Expo",
							mp_skerries_v2: "Pelayo's Lighthouse",
							mp_m_alley: "Alley",
							mp_m_blacksite2: "Blacksite",
							mp_m_exhibit: "Exhibit",
							mp_oilfield_6v6: "Black Gold",
							mp_oilfield_gw: "Rohan Oilfields",
							mp_caves_gw: "Sattiq Cave Complex"
						},
						simplified_chinese: {
							mp_saba: "Al Mazrah",
							mp_fort: "阿尔巴格莱城堡",
							mp_embassy: "大使馆",
							mp_hydro: "扎克瓦水电站",
							mp_wartorn: "塔拉克",
							mp_wartorn_gw: "塔拉克",
							mp_fishtown_gw: "沙里夫海湾",
							mp_sira_gw: "萨伊德",
							mp_crossing: "圣塔西娜越境点",
							mp_catedral: "避难所",
							mp_swap_meet: "拉斯阿玛斯市场",
							mp_nogales_gw2: "圣塔西娜",
							mp_historic_gw2: "吉哈罗",
							mp_grandprix_pm_2: "王冠赛车场",
							mp_luxury: "布林伯格酒店",
							mp_farm_18: "18号农场",
							mp_shoothouse2: "训练场",
							mp_shipment_iw9: "混战码头",
							mp_shipment_iw9_xmas: "混战码头",
							mp_futbol: "Al Easima Field",
							mp_museum: "巴尔德拉斯博物馆",
							mp_sealion: "Ashika Island",
							mp_saba2: "马兹拉",
							mp_observatory: "查亚观察站",
							mp_observe_gw: "观察哨",
							mp_regional_gw: "Al Malik International",
							mp_bio_lab: "Bio Labs",
							mp_davos: "Himmelmatt Expo",
							mp_skerries_v2: "佩拉约灯塔",
							mp_m_alley: "小巷",
							mp_m_blacksite2: "秘密据点",
							mp_m_exhibit: "展览馆",
							mp_oilfield_6v6: "黑色黄金",
							mp_oilfield_gw: "洛翰炼油厂",
							mp_caves_gw: "萨提克岩洞"
						},
						traditional_chinese: {
							mp_saba: "阿瑪茲拉",
							mp_fort: "巴格拉堡壘",
							mp_embassy: "大使館攻防",
							mp_hydro: "扎垮水力發電廠",
							mp_wartorn: "塔拉克",
							mp_wartorn_gw: "塔拉克",
							mp_fishtown_gw: "薩里夫海灣",
							mp_sira_gw: "薩伊德",
							mp_crossing: "聖塔塞納邊界",
							mp_catedral: "庇護所",
							mp_swap_meet: "拉阿瑪斯市集",
							mp_nogales_gw2: "聖塔塞納",
							mp_historic_gw2: "吉亞羅",
							mp_grandprix_pm_2: "王冠賽道",
							mp_luxury: "布倫伯格飯店",
							mp_farm_18: "18號農場",
							mp_shoothouse2: "攻堅練習場",
							mp_shipment_iw9: "裝卸貨場",
							mp_shipment_iw9_xmas: "裝卸貨場",
							mp_futbol: "Al Easima Field",
							mp_museum: "瓦爾德拉斯博物館",
							mp_sealion: "海獅島",
							mp_saba2: "阿瑪茲拉",
							mp_observatory: "扎亞天文台",
							mp_observe_gw: "觀察區",
							mp_regional_gw: "Al Malik International",
							mp_bio_lab: "Bio Labs",
							mp_davos: "Himmelmatt Expo",
							mp_skerries_v2: "佩拉約燈塔",
							mp_m_alley: "巷弄。",
							mp_m_blacksite2: "黑獄",
							mp_m_exhibit: "展覽館",
							mp_oilfield_6v6: "油田",
							mp_oilfield_gw: "洛漢油井",
							mp_caves_gw: "沙迪克洞穴"
						},
						korean_full: {
							mp_saba: "알 마즈라",
							mp_fort: "알 바그라 요새",
							mp_embassy: "대사관",
							mp_hydro: "자르콰 수력발전소",
							mp_wartorn: "타라크",
							mp_wartorn_gw: "타라크",
							mp_fishtown_gw: "사리프 베이",
							mp_sira_gw: "사이드",
							mp_crossing: "산타 세나 국경 교차로",
							mp_catedral: "엘 아실로",
							mp_swap_meet: "메르카도 라스 알마스",
							mp_nogales_gw2: "산타 세나",
							mp_historic_gw2: "기하로",
							mp_grandprix_pm_2: "크라운 경주로",
							mp_luxury: "브린버그 호텔",
							mp_farm_18: "18번 농장",
							mp_shoothouse2: "사격장",
							mp_shipment_iw9: "적하장",
							mp_shipment_iw9_xmas: "적하장",
							mp_futbol: "Al Easima Field",
							mp_museum: "발데라스 박물관",
							mp_sealion: "아쉬카 섬",
							mp_saba2: "알 마즈라",
							mp_observatory: "자야 관측소",
							mp_observe_gw: "전망대",
							mp_regional_gw: "Al Malik International",
							mp_bio_lab: "Bio Labs",
							mp_davos: "Himmelmatt Expo",
							mp_skerries_v2: "펠라요 등대",
							mp_m_alley: "통로",
							mp_m_blacksite2: "블랙사이트",
							mp_m_exhibit: "전시실",
							mp_oilfield_6v6: "블랙 골드",
							mp_oilfield_gw: "로한 유정",
							mp_caves_gw: "사티크 동굴 단지"
						}
					},
					w = {
						english: {
							war: "Team Deathmatch",
							gwtdm: "Invasion",
							rescue: "Prisoner rescue",
							gwbomb: "Charge",
							cyber: "Cyber Attack",
							dom: "Domination",
							sd: "Search and Destroy",
							hq: "Headquarters",
							dm: "Free-for-All",
							arena: "Gunfight",
							gun_fight: "Gunfight",
							koth: "Hardpoint",
							ctf: "Capture the flag",
							conf: "Kill Confirmed",
							control: "Control",
							bounty: "Bounty",
							rugby: "Onslaught",
							dd: "Demolition",
							grind: "Grind",
							grind_tier_1: "Grind Hardcore",
							infect: "Infected",
							gun: "Gun Game",
							grnd: "Drop Zone",
							grnd_tier_1: "Drop Zone Hardcore",
							ko: "Knock Out",
							tjugg: "Team Defender",
							arm: "Ground War",
							dmz: "DMZ",
							br: "Battle Royale",
							war_hc: "Hardcore Team Deathmatch",
							dom_hc: "Hardcore Domination",
							sd_hc: "Hardcore Search and Destroy",
							koth_hc: "Hardcore Hardpoint",
							hq_hc: "Hardcore Headquarters",
							conf_hc: "Hardcore Kill Confirmed",
							dm_hc: "Hardcore Free-for-All",
							control_hc: "Hardcore Control",
							ballmode: "Warzone Cup",
							"PLAYLIST/BR_QUADS": "Battle Royale Quads",
							"PLAYLIST/BR_DUOS": "Battle Royale Duos",
							"PLAYLIST/BR_TRIOS": "Battle Royale Trios",
							"PLAYLIST/BR_SOLOS": "Battle Royale Solos",
							"PLAYLIST/TTSBR": "Totally the Same BR",
							"PLAYLIST/PLUNQUAD_NAME": "Plunder Quads",
							"PLAYLIST/BR_SEALION_RESURGENCE_DUOS": "Resurgence Duos",
							"PLAYLIST/BR_SEALION_RESURGENCE_TRIOS": "Resurgence Trios",
							"PLAYLIST/BR_SEALION_RESURGENCE_SOLOS": "Resurgence Solos",
							"PLAYLIST/BR_SEALION_RESURGENCE_QUADS": "Resurgence Quads",
							"PLAYLIST/MINITRIOS_NAME": "MINI ROYALE TRIOS",
							"PLAYLIST/BR_UNHINGED_SOLO": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_SOLOS": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_DUOS": "Unhinged BR Duos",
							"PLAYLIST/BR_UNHINGED_TRIOS": "Unhinged BR Trios",
							"PLAYLIST/BR_UNHINGED_QUADS": "Unhinged BR Quads",
							cyber_hc: "Cyber Attack Hardcore",
							bounty_hc: "Bounty Hardcore",
							grind_hc: "Grind Hardcore",
							grnd_hc: "Drop Zone Hardcore",
							infect_hc: "Infected Hardcore",
							oic: "One in the Chamber",
							aon: "All Or Nothing",
							"sea lion dmz trios": "Ashika Island DMZ"
						},
						arabic: {
							war: "مباراة جماعية",
							gwtdm: "Invasion",
							rescue: "إنقاذ الرهينة",
							gwbomb: "Charge",
							cyber: "الهجوم المعلوماتي",
							dom: "السيطرة",
							sd: "البحث والتدمير",
							hq: "المقرات",
							dm: "كل لاعب لنفسه",
							arena: "المواجهة النارية",
							gun_fight: "المواجهة النارية",
							koth: "النقطة المتنقلة",
							ctf: "Capture the flag",
							conf: "تأكيد القتل",
							control: "الهيمنة",
							bounty: "الجائزة",
							rugby: "رغبي",
							dd: "التفجير",
							grind: "جمع القلادات",
							grind_tier_1: "جمع القلادات - شديد",
							infect: "العدوى",
							gun: "لعبة الأسلحة",
							grnd: "منطقة الإنزال",
							grnd_tier_1: "منطقة الإنزال - شديد",
							ko: "الضربة القاضية",
							tjugg: "حماية الراية",
							arm: "حرب برية",
							dmz: "منطقة منزوعة السلاح",
							br: "باتل رويال",
							war_hc: "مباراة جماعية - شديد",
							dom_hc: "السيطرة - شديد",
							sd_hc: "البحث والتدمير - شديد",
							koth_hc: "النقطة المتنقلة شديد",
							hq_hc: "المقرات - شديد",
							conf_hc: "تأكيد القتل - شديد",
							dm_hc: "كل لاعب لنفسه - شديد",
							control_hc: "الهيمنة - شديد",
							ballmode: "كأس Warzone",
							"PLAYLIST/BR_QUADS": "باتل رويال - رباعيات",
							"PLAYLIST/BR_DUOS": "باتل رويال - ثنائيات",
							"PLAYLIST/BR_TRIOS": "باتل رويال - ثلاثيات",
							"PLAYLIST/BR_SOLOS": "باتل رويال - فردي",
							"PLAYLIST/TTSBR": "Totally the Same BR",
							"PLAYLIST/PLUNQUAD_NAME": "الغنيمة - رباعيات",
							"PLAYLIST/BR_SEALION_RESURGENCE_DUOS": "انبعاث - ثنائيات",
							"PLAYLIST/BR_SEALION_RESURGENCE_TRIOS": "انبعاث - ثلاثيات",
							"PLAYLIST/BR_SEALION_RESURGENCE_SOLOS": "انبعاث - فردي",
							"PLAYLIST/BR_SEALION_RESURGENCE_QUADS": "انبعاث - رباعيات",
							"PLAYLIST/MINITRIOS_NAME": "رويال مصغّر - ثلاثيات",
							"PLAYLIST/BR_UNHINGED_SOLO": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_SOLOS": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_DUOS": "Unhinged BR Duos",
							"PLAYLIST/BR_UNHINGED_TRIOS": "Unhinged BR Trios",
							"PLAYLIST/BR_UNHINGED_QUADS": "Unhinged BR Quads",
							cyber_hc: "الهجوم المعلوماتي شديد",
							bounty_hc: "الجائزة - شديد",
							grind_hc: "جمع القلادات - شديد",
							grnd_hc: "منطقة الإنزال - شديد",
							oic: "طلقة واحدة في المخزن",
							aon: "كل شيء أو لا شيء",
							"sea lion dmz trios": "آشقة آيلاند - DMZ"
						},
						dutch: {
							war: "TEAM DEATHMATCH",
							gwtdm: "Invasion",
							rescue: "Prisoner Rescue",
							gwbomb: "Charge",
							cyber: "Cyber Attack",
							dom: "Domination",
							sd: "Search and Destroy",
							hq: "Headquarters",
							dm: "Free-for-All",
							arena: "Gunfight",
							gun_fight: "Gunfight",
							koth: "Hardpoint",
							ctf: "Capture the flag",
							conf: "Kill Confirmed",
							control: "Control",
							bounty: "Bounty",
							rugby: "Onslaught",
							dd: "Demolition",
							grind: "Grind",
							grind_tier_1: "Grind Hardcore",
							infect: "Infected",
							gun: "Gun Game",
							grnd: "Drop Zone",
							grnd_tier_1: "Drop Zone Hardcore",
							ko: "Knock Out",
							tjugg: "Team Defender",
							arm: "Grondoorlog",
							dmz: "DMZ",
							br: "Battle Royale",
							war_hc: "Hardcore-Team-Deathmatch",
							dom_hc: "Hardcore Domination",
							sd_hc: "Hardcore Search and Destroy",
							koth_hc: "Hardcore Hardpoint",
							hq_hc: "Hardcore Headquarters",
							conf_hc: "Hardcore Kill Confirmed",
							dm_hc: "Hardcore Free-for-All",
							control_hc: "Hardcore Control",
							ballmode: "Warzone Cup",
							"PLAYLIST/BR_QUADS": "Battle Royale Quads",
							"PLAYLIST/BR_DUOS": "Battle Royale Duos",
							"PLAYLIST/BR_TRIOS": "Battle Royale Trios",
							"PLAYLIST/BR_SOLOS": "Battle Royale Solos",
							"PLAYLIST/TTSBR": "Totally the Same BR",
							"PLAYLIST/PLUNQUAD_NAME": "Plunder Quads",
							"PLAYLIST/BR_SEALION_RESURGENCE_DUOS": "Resurgence Duos",
							"PLAYLIST/BR_SEALION_RESURGENCE_TRIOS": "Resurgence Trios",
							"PLAYLIST/BR_SEALION_RESURGENCE_SOLOS": "Resurgence Solos",
							"PLAYLIST/BR_SEALION_RESURGENCE_QUADS": "Resurgence Quads",
							"PLAYLIST/MINITRIOS_NAME": "MINI ROYALE TRIOS",
							"PLAYLIST/BR_UNHINGED_SOLO": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_SOLOS": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_DUOS": "Unhinged BR Duos",
							"PLAYLIST/BR_UNHINGED_TRIOS": "Unhinged BR Trios",
							"PLAYLIST/BR_UNHINGED_QUADS": "Unhinged BR Quads",
							cyber_hc: "Cyber Attack Hardcore",
							bounty_hc: "Bounty Hardcore",
							grind_hc: "Grind Hardcore",
							grnd_hc: "Drop Zone Hardcore",
							infect_hc: "Infected Hardcore",
							oic: "One in the Chamber",
							aon: "All Or Nothing",
							"sea lion dmz trios": "Ashika Island DMZ"
						},
						french: {
							war: "Match à mort par équipe",
							gwtdm: "Invasion",
							rescue: "Libération de prisonniers",
							gwbomb: "Charge",
							cyber: "Cyberattaque",
							dom: "Domination",
							sd: "Recherche et destruction",
							hq: "Quartier général",
							dm: "Mêlée générale",
							arena: "Jeu d'armes",
							gun_fight: "Jeu d'armes",
							koth: "Point stratégique",
							ctf: "Capture the flag",
							conf: "Élimination confirmée",
							control: "Contrôle",
							bounty: "Prime",
							rugby: "Rugby",
							dd: "Démolition",
							grind: "Dépôt",
							grind_tier_1: "Dépôt Hardcore",
							infect: "Infectés",
							gun: "Jeu d'armes",
							grnd: "Zone de largage",
							grnd_tier_1: "Zone de largage Hardcore",
							ko: "K.O.",
							tjugg: "Défenseur en équipe",
							arm: "Guerre terrestre",
							dmz: "DMZ",
							br: "Battle Royale",
							war_hc: "MME Hardcore",
							dom_hc: "Domination Hardcore",
							sd_hc: "Recherche et destruction Hardcore",
							koth_hc: "Point stratégique Hardcore",
							hq_hc: "Quartier général Hardcore",
							conf_hc: "Élim. confirmée Hardcore",
							dm_hc: "Mêlée générale Hardcore",
							control_hc: "Contrôle Hardcore",
							ballmode: "Coupe Warzone",
							"PLAYLIST/BR_QUADS": "Battle Royale en quatuor",
							"PLAYLIST/BR_DUOS": "Battle Royale en duo",
							"PLAYLIST/BR_TRIOS": "Battle Royale en trio",
							"PLAYLIST/BR_SOLOS": "Battle Royale en solo",
							"PLAYLIST/TTSBR": "Totally the Same BR",
							"PLAYLIST/PLUNQUAD_NAME": "Pillage en quatuor",
							"PLAYLIST/BR_SEALION_RESURGENCE_DUOS": "Résurgence en duo",
							"PLAYLIST/BR_SEALION_RESURGENCE_TRIOS": "Résurgence en trio",
							"PLAYLIST/BR_SEALION_RESURGENCE_SOLOS": "Résurgence en solo",
							"PLAYLIST/BR_SEALION_RESURGENCE_QUADS": "Résurgence en quatuor",
							"PLAYLIST/MINITRIOS_NAME": "Mini Royale en trio",
							"PLAYLIST/BR_UNHINGED_SOLO": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_SOLOS": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_DUOS": "Unhinged BR Duos",
							"PLAYLIST/BR_UNHINGED_TRIOS": "Unhinged BR Trios",
							"PLAYLIST/BR_UNHINGED_QUADS": "Unhinged BR Quads",
							cyber_hc: "Cyberattaque Hardcore",
							bounty_hc: "Prime Hardcore",
							grind_hc: "Dépôt Hardcore",
							grnd_hc: "Zone de largage Hardcore",
							oic: "Une balle chargée",
							aon: "Quitte ou Double",
							"sea lion dmz trios": "DMZ sur Ashika Island"
						},
						german: {
							war: "TEAM-DEATHMATCH",
							gwtdm: "Invasion",
							rescue: "GEFANGENENRETTUNG",
							gwbomb: "Charge",
							cyber: "CYBERANGRIFF",
							dom: "HERRSCHAFT",
							sd: "SUCHEN UND ZERSTÖREN",
							hq: "HAUPTQUARTIER",
							dm: "FREI FÜR ALLE",
							arena: "Feuergefecht",
							gun_fight: "Feuergefecht",
							koth: "STELLUNG",
							ctf: "Capture the flag",
							conf: "ABSCHUSS BESTÄTIGT",
							control: "KONTROLLE",
							bounty: "KOPFGELD",
							rugby: "RUGBY",
							dd: "SPRENGKOMMANDO",
							grind: "GELIEFERT",
							grind_tier_1: "Hardcore-Geliefert",
							infect: "INFIZIERT",
							gun: "WAFFENSPIEL",
							grnd: "ABWURFZONE",
							grnd_tier_1: "Hardcore-Abwurfzone",
							ko: "KNOCK-OUT",
							tjugg: "Team-Verteidiger",
							arm: "Bodenkrieg",
							dmz: "DMZ",
							br: "Battle Royale",
							war_hc: "Hardcore-Team-Deathmatch",
							dom_hc: "Hardcore-Herrschaft",
							sd_hc: "Hardcore-Suchen und Zerstören",
							koth_hc: "Hardcore-Stellung",
							hq_hc: "Hardcore-Hauptquartier",
							conf_hc: "Hardcore-Abschuss bestätigt",
							dm_hc: "Hardcore-Frei für alle",
							control_hc: "Hardcore-Kontrolle",
							ballmode: "Warzone-Pokal",
							"PLAYLIST/BR_QUADS": "Battle Royale 4er",
							"PLAYLIST/BR_DUOS": "Battle Royale 2er",
							"PLAYLIST/BR_TRIOS": "Battle Royale 3er",
							"PLAYLIST/BR_SOLOS": "Battle Royale-Einzel",
							"PLAYLIST/TTSBR": "Totally the Same BR",
							"PLAYLIST/PLUNQUAD_NAME": "Beutegeld 4er",
							"PLAYLIST/BR_SEALION_RESURGENCE_DUOS": "Wiederauferstehung 2er",
							"PLAYLIST/BR_SEALION_RESURGENCE_TRIOS": "Wiederauferstehung 3er",
							"PLAYLIST/BR_SEALION_RESURGENCE_SOLOS": "Wiederauferstehung Einzel",
							"PLAYLIST/BR_SEALION_RESURGENCE_QUADS": "Wiederauferstehung 4er",
							"PLAYLIST/MINITRIOS_NAME": "MINI ROYALE-3ER",
							"PLAYLIST/BR_UNHINGED_SOLO": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_SOLOS": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_DUOS": "Unhinged BR Duos",
							"PLAYLIST/BR_UNHINGED_TRIOS": "Unhinged BR Trios",
							"PLAYLIST/BR_UNHINGED_QUADS": "Unhinged BR Quads",
							cyber_hc: "Hardcore-Cyberangriff",
							bounty_hc: "Hardcore-Kopfgeld",
							grind_hc: "Hardcore-Geliefert",
							grnd_hc: "Hardcore-Abwurfzone",
							oic: "Eine im Lauf",
							aon: "Alles oder Nichts",
							"sea lion dmz trios": "Ashika Island - DMZ"
						},
						italian: {
							war: "DEATHMATCH A SQUADRE",
							gwtdm: "Invasion",
							rescue: "SOCCORSO PRIGIONIERI",
							gwbomb: "Charge",
							cyber: "ATTACCO INFORMATICO",
							dom: "DOMINIO",
							sd: "CERCA E DISTRUGGI",
							hq: "QUARTIER GENERALE",
							dm: "TUTTI CONTRO TUTTI",
							arena: "Scontro",
							gun_fight: "Scontro",
							koth: "POSTAZIONE",
							ctf: "Capture the flag",
							conf: "UCCISIONE CONFERMATA",
							control: "CONTROLLO",
							bounty: "TAGLIA",
							rugby: "RUGBY",
							dd: "DEMOLIZIONE",
							grind: "AVVOLTOIO",
							grind_tier_1: "Avvoltoio Veterano",
							infect: "INFEZIONE",
							gun: "GIOCO DELLE ARMI",
							grnd: "ZONA DI LANCIO",
							grnd_tier_1: "Zona di lancio Veterano",
							ko: "KNOCK OUT",
							tjugg: "Difensore a squadre",
							arm: "Guerra terrestre",
							dmz: "DMZ",
							br: "Battle Royale",
							war_hc: "DM A SQUADRE VETERANO",
							dom_hc: "Dominio Veterano",
							sd_hc: "Cerca e distruggi Veterano",
							koth_hc: "Postazione Veterano",
							hq_hc: "Quartier generale Veterano",
							conf_hc: "UCC. CONFERMATA VETERANO",
							dm_hc: "Tutti contro tutti Veterano",
							control_hc: "Controllo Veterano",
							ballmode: "Coppa Warzone",
							"PLAYLIST/BR_QUADS": "Battle Royale - Quartetti",
							"PLAYLIST/BR_DUOS": "Battle Royale - Coppie",
							"PLAYLIST/BR_TRIOS": "Battle Royale - Terzetti",
							"PLAYLIST/BR_SOLOS": "Battle Royale Singolo",
							"PLAYLIST/TTSBR": "Totally the Same BR",
							"PLAYLIST/PLUNQUAD_NAME": "Malloppo quartetti",
							"PLAYLIST/BR_SEALION_RESURGENCE_DUOS": "Ritorno - Coppie",
							"PLAYLIST/BR_SEALION_RESURGENCE_TRIOS": "Ritorno - Terzetti",
							"PLAYLIST/BR_SEALION_RESURGENCE_SOLOS": "Ritorno - Singolo",
							"PLAYLIST/BR_SEALION_RESURGENCE_QUADS": "Ritorno - Quartetti",
							"PLAYLIST/MINITRIOS_NAME": "MINI ROYALE - TERZETTI",
							"PLAYLIST/BR_UNHINGED_SOLO": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_SOLOS": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_DUOS": "Unhinged BR Duos",
							"PLAYLIST/BR_UNHINGED_TRIOS": "Unhinged BR Trios",
							"PLAYLIST/BR_UNHINGED_QUADS": "Unhinged BR Quads",
							cyber_hc: "Attacco informatico Veterano",
							bounty_hc: "Taglia Veterano",
							grind_hc: "Avvoltoio Veterano",
							grnd_hc: "Zona di lancio Veterano",
							oic: "Un colpo in canna",
							aon: "Tutto o niente",
							"sea lion dmz trios": "Ashika Island DMZ"
						},
						japanese_full: {
							war: "チームデスマッチ",
							gwtdm: "Invasion",
							rescue: "ホステージレスキュー",
							gwbomb: "Charge",
							cyber: "サイバーアタック",
							dom: "ドミネーション",
							sd: "サーチ・アンド・デストロイ",
							hq: "ヘッドクォーター",
							dm: "フリー・フォー・オール",
							arena: "ガンファイト",
							gun_fight: "ガンファイト",
							koth: "ハードポイント",
							ctf: "Capture the flag",
							conf: "キルコンファーム",
							control: "コントロール",
							bounty: "バウンティ",
							rugby: "ラグビー",
							dd: "デモリション",
							grind: "グラインド",
							grind_tier_1: "グラインド・ハードコア",
							infect: "インフェクテッド",
							gun: "ガンゲーム",
							grnd: "ドロップゾーン",
							grnd_tier_1: "ドロップゾーン・ハードコア",
							ko: "ノックアウト",
							tjugg: "チームディフェンダー",
							arm: "グラウンドウォー",
							dmz: "DMZ",
							br: "バトルロイヤル",
							war_hc: "ハードコア・チーム・デスマッチ",
							dom_hc: "ハードコア・ドミネーション",
							sd_hc: "ハードコア・サーチ・アンド・デストロイ",
							koth_hc: "ハードポイント・ハードコア",
							hq_hc: "ハードコア・ヘッドクォーター",
							conf_hc: "ハードコア・キルコンファーム",
							dm_hc: "ハードコア・フリー・フォー・オール",
							control_hc: "ハードコア・コントロール",
							ballmode: "Warzoneカップ",
							"PLAYLIST/BR_QUADS": "バトルロイヤル・クアッド",
							"PLAYLIST/BR_DUOS": "バトルロイヤル・デュオ",
							"PLAYLIST/BR_TRIOS": "バトルロイヤル・トリオ",
							"PLAYLIST/BR_SOLOS": "バトルロイヤル・ソロ",
							"PLAYLIST/TTSBR": "Totally the Same BR",
							"PLAYLIST/PLUNQUAD_NAME": "プランダー クアッド",
							"PLAYLIST/BR_SEALION_RESURGENCE_DUOS": "リサージェンス・デュオ",
							"PLAYLIST/BR_SEALION_RESURGENCE_TRIOS": "リサージェンス・トリオ",
							"PLAYLIST/BR_SEALION_RESURGENCE_SOLOS": "リサージェンス・ソロ",
							"PLAYLIST/BR_SEALION_RESURGENCE_QUADS": "リサージェンス・クアッド",
							"PLAYLIST/MINITRIOS_NAME": "ミニ・ロイヤル・トリオ",
							"PLAYLIST/BR_UNHINGED_SOLO": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_SOLOS": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_DUOS": "Unhinged BR Duos",
							"PLAYLIST/BR_UNHINGED_TRIOS": "Unhinged BR Trios",
							"PLAYLIST/BR_UNHINGED_QUADS": "Unhinged BR Quads",
							cyber_hc: "サイバーアタック・ハードコア",
							bounty_hc: "バウンティ・ハードコア",
							grind_hc: "グラインド・ハードコア",
							grnd_hc: "ドロップゾーン・ハードコア",
							oic: "ワン・イン・ザ・チャンバー",
							aon: "オール・オア・ナッシング",
							"sea lion dmz trios": "アシカアイランド DMZ"
						},
						spanish: {
							war: "Duelo por equipos",
							gwtdm: "Invasion",
							rescue: "Rescate de prisioneros",
							gwbomb: "Charge",
							cyber: "Ataque cibernético",
							dom: "Dominio",
							sd: "Buscar y destruir",
							hq: "Cuartel general",
							dm: "Contra todos",
							arena: "Tiroteo",
							gun_fight: "Tiroteo",
							koth: "Punto caliente",
							ctf: "Capture the flag",
							conf: "Baja confirmada",
							control: "Control",
							bounty: "Recompensa",
							rugby: "Rugby",
							dd: "Demolición",
							grind: "Trajín",
							grind_tier_1: "Trajín extremo",
							infect: "Infectado",
							gun: "Juego de armas",
							grnd: "Zona de lanzamiento",
							grnd_tier_1: "Zona de lanzamiento extremo",
							ko: "Noqueo",
							tjugg: "Defensor por equipos",
							arm: "Guerra terrestre",
							dmz: "DMZ",
							br: "Battle Royale",
							war_hc: "Duelo por equipos extremo",
							dom_hc: "Dominio extremo",
							sd_hc: "Buscar y destruir extremo",
							koth_hc: "Punto caliente extremo",
							hq_hc: "Cuartel general extremo",
							conf_hc: "Baja confirmada extremo",
							dm_hc: "Contra todos extremo",
							control_hc: "Control extremo",
							ballmode: "Copa de Warzone",
							"PLAYLIST/BR_QUADS": "Battle Royale - Cuartetos",
							"PLAYLIST/BR_DUOS": "Battle Royale - Dúos",
							"PLAYLIST/BR_TRIOS": "Battle Royale - Tríos",
							"PLAYLIST/BR_SOLOS": "Battle Royale Individuales",
							"PLAYLIST/TTSBR": "Totally the Same BR",
							"PLAYLIST/PLUNQUAD_NAME": "Botín - Cuartetos",
							"PLAYLIST/BR_SEALION_RESURGENCE_DUOS": "Resurgimiento - Dúos",
							"PLAYLIST/BR_SEALION_RESURGENCE_TRIOS": "Resurgimiento - Tríos",
							"PLAYLIST/BR_SEALION_RESURGENCE_SOLOS": "Resurgimiento - Individual",
							"PLAYLIST/BR_SEALION_RESURGENCE_QUADS": "Resurgimiento - Cuartetos",
							"PLAYLIST/MINITRIOS_NAME": "ROYALE MINI - TRÍOS",
							"PLAYLIST/BR_UNHINGED_SOLO": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_SOLOS": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_DUOS": "Unhinged BR Duos",
							"PLAYLIST/BR_UNHINGED_TRIOS": "Unhinged BR Trios",
							"PLAYLIST/BR_UNHINGED_QUADS": "Unhinged BR Quads",
							cyber_hc: "Ataque cibernético extremo",
							bounty_hc: "Recompensa extremo",
							grind_hc: "Trajín extremo",
							grnd_hc: "Zona de lanzamiento extremo",
							oic: "Una en la recámara",
							aon: "Todo o nada",
							"sea lion dmz trios": "Ashika Island DMZ"
						},
						spanishna: {
							war: "Duelo por equipos",
							gwtdm: "Invasion",
							rescue: "Rescate de prisioneros",
							gwbomb: "Charge",
							cyber: "Ciberataque",
							dom: "Dominio",
							sd: "Buscar y destruir",
							hq: "Cuartel general",
							dm: "Contra todos",
							arena: "Tiroteo",
							gun_fight: "Tiroteo",
							koth: "Punto caliente",
							ctf: "Capture the flag",
							conf: "Baja confirmada",
							control: "Control",
							bounty: "Recompensa",
							rugby: "Rugby",
							dd: "Demolición",
							grind: "Trabajo duro",
							grind_tier_1: "Trabajo duro extremo",
							infect: "Infectado",
							gun: "Juego de armas",
							grnd: "Zona de descenso",
							grnd_tier_1: "Zona de descenso extremo",
							ko: "Nocaut",
							tjugg: "Defensor por equipos",
							arm: "Guerra terrestre",
							dmz: "DMZ",
							br: "Battle Royale",
							war_hc: "Duelo por equipos extremo",
							dom_hc: "Dominio extremo",
							sd_hc: "Buscar y destruir extremo",
							koth_hc: "PUNTO CALIENTE EXTREMO",
							hq_hc: "Cuartel General extremo",
							conf_hc: "Baja confirmada extremo",
							dm_hc: "Contra todos extremo",
							control_hc: "Control extremo",
							ballmode: "Copa Warzone",
							"PLAYLIST/BR_QUADS": "Battle Royale - Cuartetos",
							"PLAYLIST/BR_DUOS": "Battle Royale - Dúos",
							"PLAYLIST/BR_TRIOS": "Battle Royale - Tríos",
							"PLAYLIST/BR_SOLOS": "Battle Royale - Individual",
							"PLAYLIST/TTSBR": "Totally the Same BR",
							"PLAYLIST/PLUNQUAD_NAME": "Botín - Cuartetos",
							"PLAYLIST/BR_SEALION_RESURGENCE_DUOS": "Resurgimiento - Dúos",
							"PLAYLIST/BR_SEALION_RESURGENCE_TRIOS": "Resurgimiento - Tríos",
							"PLAYLIST/BR_SEALION_RESURGENCE_SOLOS": "Resurgimiento - Individual",
							"PLAYLIST/BR_SEALION_RESURGENCE_QUADS": "Resurgimiento - Cuartetos",
							"PLAYLIST/MINITRIOS_NAME": "ROYALE MINI - TRÍOS",
							"PLAYLIST/BR_UNHINGED_SOLO": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_SOLOS": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_DUOS": "Unhinged BR Duos",
							"PLAYLIST/BR_UNHINGED_TRIOS": "Unhinged BR Trios",
							"PLAYLIST/BR_UNHINGED_QUADS": "Unhinged BR Quads",
							cyber_hc: "CIBERATAQUE EXTREMO",
							bounty_hc: "Recompensa extremo",
							grind_hc: "Trabajo duro extremo",
							grnd_hc: "Zona de descenso extremo",
							oic: "UNA EN LA RECÁMARA",
							aon: "TODO O NADA",
							"sea lion dmz trios": "DMZ en Isla Ashika"
						},
						polish_full: {
							war: "DEATHMATCH DRUŻYNOWY",
							gwtdm: "Invasion",
							rescue: "RATUNEK WIĘŹNIA",
							gwbomb: "Charge",
							cyber: "CYBERATAK",
							dom: "DOMINACJA",
							sd: "ZNAJDŹ I ZNISZCZ",
							hq: "SZTAB",
							dm: "DEATHMATCH",
							arena: "Strzelanina",
							gun_fight: "Strzelanina",
							koth: "UMOCNIONY PUNKT",
							ctf: "Capture the flag",
							conf: "ZABÓJSTWO POTWIERDZONE",
							control: "KONTROLA",
							bounty: "ZLECENIE",
							rugby: "RUGBY",
							dd: "DEMOLKA",
							grind: "KIERAT",
							grind_tier_1: "Kierat – Hardcore",
							infect: "ZARAŻONY",
							gun: "ZABAWA BRONIĄ",
							grnd: "STREFA ZRZUTU",
							grnd_tier_1: "Strefa Zrzutu – Hardcore",
							ko: "NOKAUT",
							tjugg: "Obrońca drużyny",
							arm: "Wojna naziemna",
							dmz: "DMZ",
							br: "Battle Royale",
							war_hc: "Deathmatch drużynowy – Hardcore",
							dom_hc: "Dominacja – Hardcore",
							sd_hc: "Znajdź i zniszcz – Hardcore",
							koth_hc: "UMOCNIONY PUNKT – HARDCORE",
							hq_hc: "Sztab – Hardcore",
							conf_hc: "Zabójstwo potwierdzone – Hardcore",
							dm_hc: "Deathmatch – Hardcore",
							control_hc: "Kontrola – Hardcore",
							ballmode: "Puchar Warzone",
							"PLAYLIST/BR_QUADS": "Battle Royale – Czwórki",
							"PLAYLIST/BR_DUOS": "Battle Royale – Dwójki",
							"PLAYLIST/BR_TRIOS": "Battle Royale – Trójki",
							"PLAYLIST/BR_SOLOS": "Battle Royale – Solo",
							"PLAYLIST/TTSBR": "Totally the Same BR",
							"PLAYLIST/PLUNQUAD_NAME": "Grabież – Czwórki",
							"PLAYLIST/BR_SEALION_RESURGENCE_DUOS": "Odnowa – Dwójki",
							"PLAYLIST/BR_SEALION_RESURGENCE_TRIOS": "Odnowa – Trójki",
							"PLAYLIST/BR_SEALION_RESURGENCE_SOLOS": "Odnowa – Solo",
							"PLAYLIST/BR_SEALION_RESURGENCE_QUADS": "Odnowa – Czwórki",
							"PLAYLIST/MINITRIOS_NAME": "MINI ROYALE – TRÓJKI",
							"PLAYLIST/BR_UNHINGED_SOLO": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_SOLOS": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_DUOS": "Unhinged BR Duos",
							"PLAYLIST/BR_UNHINGED_TRIOS": "Unhinged BR Trios",
							"PLAYLIST/BR_UNHINGED_QUADS": "Unhinged BR Quads",
							cyber_hc: "CYBERATAK – HARDCORE",
							bounty_hc: "Zlecenie - Hardcore",
							grind_hc: "Kierat – Hardcore",
							grnd_hc: "Strefa Zrzutu – Hardcore",
							oic: "JEDEN W KOMORZE",
							aon: "WSZYSTKO ALBO NIC",
							"sea lion dmz trios": "Ashika Island DMZ"
						},
						portuguese: {
							war: "TEAM DEATHMATCH",
							gwtdm: "Invasion",
							rescue: "Prisoner rescue",
							gwbomb: "Charge",
							cyber: "Cyber Attack",
							dom: "Domination",
							sd: "Search and Destroy",
							hq: "Headquarters",
							dm: "Free-for-All",
							arena: "Gunfight",
							gun_fight: "Gunfight",
							koth: "Hardpoint",
							ctf: "Capture the flag",
							conf: "Kill Confirmed",
							control: "Control",
							bounty: "Bounty",
							rugby: "Onslaught",
							dd: "Demolition",
							grind: "Grind",
							grind_tier_1: "Grind Hardcore",
							infect: "Infected",
							gun: "Gun Game",
							grnd: "Drop Zone",
							grnd_tier_1: "Drop Zone Hardcore",
							ko: "Knock Out",
							tjugg: "Team Defender",
							arm: "Ground War",
							dmz: "DMZ",
							br: "Battle Royale",
							war_hc: "Hardcore Team Deathmatch",
							dom_hc: "Hardcore Domination",
							sd_hc: "Hardcore Search and Destroy",
							koth_hc: "ZONA DE CONFLITO EXTREMO",
							hq_hc: "Hardcore Headquarters",
							conf_hc: "Hardcore Kill Confirmed",
							dm_hc: "Hardcore Free-for-All",
							control_hc: "Hardcore Control",
							ballmode: "Warzone Cup",
							"PLAYLIST/BR_QUADS": "Battle Royale Quads",
							"PLAYLIST/BR_DUOS": "Battle Royale Duos",
							"PLAYLIST/BR_TRIOS": "Battle Royale Trios",
							"PLAYLIST/BR_SOLOS": "Battle Royale Solos",
							"PLAYLIST/TTSBR": "Totally the Same BR",
							"PLAYLIST/PLUNQUAD_NAME": "Saque - Quartetos",
							"PLAYLIST/BR_SEALION_RESURGENCE_DUOS": "Resurgence Duos",
							"PLAYLIST/BR_SEALION_RESURGENCE_TRIOS": "Resurgence Trios",
							"PLAYLIST/BR_SEALION_RESURGENCE_SOLOS": "Resurgence Solos",
							"PLAYLIST/BR_SEALION_RESURGENCE_QUADS": "Resurgence Quads",
							"PLAYLIST/MINITRIOS_NAME": "MINI ROYALE TRIOS",
							"PLAYLIST/BR_UNHINGED_SOLO": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_SOLOS": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_DUOS": "Unhinged BR Duos",
							"PLAYLIST/BR_UNHINGED_TRIOS": "Unhinged BR Trios",
							"PLAYLIST/BR_UNHINGED_QUADS": "Unhinged BR Quads",
							cyber_hc: "ATAQUE CIBERNÉTICO EXTREMO",
							bounty_hc: "Bounty Hardcore",
							grind_hc: "Grind Hardcore",
							grnd_hc: "Drop Zone Hardcore",
							oic: "UMA NO TAMBOR",
							aon: "TUDO OU NADA",
							"sea lion dmz trios": "Ashika Island DMZ"
						},
						brazilianportuguese: {
							war: "Mata-mata em equipe",
							gwtdm: "Invasion",
							rescue: "Resgate de Reféns",
							gwbomb: "Charge",
							cyber: "Ataque Cibernético",
							dom: "Dominação",
							sd: "Localizar e Destruir",
							hq: "Quartel-general",
							dm: "Contra Todos",
							arena: "Tiroteio",
							gun_fight: "Tiroteio",
							koth: "Zona de Conflito",
							ctf: "Capture the flag",
							conf: "Baixa Confirmada",
							control: "Controle",
							bounty: "Caçada",
							rugby: "RUGBY",
							dd: "Demolição",
							grind: "Radical",
							grind_tier_1: "Radical Extremo",
							infect: "Infectado",
							gun: "Jogo de Armas",
							grnd: "Zona de Entrega",
							grnd_tier_1: "Zona de Entrega Extremo",
							ko: "Nocaute",
							tjugg: "Defensor da Equipe",
							arm: "Guerra Terrestre",
							dmz: "DMZ",
							br: "Battle Royale",
							war_hc: "Mata-Mata em Equipe Extremo",
							dom_hc: "Dominação Extrema",
							sd_hc: "Localizar e Destruir Extremo",
							koth_hc: "ZONA DE CONFLITO EXTREMO",
							hq_hc: "Quartel-general Extremo",
							conf_hc: "Baixa Confirmada Extrema",
							dm_hc: "Contra Todos Extremo",
							control_hc: "Controle Extremo",
							ballmode: "Copa Warzone",
							"PLAYLIST/BR_QUADS": "Battle Royale - Quartetos",
							"PLAYLIST/BR_DUOS": "Battle Royale - Quartetos",
							"PLAYLIST/BR_TRIOS": "Battle Royale - Quartetos",
							"PLAYLIST/BR_SOLOS": "Battle Royale - Quartetos",
							"PLAYLIST/TTSBR": "Totally the Same BR",
							"PLAYLIST/PLUNQUAD_NAME": "Saque - Quartetos",
							"PLAYLIST/BR_SEALION_RESURGENCE_DUOS": "Ressurgência - Duplas",
							"PLAYLIST/BR_SEALION_RESURGENCE_TRIOS": "Ressurgência - Trios",
							"PLAYLIST/BR_SEALION_RESURGENCE_SOLOS": "Ressurgência - Solo",
							"PLAYLIST/BR_SEALION_RESURGENCE_QUADS": "Ressurgência - Quartetos",
							"PLAYLIST/MINITRIOS_NAME": "MINI ROYALE TRIOS",
							"PLAYLIST/BR_UNHINGED_SOLO": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_SOLOS": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_DUOS": "Unhinged BR Duos",
							"PLAYLIST/BR_UNHINGED_TRIOS": "Unhinged BR Trios",
							"PLAYLIST/BR_UNHINGED_QUADS": "Unhinged BR Quads",
							cyber_hc: "ATAQUE CIBERNÉTICO EXTREMO",
							bounty_hc: "Caçada Extremo",
							grind_hc: "Radical Extremo",
							grnd_hc: "Zona de Entrega Extremo",
							oic: "UMA NO TAMBOR",
							aon: "TUDO OU NADA",
							"sea lion dmz trios": "DMZ em Ashika Island"
						},
						russian_full: {
							war: "КОМАНДНЫЙ БОЙ",
							gwtdm: "Invasion",
							rescue: "СПАСЕНИЕ ЗАЛОЖНИКА",
							gwbomb: "Charge",
							cyber: "КИБЕРАТАКА",
							dom: "ПРЕВОСХОДСТВО",
							sd: "НАЙТИ И УНИЧТОЖИТЬ",
							hq: "ШТАБ",
							dm: "КАЖДЫЙ ЗА СЕБЯ",
							arena: "Огневой контакт",
							gun_fight: "Огневой контакт",
							koth: "ОПОРНЫЙ ПУНКТ",
							ctf: "Capture the flag",
							conf: "УБИЙСТВО ПОДТВЕРЖДЕНО",
							control: "КОНТРОЛЬ",
							bounty: "ЛИКВИДАЦИЯ",
							rugby: "РЕГБИ",
							dd: "ДИВЕРСИЯ",
							grind: "МЯСОРУБКА",
							grind_tier_1: "Мясорубка, хардкор",
							infect: "ЗАРАЖЕНИЕ",
							gun: "ПЕРЕСТРЕЛКА",
							grnd: "ЗОНА ВЫБРОСКИ",
							grnd_tier_1: "Зона выброски, хардкор",
							ko: "НОКАУТ",
							tjugg: "Защитник",
							arm: "Наземная война",
							dmz: "DMZ",
							br: "Королевская битва",
							war_hc: "Командный бой, хардкор",
							dom_hc: "Превосходство, хардкор",
							sd_hc: "Найти и уничтожить, хардкор",
							koth_hc: "ОПОРНЫЙ ПУНКТ, ХК",
							hq_hc: "Штаб, хардкор",
							conf_hc: "Убийство подтверждено, хардкор",
							dm_hc: "Каждый за себя, хардкор",
							control_hc: "Контроль, хардкор",
							ballmode: "Кубок Warzone",
							"PLAYLIST/BR_QUADS": "Королевская битва - четверки",
							"PLAYLIST/BR_DUOS": "Королевская битва - двойки",
							"PLAYLIST/BR_TRIOS": "Королевская битва - тройки",
							"PLAYLIST/BR_SOLOS": "Королевская битва - одиночки",
							"PLAYLIST/TTSBR": "Totally the Same BR",
							"PLAYLIST/PLUNQUAD_NAME": "Добыча - четверки",
							"PLAYLIST/BR_SEALION_RESURGENCE_DUOS": "Возрождение - двойки",
							"PLAYLIST/BR_SEALION_RESURGENCE_TRIOS": "Возрождение - тройки",
							"PLAYLIST/BR_SEALION_RESURGENCE_SOLOS": "Возрождение - одиночки",
							"PLAYLIST/BR_SEALION_RESURGENCE_QUADS": "Возрождение - четверки",
							"PLAYLIST/MINITRIOS_NAME": 'КОРОЛЕВСКАЯ "МИНИ" - ТРОЙКИ',
							"PLAYLIST/BR_UNHINGED_SOLO": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_SOLOS": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_DUOS": "Unhinged BR Duos",
							"PLAYLIST/BR_UNHINGED_TRIOS": "Unhinged BR Trios",
							"PLAYLIST/BR_UNHINGED_QUADS": "Unhinged BR Quads",
							cyber_hc: "КИБЕРАТАКА, ХК",
							bounty_hc: "Ликвидация, хардкор",
							grind_hc: "Мясорубка, хардкор",
							grnd_hc: "Зона выброски, хардкор",
							oic: "ОДИН ПАТРОН",
							aon: "ВСЕ ИЛИ НИЧЕГО",
							"sea lion dmz trios": "Ashika Island DMZ"
						},
						simplified_chinese: {
							war: "团队死斗",
							gwtdm: "Invasion",
							rescue: "营救人质",
							gwbomb: "Charge",
							cyber: "网络攻击",
							dom: "征服",
							sd: "搜索摧毁",
							hq: "指挥部争夺",
							dm: "混战",
							arena: "枪战",
							gun_fight: "枪战",
							koth: "热点争夺",
							ctf: "Capture the flag",
							conf: "击杀确认",
							control: "控制",
							bounty: "赏金猎人",
							rugby: "橄榄球",
							dd: "爆破",
							grind: "鏖战",
							grind_tier_1: "硬核鏖战",
							infect: "传染",
							gun: "枪械游戏",
							grnd: "空降点",
							grnd_tier_1: "硬核空投争夺",
							ko: "争锋相对",
							tjugg: "团队守护者",
							arm: "全面战争",
							dmz: "无人区",
							br: "生存游戏",
							war_hc: "硬核团队死斗",
							dom_hc: "硬核团队死斗",
							sd_hc: "硬核搜索摧毁",
							koth_hc: "硬核热点争夺",
							hq_hc: "硬核指挥部争夺",
							conf_hc: "硬核击杀确认",
							dm_hc: "硬核混战",
							control_hc: "硬核控制",
							ballmode: "战争地带杯",
							"PLAYLIST/BR_QUADS": "四人生存游戏",
							"PLAYLIST/BR_DUOS": "双人生存游戏",
							"PLAYLIST/BR_TRIOS": "三人生存游戏",
							"PLAYLIST/BR_SOLOS": "单人生存游戏",
							"PLAYLIST/TTSBR": "Totally the Same BR",
							"PLAYLIST/PLUNQUAD_NAME": "四人勇往直钱",
							"PLAYLIST/BR_SEALION_RESURGENCE_DUOS": "Resurgence Duos",
							"PLAYLIST/BR_SEALION_RESURGENCE_TRIOS": "Resurgence Trios",
							"PLAYLIST/BR_SEALION_RESURGENCE_SOLOS": "Resurgence Solos",
							"PLAYLIST/BR_SEALION_RESURGENCE_QUADS": "Resurgence Quads",
							"PLAYLIST/MINITRIOS_NAME": "三人迷你生存游戏",
							"PLAYLIST/BR_UNHINGED_SOLO": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_SOLOS": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_DUOS": "Unhinged BR Duos",
							"PLAYLIST/BR_UNHINGED_TRIOS": "Unhinged BR Trios",
							"PLAYLIST/BR_UNHINGED_QUADS": "Unhinged BR Quads",
							cyber_hc: "硬核网络攻击",
							bounty_hc: "硬核赏金猎人",
							grind_hc: "硬核鏖战",
							grnd_hc: "硬核空投争夺",
							oic: "膛内一弹",
							aon: "孤注一掷",
							"sea lion dmz trios": "海狮岛无人区"
						},
						traditional_chinese: {
							war: "團隊死鬥",
							gwtdm: "Invasion",
							rescue: "搶救俘虜",
							gwbomb: "Charge",
							cyber: "網路戰",
							dom: "佔領戰",
							sd: "搜索與摧毀",
							hq: "總部戰",
							dm: "自由混戰",
							arena: "槍戰",
							gun_fight: "槍戰",
							koth: "據點戰",
							ctf: "Capture the flag",
							conf: "擊殺確認",
							control: "控制",
							bounty: "賞金合約",
							rugby: "橄欖球",
							dd: "爆破",
							grind: "資源戰",
							grind_tier_1: "硬派資源戰",
							infect: "感染戰",
							gun: "軍火之王",
							grnd: "空投區",
							grnd_tier_1: "硬派空投區",
							ko: "強攻",
							tjugg: "防禦戰",
							arm: "地面戰爭",
							dmz: "非軍事區",
							br: "大逃殺",
							war_hc: "硬派團隊死鬥",
							dom_hc: "硬派佔領戰",
							sd_hc: "硬派搜索與摧毀",
							koth_hc: "硬派據點戰",
							hq_hc: "硬派總部戰",
							conf_hc: "硬派擊殺確認",
							dm_hc: "硬派自由混戰",
							control_hc: "硬派控制戰",
							ballmode: "《現代戰域》世界盃",
							"PLAYLIST/BR_QUADS": "大逃殺四人組隊",
							"PLAYLIST/BR_DUOS": "大逃殺雙人組隊",
							"PLAYLIST/BR_TRIOS": "大逃殺三人組隊",
							"PLAYLIST/BR_SOLOS": "大逃殺單人",
							"PLAYLIST/TTSBR": "Totally the Same BR",
							"PLAYLIST/PLUNQUAD_NAME": "四人奪金之王",
							"PLAYLIST/BR_SEALION_RESURGENCE_DUOS": "Resurgence Duos",
							"PLAYLIST/BR_SEALION_RESURGENCE_TRIOS": "Resurgence Trios",
							"PLAYLIST/BR_SEALION_RESURGENCE_SOLOS": "Resurgence Solos",
							"PLAYLIST/BR_SEALION_RESURGENCE_QUADS": "Resurgence Quads",
							"PLAYLIST/MINITRIOS_NAME": "迷你大逃殺三人組隊",
							"PLAYLIST/BR_UNHINGED_SOLO": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_SOLOS": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_DUOS": "Unhinged BR Duos",
							"PLAYLIST/BR_UNHINGED_TRIOS": "Unhinged BR Trios",
							"PLAYLIST/BR_UNHINGED_QUADS": "Unhinged BR Quads",
							cyber_hc: "硬派網絡戰",
							bounty_hc: "賞金合約硬派",
							grind_hc: "資源戰硬派",
							grnd_hc: "硬派空投區",
							oic: "僅此一發",
							aon: "孤注一擲",
							"sea lion dmz trios": "海獅島 | 非軍事區"
						},
						korean_full: {
							war: "팀 데스매치",
							gwtdm: "Invasion",
							rescue: "포로 구출",
							gwbomb: "Charge",
							cyber: "사이버 공격",
							dom: "점령",
							sd: "수색 섬멸",
							hq: "본부",
							dm: "개인전",
							arena: "건 파이트",
							gun_fight: "건 파이트",
							koth: "주요 거점",
							ctf: "Capture the flag",
							conf: "확인 사살",
							control: "장악",
							bounty: "바운티",
							rugby: "럭비",
							dd: "폭파",
							grind: "그라인드",
							grind_tier_1: "그라인드 하드코어",
							infect: "감염",
							gun: "건 게임",
							grnd: "투하 지점",
							grnd_tier_1: "드롭 존 하드 코어",
							ko: "녹아웃",
							tjugg: "팀 디펜더",
							arm: "지상전",
							dmz: "DMZ",
							br: "배틀 로얄",
							war_hc: "하드코어 팀 데스매치",
							dom_hc: "하드 코어 점령",
							sd_hc: "하드 코어 수색 섬멸",
							koth_hc: "주요 거점 하드코어",
							hq_hc: "하드코어 본부",
							conf_hc: "하드코어 확인 사살",
							dm_hc: "하드코어 개인전",
							control_hc: "하드코어 장악",
							ballmode: "워존컵",
							"PLAYLIST/BR_QUADS": "배틀 로얄 쿼드",
							"PLAYLIST/BR_DUOS": "배틀 로얄 듀오",
							"PLAYLIST/BR_TRIOS": "배틀 로얄 트리오",
							"PLAYLIST/BR_SOLOS": "배틀 로얄 솔로",
							"PLAYLIST/TTSBR": "Totally the Same BR",
							"PLAYLIST/PLUNQUAD_NAME": "약탈 쿼드",
							"PLAYLIST/BR_SEALION_RESURGENCE_DUOS": "리서전스 듀오",
							"PLAYLIST/BR_SEALION_RESURGENCE_TRIOS": "리서전스 트리오",
							"PLAYLIST/BR_SEALION_RESURGENCE_SOLOS": "리서전스 솔로",
							"PLAYLIST/BR_SEALION_RESURGENCE_QUADS": "리서전스 쿼드",
							"PLAYLIST/MINITRIOS_NAME": "미니 로얄 트리오",
							"PLAYLIST/BR_UNHINGED_SOLO": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_SOLOS": "Unhinged BR Solos",
							"PLAYLIST/BR_UNHINGED_DUOS": "Unhinged BR Duos",
							"PLAYLIST/BR_UNHINGED_TRIOS": "Unhinged BR Trios",
							"PLAYLIST/BR_UNHINGED_QUADS": "Unhinged BR Quads",
							cyber_hc: "사이버 공격 하드코어",
							bounty_hc: "현상금 하드 코어",
							grind_hc: "그라인드 하드코어",
							grnd_hc: "드롭 존 하드 코어",
							oic: "최후의 한 발",
							aon: "모 아니면 도",
							"sea lion dmz trios": "아쉬카 섬 DMZ"
						}
					},
					S = {
						war: "tdm",
						gwtdm: "gw_invasion",
						rescue: "prisoner_rescue",
						gwbomb: "charge",
						cyber: "cyber",
						cyber_attack: "cyber",
						dom: "dom",
						sd: "snd",
						hq: "hq",
						dm: "ffa",
						arena: "arena",
						gun_fight: "Gunfight",
						koth: "hardpoint",
						ctf: "ctf",
						conf: "conf",
						control: "control",
						bounty: "bounty",
						rugby: "onslaught",
						dd: "demolition",
						grind: "grind",
						infect: "infected",
						gun: "gungame",
						grnd: "dropzone",
						ko: "knockout",
						tjugg: "team_defender",
						arm: "war",
						dmz: "dmz",
						br: "br",
						ballmode: "ballmode",
						war_hc: "tdm_tier1",
						dom_hc: "moshpit_flag_tier1",
						sd_hc: "snd_tier1",
						koth_hc: "hardpoint_tier1",
						hq_hc: "hq_tier1",
						conf_hc: "conf_tier1",
						dm_hc: "ffa_tier1",
						control_hc: "control_tier1",
						cyber_hc: "cyber",
						bounty_hc: "bounty",
						grind_hc: "grind",
						grnd_hc: "dropzone"
					},
					k = {
						"PLAYLIST/BR_QUADS": "wz_br_quads",
						"PLAYLIST/BR_DUOS": "wz_br_duos",
						"PLAYLIST/BR_TRIOS": "wz_br_trios",
						"PLAYLIST/BR_SOLOS": "wz_br",
						"PLAYLIST/TTSBR": "wz_br_quads",
						"PLAYLIST/PLUNQUAD_NAME": "wz_plunder_quads",
						"PLAYLIST/BR_SEALION_RESURGENCE_QUADS": "wz_br_resurge",
						"PLAYLIST/BR_SEALION_RESURGENCE_TRIOS": "wz_br_resurge",
						"PLAYLIST/BR_SEALION_RESURGENCE_DUOS": "wz_br_resurge",
						"PLAYLIST/BR_SEALION_RESURGENCE_SOLOS": "wz_br_resurge",
						"PLAYLIST/MINITRIOS_NAME": "wz_br_trios",
						"JUPITER Tile I": "",
						"Saba Trios low count": "wz_br_saba"
					},
					x = {
						war: "team_deathmatch",
						war_hc: "team_deathmatch",
						gwtdm: "gw_invasion",
						rescue: "rescue",
						gwbomb: "charge",
						cyber: "cyber",
						cyber_attack: "cyber",
						dom: "domination",
						sd: "snd",
						sd_hc: "snd",
						hq: "hq",
						dm: "ffa",
						dm_hc: "ffa",
						arena: "arena",
						gun_fight: "gun_fight",
						koth: "hardpoint",
						ctf: "ctf",
						conf: "conf",
						control: "control",
						bounty: "bounty",
						rugby: "onslaught",
						dd: "demolition",
						grind: "grind",
						infect: "infected",
						gun: "gungame",
						grnd: "dropzone",
						ko: "knockout",
						tjugg: "team_defender",
						arm: "war",
						dmz: "dmz",
						br: "br",
						ballmode: "ballmode"
					},
					R = {
						english: {
							Bronze: "Bronze",
							Gold: "Gold",
							Silver: "Silver",
							Damascus: "Damascus"
						},
						arabic: {
							Bronze: "إصابات رأس العملاء",
							Gold: "الدمشقية",
							Silver: "الفضية",
							Damascus: "الذهبية"
						},
						dutch: {
							Bronze: "Bronze",
							Gold: "Gold",
							Silver: "Silver",
							Damascus: "Damascus"
						},
						french: {
							Bronze: "Bronze",
							Gold: "Or",
							Silver: "Argent",
							Damascus: "Damas"
						},
						german: {
							Bronze: "Bronze",
							Gold: "Gold",
							Silver: " Silber",
							Damascus: " Damast"
						},
						italian: {
							Bronze: " Bronzo",
							Gold: " Oro",
							Silver: " Argento",
							Damascus: " Damasco"
						},
						japanese_full: {
							Bronze: "ブロンズ",
							Gold: "ゴールド",
							Silver: "シルバー",
							Damascus: "ダマスカス"
						},
						spanish: {
							Bronze: "Bronce",
							Gold: "Oro",
							Silver: "Plata",
							Damascus: "Damasco"
						},
						spanishna: {
							Bronze: "Bronce",
							Gold: "Oro",
							Silver: "Plata",
							Damascus: "Damasco"
						},
						polish_full: {
							Bronze: "Brąz",
							Gold: "Złoto",
							Silver: "Srebro",
							Damascus: "Stal damasceńska"
						},
						portuguese: {
							Bronze: "Bronze",
							Gold: "Ouro e aço",
							Silver: "Prata",
							Damascus: "Damasco"
						},
						brazilianportuguese: {
							Bronze: "Bronze",
							Gold: "Ouro e aço",
							Silver: "Prata",
							Damascus: "Damasco"
						},
						russian_full: {
							Bronze: "Бронза",
							Gold: "золото",
							Silver: "серебро",
							Damascus: "дамаск"
						},
						traditional_chinese: {
							Bronze: "青銅",
							Gold: "黃金",
							Silver: "白銀",
							Damascus: "大馬士革"
						},
						simplified_chinese: {
							Bronze: "青铜",
							Gold: "黄金",
							Silver: "白银",
							Damascus: "大马士革"
						},
						korean_full: {
							Bronze: "브론즈",
							Gold: "골드",
							Silver: "실버",
							Damascus: "다마스쿠스"
						}
					},
					T = {
						language: function() {
							var e, t = {
								korean_partial: "korean_full",
								arabic_partial: "arabic",
								english_safe: "english",
								polish_partial: "polish_full",
								russian_partial: "russian_full",
								japanese_partial: "japanese_full",
								safe_chinese: "simplified_chinese",
								portuguese: "brazilianportuguese"
							};
							if (!(e = _("language"))) return "english";
							if (Object.keys(t).includes(e)) {
								var n = e,
									a = Object.keys(t).indexOf(e);
								return e = Object.values(t)[a], console.log("".concat(n, " will redirect to ").concat(e)), e
							}
							return e
						}(),
						env: window.location.host.startsWith("dev") ? "dev" : window.location.host.startsWith("local") ? "local" : window.location.host.startsWith("stage") ? "stage" : window.location.host.startsWith("shaqa") ? "shaqa" : window.location.host.startsWith("telescope-cert") ? "cert" : "prod",
						authToken: function() {
							var e = _("auth_token", !0);
							if (!e) {
								var t = window.location.search;
								if (t) {
									var n = t.match(/auth_token=(\w+)/);
									n && (e = n[1])
								}
							}
							return e
						}(),
						isPreload: (h = _("page_context", !0), "preload" === h || "motd" === h || "motd_unknown" === h),
						lastInputDevice: (p = _("last_input_device", !0), p ? parseInt(p) : 1),
						lastInputGamepad: function() {
							var e = _("last_input_gamepad", !0);
							return e ? parseInt(e) : 0
						}(),
						is4k: (g = _("resolution"), 1 === g || "1" === g),
						platform: (v = _("program_type"), v = v ? {
							0: "unknown",
							1: "PC",
							2: "PS4",
							3: "PS5",
							4: "XBOXONE",
							5: "XBOXSX"
						} [v] : "unknown"),
						device: (f = _("device_type"), f = f ? {
							0: "unknown",
							2: "PS4",
							3: "PS4PRO",
							6: "XBONES",
							7: "XBONEX",
							8: "XBSS",
							9: "XBSX"
						} [f] : "unknown"),
						isCrossConfirm: 0 !== parseInt(_("is_cross_confirm"), 10),
						isBrowser: "undefined" !== !("undefined" == typeof Telescope_API_LoadComplete || (0, l.Z)(Telescope_API_LoadComplete)),
						isFocused: !0,
						selectedMainTabIndex: 0,
						selectedTileIndex: 0,
						gameTitle: "mw2"
					},
					L = (0, o.oM)({
						name: "global",
						initialState: T,
						reducers: {
							setLastInputDevice: function(e, t) {
								e.lastInputDevice = parseInt(t.payload)
							},
							setLastInputGamepad: function(e, t) {
								e.lastInputGamepad = parseInt(t.payload)
							},
							setIsFocused: function(e, t) {
								e.isFocused = t.payload
							},
							setIsBrowser: function(e, t) {
								e.isBrowser = t.payload
							},
							setSelectedMainTabIndex: function(e, t) {
								e.selectedMainTabIndex = t.payload
							},
							setSelectedTileIndex: function(e, t) {
								e.selectedTileIndex = t.payload
							},
							setGameTitle: function(e, t) {
								e.gameTitle = t.payload
							}
						}
					}),
					D = (0, s.P1)((function(e) {
						return e.global.language
					}), (function(e) {
						return "arabic" === e || "arabic_partial" === e
					})),
					M = L.actions;
				const I = L.reducer;
				var A = n(15861),
					N = n(4942),
					C = n(9669),
					P = n.n(C);

				function z() {
					z = function() {
						return e
					};
					var e = {},
						t = Object.prototype,
						n = t.hasOwnProperty,
						a = Object.defineProperty || function(e, t, n) {
							e[t] = n.value
						},
						r = "function" == typeof Symbol ? Symbol : {},
						i = r.iterator || "@@iterator",
						o = r.asyncIterator || "@@asyncIterator",
						s = r.toStringTag || "@@toStringTag";

					function c(e, t, n) {
						return Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), e[t]
					}
					try {
						c({}, "")
					} catch (e) {
						c = function(e, t, n) {
							return e[t] = n
						}
					}

					function d(e, t, n, r) {
						var i = t && t.prototype instanceof g ? t : g,
							o = Object.create(i.prototype),
							l = new R(r || []);
						return a(o, "_invoke", {
							value: w(e, n, l)
						}), o
					}

					function m(e, t, n) {
						try {
							return {
								type: "normal",
								arg: e.call(t, n)
							}
						} catch (e) {
							return {
								type: "throw",
								arg: e
							}
						}
					}
					e.wrap = d;
					var u = {};

					function g() {}

					function p() {}

					function h() {}
					var f = {};
					c(f, i, (function() {
						return this
					}));
					var v = Object.getPrototypeOf,
						b = v && v(v(T([])));
					b && b !== t && n.call(b, i) && (f = b);
					var _ = h.prototype = g.prototype = Object.create(f);

					function y(e) {
						["next", "throw", "return"].forEach((function(t) {
							c(e, t, (function(e) {
								return this._invoke(t, e)
							}))
						}))
					}

					function E(e, t) {
						function r(a, i, o, s) {
							var c = m(e[a], e, i);
							if ("throw" !== c.type) {
								var d = c.arg,
									u = d.value;
								return u && "object" == (0, l.Z)(u) && n.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
									r("next", e, o, s)
								}), (function(e) {
									r("throw", e, o, s)
								})) : t.resolve(u).then((function(e) {
									d.value = e, o(d)
								}), (function(e) {
									return r("throw", e, o, s)
								}))
							}
							s(c.arg)
						}
						var i;
						a(this, "_invoke", {
							value: function(e, n) {
								function a() {
									return new t((function(t, a) {
										r(e, n, t, a)
									}))
								}
								return i = i ? i.then(a, a) : a()
							}
						})
					}

					function w(e, t, n) {
						var a = "suspendedStart";
						return function(r, i) {
							if ("executing" === a) throw new Error("Generator is already running");
							if ("completed" === a) {
								if ("throw" === r) throw i;
								return {
									value: void 0,
									done: !0
								}
							}
							for (n.method = r, n.arg = i;;) {
								var o = n.delegate;
								if (o) {
									var l = S(o, n);
									if (l) {
										if (l === u) continue;
										return l
									}
								}
								if ("next" === n.method) n.sent = n._sent = n.arg;
								else if ("throw" === n.method) {
									if ("suspendedStart" === a) throw a = "completed", n.arg;
									n.dispatchException(n.arg)
								} else "return" === n.method && n.abrupt("return", n.arg);
								a = "executing";
								var s = m(e, t, n);
								if ("normal" === s.type) {
									if (a = n.done ? "completed" : "suspendedYield", s.arg === u) continue;
									return {
										value: s.arg,
										done: n.done
									}
								}
								"throw" === s.type && (a = "completed", n.method = "throw", n.arg = s.arg)
							}
						}
					}

					function S(e, t) {
						var n = t.method,
							a = e.iterator[n];
						if (void 0 === a) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), u;
						var r = m(a, e.iterator, t.arg);
						if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, u;
						var i = r.arg;
						return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
					}

					function k(e) {
						var t = {
							tryLoc: e[0]
						};
						1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
					}

					function x(e) {
						var t = e.completion || {};
						t.type = "normal", delete t.arg, e.completion = t
					}

					function R(e) {
						this.tryEntries = [{
							tryLoc: "root"
						}], e.forEach(k, this), this.reset(!0)
					}

					function T(e) {
						if (e) {
							var t = e[i];
							if (t) return t.call(e);
							if ("function" == typeof e.next) return e;
							if (!isNaN(e.length)) {
								var a = -1,
									r = function t() {
										for (; ++a < e.length;)
											if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
										return t.value = void 0, t.done = !0, t
									};
								return r.next = r
							}
						}
						return {
							next: L
						}
					}

					function L() {
						return {
							value: void 0,
							done: !0
						}
					}
					return p.prototype = h, a(_, "constructor", {
						value: h,
						configurable: !0
					}), a(h, "constructor", {
						value: p,
						configurable: !0
					}), p.displayName = c(h, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
						var t = "function" == typeof e && e.constructor;
						return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
					}, e.mark = function(e) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, c(e, s, "GeneratorFunction")), e.prototype = Object.create(_), e
					}, e.awrap = function(e) {
						return {
							__await: e
						}
					}, y(E.prototype), c(E.prototype, o, (function() {
						return this
					})), e.AsyncIterator = E, e.async = function(t, n, a, r, i) {
						void 0 === i && (i = Promise);
						var o = new E(d(t, n, a, r), i);
						return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
							return e.done ? e.value : o.next()
						}))
					}, y(_), c(_, s, "Generator"), c(_, i, (function() {
						return this
					})), c(_, "toString", (function() {
						return "[object Generator]"
					})), e.keys = function(e) {
						var t = Object(e),
							n = [];
						for (var a in t) n.push(a);
						return n.reverse(),
							function e() {
								for (; n.length;) {
									var a = n.pop();
									if (a in t) return e.value = a, e.done = !1, e
								}
								return e.done = !0, e
							}
					}, e.values = T, R.prototype = {
						constructor: R,
						reset: function(e) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
								for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
						},
						stop: function() {
							this.done = !0;
							var e = this.tryEntries[0].completion;
							if ("throw" === e.type) throw e.arg;
							return this.rval
						},
						dispatchException: function(e) {
							if (this.done) throw e;
							var t = this;

							function a(n, a) {
								return o.type = "throw", o.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
							}
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var i = this.tryEntries[r],
									o = i.completion;
								if ("root" === i.tryLoc) return a("end");
								if (i.tryLoc <= this.prev) {
									var l = n.call(i, "catchLoc"),
										s = n.call(i, "finallyLoc");
									if (l && s) {
										if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return a(i.finallyLoc)
									} else if (l) {
										if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
									} else {
										if (!s) throw new Error("try statement without catch or finally");
										if (this.prev < i.finallyLoc) return a(i.finallyLoc)
									}
								}
							}
						},
						abrupt: function(e, t) {
							for (var a = this.tryEntries.length - 1; a >= 0; --a) {
								var r = this.tryEntries[a];
								if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
									var i = r;
									break
								}
							}
							i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
							var o = i ? i.completion : {};
							return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, u) : this.complete(o)
						},
						complete: function(e, t) {
							if ("throw" === e.type) throw e.arg;
							return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
						},
						finish: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), u
							}
						},
						catch: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.tryLoc === e) {
									var a = n.completion;
									if ("throw" === a.type) {
										var r = a.arg;
										x(n)
									}
									return r
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(e, t, n) {
							return this.delegate = {
								iterator: T(e),
								resultName: t,
								nextLoc: n
							}, "next" === this.method && (this.arg = void 0), u
						}
					}, e
				}

				function O(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var a = Object.getOwnPropertySymbols(e);
						t && (a = a.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, a)
					}
					return n
				}

				function j(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? O(Object(n), !0).forEach((function(t) {
							(0, N.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}
				var B = {
						selectedScreen: "entryscreen",
						activeCrTitle: "",
						selectedGameMode: "",
						activeLbTitle: "mw2",
						filterRecency: "Lifetime",
						recentMatches: {},
						recentMatchesLoaded: !1,
						recentMatchesError: !1,
						matchStats: {},
						matchStatsError: !1,
						matchStatsLoaded: !1,
						selectedTab: 0,
						selectedType: "modes",
						selectedTile: "",
						entryPointTiles: [],
						crData: {},
						crDataLoaded: !1,
						crDataError: !1,
						wzData: {},
						wzDataLoaded: !1,
						wzDataError: !1,
						resurgenceData: {},
						resurgenceDataLoaded: !1,
						resurgenceError: !1,
						plunderData: {},
						plunderDataLoaded: !1,
						plunderError: !1,
						dmzData: {},
						dmzDataLoaded: !1,
						dmzDataError: !1,
						seasonData: {},
						seasonDataLoaded: !1,
						seasonDataError: !1,
						sortByVal: "wins",
						wzBlockedFlag: !0,
						selectedKillsFilter: "operatorKills"
					},
					G = (0, o.oM)({
						name: "record",
						initialState: B,
						reducers: {
							setSelectedScreen: function(e, t) {
								e.selectedScreen = t.payload
							},
							setActiveCrTitle: function(e, t) {
								e.activeCrTitle = t.payload
							},
							setSelectedGameMode: function(e, t) {
								e.selectedGameMode = t.payload
							},
							setActiveLbTitle: function(e, t) {
								e.activeLbTitle = t.payload
							},
							setFilterRecency: function(e, t) {
								e.filterRecency = t.payload
							},
							setSelectedTab: function(e, t) {
								e.selectedTab = t.payload
							},
							setSelectedType: function(e, t) {
								e.selectedType = t.payload
							},
							setSelectedTile: function(e, t) {
								e.selectedTile = t.payload
							},
							setEntryPointTiles: function(e, t) {
								e.entryPointTiles = t.payload
							},
							setRecentMatches: function(e, t) {
								e.recentMatches = t.payload, e.recentMatchesLoaded = !0
							},
							setSortByValue: function(e, t) {
								e.sortByVal = t.payload
							},
							setSelectedKillsFilter: function(e, t) {
								e.selectedKillsFilter = t.payload
							},
							unloadCRData: function(e, t) {
								e.crDataLoaded = B.crDataLoaded, e.crData = B.crData
							},
							unloadRecentMatchesData: function(e) {
								e.recentMatchesLoaded = B.recentMatchesLoaded, e.recentMatches = B.recentMatches
							},
							unloadMatchData: function(e) {
								e.matchStatsLoaded = B.matchStatsLoaded, e.matchStats = B.matchStats
							},
							unloadDMZData: function(e) {
								e.dmzDataLoaded = B.dmzDataLoaded, e.dmzData = B.dmzData
							},
							setClose: function(e, t) {
								"dashboard" !== t.payload.screen && "entryscreen" !== t.payload.screen && "lbentryscreen" !== t.payload.screen && "leaderboards" !== t.payload.screen ? "recents" === t.payload.screen && 1 === t.payload.tab && "map" === t.payload.type ? (e.selectedScreen = "recents", e.selectedTab = 1, e.selectedType = "modes") : (e.selectedTab = ["mp", "br", "resurgence", "plunder", "dmz"].indexOf(e.selectedGameMode), e.selectedScreen = "dashboard") : "dashboard" === t.payload.screen || "lbentryscreen" === t.payload.screen ? e.selectedScreen = "entryscreen" : "leaderboards" === t.payload.screen ? e.selectedScreen = "lbentryscreen" : "entryscreen" === t.payload.screen && (console.log(window), window.Telescope_API_SetDisplayMode && (Telescope_API_SetDisplayMode(0), window.Telescope_API_SetDisplayMode(0)))
							}
						},
						extraReducers: function(e) {
							e.addCase(K.fulfilled, (function(e, t) {
								var n, a;
								t.payload && "error" !== (null === (n = t.payload) || void 0 === n ? void 0 : n.success) ? e.recentMatches = j(j({}, null === (a = t.payload) || void 0 === a ? void 0 : a.data), {}, {
									gameMode: "dmz" === t.meta.arg.gameTitle ? "dmz" : t.meta.arg.gameMode
								}) : e.recentMatchesError = !0, e.recentMatchesLoaded = !0
							})), e.addCase(H.fulfilled, (function(e, t) {
								var n, a;
								t.payload && "error" !== (null === (n = t.payload) || void 0 === n ? void 0 : n.success) ? e.matchStats = null === (a = t.payload) || void 0 === a ? void 0 : a.data : e.matchStatsError = !0, e.matchStatsLoaded = !0
							})), e.addCase(W.fulfilled, (function(e, t) {
								var n, a;
								if ("mw2" === t.payload.gameTitle) t.payload && "error" !== (null === (n = t.payload) || void 0 === n ? void 0 : n.status) ? e.crData = j(j({}, null === (a = t.payload) || void 0 === a ? void 0 : a.data.data), {}, {
									gameMode: "mp"
								}) : e.crDataError = !0, e.crDataLoaded = !0;
								else if ("wz2" === t.payload.gameTitle) {
									if ("wz" === t.meta.arg.gameMode) {
										var r, i, o;
										t.payload && "error" !== (null === (r = t.payload) || void 0 === r ? void 0 : r.status) ? "Blocked" === (null === (i = t.payload) || void 0 === i ? void 0 : i.data) ? e.wzBlockedFlag = !0 : (e.wzBlockedFlag = !1, e.wzData = j(j({}, null === (o = t.payload) || void 0 === o ? void 0 : o.data.data), {}, {
											gameMode: "br"
										})) : e.wzDataError = !0, e.wzDataLoaded = !0
									} else if ("resurgence" === t.meta.arg.gameMode) {
										var l, s;
										t.payload && "error" !== (null === (l = t.payload) || void 0 === l ? void 0 : l.status) ? e.resurgenceData = j(j({}, null === (s = t.payload) || void 0 === s ? void 0 : s.data.data), {}, {
											gameMode: "resurgence"
										}) : e.resurgenceDataError = !0, e.resurgenceDataLoaded = !0
									} else if ("plunder" === t.meta.arg.gameMode) {
										var c, d;
										t.payload && "error" !== (null === (c = t.payload) || void 0 === c ? void 0 : c.status) ? e.plunderData = j(j({}, null === (d = t.payload) || void 0 === d ? void 0 : d.data.data), {}, {
											gameMode: "plunder"
										}) : e.plunderDataError = !0, e.plunderDataLoaded = !0
									}
								} else if ("dmz" === t.payload.gameTitle) {
									var m, u;
									t.payload && "error" !== (null === (m = t.payload) || void 0 === m ? void 0 : m.status) ? e.dmzData = j(j({}, null === (u = t.payload) || void 0 === u ? void 0 : u.data.data), {}, {
										gameMode: "dmz"
									}) : e.dmzDataError = !0, e.dmzDataLoaded = !0
								}
							})), e.addCase(q.fulfilled, (function(e, t) {
								var n, a;
								t.payload && "error" !== (null === (n = t.payload) || void 0 === n ? void 0 : n.success) ? e.seasonData = null === (a = t.payload) || void 0 === a ? void 0 : a.data : e.seasonDataError = !0, e.seasonDataLoaded = !0
							}))
						}
					}),
					Z = function(e) {
						return "local" === e || "dev" === e ? "https://stage-telescope-api.kube.activision.com" : "shaqa" === e ? "https://shaqa-telescope-api.kube.activision.com" : "cert" === e ? "https://telescope-cert.callofduty.com" : "/api/ts-api"
					},
					U = function(e) {
						return "local" === e
					},
					K = (0, o.hg)("combat_record/fetchRecentMatches", function() {
						var e = (0, A.Z)(z().mark((function e(t, n) {
							var a, r, i, o, l, s, c, d;
							return z().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return a = n.getState().global, r = a.env, i = a.authToken, o = t.gameTitle, "br" === (l = t.gameMode) ? l = "wz" : "dmz" === l && (o = "dmz", l = null), s = U(r) ? "/cr/v1/title/".concat(o, "/matches?unoId=").concat("9729467871709644483").concat(l ? "&game=".concat(l) : "") : "/cr/v1/title/".concat(o, "/matches").concat(l ? "?game=".concat(l) : ""), c = "".concat(Z(r)).concat(s), e.prev = 7, e.next = 10, P().get(c, {
											headers: {
												Authorization: "Bearer ".concat(i)
											}
										});
									case 10:
										return d = e.sent, e.abrupt("return", d.data.data);
									case 14:
										return e.prev = 14, e.t0 = e.catch(7), console.log(e.t0), e.abrupt("return", null);
									case 18:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[7, 14]
							])
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}()),
					H = (0, o.hg)("combat_record/fetchMatchStats", function() {
						var e = (0, A.Z)(z().mark((function e(t, n) {
							var a, r, i, o, l, s, c, d, m;
							return z().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return a = n.getState().global, r = a.env, i = a.authToken, o = t.id, l = t.gameTitle, "br" === (s = t.gameMode) ? s = "wz" : "dmz" === s && (l = "dmz", s = null), c = "/cr/v1/title/".concat(l, "/match/").concat(o, "?unoId=").concat("9729467871709644483").concat(s ? "&game=".concat(s) : ""), d = "".concat(Z(r)).concat(c), e.prev = 8, e.next = 11, P().get(d, {
											headers: {
												Authorization: "Bearer ".concat(i)
											}
										});
									case 11:
										return m = e.sent, e.abrupt("return", m.data.data);
									case 15:
										return e.prev = 15, e.t0 = e.catch(8), console.log(e.t0), e.abrupt("return", null);
									case 19:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[8, 15]
							])
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}()),
					W = (0, o.hg)("combat_record/fetchLifetimeData", function() {
						var e = (0, A.Z)(z().mark((function e(t, n) {
							var a, r, i, o, l, s, c, d;
							return z().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return a = n.getState().global, r = a.env, i = a.authToken, o = t.gameTitle, "br" === (l = t.gameMode) ? l = "wz" : "dmz" === l && (o = "dmz", l = null), s = U(r) ? "/cr/v1/title/".concat(o, "/lifetime?unoId=").concat("9729467871709644483").concat(l ? "&game=".concat(l) : "") : "/cr/v1/title/".concat(o, "/lifetime").concat(l ? "?game=".concat(l) : ""), c = "".concat(Z(r)).concat(s), e.prev = 7, e.next = 10, P().get(c, {
											headers: {
												Authorization: "Bearer ".concat(i)
											}
										});
									case 10:
										return d = e.sent, e.abrupt("return", j(j({}, d.data), {}, {
											gameTitle: o
										}));
									case 14:
										return e.prev = 14, e.t0 = e.catch(7), console.log(e.t0), e.abrupt("return", null);
									case 18:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[7, 14]
							])
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}()),
					q = (0, o.hg)("combat_record/fetchSeasonsData", (0, A.Z)(z().mark((function e() {
						var t, n, a, r, i, o, l, s = arguments;
						return z().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return t = (s.length > 1 ? s[1] : void 0).getState().global, n = t.env, a = t.authToken, r = t.gameTitle, i = U(n) ? "/cr/v1/title/".concat(r, "/matches/season?unoId=").concat("9729467871709644483") : "/cr/v1/title/".concat(r, "/matches/season"), o = "".concat(Z(n)).concat(i), e.prev = 6, e.next = 9, P().get(o, {
										headers: {
											Authorization: "Bearer ".concat(a)
										}
									});
								case 9:
									return l = e.sent, console.log(l), e.abrupt("return", l.data);
								case 14:
									return e.prev = 14, e.t0 = e.catch(6), console.log(e.t0), e.abrupt("return", null);
								case 18:
								case "end":
									return e.stop()
							}
						}), e, null, [
							[6, 14]
						])
					})))),
					F = G.actions;
				const V = G.reducer;
				var Y = n(42982);

				function Q() {
					Q = function() {
						return e
					};
					var e = {},
						t = Object.prototype,
						n = t.hasOwnProperty,
						a = Object.defineProperty || function(e, t, n) {
							e[t] = n.value
						},
						r = "function" == typeof Symbol ? Symbol : {},
						i = r.iterator || "@@iterator",
						o = r.asyncIterator || "@@asyncIterator",
						s = r.toStringTag || "@@toStringTag";

					function c(e, t, n) {
						return Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), e[t]
					}
					try {
						c({}, "")
					} catch (e) {
						c = function(e, t, n) {
							return e[t] = n
						}
					}

					function d(e, t, n, r) {
						var i = t && t.prototype instanceof g ? t : g,
							o = Object.create(i.prototype),
							l = new R(r || []);
						return a(o, "_invoke", {
							value: w(e, n, l)
						}), o
					}

					function m(e, t, n) {
						try {
							return {
								type: "normal",
								arg: e.call(t, n)
							}
						} catch (e) {
							return {
								type: "throw",
								arg: e
							}
						}
					}
					e.wrap = d;
					var u = {};

					function g() {}

					function p() {}

					function h() {}
					var f = {};
					c(f, i, (function() {
						return this
					}));
					var v = Object.getPrototypeOf,
						b = v && v(v(T([])));
					b && b !== t && n.call(b, i) && (f = b);
					var _ = h.prototype = g.prototype = Object.create(f);

					function y(e) {
						["next", "throw", "return"].forEach((function(t) {
							c(e, t, (function(e) {
								return this._invoke(t, e)
							}))
						}))
					}

					function E(e, t) {
						function r(a, i, o, s) {
							var c = m(e[a], e, i);
							if ("throw" !== c.type) {
								var d = c.arg,
									u = d.value;
								return u && "object" == (0, l.Z)(u) && n.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
									r("next", e, o, s)
								}), (function(e) {
									r("throw", e, o, s)
								})) : t.resolve(u).then((function(e) {
									d.value = e, o(d)
								}), (function(e) {
									return r("throw", e, o, s)
								}))
							}
							s(c.arg)
						}
						var i;
						a(this, "_invoke", {
							value: function(e, n) {
								function a() {
									return new t((function(t, a) {
										r(e, n, t, a)
									}))
								}
								return i = i ? i.then(a, a) : a()
							}
						})
					}

					function w(e, t, n) {
						var a = "suspendedStart";
						return function(r, i) {
							if ("executing" === a) throw new Error("Generator is already running");
							if ("completed" === a) {
								if ("throw" === r) throw i;
								return {
									value: void 0,
									done: !0
								}
							}
							for (n.method = r, n.arg = i;;) {
								var o = n.delegate;
								if (o) {
									var l = S(o, n);
									if (l) {
										if (l === u) continue;
										return l
									}
								}
								if ("next" === n.method) n.sent = n._sent = n.arg;
								else if ("throw" === n.method) {
									if ("suspendedStart" === a) throw a = "completed", n.arg;
									n.dispatchException(n.arg)
								} else "return" === n.method && n.abrupt("return", n.arg);
								a = "executing";
								var s = m(e, t, n);
								if ("normal" === s.type) {
									if (a = n.done ? "completed" : "suspendedYield", s.arg === u) continue;
									return {
										value: s.arg,
										done: n.done
									}
								}
								"throw" === s.type && (a = "completed", n.method = "throw", n.arg = s.arg)
							}
						}
					}

					function S(e, t) {
						var n = t.method,
							a = e.iterator[n];
						if (void 0 === a) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), u;
						var r = m(a, e.iterator, t.arg);
						if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, u;
						var i = r.arg;
						return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
					}

					function k(e) {
						var t = {
							tryLoc: e[0]
						};
						1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
					}

					function x(e) {
						var t = e.completion || {};
						t.type = "normal", delete t.arg, e.completion = t
					}

					function R(e) {
						this.tryEntries = [{
							tryLoc: "root"
						}], e.forEach(k, this), this.reset(!0)
					}

					function T(e) {
						if (e) {
							var t = e[i];
							if (t) return t.call(e);
							if ("function" == typeof e.next) return e;
							if (!isNaN(e.length)) {
								var a = -1,
									r = function t() {
										for (; ++a < e.length;)
											if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
										return t.value = void 0, t.done = !0, t
									};
								return r.next = r
							}
						}
						return {
							next: L
						}
					}

					function L() {
						return {
							value: void 0,
							done: !0
						}
					}
					return p.prototype = h, a(_, "constructor", {
						value: h,
						configurable: !0
					}), a(h, "constructor", {
						value: p,
						configurable: !0
					}), p.displayName = c(h, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
						var t = "function" == typeof e && e.constructor;
						return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
					}, e.mark = function(e) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, c(e, s, "GeneratorFunction")), e.prototype = Object.create(_), e
					}, e.awrap = function(e) {
						return {
							__await: e
						}
					}, y(E.prototype), c(E.prototype, o, (function() {
						return this
					})), e.AsyncIterator = E, e.async = function(t, n, a, r, i) {
						void 0 === i && (i = Promise);
						var o = new E(d(t, n, a, r), i);
						return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
							return e.done ? e.value : o.next()
						}))
					}, y(_), c(_, s, "Generator"), c(_, i, (function() {
						return this
					})), c(_, "toString", (function() {
						return "[object Generator]"
					})), e.keys = function(e) {
						var t = Object(e),
							n = [];
						for (var a in t) n.push(a);
						return n.reverse(),
							function e() {
								for (; n.length;) {
									var a = n.pop();
									if (a in t) return e.value = a, e.done = !1, e
								}
								return e.done = !0, e
							}
					}, e.values = T, R.prototype = {
						constructor: R,
						reset: function(e) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
								for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
						},
						stop: function() {
							this.done = !0;
							var e = this.tryEntries[0].completion;
							if ("throw" === e.type) throw e.arg;
							return this.rval
						},
						dispatchException: function(e) {
							if (this.done) throw e;
							var t = this;

							function a(n, a) {
								return o.type = "throw", o.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
							}
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var i = this.tryEntries[r],
									o = i.completion;
								if ("root" === i.tryLoc) return a("end");
								if (i.tryLoc <= this.prev) {
									var l = n.call(i, "catchLoc"),
										s = n.call(i, "finallyLoc");
									if (l && s) {
										if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return a(i.finallyLoc)
									} else if (l) {
										if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
									} else {
										if (!s) throw new Error("try statement without catch or finally");
										if (this.prev < i.finallyLoc) return a(i.finallyLoc)
									}
								}
							}
						},
						abrupt: function(e, t) {
							for (var a = this.tryEntries.length - 1; a >= 0; --a) {
								var r = this.tryEntries[a];
								if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
									var i = r;
									break
								}
							}
							i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
							var o = i ? i.completion : {};
							return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, u) : this.complete(o)
						},
						complete: function(e, t) {
							if ("throw" === e.type) throw e.arg;
							return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
						},
						finish: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), u
							}
						},
						catch: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.tryLoc === e) {
									var a = n.completion;
									if ("throw" === a.type) {
										var r = a.arg;
										x(n)
									}
									return r
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(e, t, n) {
							return this.delegate = {
								iterator: T(e),
								resultName: t,
								nextLoc: n
							}, "next" === this.method && (this.arg = void 0), u
						}
					}, e
				}

				function X(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var a = Object.getOwnPropertySymbols(e);
						t && (a = a.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, a)
					}
					return n
				}

				function J(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? X(Object(n), !0).forEach((function(t) {
							(0, N.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}
				var $ = (0, o.oM)({
						name: "leaderboard",
						initialState: {
							selectedScreen: "entryscreen",
							selectedGameTitle: void 0,
							selectedGameMode: void 0,
							currentUser: void 0,
							currentRow: void 0,
							selectedPlayer: void 0,
							selectedPlayerId: 0,
							leaderboardRanksDataMap: {},
							leaderboardNextPageToken: null,
							leaderboardDataLoaded: !1,
							showFilter: !1,
							searchFilter: {
								recency: {
									option: "lifetime"
								}
							},
							selectedTabIndex: 0,
							activeLbGameModeTileIndex: 0,
							selectedLeaderboardListType: "global",
							userLeaderboardDataLoaded: !1,
							userLeaderboardDataMap: {},
							friendsLeaderboardRanksDataMap: {},
							filterHoverIndex: [0, 0]
						},
						reducers: {
							setSelectedScreen: function(e, t) {
								e.selectedScreen = t.payload
							},
							setSelectedGameMode: function(e, t) {
								e.selectedGameMode = t.payload
							},
							setCurrentUser: function(e, t) {
								e.currentUser = t.payload
							},
							setSelectedPlayer: function(e, t) {
								e.selectedPlayer = t.payload
							},
							setSelectedPlayerId: function(e, t) {
								e.selectedPlayerId = t.payload
							},
							setCurrentRow: function(e, t) {
								e.currentRow = t.payload
							},
							setSearchFilter: function(e, t) {
								for (var n in e.searchFilter = {}, t.payload) e.searchFilter = J(J({}, e.searchFilter), {}, (0, N.Z)({}, t.payload[n].type, {
									option: t.payload[n].option
								}))
							},
							setSelectedTabIndex: function(e, t) {
								e.selectedTabIndex = t.payload
							},
							setSelectedLeaderboardListType: function(e, t) {
								e.selectedLeaderboardListType = t.payload
							},
							setLeaderboardDataMap: function(e, t) {
								e.leaderboardRanksDataMap = t.payload
							},
							setUserLeaderboardDataMap: function(e, t) {
								e.userLeaderboardDataMap = t.payload
							},
							setShowFilter: function(e, t) {
								e.showFilter = t.payload
							},
							setFriendsLeaderboardDataMap: function(e, t) {
								e.friendsLeaderboardRanksDataMap = t.payload
							},
							setFilterHoverIndex: function(e, t) {
								e.filterHoverIndex = t.payload
							},
							setSelectedGameTitle: function(e, t) {
								e.selectedGameTitle = t.payload
							},
							setActiveLbGameModeTileIndex: function(e, t) {
								e.activeLbGameModeTileIndex = t.payload
							}
						},
						extraReducers: function(e) {
							e.addCase(ne.fulfilled, (function(e, t) {
								var n, a, r, i, o = t.meta.arg.gameTitle,
									l = "gameModes" === t.meta.arg.gameMode ? "mw2" === o ? "tdm" : "br" : t.meta.arg.gameMode;
								e.leaderboardRanksDataMap && e.leaderboardRanksDataMap[o] && e.leaderboardRanksDataMap[o][l] && e.leaderboardRanksDataMap[o][l].ranks && e.selectedGameMode === e.leaderboardRanksDataMap[o][l].gameMode && e.searchFilter.recency.option === e.leaderboardRanksDataMap[o][l].recency && e.selectedLeaderboardListType === e.leaderboardRanksDataMap[o][l].selectedLeaderboardListType ? e.leaderboardRanksDataMap[o] = J(J({}, e.leaderboardRanksDataMap[o]), {}, (0, N.Z)({}, l, J(J({}, e.leaderboardRanksDataMap[o][l]), {}, {
									cols: t.payload.data.columns,
									ranks: [].concat((0, Y.Z)(e.leaderboardRanksDataMap[o][l].ranks), (0, Y.Z)(null === (n = t.payload.data) || void 0 === n ? void 0 : n.ranks)),
									nextPageToken: t.payload.data.nextPageToken
								}))) : e.leaderboardRanksDataMap[o] = J(J({}, e.leaderboardRanksDataMap[o]), {}, (0, N.Z)({}, l, {
									gameMode: e.selectedGameMode,
									recency: e.searchFilter.recency.option,
									selectedLeaderboardListType: e.selectedLeaderboardListType,
									nextPageToken: null === (a = t.payload.data) || void 0 === a ? void 0 : a.nextPageToken,
									cols: null !== (r = t.payload.data) && void 0 !== r && r.columns ? (0, Y.Z)(t.payload.data.columns) : [],
									ranks: null !== (i = t.payload.data) && void 0 !== i && i.ranks ? (0, Y.Z)(t.payload.data.ranks) : []
								})), e.leaderboardDataLoaded = !0
							})), e.addCase(re.fulfilled, (function(e, t) {
								var n = t.meta.arg.gameTitle,
									a = "gameModes" === t.meta.arg.gameMode ? "mw2" === n ? "tdm" : "br" : t.meta.arg.gameMode;
								e.userLeaderboardDataMap[n] = J(J({}, e.userLeaderboardDataMap[n]), {}, (0, N.Z)({}, a, t.payload.data)), e.userLeaderboardDataLoaded = !0
							})), e.addCase(ae.fulfilled, (function(e, t) {
								var n, a, r, i = t.meta.arg.gameTitle,
									o = "gameModes" === t.meta.arg.gameMode ? "mw2" === i ? "tdm" : "br" : t.meta.arg.gameMode;
								t.payload.data.ranks = t.payload.data.ranks.filter((function(e) {
									return null !== e.percentileRank || null !== e.rank
								})), e.friendsLeaderboardRanksDataMap && e.friendsLeaderboardRanksDataMap[i] && e.friendsLeaderboardRanksDataMap[i][o] && e.friendsLeaderboardRanksDataMap[i][o].ranks && e.selectedGameMode === e.friendsLeaderboardRanksDataMap[i][o].gameMode && e.searchFilter.recency.option === e.friendsLeaderboardRanksDataMap[i][o].recency && e.selectedLeaderboardListType === e.friendsLeaderboardRanksDataMap[i][o].selectedLeaderboardListType && e.selectedGameTitle === e.friendsLeaderboardRanksDataMap[i][o].selectedGameTitle ? e.friendsLeaderboardRanksDataMap[i] = J(J({}, e.friendsLeaderboardRanksDataMap[i]), {}, (0, N.Z)({}, o, J(J({}, e.friendsLeaderboardRanksDataMap[i][o]), {}, {
									cols: t.payload.data.columns,
									ranks: [].concat((0, Y.Z)(e.friendsLeaderboardRanksDataMap[i][o].ranks), (0, Y.Z)(t.payload.data.ranks)),
									nextPageToken: t.payload.data.nextPageToken
								}))) : e.friendsLeaderboardRanksDataMap[i] = J(J({}, e.friendsLeaderboardRanksDataMap[i]), {}, (0, N.Z)({}, o, {
									selectedGameTitle: e.selectedGameTitle,
									gameMode: e.selectedGameMode,
									recency: e.searchFilter.recency.option,
									selectedLeaderboardListType: e.selectedLeaderboardListType,
									nextPageToken: null === (n = t.payload.data) || void 0 === n ? void 0 : n.nextPageToken,
									cols: null !== (a = t.payload.data) && void 0 !== a && a.columns ? (0, Y.Z)(t.payload.data.columns) : [],
									ranks: null !== (r = t.payload.data) && void 0 !== r && r.ranks ? (0, Y.Z)(t.payload.data.ranks) : []
								}))
							}))
						}
					}),
					ee = function(e) {
						return "local" === e || "dev" === e ? "https://stage-telescope-api.kube.activision.com" : "shaqa" === e ? "https://shaqa-telescope-api.kube.activision.com" : "cert" === e ? "https://telescope-cert.callofduty.com" : "/api/ts-api"
					},
					te = function(e) {
						return "local" === e
					},
					ne = (0, o.hg)("leaderboards/fetchLeaderboardData", function() {
						var e = (0, A.Z)(Q().mark((function e(t, n) {
							var a, r, i, o, l, s, c, d;
							return Q().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (a = n.getState().global, r = a.env, i = a.authToken, o = "", t.gameTitle && t.gameMode) {
											e.next = 4;
											break
										}
										return e.abrupt("return");
									case 4:
										return t.recency && "currentSeason" === t.recency.option && (o = "/season/s2"), l = t.gameMode, "gameModes" === t.gameMode && ("mw2" === t.gameTitle ? l = "tdm" : "wz2" === t.gameTitle && (l = "br")), s = "/lb/v1/global/title/".concat(t.gameTitle, "/mode/").concat(l).concat(o || "", "?limit=").concat(100).concat(t.nextPageToken ? "&pageToken=".concat(t.nextPageToken) : "").concat(t.squadSize ? "&squadSize=".concat(t.squadSize.option) : ""), c = "".concat(ee(r)).concat(s), e.prev = 9, e.next = 12, P().get(c, {
											headers: {
												Authorization: "Bearer ".concat(i)
											}
										});
									case 12:
										return d = e.sent, e.abrupt("return", d.data.data);
									case 16:
										return e.prev = 16, e.t0 = e.catch(9), console.log(e.t0), e.abrupt("return", null);
									case 20:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[9, 16]
							])
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}()),
					ae = (0, o.hg)("leaderboards/fetchFriendsLeaderboardData", function() {
						var e = (0, A.Z)(Q().mark((function e(t, n) {
							var a, r, i, o, l, s, c, d;
							return Q().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (a = n.getState().global, r = a.env, i = a.authToken, o = "", t.gameTitle && t.gameMode) {
											e.next = 4;
											break
										}
										return e.abrupt("return");
									case 4:
										return t.recency && "currentSeason" === t.recency.option && (o = "/season/s2"), l = t.gameMode, "gameModes" === t.gameMode && ("mw2" === t.gameTitle ? l = "tdm" : "wz2" === t.gameTitle && (l = "br")), s = "/lb/v1/user/friends/title/".concat(t.gameTitle, "/mode/").concat(l).concat(o || "", "?limit=").concat(100).concat(t.nextPageToken ? "&pageToken=".concat(t.nextPageToken) : "").concat(t.squadSize ? "&squadSize=".concat(t.squadSize.option) : ""), c = "".concat(ee(r)).concat(s), e.prev = 9, e.next = 12, P().get(c, {
											headers: {
												Authorization: "Bearer ".concat(te(r) ? "uno16064841513517642380" : i)
											}
										});
									case 12:
										return d = e.sent, e.abrupt("return", d.data.data);
									case 16:
										return e.prev = 16, e.t0 = e.catch(9), console.log(e.t0), e.abrupt("return", null);
									case 20:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[9, 16]
							])
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}()),
					re = (0, o.hg)("leaderboards/fetchUserLeaderboardData", function() {
						var e = (0, A.Z)(Q().mark((function e(t, n) {
							var a, r, i, o, l, s, c, d;
							return Q().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (a = n.getState().global, r = a.env, i = a.authToken, o = "", t.gameTitle && t.gameMode) {
											e.next = 4;
											break
										}
										return e.abrupt("return");
									case 4:
										return t.recency && "currentSeason" === t.recency.option && (o = "/season/s2"), l = t.gameMode, "gameModes" === t.gameMode && ("mw2" === t.gameTitle ? l = "tdm" : "wz2" === t.gameTitle && (l = "br")), s = "/lb/v1/user/title/".concat(t.gameTitle, "/mode/").concat(l).concat(o || ""), c = "".concat(ee(r)).concat(s), e.prev = 9, e.next = 12, P().get(c, {
											headers: {
												Authorization: "Bearer ".concat(te(r) ? "uno16064841513517642380" : i)
											}
										});
									case 12:
										return d = e.sent, e.abrupt("return", d.data.data);
									case 16:
										return e.prev = 16, e.t0 = e.catch(9), console.log(e.t0), e.abrupt("return", null);
									case 20:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[9, 16]
							])
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}()),
					ie = $.actions;
				const oe = $.reducer,
					le = (0, o.xC)({
						reducer: {
							global: I,
							record: V,
							leaderboard: oe
						},
						middleware: function(e) {
							return e()
						},
						devTools: !0
					});
				var se = n(58804),
					ce = {
						colors: {
							primaryGreen: "#79C370",
							darkGreen: "#368947",
							neutralLight: "#e7e7e7",
							neutralDark: "#141313",
							neutralLightAlt: "#9AA39A",
							darkGray: "#282727",
							swamp: "#2a2b2b",
							elPaso: "#3b3b3a",
							orange: "#FF6700"
						}
					};
				const de = function(e) {
					var t = e.children;
					return a.createElement(se.f6, {
						theme: ce
					}, t)
				};
				var me = n(30168);
				const ue = n.p + "aed4497a2a57750e2fdd.otf",
					ge = n.p + "6270fdc0c6a1e82dea7a.otf",
					pe = n.p + "7c8317b0401bf024b414.otf",
					he = n.p + "cd0573cbd6315fc66f9f.otf",
					fe = n.p + "389fccabc10668d14b5f.otf";
				var ve, be;
				const _e = (0, se.vJ)(ve || (ve = (0, me.Z)(["\n          @font-face {\n              font-family: 'Stratum2';\n              font-weight: 100;\n              src: url(", ") format('opentype');\n          }\n\n          @font-face {\n              font-family: 'Stratum2';\n              font-weight: 300;\n              src: url(", ") format('opentype');\n          }\n\n          @font-face {\n              font-family: 'Stratum2';\n              font-weight: normal;\n              src: url(", ") format('opentype');\n          }\n\n          @font-face {\n              font-family: 'Stratum2';\n              font-weight: 500;\n              src: url(", ") format('opentype');\n          }\n\n          @font-face {\n              font-family: 'Stratum2';\n              font-weight: bold;\n              src: url(", ") format('opentype');\n          }\n\n          @font-face {\n              font-family: 'Stratum2';\n              font-weight: 900;\n              src: url(", ") format('opentype');\n          }\n    \n\n\n  *,\n  *::before,\n  *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n    transition-property: none !important;\n    \n    ", "\n  }\n\n  html {\n    box-sizing: border-box;\n    font-size: ", ";\n  }\n\n  body {\n            font-family: 'Stratum2';\n    color: black;\n    font-weight: normal;\n    line-height: 1;\n  }\n\n  main {\n      width: 192rem;\n      height: 108rem;\n  }\n"])), ue, ge, pe, pe, he, fe, ("PC" === le.getState().global.platform || "PS5" === le.getState().global.platform || "XBOXSX" === le.getState().global.platform) && (0, se.iv)(be || (be = (0, me.Z)(["\n            transition-property: all !important;\n        "]))), le.getState().global.is4k ? "125%" : "62.5%");
				var ye, Ee, we, Se, ke, xe, Re = se.ZP.section(ye || (ye = (0, me.Z)(["\n    min-height: 108rem;\n    ", "\n    &.default-background {\n        background: linear-gradient(360deg, #000000 0%, #000000 31.66%, rgba(0, 0, 0, 0) 67.74%),\n            url('https://assets.callofduty.com/cdn/app/codp/iw9/background/CR_bkgd_1920x1080.jpg');\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: center;\n    }\n    &.entry-screen-background {\n        background-image: url('https://assets.callofduty.com/cdn/app/codp/iw9/menu/entrypoint_mw2_mp_1920x1080.jpg');\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: center;\n        &.wz-bg {\n            background-image: url('https://assets.callofduty.com/cdn/app/codp/iw9/menu/entrypoint_wz2_br_1920x1080.jpg');\n        }\n        &.resurgence-bg {\n            background-image: url('https://assets.callofduty.com/cdn/app/codp/iw9/menu/combat_record_wz2_resurgence_1920x1080.jpg');\n        }\n        &.plunder-bg {\n            background-image: url('https://assets.callofduty.com/cdn/app/codp/iw9/background/wz2-plunder-entrypoint-1920x1080.jpg');\n        }\n        &.dmz-bg {\n            background-image: url('https://assets.callofduty.com/cdn/app/codp/iw9/dmz/entrypoint_wz2_dmz_1920x1080.jpg');\n        }\n        &.lb {\n            ", "\n        }\n        &.mw2-lb-bg {\n            background-image: url('https://assets.callofduty.com/cdn/app/codp/iw9/menu/entrypoint_mw2_mp_1920x1080.jpg');\n        }\n    }\n    .empty-background {\n        background: #3b3b3a !important;\n    }\n    .empty-text {\n        color: #9aa39a !important;\n    }\n"])), (function(e) {
						return e.isArabic && (0, se.iv)(Ee || (Ee = (0, me.Z)(["\n            direction: rtl;\n        "])))
					}), (function(e) {
						return e.bgImage && (0, se.iv)(we || (we = (0, me.Z)(["\n                    background-image: url(", ");\n                "])), (function(e) {
							return e.bgImage
						}))
					})),
					Te = (se.ZP.div(Se || (Se = (0, me.Z)(["\n    height: 8.8rem;\n    display: flex;\n    align-items: center;\n    padding-left: 2.4rem;\n    text-transform: uppercase;\n    width: 100%;\n    background: linear-gradient(88.12% 100% at 50% 0%, #1d1f14 0%, rgba(29, 31, 20, 0.01) 100%);\n    .close-button {\n        display: flex;\n        background: #989187;\n        border-radius: 0.4rem;\n        padding: 0.475rem 0.8rem;\n        align-items: center;\n        margin-right: 1.6rem;\n        transition: all 0.2s;\n        color: #989187;\n\n        ", "\n    }\n"])), (function(e) {
						return e.isHovered && (0, se.iv)(ke || (ke = (0, me.Z)(["\n                background: ", ";\n            "])), (function(e) {
							return e.theme.colors.primaryGreen
						}))
					})), se.ZP.div(xe || (xe = (0, me.Z)(["\n    top: 14rem;\n    color: #494949;\n    font-style: italic;\n    text-align: right;\n    margin: 0.5rem 9.6rem;\n    font-size: 1.8rem;\n"]))), n(15671)),
					Le = n(43144),
					De = n(60136),
					Me = n(82963),
					Ie = n(61120),
					Ae = function(e, t) {
						return {
							xOffset: parseInt(getComputedStyle(t).getPropertyValue(We), 10),
							scrollWidth: t.scrollWidth,
							clientWidth: e.clientWidth
						}
					},
					Ne = function(e) {
						var t = e.getBoundingClientRect(),
							n = e.offsetLeft;
						return {
							offsetLeft: n,
							offsetRight: n + t.width
						}
					},
					Ce = function(e, t) {
						throw new Error("".concat(e, " must be overridden in ").concat(t))
					};

				function Pe(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var a = Object.getOwnPropertySymbols(e);
						t && (a = a.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, a)
					}
					return n
				}

				function ze(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? Pe(Object(n), !0).forEach((function(t) {
							(0, N.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pe(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}
				var Oe = function(e) {
					(0, De.Z)(r, e);
					var t, n, a = (t = r, n = function() {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
						} catch (e) {
							return !1
						}
					}(), function() {
						var e, a = (0, Ie.Z)(t);
						if (n) {
							var r = (0, Ie.Z)(this).constructor;
							e = Reflect.construct(a, arguments, r)
						} else e = a.apply(this, arguments);
						return (0, Me.Z)(this, e)
					});

					function r(e, t, n) {
						var i;
						return (0, Te.Z)(this, r), (i = a.call(this)).scrollContainer = e, i.scrollContent = t, i.defaultOptions = n, i
					}
					return (0, Le.Z)(r, [{
						key: "getScrollOptions",
						value: function(e) {
							return ze(ze({
								padding: 0,
								error: 0
							}, this.defaultOptions), e)
						}
					}, {
						key: "listen",
						value: function(e) {
							var t = this,
								n = function() {
									return e()
								};
							return this.on(qe.Change, n),
								function() {
									return t.off(qe.Change, n)
								}
						}
					}, {
						key: "notify",
						value: function() {
							this.emit(qe.Change)
						}
					}, {
						key: "getScrollContainerInfo",
						value: function() {
							Ce("getScrollContainerInfo()", this.constructor.name)
						}
					}, {
						key: "getElementInfo",
						value: function(e) {
							Ce("getElementInfo(el)", this.constructor.name)
						}
					}, {
						key: "isScrolledToLeftEdge",
						value: function(e) {
							Ce("isScrolledToLeftEdge(options)", this.constructor.name)
						}
					}, {
						key: "isScrolledToRightEdge",
						value: function(e) {
							Ce("isScrolledToRightEdge(options)", this.constructor.name)
						}
					}, {
						key: "scrollToStart",
						value: function() {
							Ce("scrollToStart()", this.constructor.name)
						}
					}, {
						key: "scrollToEnd",
						value: function() {
							Ce("scrollToEnd()", this.constructor.name)
						}
					}, {
						key: "scrollToLeftEdge",
						value: function() {
							Ce("scrollToLeftEdge()", this.constructor.name)
						}
					}, {
						key: "scrollToRightEdge",
						value: function() {
							Ce("scrollToRightEdge()", this.constructor.name)
						}
					}, {
						key: "scrollViewportStartTo",
						value: function(e) {
							Ce("scrollViewportStartTo(position)", this.constructor.name)
						}
					}, {
						key: "isScrolledToStart",
						value: function(e) {
							var t = this.getScrollOptions(e),
								n = t.error,
								a = t.padding;
							return this.getScrollContainerInfo().viewportStart + a <= n
						}
					}, {
						key: "isScrolledToEnd",
						value: function(e) {
							var t = this.getScrollOptions(e),
								n = t.error,
								a = t.padding,
								r = this.getScrollContainerInfo();
							return r.containerWidth - r.viewportEnd + a <= n
						}
					}, {
						key: "isBeforeViewportStart",
						value: function(e) {
							var t = this.getScrollContainerInfo().viewportStart;
							return this.getElementInfo(e).offsetStart < t
						}
					}, {
						key: "isAfterViewportEnd",
						value: function(e) {
							var t = this.getScrollContainerInfo().viewportEnd;
							return this.getElementInfo(e).offsetEnd > t
						}
					}, {
						key: "scrollTo",
						value: function(e) {
							this.scrollViewportStartTo(e)
						}
					}, {
						key: "scrollViewportEndTo",
						value: function(e) {
							var t = e - this.getScrollContainerInfo().viewportWidth;
							this.scrollViewportStartTo(t)
						}
					}, {
						key: "scrollIntoView",
						value: function(e) {
							if (this.isBeforeViewportStart(e)) {
								var t = this.getElementInfo(e).offsetStart;
								this.scrollViewportStartTo(t)
							} else if (this.isAfterViewportEnd(e)) {
								var n = this.getElementInfo(e).offsetEnd;
								this.scrollViewportEndTo(n)
							}
						}
					}, {
						key: "isFullyInView",
						value: function(e) {
							return !this.isBeforeViewportStart(e) && !this.isAfterViewportEnd(e)
						}
					}, {
						key: "isAtLeastPartiallyInView",
						value: function(e) {
							var t = this.getScrollContainerInfo(),
								n = t.viewportStart,
								a = t.viewportEnd,
								r = this.getElementInfo(e),
								i = r.offsetStart;
							return r.offsetEnd > n && i < a
						}
					}, {
						key: "isOnlyPartiallyInView",
						value: function(e) {
							return this.isAtLeastPartiallyInView(e) && !this.isFullyInView(e)
						}
					}, {
						key: "getScrollContainerDebugInfo",
						value: function(e) {
							return ze(ze({}, this.getScrollContainerInfo()), {}, {
								scrolledToStart: this.isScrolledToStart(e),
								scrolledToEnd: this.isScrolledToEnd(e),
								scrolledToLeftEdge: this.isScrolledToLeftEdge(e),
								scrolledToRightEdge: this.isScrolledToRightEdge(e)
							}, Ae(this.scrollContainer, this.scrollContent))
						}
					}, {
						key: "getScrollElementDebugInfo",
						value: function(e, t) {
							return ze(ze({
								objectIsFullyInView: this.isFullyInView(e)
							}, this.getElementInfo(e)), {}, {
								beforeViewStart: this.isBeforeViewportStart(e),
								afterViewEnd: this.isAfterViewportEnd(e),
								objectIsAtLeastPartiallyInView: this.isAtLeastPartiallyInView(e),
								objectIsOnlyPartiallyInView: this.isOnlyPartiallyInView(e)
							}, Ne(e))
						}
					}, {
						key: "hack_fixScrollJitter",
						value: function() {
							var e = this;
							this.scrollToEnd(), setTimeout((function() {
								return e.scrollToStart()
							}), 0)
						}
					}]), r
				}(function() {
					function e() {
						(0, Te.Z)(this, e), this.events = {}
					}
					return (0, Le.Z)(e, [{
						key: "on",
						value: function(e, t) {
							this.events[e] || (this.events[e] = []), this.events[e].push(t)
						}
					}, {
						key: "off",
						value: function(e, t) {
							this.events[e] && (this.events[e] = this.events[e].filter((function(e) {
								return e !== t
							})))
						}
					}, {
						key: "emit",
						value: function(e) {
							for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
							this.events[e] && this.events[e].forEach((function(e) {
								return e.apply(void 0, n)
							}))
						}
					}]), e
				}());
				var je = function(e) {
					(0, De.Z)(r, e);
					var t, n, a = (t = r, n = function() {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
						} catch (e) {
							return !1
						}
					}(), function() {
						var e, a = (0, Ie.Z)(t);
						if (n) {
							var r = (0, Ie.Z)(this).constructor;
							e = Reflect.construct(a, arguments, r)
						} else e = a.apply(this, arguments);
						return (0, Me.Z)(this, e)
					});

					function r() {
						return (0, Te.Z)(this, r), a.apply(this, arguments)
					}
					return (0, Le.Z)(r, [{
						key: "getScrollContainerInfo",
						value: function() {
							var e = Ae(this.scrollContainer, this.scrollContent),
								t = e.xOffset,
								n = e.scrollWidth,
								a = e.clientWidth,
								r = -1 * t,
								i = r + a;
							return {
								viewportStart: r,
								viewportEnd: i,
								viewportLeft: r,
								viewportRight: i,
								viewportWidth: a,
								containerWidth: n
							}
						}
					}, {
						key: "getElementInfo",
						value: function(e) {
							var t = Ne(e);
							return {
								offsetStart: t.offsetLeft,
								offsetEnd: t.offsetRight
							}
						}
					}, {
						key: "isScrolledToLeftEdge",
						value: function(e) {
							return this.isScrolledToStart(e)
						}
					}, {
						key: "isScrolledToRightEdge",
						value: function(e) {
							return this.isScrolledToEnd(e)
						}
					}, {
						key: "scrollToStart",
						value: function() {
							return this.scrollViewportStartTo(0)
						}
					}, {
						key: "scrollToEnd",
						value: function() {
							var e = this.getScrollContainerInfo(),
								t = e.viewportWidth,
								n = e.containerWidth;
							return this.scrollViewportStartTo(n - t)
						}
					}, {
						key: "scrollToLeftEdge",
						value: function() {
							return this.scrollToStart()
						}
					}, {
						key: "scrollToRightEdge",
						value: function() {
							return this.scrollToEnd()
						}
					}, {
						key: "scrollViewportStartTo",
						value: function(e) {
							this.scrollContent.style.setProperty(We, "".concat(-e, "px")), this.notify()
						}
					}]), r
				}(Oe);
				var Be, Ge, Ze = function(e) {
						(0, De.Z)(r, e);
						var t, n, a = (t = r, n = function() {
							if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
							if (Reflect.construct.sham) return !1;
							if ("function" == typeof Proxy) return !0;
							try {
								return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
							} catch (e) {
								return !1
							}
						}(), function() {
							var e, a = (0, Ie.Z)(t);
							if (n) {
								var r = (0, Ie.Z)(this).constructor;
								e = Reflect.construct(a, arguments, r)
							} else e = a.apply(this, arguments);
							return (0, Me.Z)(this, e)
						});

						function r() {
							return (0, Te.Z)(this, r), a.apply(this, arguments)
						}
						return (0, Le.Z)(r, [{
							key: "getScrollContainerInfo",
							value: function() {
								var e = Ae(this.scrollContainer, this.scrollContent),
									t = e.xOffset,
									n = e.scrollWidth,
									a = e.clientWidth,
									r = t + a;
								return {
									viewportStart: t,
									viewportEnd: r,
									viewportLeft: r,
									viewportRight: t,
									viewportWidth: a,
									containerWidth: n
								}
							}
						}, {
							key: "getElementInfo",
							value: function(e) {
								var t = Ne(e),
									n = t.offsetLeft,
									a = t.offsetRight,
									r = this.getScrollContainerInfo().viewportWidth;
								return {
									offsetStart: -1 * (a - r),
									offsetEnd: -1 * (n - r)
								}
							}
						}, {
							key: "isScrolledToLeftEdge",
							value: function(e) {
								return this.isScrolledToEnd(e)
							}
						}, {
							key: "isScrolledToRightEdge",
							value: function(e) {
								return this.isScrolledToStart(e)
							}
						}, {
							key: "scrollToStart",
							value: function() {
								return this.scrollViewportStartTo(0)
							}
						}, {
							key: "scrollToEnd",
							value: function() {
								var e = this.getScrollContainerInfo(),
									t = e.viewportWidth,
									n = e.containerWidth;
								return this.scrollViewportStartTo(n - t)
							}
						}, {
							key: "scrollToLeftEdge",
							value: function() {
								return this.scrollToEnd()
							}
						}, {
							key: "scrollToRightEdge",
							value: function() {
								return this.scrollToStart()
							}
						}, {
							key: "scrollViewportStartTo",
							value: function(e) {
								this.scrollContent.style.setProperty(We, "".concat(e, "px")), this.notify()
							}
						}]), r
					}(Oe),
					Ue = "ltr",
					Ke = "rtl",
					He = (Be = {}, (0, N.Z)(Be, Ue, (function(e, t, n) {
						return new je(e, t, n)
					})), (0, N.Z)(Be, Ke, (function(e, t, n) {
						return new Ze(e, t, n)
					})), Be),
					We = "--x-offset",
					qe = {
						Change: "change"
					};
				const Fe = se.ZP.div.attrs((function(e) {
					return {
						style: {
							direction: e.direction
						}
					}
				}))(Ge || (Ge = (0, me.Z)(["\n    position: relative;\n    overflow-x: hidden;\n"])));
				var Ve;
				const Ye = se.ZP.div(Ve || (Ve = (0, me.Z)(["\n    ", ": ", "px;\n    transform: translateX(var(", "));\n"])), We, (function(e) {
					return e.initialOffset || 0
				}), We);

				function Qe(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var a = Object.getOwnPropertySymbols(e);
						t && (a = a.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, a)
					}
					return n
				}

				function Xe(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? Qe(Object(n), !0).forEach((function(t) {
							(0, N.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qe(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}
				Number.isFinite;
				var Je = function() {
					function e(t, n, a, r) {
						(0, Te.Z)(this, e), this.direction = t, this.hscroll = n, this.itemElements = Array.from(a), this.defaultOptions = Xe({
							padding: 0,
							gap: 0,
							visibleAreaOfAdjacentItems: 0,
							error: 0
						}, r)
					}
					return (0, Le.Z)(e, [{
						key: "getScrollOptions",
						value: function(e) {
							return Xe(Xe({}, this.defaultOptions), e)
						}
					}, {
						key: "isRtl",
						value: function() {
							return this.direction === Ke
						}
					}, {
						key: "count",
						value: function() {
							return this.itemElements.length
						}
					}, {
						key: "firstItemIndex",
						value: function() {
							return 0
						}
					}, {
						key: "lastItemIndex",
						value: function() {
							return this.count() - 1
						}
					}, {
						key: "isFirstItemIndex",
						value: function(e) {
							return e === this.firstItemIndex()
						}
					}, {
						key: "isLastItemIndex",
						value: function(e) {
							return e === this.lastItemIndex()
						}
					}, {
						key: "clampIndex",
						value: function(e) {
							return t = e, n = this.firstItemIndex(), a = this.lastItemIndex(), Math.max(n, Math.min(a, t));
							var t, n, a
						}
					}, {
						key: "getItemElement",
						value: function(e) {
							return this.itemElements[e]
						}
					}, {
						key: "getStartEdgeForItemAtIndex",
						value: function(e, t) {
							var n = this.getScrollOptions(t),
								a = n.padding,
								r = n.gap,
								i = n.visibleAreaOfAdjacentItems;
							return this.isFirstItemIndex(e) ? a : Math.max(a, r + i)
						}
					}, {
						key: "getEndEdgeForItemAtIndex",
						value: function(e, t) {
							var n = this.getScrollOptions(t),
								a = n.padding,
								r = n.gap,
								i = n.visibleAreaOfAdjacentItems;
							return this.isLastItemIndex(e) ? a : Math.max(a, r + i)
						}
					}, {
						key: "isItemAtIndexBeforeStartEdge",
						value: function(e, t) {
							var n = this.getItemElement(e),
								a = this.hscroll.getScrollContainerInfo().viewportStart;
							return this.hscroll.getElementInfo(n).offsetStart < a + this.getStartEdgeForItemAtIndex(e, t)
						}
					}, {
						key: "isItemAtIndexAfterEndEdge",
						value: function(e, t) {
							var n = this.getItemElement(e),
								a = this.hscroll.getScrollContainerInfo().viewportEnd;
							return this.hscroll.getElementInfo(n).offsetEnd > a - this.getEndEdgeForItemAtIndex(e, t)
						}
					}, {
						key: "isItemAtIndexFullyVisible",
						value: function(e, t) {
							return !this.isItemAtIndexBeforeStartEdge(e, t) && !this.isItemAtIndexAfterEndEdge(e, t)
						}
					}, {
						key: "scrollItemAtIndexIntoView",
						value: function(e, t) {
							var n = this.getItemElement(e),
								a = this.hscroll.getElementInfo(n),
								r = a.offsetStart,
								i = a.offsetEnd;
							if (this.isItemAtIndexBeforeStartEdge(e, t)) {
								var o = r - this.getStartEdgeForItemAtIndex(e, t);
								this.hscroll.scrollViewportStartTo(o)
							} else if (this.isItemAtIndexAfterEndEdge(e, t)) {
								var l = i + this.getEndEdgeForItemAtIndex(e, t);
								this.hscroll.scrollViewportEndTo(l)
							}
						}
					}, {
						key: "scrollToStart",
						value: function(e) {
							var t = this.getScrollOptions(e).padding;
							this.hscroll.scrollViewportStartTo(-t)
						}
					}, {
						key: "scrollToEnd",
						value: function(e) {
							var t = this.getScrollOptions(e).padding,
								n = this.hscroll.getScrollContainerInfo().containerWidth;
							this.hscroll.scrollViewportEndTo(n + t)
						}
					}, {
						key: "scrollToFirstItem",
						value: function(e) {
							this.scrollItemAtIndexIntoView(this.firstItemIndex(), e)
						}
					}, {
						key: "scrollToLastItem",
						value: function(e) {
							this.scrollItemAtIndexIntoView(this.lastItemIndex(), e)
						}
					}, {
						key: "moveItemAtIndexIntoLeftPosition",
						value: function(e) {
							var t = arguments.length > 2 ? arguments[2] : void 0,
								n = this.getItemElement(e),
								a = this.hscroll.getElementInfo(n),
								r = a.offsetStart,
								i = a.offsetEnd;
							if (this.isRtl()) {
								var o = i + this.getEndEdgeForItemAtIndex(e, t);
								this.hscroll.scrollViewportEndTo(o)
							} else {
								var l = r - this.getStartEdgeForItemAtIndex(e, t);
								this.hscroll.scrollViewportStartTo(l)
							}
						}
					}, {
						key: "getFirstVisibleIndex",
						value: function(e) {
							for (var t = this.firstItemIndex(); t <= this.lastItemIndex(); t++)
								if (this.isItemAtIndexFullyVisible(t, e)) return t
						}
					}, {
						key: "getLastVisibleIndex",
						value: function(e) {
							for (var t = -1, n = this.firstItemIndex(); n <= this.lastItemIndex(); n++)
								if (this.isItemAtIndexFullyVisible(n, e)) t = n;
								else if (-1 !== t) break;
							return t
						}
					}, {
						key: "getLeftMostVisibleIndex",
						value: function() {
							return this.isRtl() ? this.getLastVisibleIndex() : this.getFirstVisibleIndex()
						}
					}, {
						key: "getRightMostVisibleIndex",
						value: function() {
							return this.isRtl() ? this.getFirstVisibleIndex() : this.getLastVisibleIndex()
						}
					}, {
						key: "shiftLeft",
						value: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
							if (!this.hscroll.isScrolledToLeftEdge()) {
								var t = this.getLeftMostVisibleIndex(),
									n = this.isRtl() ? -e : e,
									a = this.clampIndex(t - n);
								this.moveItemAtIndexIntoLeftPosition(a, 0)
							}
						}
					}, {
						key: "shiftRight",
						value: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
							if (!this.hscroll.isScrolledToRightEdge()) {
								var t = this.getLeftMostVisibleIndex(),
									n = this.isRtl() ? -e : e,
									a = this.clampIndex(t + n);
								this.moveItemAtIndexIntoLeftPosition(a, 0)
							}
						}
					}]), e
				}();
				const $e = function(e, t, n, r) {
					var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
					return (0, a.useMemo)((function() {
						return t && n && new Je(e, t, n, r)
					}), [t, n, r].concat((0, Y.Z)(i)))
				};
				var et = n(70885);
				const tt = function(e, t, n, r) {
					var i = (0, a.useState)(),
						o = (0, et.Z)(i, 2),
						l = o[0],
						s = o[1],
						c = function() {
							var e = (0, a.useState)(),
								t = (0, et.Z)(e, 2),
								n = (t[0], t[1]);
							return (0, a.useCallback)((function() {
								return n("".concat(Date.now(), "~").concat(Math.random()))
							}), [])
						}();
					return (0, a.useEffect)((function() {
						var a = function(e, t, n, a) {
							return (He[e] || He[Ue])(t, n, a)
						}(e, t.current, n.current, r);
						return s(a), a.listen(c)
					}), [e, t, n, r]), l
				};

				function nt(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var a = Object.getOwnPropertySymbols(e);
						t && (a = a.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, a)
					}
					return n
				}
				const at = function(e, t, n) {
					var r = (0, a.useRef)(),
						i = (0, a.useRef)(),
						o = (0, a.useRef)(n),
						l = tt(e, r, i, o.current.scrollOptions),
						s = function(e, t) {
							var n = (0, a.useState)(),
								r = (0, et.Z)(n, 2),
								i = r[0],
								o = r[1];
							return (0, a.useEffect)((function() {
								o(e.current.querySelectorAll(t))
							}), [e, t]), i
						}(i, t);
					return function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {};
							t % 2 ? nt(Object(n), !0).forEach((function(t) {
								(0, N.Z)(e, t, n[t])
							})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nt(Object(n)).forEach((function(t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
							}))
						}
						return e
					}({
						scrollContainerRef: r,
						scrollContentRef: i,
						itemScroll: $e(e, l, s, o.current.itemScrollOptions),
						hscroll: l
					}, o.current)
				};
				var rt, it, ot, lt, st, ct, dt, mt, ut, gt, pt = "8rem",
					ht = "3.2rem",
					ft = se.ZP.section(rt || (rt = (0, me.Z)(["\n    height: 99.2rem;\n    position: relative;\n    overflow: hidden;\n    .entry-screen-block {\n        width: 100%;\n        padding: 2rem ", ";\n        height: 100%;\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        .stats-overview {\n            display: flex;\n            width: 100%;\n            justify-content: space-between;\n        }\n        .main-title-section {\n            line-height: 1.1;\n            div:nth-of-type(1) {\n                color: ", ";\n                text-transform: uppercase;\n                font-size: 2.8rem;\n            }\n            div:nth-of-type(2) {\n                color: ", ";\n                font-size: 7rem;\n                font-weight: bold;\n                text-transform: uppercase;\n            }\n        }\n        .sub-title {\n            color: #9aa39a;\n            font-size: 1.8rem;\n        }\n        .sub-value {\n            color: ", ";\n            font-size: 2.8rem;\n            font-weight: bold;\n        }\n\n        .game-type-wrap {\n            position: absolute;\n            bottom: 16.8rem;\n            display: flex;\n            width: 100%;\n            overflow-x: scroll;\n            &::-webkit-scrollbar {\n                display: none;\n            }\n        }\n    }\n"])), pt, (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					})),
					vt = se.ZP.div(it || (it = (0, me.Z)(["\n    margin: 0 -", ";\n"])), pt),
					bt = se.ZP.div(ot || (ot = (0, me.Z)(["\n    display: flex;\n    flex-direction: column;\n    min-width: 41rem;\n    .stats-values {\n        display: grid;\n        grid-auto-flow: column;\n        justify-content: normal;\n        > div {\n            width: 25rem;\n        }\n        > div > div {\n            margin-top: 2rem;\n            line-height: 3rem;\n        }\n    }\n    .game-icons {\n        margin-top: 3.6rem;\n\n        img {\n            height: 3rem;\n        }\n    }\n    .game-icon {\n        height: 2.3rem;\n        margin-bottom: 0.8rem;\n        img {\n            height: 100%;\n        }\n    }\n"]))),
					_t = se.ZP.div(lt || (lt = (0, me.Z)(["\n    padding-bottom: 3rem;\n    position: relative;\n    top: 2.1rem;\n\n    ", "\n\n    .game-title {\n        background: #9aa39a;\n        border-radius: 4px;\n        padding: 0.3rem 1.2rem;\n        color: #141313;\n        font-size: 2rem;\n        text-transform: uppercase;\n        font-weight: bold;\n        width: fit-content;\n        margin-bottom: 1.6rem;\n    }\n    .game-tiles-section {\n        height: 30rem;\n    }\n    .game-tiles-row {\n        display: flex;\n    }\n    .game-modes {\n        display: flex;\n        margin-left: ", "rem;\n        margin-right: ", "rem;\n        .game-mode {\n            width: 16rem;\n            height: 20.4rem;\n            position: relative;\n            border-radius: 0.4rem;\n            border: 0.1rem solid #50504f;\n            background: linear-gradient(rgba(231, 231, 231, 0.1), rgba(0, 0, 0, 0) 58%, rgba(0, 0, 0, 0)), #222221;\n        }\n        .game-mode > .tile-name {\n            font-family: 'DIN Next W1G Cn', 'Conduit ITC Cyr';\n            font-size: 2.4rem;\n            font-weight: 400;\n            text-transform: uppercase;\n            color: #9aa39a;\n            padding-left: ", "rem;\n            padding-right: ", "rem;\n            padding-bottom: 1.1rem;\n            position: absolute;\n            bottom: 0;\n        }\n\n        .tile-img {\n            width: 10.4rem;\n            height: 10.4rem;\n            text-align: center;\n            display: flex;\n            justify-content: center;\n            position: absolute;\n            bottom: 8rem;\n            left: 2.7rem;\n        }\n\n        .active-tile {\n            border-top: 0.4rem solid #79c370;\n            border-left: 0.1rem solid #79c370;\n            border-right: 0.1rem solid #79c370;\n            border-radius: 0.4rem 0.4rem 0px 0px;\n            background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 65%, rgba(121, 195, 112, 0.1)), #222221;\n            .tile-name {\n                color: ", ";\n            }\n            .bottom {\n                background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), #79c370;\n                border-radius: 0px 0px 0.4rem 0.4rem;\n                height: 3.2rem;\n                color: #141313;\n                font-size: 1.8rem;\n                font-weight: bold;\n                display: flex;\n                width: 16rem;\n                position: absolute;\n                left: -0.1rem;\n                text-transform: uppercase;\n                align-items: self-end;\n                bottom: -3.2rem;\n\n                svg {\n                    fill: #141313;\n                }\n\n                .bottom-content {\n                    display: flex;\n                    margin: auto 1.2rem;\n\n                    .bottom-text {\n                        margin: auto 0;\n                    }\n                }\n            }\n        }\n        .locked-tile {\n            .lock-icon {\n                width: 1.6rem;\n                height: 2rem;\n                opacity: 50%;\n                position: absolute;\n                left: 0;\n                bottom: 14.8rem;\n                margin: 1.8rem;\n                z-index: 1;\n            }\n            &.active-tile {\n                background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 65%, rgba(154, 163, 154, 0.1)), #222221;\n                border-top: 0.4rem solid #9aa39a;\n                border-left: 0.1rem solid #9aa39a;\n                border-right: 0.1rem solid #9aa39a;\n                .bottom {\n                    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), #9aa39a;\n                }\n            }\n        }\n    }\n    .wz2-game-modes {\n        margin-top: 5rem;\n    }\n"])), (function(e) {
						return !e.activeTabName && (0, se.iv)(st || (st = (0, me.Z)(["\n            top: 18rem;\n        "])))
					}), (function(e) {
						return e.isArabic ? 1.6 : 0
					}), (function(e) {
						return e.isArabic ? 0 : 1.6
					}), (function(e) {
						return e.isArabic ? 0 : 1.5
					}), (function(e) {
						return e.isArabic ? 1.5 : 0
					}), (function(e) {
						return e.theme.colors.neutralLight
					})),
					yt = se.ZP.div(ct || (ct = (0, me.Z)(["\n    padding-bottom: 0.9rem;\n    position: relative;\n\n    ", "\n\n    .game-title {\n      background: #9AA39A;\n      border-radius: 4px;\n      padding: 0.3rem 1.2rem;\n      color: #141313;\n      font-size: 2rem;\n      text-transform: uppercase;\n      font-weight: bold;\n      width: fit-content;\n      margin-bottom: 1.6rem;\n    }\n\n    .game-tiles-section {\n        height: 30rem;\n    }\n\n    .game-tiles-row {\n        display: flex;\n    }\n\n    .game-types {\n        display: flex;\n        gap: 2.12rem;\n\n        .game-type {\n            background-repeat: no-repeat;\n            background-size: cover;\n            background-position: center;\n            position: relative;\n            border-top: 0.4rem solid transparent;\n\n            .tile-image {\n                width: 11.1rem;\n                height: 11.1rem;\n                position: absolute;\n                top: 1.4rem;\n                left: 15.6rem;\n            }\n\n            .tile-name {\n                width: 42.4rem;\n                height: 20.4rem;\n                background-repeat: no-repeat;\n                color: ", ";\n                opacity: 60%;\n                text-align: center;\n                padding-top: 13.3rem;\n                font-family: 'DIN Next W1G Cn', 'Conduit ITC Cyr';\n                font-size: 3.2rem;\n                text-transform: uppercase;\n                background-size: contain;\n            }\n\n            .tile-game-icon {\n                height: 1.6rem;\n                opacity: 40%;\n                position: absolute;\n                bottom: 1.5rem;\n                right: 1.5rem;\n            }\n\n            &.active-tile {\n                .tile-image {\n                    width: 12rem;\n                    height: 12rem;\n                    top: 0;\n                    left: 15.2rem;\n                }\n\n                .tile-name {\n                    opacity: 100%;\n                }\n            }\n        }\n        .active-tile {\n            border-top: 0.4rem solid #79c370;\n            .bottom {\n                background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), #79c370;\n                border-radius: 0px 0px 4px 4px;\n                height: ", ";\n                color: #141313;\n                font-size: 1.8rem;\n                font-weight: bold;\n                display: flex;\n                width: 42.4rem;\n                position: absolute;\n                text-transform: uppercase;\n                align-items: self-end;\n                svg {\n                    fill: #141313;\n                }\n\n                .bottom-content {\n                    display: flex;\n                    margin: auto 1.2rem;\n\n                    .bottom-text {\n                        margin: auto 0;\n                    }\n                }\n            }\n        }\n          .lock-icon {\n            width: 1.6rem;\n            height: 2rem;\n            opacity: 50%;\n            position: absolute;\n            right: 0;\n            margin: 10px;\n          }\n        .locked-tile  {\n          border-top: 0.4rem solid #9AA39A !important;\n          .bottom {\n            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), #9AA39A; !important;\n          }\n        }\n    }\n  .wz2-game-modes {\n    margin-top: 5rem;\n  }\n"])), (function(e) {
						return !e.activeTabName && (0, se.iv)(dt || (dt = (0, me.Z)(["\n            top: 18rem;\n        "])))
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), ht),
					Et = se.ZP.div(mt || (mt = (0, me.Z)(["\n    display: flex;\n    flex-direction: column;\n    .header-title {\n        color: ", ";\n        text-transform: uppercase;\n        font-size: 2.8rem;\n    }\n    .mode-stats-values,\n    .mode-stats {\n        display: flex;\n        justify-content: space-between;\n        align-items: flex-start;\n        > div {\n            line-height: 3rem;\n            margin-top: 2rem;\n        }\n    }\n    .weapon-image-section {\n        width: 40.9rem;\n        height: 11.2rem;\n        display: flex;\n        align-items: center;\n        margin: auto;\n    }\n    .weapon-image {\n        margin: 0 auto;\n        display: block;\n        width: 80%;\n    }\n    .default-weapon-image {\n        opacity: 20%;\n    }\n    .kills-section {\n        margin: 2rem 0;\n        span:nth-of-type(2) {\n            margin-left: 2rem;\n        }\n    }\n    .graph-image {\n        width: 10.9rem;\n        height: 10.9rem;\n        background: blue;\n    }\n    .weapon-block {\n        padding: 0 2rem;\n    }\n    .top-border-box {\n        padding: 0.6rem;\n        border: 0.2rem solid #555555;\n        border-bottom: 0;\n    }\n    .bottom-border-box {\n        padding: 0.6rem;\n        border: 0.2rem solid #555555;\n        border-top: 0;\n        bottom: 0;\n        width: 100%;\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					})),
					wt = se.ZP.div(ut || (ut = (0, me.Z)(["\n    display: flex;\n    flex-direction: column;\n    width: 32%;\n    color: ", ";\n    .main-title-section {\n        text-transform: uppercase;\n        font-size: 2.8rem;\n        margin-bottom: 1rem;\n    }\n    .snapshot-block {\n        padding: 0 2rem;\n    }\n    .friends-list {\n        .col {\n            display: flex;\n            justify-content: space-between;\n        }\n    }\n    .top-border-box {\n        padding: 0.6rem;\n        border: 0.2rem solid #555555;\n        border-bottom: 0;\n    }\n    .sub-copy {\n        font-size: 1.8rem;\n        text-transform: uppercase;\n        display: flex;\n        justify-content: space-between;\n        margin-bottom: 1rem;\n        &__score {\n            position: relative;\n            &::before {\n                left: -2.2rem;\n                position: absolute;\n                content: '';\n                width: 1.5rem;\n                height: 1.5rem;\n                background: linear-gradient(135deg, transparent 0 50%, #79c370 50% 100%);\n            }\n        }\n    }\n    .bottom-border-box {\n        padding: 0.6rem;\n        border: 0.2rem solid #555555;\n        border-top: 0;\n        bottom: 0;\n        width: 100%;\n    }\n    .friends-list__row {\n        font-size: 2rem;\n        display: flex;\n        justify-content: space-between;\n        margin-left: 1.1rem;\n        margin-bottom: 1.1rem;\n        &.active {\n            font-size: 2.8rem;\n            color: #eaea43;\n        }\n    }\n    .disclaimer-copy {\n        font-size: 1.4rem;\n        font-weight: 300;\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					})),
					St = (0, se.ZP)(Fe)(gt || (gt = (0, me.Z)(["\n    // Add height for the absolutely-positioned bottom button.\n    padding: 0 0 ", ";\n"])), ht);
				const kt = {
					english: {
						langCode: "en-US",
						timePlayedPerMode: "Time Played Per Mode",
						totalWins: "Total Wins",
						lb: "Leaderboard",
						warzone: "Warzone",
						warzone2: "Warzone 2",
						warzoneII: "Warzone II",
						operatorKills: "Operator Kills",
						contractsCompleted: "Contracts Completed",
						aqSoldierKills: "AQ Soldier Kills",
						games: "Games",
						contracts: "Contracts",
						mostCashSpent: "Most Cash Spent/Game",
						viewWarzoneStats: "View Your Core Warzone Career Stats",
						aqKills: "AQ Kills",
						matches: "Matches",
						previousWarzoneMatchStats: "Stats from Previous Warzone Matches",
						finishesBySquadSize: "Finishes By Squad Size",
						squadSize: "Squad Size",
						all: "All",
						quads: "Quads",
						trios: "Trios",
						duos: "Duos",
						solos: "Solos",
						bestFinish: "Best Finish",
						cashSpent: "Cash Spent",
						killsDeathRatio: "Kills/Death Ratio",
						top25: "Top 25",
						top10: "Top 10",
						top5: "Top 5",
						placement: "Placement",
						placements: "Placements",
						highestKillsPerGameShort: "Highest Kills/Game",
						personalBestShort: "Personal Best",
						gulag: "Gulag",
						highestScorePerGameShort: "Highest Score/Game",
						furthestOperatorKill: "Furthest Operator Kill",
						mostCashSpentPerGame: "Most Cash Spent/Game",
						aqSoldierKilled: "AQ Soldiers Killed",
						weaponClasses: "Weapon Classes",
						operators: "Operators",
						lethality: "Lethality",
						shotTracker: "Shot Tracker",
						engagementRanges: "Engagement Ranges",
						fieldUpgrade: "Field Upgrade",
						killStreak: "Killstreak",
						map: "Map",
						maps: "Maps",
						viewLoadoutStats: "View Loadout Stats",
						recentMatches2Desc: "View recent matches, modes & maps stats",
						totalKills: "Total Kills",
						battleRifles: "Battle Rifles",
						marksmanRifles: "Marksman Rifles",
						sniperRifles: "Sniper Rifles",
						shotguns: "Shotguns",
						lmgs: "LMGS",
						smgs: "SMGS",
						assaultRifles: "Assault Rifles",
						handGuns: "Handguns",
						melee: "Melee",
						launchers: "Launchers",
						teamDeathmatch: "TDM",
						invasion: "Invasion",
						prisonerRescue: "Prisoner rescue",
						charge: "Charge",
						cyberAttack: "Cyber Attack",
						domination: "Domination",
						searchAndDestroy: "Search and Destroy",
						headquarters: "Headquarters",
						freeForAll: "Free-for-All",
						gunfight: "Gunfight",
						hardpoint: "Hardpoint",
						captureTheFlag: "Capture the flag",
						killConfirmed: "Kill Confirmed",
						onslaught: "Onslaught",
						demolition: "Demolition",
						grind: "Grind",
						infected: "Infected",
						gunGame: "Gun Game",
						dropZone: "Drop Zone",
						ko: "Knock Out",
						teamDefender: "Team Defender",
						groundWar: "Ground War",
						dmz: "DMZ",
						battleRoyale: "Battle Royale",
						br: "Battle Royale",
						resurgence: "Resurgence",
						plunder: "Plunder",
						alMazrah: "Al Mazrah",
						elBagra: "El Bagra Fortress",
						embassy: "Embassy",
						zarqwaHydro: "Zarqwa Hydroelectric",
						taraq: "Taraq",
						sarrifBay: "Sarrif Bay",
						said: "Sa'id",
						santaSenaBorder: "Santa Seña Border Crossing",
						elAsilo: "El Asilo",
						mercadoLas: "Mercado Las Almas",
						santaSeña: "Santa Seña",
						guijarro: "Guijarro",
						crownRaceway: "Crown Raceway",
						breenberghHotel: "Breenbergh Hotel",
						farm18: "Farm 18",
						frag_grenade_mp: "FRAG GRENADE",
						at_mine_mp: "PROXIMITY MINE",
						bunkerbuster_round_mp: "DRILL CHARGE",
						molotov_mp: "MOLOTOV COCKTAIL",
						semtex_mp: "SEMTEX",
						c4_base: "C4",
						claymore_mp: "CLAYMORE",
						thermite_ap_mp: "THERMITE",
						throwingknife_mp: "THROWING KNIFE",
						assault_drone: "BOMB DRONE",
						cluster_spike: "CLUSTER MINE",
						precision_airstrike: "PRECISION AIRSTRIKE",
						cruise_predator: "CRUISE MISSLE",
						mortar_strike: "MORTAR STRIKE",
						sentry_gun: "SENTRY GUN",
						fuel_airstrike: "SAE",
						hover_jet: "VTOL JET",
						airdrop_escort: "OVERWATCH HELO",
						wheelson: "WHEELSON-HS",
						stealth_bomber: "STEALTH BOMBER",
						chopper_gunner: "CHOPPER GUNNER",
						gunship: "GUNSHIP",
						juggernaut: "JUGGERNAUT",
						specgru: "Specgru",
						kortac: "Kortac",
						crTitle: "Combat Record",
						motdTitle: "Message of the Day",
						callOfDuty: "Call of Duty",
						multiplayer: "Multiplayer",
						coop: "Co-op",
						ranked: "Ranked",
						close: "Close",
						open: "Open",
						right: "Right",
						left: "Left",
						back: "Back",
						select: "Select",
						scroll: "scroll",
						details: "details",
						error: "Sorry, for the inconvenience, please try again later.",
						loading: "Loading",
						hardClose: "Return to Lobby",
						filter: "Set Stage",
						timePlayed: "Time Played",
						gamesPlayed: "Games Played",
						kdRatio: "K/D Ratio",
						topWeapon: "Top Weapon",
						last10Games: "Last 10 Games",
						currentSeason: "Current Season",
						lifetime: "Lifetime",
						kills: "Kills",
						stats: "Stats",
						dashboard: "Dashboard",
						entryTabs: {
							0: "Combat Record",
							1: "Leaderboards"
						},
						dashboardTabs: {
							0: "Multiplayer",
							1: "Co-op",
							2: "Ranked"
						},
						career: "Career",
						careerDesc: "Your Core Modern Warfare Multiplayer Career Stats",
						brCareerDesc: "Includes Resurgence stats until April 27, 2023",
						resurgenceCareerDesc: "Stats starting from April 27, 2023",
						viewCareer: "View Career Stats",
						loadOut: "Loadout",
						topWeapons: "Top Weapons",
						topWeaponsDesc: "View stats specific to Weapons, Weapon Classes, Equipment, and Killstreaks",
						topWeaponsDescOld: "View stats specific to Weapons, Weapon Classes, Equipment, Field Upgrades, and Killstreaks",
						recentMatches: "Recent Matches",
						recentMatchesModes: "Recent Matches, Modes & Maps",
						recentMatchesModesDesc: "View Recent Matches, as well as Modes and Maps specific stats",
						lastMatch: "Last Match",
						winsByMode: "Wins by game mode",
						killDeathRatio: "Kills/Death Ratio",
						winLossRatio: "Win/Loss Ratio",
						primaries: "Primaries",
						secondaries: "secondaries",
						loadoutTabs: {
							0: "classes",
							1: "weapons",
							2: "equipment",
							3: "killstreaks"
						},
						recentsTab: {
							0: "Recent Matches",
							1: "Modes & Maps"
						},
						killsTacUse: "Kills/tac use",
						headshotPercent: "Headshot %",
						accuracy: "Accuracy %",
						stunnedKilled: "Stunned & killed",
						revealedKills: "Revealed Kills",
						empdKills: "EMP'd Kills",
						uses: "Uses",
						matchesPlayed: "Matches Played",
						scorePerMinute: "Score Per Minute",
						deaths: "Deaths",
						wins: "Wins",
						losses: "Losses",
						victoryDefeat: "Victory & Defeat",
						winLossRation: "Win/Loss Ratio",
						personalBest: "Personal Best",
						personalBests: "Personal Bests",
						highestKillStreak: "Highest Kill Streak",
						highestKillsPerGame: "Highest Kills/Game",
						highestScorePerGame: "Highest Score/Game",
						killOrBeKilled: "Kill Or Be Killed",
						bootsOnGround: "Boots on the Ground",
						progression: "Progression",
						atviName: "ATVI Name",
						level: "Level",
						matchSummary: "Match Summary",
						last25Matches: "Last 25 Matches",
						last10Matches: "Last 10 Matches",
						scoreboard: "Scoreboard",
						duration: "Duration",
						win: "win",
						loss: "loss",
						damage: "Damage",
						player: "player",
						score: "Score",
						Allegiance: "Kortac",
						coalition: "Specgru",
						modesMaps: "Modes & Maps",
						assists: "Assists",
						viewMaps: "View Maps",
						wlRatio: "W/L Ratio",
						allWeapons: "All Weapons",
						equipment: "Equipment",
						killstreaks: "KillStreaks",
						killstreak: "KillStreak",
						victory: "victory",
						defeat: "defeat",
						lossPrevented: "Loss Prevented",
						cdlEntry: "Find the latest news, scores and schedule for the Call of Duty League in the dedicated CDL Channel.",
						apiError: "Unable to Load Data",
						noWeapons: "No Weapon History",
						noMatchHistory: "No Recent Matches for Current Time Filter",
						noModesHistory: "No Game Mode History for Current Time Filter",
						noWeaponsHistory: "No Weapon History for Current Time Filter",
						noEquipmentHistory: "No Equipment History for Current Time Filter",
						noKillstreakHistory: "No Killstreak History for Current Time Filter",
						noFieldUpgradeHistory: "No Field Upgrade History for Current Time Filter",
						statusMessage: "*Please Allow 1-2 Minutes for Your Most Recent Match Stats to Process",
						lockedTileMessage: "Complete 5 Multiplayer Games to unlock",
						lockedTileWZMessage: "Complete 5 Warzone Games to unlock",
						killstreakMessage: "*Tracking Killstreak stats from Season 01 onwards",
						gameModes: "Game Modes",
						critical: "Critical Damage",
						tdm: "Team Deathmatch",
						dom: "Domination",
						koth: "Hard Point",
						control: "Control",
						conf: "Kill Confirmed",
						sd: "Search & Destroy",
						cyber: "Cyber Attack",
						dd: "Demolition",
						hq: "Headquarters",
						hstg: "Hostage Rescue",
						dm: "Free-For-All",
						bounty: "Bounty",
						rugby: "Rugby",
						viewCodProfile: "View COD Profile",
						lbFilter: "Filter",
						avgScorePerMin: "Score/Min",
						avgScore: "Score/Min",
						pageUp: "Page Up",
						pageDown: "Page Down",
						totalGames: "Games Played",
						highestKillstreak: "Highest Killstreak",
						avgKillsPerGame: "Avg Kills/Game",
						totalLosses: "Losses",
						highestWinstreak: "Winstreak",
						headshotPerGame: "Headshots/Game",
						avgDamage: "Avg Damage/Game",
						totalOneshotKills: "One Shot Kills",
						avgConfirms: "Avg Confirms/Game",
						avgCaptures: "Avg Captures/Game",
						globalAvgScorePerMin: "Score/Min",
						globalKills: "Kills",
						globalScore: "Score",
						globalWlRatio: "W/L Ratio",
						globalHeadshots: "Headshots",
						gulagWins: "Wins",
						gulagLosses: "Losses",
						gulagWinLossRatio: "W/L Ratio",
						gulagKills: "Kills",
						gulagJailorKills: "Jailor Kills",
						cqWins: "Champion's Quest Wins",
						recency: "Recency",
						unrankedMsgStart: "UNRANKED - Play 5 Games of",
						unrankedMsgEnd: "to get Ranked on this Leaderboard",
						name: "Name",
						undefined: "Undefined",
						noWeaponClassHistory: "No Weapon Class History",
						friends: "Friends",
						global: "Global",
						friendSnapshot: "Friend Snapshot",
						friendSnapshotDisclaimer: "*Position change since last login",
						friend: "Friend",
						goToTop: "Go to Top",
						deployments: "Deployments",
						exfilRatio: "Exfil Success Ratio",
						lockedTileDMZMessage: "Complete 5 DMZ Games to unlock",
						viewDMZStats: "Starting Season 2.5",
						eliminated: "Eliminated",
						success: "Success",
						successfulExfils: "Successful Exfils",
						highestExfilStreak: "Highest Exfil Streak",
						highestAQKills: "Highest AQ Kills/ Deployment",
						deploymentsExtractedItems: "Deployments & Extracted Items",
						viewDeploymentsExtractedItems: "View Recent Deployments and Extracted Items",
						cash: "Cash",
						extractedItems: "Extracted Items",
						weapons: "Weapons",
						dogTags: "Dog Tags",
						teammatesRevived: "Teammates Revived",
						lootedContainers: "Looted Containers",
						cashExtracted: "Cash Extracted",
						mostCashExtracted: "Most Cash Extracted / Deploy",
						highestDogTagExtracted: "Highest Dog Tag Extracted",
						dogTagsExtracted: "Dog Tags Extracted",
						weaponsExtracted: "Weapons Extracted",
						mostExtractedWeapons: "Most Extracted Weapons",
						weapon: "Weapon",
						lethal: "Lethal",
						tacticalEquipment: "Tactical",
						timesExtracted: "Times Extracted",
						xp: "XP",
						last10Deployments: "Last 10 Deployments",
						armorCarrier: "Armor Carrier",
						gasMask: "Gas Mask",
						selfRevive: "Self Revive",
						noFriendsLeaderboard: "No friends ranked on this leaderboard",
						operatorHeadshotPercent: "Operator Headshot %",
						lastDeployment: "Last Deployment",
						recentMatchesdmzDesc: "View Recent Deployments and Extractions Stats"
					},
					arabic: {
						langCode: "ar-SA",
						statusMessage: "يُرجى الانتظار دقيقة أو دقيقتين حتى تتم معالجة إحصائيات آخر مباراة*",
						timePlayedPerMode: "الوقت الملعوب في كل نمط",
						totalWins: "إجمالي مرات الفوز ",
						lb: "لوحات الصدارة",
						warzone: "Warzone",
						warzone2: "Warzone 2",
						warzoneII: "Warzone II",
						aqSoldierKills: " قتل جندي القتلة",
						games: "أنماط",
						viewWarzoneStats: "عرض الإحصاءات الأساسية لمسيرتك المهنية في Warzone",
						operatorKills: "عمليات قتل العملاء",
						aqKills: 'عمليات قتل مجموعة "القتلة"',
						matches: "مباريات",
						previousWarzoneMatchStats: "إحصاءات مباريات Warzone السابقة",
						finishesBySquadSize: "الحركات القاضية حسب حجم الفرقة",
						squadSize: "حجم الفريق",
						all: "الكل",
						quads: "رباعيات",
						trios: "ثلاثيات",
						duos: "ثنائيات",
						solos: "فرديات",
						bestFinish: "أفضل حركة قاضية",
						cashSpent: "النقود المُنفقَة",
						killsDeathRatio: "معدل القتل/الموت",
						top25: "أفضل 25",
						top10: "أفضل 10",
						top5: "أفضل 5",
						placement: "الترتيب",
						placements: "المراكز",
						highestKillsPerGameShort: "أعلى معدل قتل/مباراة",
						personalBestShort: "أفضل سجل شخصي",
						gulag: "الغولاغ",
						highestScorePerGameShort: "أعلى نتيجة/مباراة",
						furthestOperatorKill: "أبعد عملية قتل لعميل",
						mostCashSpentPerGame: "أغلب الأموال التي أنفقتها/مباراة",
						aqSoldierKilled: 'عدد جنود "القتلة" المقتولين',
						weaponClasses: "فئات الأسلحة",
						operators: "العملاء",
						lethality: "فتاك",
						shotTracker: "متعقب الطلقات",
						engagementRanges: "مدى الاشتباكات",
						fieldUpgrade: "ترقية ميدانية",
						killStreak: "كيلستريك",
						contractsCompleted: "العقود المكتملة",
						contracts: "العقود",
						map: "الخريطة",
						maps: "الخرائط",
						viewLoadoutStats: "عرض إحصاءات العتاد",
						recentMatches2Desc: "عرض آخر المباريات والأنماط والخرائط",
						totalKills: "إجمالي عمليات القتل",
						battleRifles: "بندقيات هجومية",
						marksmanRifles: "بنادق الرماية",
						sniperRifles: "بنادق قنص",
						shotguns: "شوتجن",
						lmgs: "رشاشات خفيفة",
						smgs: "مسدسات رشاشة",
						handGuns: "المسدسات",
						melee: "قتال يدوي",
						launchers: "القاذفات",
						stats: "الإحصاءات",
						assaultRifles: "بنادق هجومية",
						apiError: "تعذر تحميل البيانات",
						noWeapons: "لا يوجد تاريخ للأسلحة",
						noMatchHistory: "ليس ثمة تاريخ للمباريات",
						noModesHistory: "ليس ثمة تاريخ للأنماط",
						teamDeathmatch: "مباراة جماعية",
						invasion: "الغزو",
						prisonerRescue: "إنقاذ السجين",
						charge: "هجوم",
						cyberAttack: "الهجوم المعلوماتي",
						domination: "السيطرة",
						searchAndDestroy: "البحث والتدمير",
						headquarters: "المقرات الرئيسية",
						freeForAll: "كل لاعب لنفسه",
						gunfight: "المواجهة النارية",
						hardpoint: "النقطة المتنقلة",
						captureTheFlag: "الاستيلاء على الراية",
						killConfirmed: "تأكيد القتل",
						onslaught: "الهجوم الضاري",
						demolition: "التفجير",
						grind: "الكفاح",
						infected: "العدوى",
						gunGame: "لعبة الأسلحة",
						dropZone: "منطقة الإنزال",
						ko: "إطاحة",
						teamDefender: "حماية الراية",
						groundWar: "حرب برية",
						dmz: "DMZ",
						battleRoyale: "باتل رويال",
						br: "باتل رويال",
						resurgence: "الانبعاث",
						plunder: "نمط الغنيمة",
						alMazrah: "المزرح",
						elBagra: "البقرة فورتريس",
						embassy: "السفارة",
						zarqwaHydro: "زرقوة الهيدروليكي",
						taraq: "طارق",
						sarrifBay: "خليج ساريف",
						said: "سعيد",
						santaSenaBorder: "معبر سانتا سينا الحدودي",
						elAsilo: "الأصيلو",
						mercadoLas: "ميركادو لاس ألماس",
						santaSeña: "سانتا سينا",
						guijarro: "غيجارو",
						crownRaceway: "كراون ريسواي",
						breenberghHotel: "برينبرغ هوتيل",
						farm18: "فارم 18",
						frag_grenade_mp: "قنبلة يدوية",
						at_mine_mp: "اللغم التقاربي",
						bunkerbuster_round_mp: "شحنة ثاقبة",
						molotov_mp: "زجاجة مولوتوف",
						semtex_mp: "القنبلة الملتصقة",
						c4_base: "C4",
						claymore_mp: "سيف كلايمور",
						thermite_ap_mp: "قنبلة حارقة",
						throwingknife_mp: "سكين الرمي",
						assault_drone: "درون مفجّر",
						cluster_spike: "لغم عنقودي",
						precision_airstrike: "الضربة الجوية الدقيقة",
						cruise_predator: "صاروخ كروز",
						mortar_strike: "ضربة الهاون",
						sentry_gun: "مدفع الحراسة",
						fuel_airstrike: "SAE",
						hover_jet: "طائرة VTOL النفاثة",
						airdrop_escort: "مروحية مراقبة",
						wheelson: "درون الحراسة HS",
						stealth_bomber: "المفجّر الخفي",
						chopper_gunner: "مدفعي المروحية",
						gunship: "طائرة حربية",
						juggernaut: "الساحق",
						crTitle: "سجل المعارك",
						callOfDuty: "Call of Duty",
						multiplayer: "طور اللعب الجماعي",
						coop: "لعب تعاوني",
						ranked: "المصنف",
						timePlayed: "الوقت الملعوب:",
						gamesPlayed: "مباريات ملعوبة",
						kdRatio: "معدل قتل/موت",
						topWeapon: "أفضل سلاح",
						last10Games: "آخر 10 مباريات",
						currentSeason: "الموسم الحالي",
						lifetime: "مدى الحياة",
						kills: "مرات القتل",
						dashboard: "لوحة المعلومات",
						entryTabs: {
							0: "سجل المعارك",
							1: "لوحات الصدارة"
						},
						dashboardTabs: {
							0: "طور اللعب الجماعي",
							1: "لعب تعاوني",
							2: "المصنف"
						},
						career: "المهنة",
						careerDesc: "عرض إحصاءات مسيرتك الأساسية لطور اللعب الجماعي في Modern Warfare",
						brCareerDesc: "تتضمن إحصاءات الانبعاث حتى 27 أبريل 2023",
						resurgenceCareerDesc: "الإحصاءات بداية من 27 أبريل 2023",
						viewCareer: "عرض إحصاءات المسيرة",
						loadOut: "العتاد",
						topWeapons: "أفضل الأسلحة",
						topWeaponsDesc: "عرض الإحصاءات الخاصة بالأسلحة وفئات الأسلحة والمعدات والكيلستريك",
						topWeaponsDescOld: "عرض الإحصاءات الخاصة بالأسلحة وفئات الأسلحة والمعدات والترقيات الميدانية والكيلستريك",
						recentMatches: "أحدث المباريات",
						recentMatchesModes: "آخر المباريات والأنماط والخرائط",
						recentMatchesModesDesc: "عرض الإحصاءات الأخيرة للمباريات والنمط والخريطة",
						lastMatch: "المباراة الأخيرة",
						winsByMode: "مرات الفوز في كل نمط لعب",
						killDeathRatio: "معدل القتل/الموت",
						winLossRatio: "معدل الفوز/الخسارة",
						primaries: "الأسلحة الأساسية",
						secondaries: "الأسلحة الثانوية",
						loadoutTabs: {
							0: "الفئات",
							1: "الأسلحة",
							2: "المعدات",
							3: "الكيلستريك"
						},
						recentsTab: {
							0: "أحدث المباريات",
							1: "الأنماط والخرائط"
						},
						killsTacUse: "استخدام القتل/التكتيك",
						headshotPercent: "إصابة الرأس %",
						accuracy: "الدقة",
						stunnedKilled: "الإصابة بقنبلة صادمة والقتل",
						revealedKills: "عمليات القتل المكشوفة",
						empdKills: "عمليات القتل بالنبضة الكهرومغناطيسية",
						uses: "الاستخدامات",
						matchesPlayed: "مباريات تم لعبها",
						scorePerMinute: "نقطة لكل دقيقة",
						deaths: "مرات الموت",
						wins: "مرات الفوز",
						losses: "خسارة",
						victoryDefeat: "الانتصار والهزيمة",
						winLossRation: "معدل الفوز/الخسارة",
						personalBests: "أفضل سجل شخصي",
						highestKillStreak: "أعلى كيلستريك",
						highestKillsPerGame: "أعلى معدل قتل/مباراة",
						highestScorePerGame: "أعلى نتيجة/مباراة",
						killOrBeKilled: "اقتل أو تقتل",
						bootsOnGround: "الحرب الميدانية",
						progression: "التقدم",
						atviName: "اسم الـATVI",
						level: "المستوى",
						matchSummary: "ملخص المباراة",
						last25Matches: "آخر 25 مباراة",
						last10Matches: "آخِر 10 مباريات",
						scoreboard: "لوحة النقاط",
						duration: "المدة",
						win: "مرات الفوز",
						loss: "مرات الخسارة",
						damage: "الضرر",
						player: "اللاعب",
						score: "النتيجة",
						Allegiance: "الولاء",
						coalition: "التحالف",
						modesMaps: "الأنماط والخرائط",
						assists: "مساعدات",
						viewMaps: "عرض الخرائط",
						wlRatio: "معدل الفوز/الخسارة",
						allWeapons: "جميع الأسلحة",
						equipment: "المعدات",
						killstreaks: "الكيلستريك",
						killstreak: "الكيلستريك",
						open: "فتح",
						close: "إغلاق",
						left: "يسار",
						right: "يمين",
						back: "رجوع",
						select: "تحديد",
						scroll: "تمرير",
						details: "التفاصيل",
						motdTitle: "رسالة اليوم",
						error: "نعتذر عن هذا الإزعاج، يُرجى المحاولة لاحقًا مجددًا.",
						viewPatchNotes: "اقرأ ملاحظات التحديث",
						hardClose: "العودة إلى صالة اللعبة",
						filter: "تحديد المرحلة",
						menu: {
							0: "المتجر",
							1: "العتاد",
							2: "operator",
							3: "الثكنات",
							4: "التحديات",
							5: "المتجر",
							6: "موقع CDL الإلكتروني",
							cdl_news: "أخبار بطولة CDL",
							cdl_schedule: "جدول بطولة CDL",
							cdl_standings: "ترتيب بطولة CDL"
						},
						loading: "جارِ التحميل",
						motdTabs: {
							motd: "الأحدث",
							pn: "تفاصيل التحديث",
							cdlChannel: "قناة CDL"
						},
						cdlEntry: "اعثر على أحدث الأخبار والنقاط وجدول دوري Call of Duty في قناة CDL المخصصة.",
						gameModes: "أطوار اللعب",
						tdm: "مباراة جماعية",
						dom: "السيطرة",
						koth: "النقطة المتنقلة",
						control: "السيطرة",
						conf: "تأكيد القتل",
						sd: "البحث والتدمير",
						cyber: "الهجوم المعلوماتي",
						dd: "التفجير",
						hq: "المقرات الرئيسية",
						hstg: "إنقاذ السجين",
						dm: "كل لاعب لنفسه",
						critical: "ضرر جسيم",
						bounty: "جائزة",
						rugby: "الرغبي",
						viewCodProfile: "عرض الملف التعريفي لـCOD",
						lbFilter: "فلتر",
						avgScorePerMin: "النتيجة/الدقيقة",
						avgScore: "النتيجة/الدقيقة",
						pageUp: "صفحة للأعلى",
						pageDown: "صفحة للأسفل",
						totalGames: "مباريات ملعوبة",
						highestKillstreak: "الكيلستريك الأعلى",
						avgKillsPerGame: "متوسط عمليات القتل/المباراة",
						totalLosses: "خسارة",
						highestWinstreak: "سلسلة الفوز",
						headshotPerGame: "إصابات الرأس/للمباراة",
						avgDamage: "متوسط الضرر",
						totalOneshotKills: "مرات القتل بطلقة واحدة",
						avgConfirms: "متوسط التأكيدات",
						avgCaptures: "متوسط الإستحواذات",
						globalAvgScorePerMin: "النتيجة/الدقيقة",
						globalKills: "قتل",
						globalScore: "النتيجة",
						globalWlRatio: "معدل الفوز/الخسارة",
						globalHeadshots: "إصابات الرأس",
						gulagWins: "مرات الفوز",
						gulagLosses: "خسارة",
						gulagWinLossRatio: "معدل الفوز/الخسارة",
						gulagKills: "قتل",
						gulagJailorKills: "عمليات قتل السجّان",
						cqWins: "مرات الفوز في مهمة البطل",
						recency: "الحداثة",
						unrankedMsgStart: "لعب غير مُصنف - العب 5 مباريات من",
						unrankedMsgEnd: "ليتم تحديد رتبتك على لوحة الصدارة",
						name: "اسم",
						undefined: "غير محدد",
						noWeaponClassHistory: "إحصائيات السلاح غير متوفرة",
						friends: "أصدقاء",
						global: "ملاحظات عامة",
						lockedTileMessage: "أكمِل 5 مباريات في طور اللعب الجماعي للفتح",
						lockedTileWZMessage: "أكمِل 5 مباريات في Warzone للفتح",
						specgru: "سبيكغرو",
						kortac: "كورتاك",
						friendSnapshot: "لقطة صديق",
						friendSnapshotDisclaimer: "*تغيير المركز منذ آخر مرة تسجيل دخول",
						friend: "صديق",
						goToTop: "العودة إلى الأعلى",
						lossPrevented: "الخسارات التي تم منعها",
						deployments: "عمليات الانتشار",
						exfilRatio: "نسبة الإجلاء النجاح",
						lockedTileDMZMessage: "أكمِل 5 مباريات في DMZ للفتح",
						viewDMZStats: "بداية من الموسم 2.5",
						eliminated: "تم الإقصاء",
						successfulExfils: "الإجلاءات الناجحة",
						highestExfilStreak: "أعلى ستريك للإجلاء",
						highestAQKills: "أعلى عدد ضحايا من مجموعة القتلة",
						deploymentsExtractedItems: "عمليات الانتشار و العناصر المستخرجة",
						viewDeploymentsExtractedItems: "عرض عمليات الانتشار الأخيرة والعناصر المستخرجة",
						cash: "الأموال",
						extractedItems: "العناصر المُستخرَجة",
						weapons: "الأسلحة",
						dogTags: "قلادات التعريف",
						teammatesRevived: "أعضاء الفريق الذين تم إنعاشهم",
						lootedContainers: "الحاويات المنهوبة",
						cashExtracted: "الأموال التي تم استخراجها",
						mostCashExtracted: "الأموال التي تم استخراجها/الانتشار",
						highestDogTagExtracted: "أعلى مستوى لقلادات التعريف التي تم استخراجها",
						dogTagsExtracted: "قلادات التعريف التي تم استخراجها",
						weaponsExtracted: "الأسلحة التي تم استخراجها",
						mostExtractedWeapons: "أكثر الأسلحة المُستخرَجة",
						weapon: "السلاح",
						lethal: "فتاك",
						tacticalEquipment: "تكتيكي",
						timesExtracted: "عدد مرات الإستخراج",
						xp: "XP",
						last10Deployments: "آخر 10 مرات انتشار",
						noFriendsLeaderboard: "لا يوجد أصدقاء مُصنفين على لوحة الصدارة هذه",
						operatorHeadshotPercent: "معدل إصابة الرأس",
						lastDeployment: "الإنتشار الأخير",
						recentMatchesdmzDesc: "عرض إحصاءات عمليات الانتشار والعناصر المستخرجة الأخيرة",
						success: "تم بنجاح"
					},
					dutch: {
						langCode: "nl",
						statusMessage: "*Please Allow 1-2 Minutes For Your Most Recent Match Stats To Process",
						timePlayedPerMode: "Per speltype gespeelde tijd",
						totalWins: "Totaal gewonnen",
						lb: "Klassement",
						warzone: "Warzone",
						warzone2: "Warzone 2",
						warzoneII: "Warzone II",
						aqSoldierKills: "AQ Soldier Kills",
						games: "Games",
						viewWarzoneStats: "Je Warzone Carrièrekernstatistieken bekijken",
						operatorKills: "Operator-kills",
						aqKills: "AQ-kills",
						matches: "Matches",
						previousWarzoneMatchStats: "Stats van eerdere Warzone-matches",
						finishesBySquadSize: "Afmakers per teamgrootte",
						squadSize: "teamgrootte",
						all: "All",
						quads: "Quads",
						trios: "Trios",
						duos: "Duo's",
						solos: "Solo",
						bestFinish: "Beste afmaker",
						cashSpent: "Uitgegeven cash",
						killsDeathRatio: "Kills/Dood-ratio",
						top25: "Top 25",
						top10: "Top 10",
						top5: "Top 5",
						placement: "Plaatsingen",
						placements: "Plaatsingen",
						highestKillsPerGameShort: "Hoogste kills/game",
						personalBestShort: "Persoonlijk record",
						gulag: "Gulag",
						highestScorePerGameShort: "Hoogste score/game",
						furthestOperatorKill: "Verstverwijderde operator-kill",
						mostCashSpentPerGame: "Meeste cash uitgegeven/game",
						aqSoldierKilled: "AQ-soldaten gedood",
						weaponClasses: "Wapenklassen",
						operators: "Operators",
						lethality: "Dodelijkheid",
						shotTracker: "Schotvolger",
						engagementRanges: "Aanvalsbereik",
						fieldUpgrade: "Veldupgrade",
						killStreak: "Killstreak",
						gameModes: "Speltype",
						contractsCompleted: "Contracten voltooid",
						contracts: "Contracten",
						map: "Map",
						maps: "Maps",
						viewLoadoutStats: "Loadoutstats bekijken",
						recentMatches2Desc: "Bekijk recente matches, speltypen en maps",
						totalKills: "Totaal aantal kills",
						battleRifles: "Gevechtsgeweren",
						marksmanRifles: "Scherpschuttergeweren",
						sniperRifles: "Sluipschuttersgeweren",
						shotguns: "Shotguns",
						lmgs: "LMGS",
						smgs: "SMGS",
						handGuns: "Pistool",
						melee: "Mêlee",
						launchers: "Werpers",
						stats: "Statistieken",
						assaultRifles: "Aanvalsgeweren",
						apiError: "Kan geen gegevens laden",
						noWeapons: "Geen wapengeschiedenis",
						noMatchHistory: "Geen matchgeschiedenis",
						noModesHistory: "Geen speltypengeschiedenis",
						teamDeathmatch: "TDM",
						invasion: "Invasion",
						prisonerRescue: "Gevangene redden",
						charge: "Charge",
						cyberAttack: "Cyber Attack",
						domination: "Domination",
						searchAndDestroy: "Search and Destroy",
						headquarters: "Hoofdkwartier",
						freeForAll: "Free-for-All",
						gunfight: "Gunfight",
						hardpoint: "Hardpoint",
						captureTheFlag: "Capture the Flag",
						killConfirmed: "Kill bevestigd",
						control: "Controle",
						bounty: "Premie",
						onslaught: "Onslaught",
						demolition: "Demolition",
						grind: "Grind",
						infected: "Infected",
						gunGame: "Gun Game",
						dropZone: "Dropzone",
						ko: "Knock-out",
						teamDefender: "Team Defender",
						groundWar: "Grondoorlog",
						dmz: "DMZ",
						battleRoyale: "Battle Royale",
						br: "Battle Royale",
						resurgence: "Resurgence",
						plunder: "Plunder",
						alMazrah: "Al Mazrah",
						elBagra: "El Bagra Fortress",
						embassy: "Embassy",
						zarqwaHydro: "Zarqwa Hydroelectric",
						taraq: "Taraq",
						sarrifBay: "Sarrif Bay",
						said: "Sa'id",
						santaSenaBorder: "Santa Seña Border Crossing",
						elAsilo: "El Asilo",
						mercadoLas: "Mercado Las Almas",
						santaSeña: "Santa Seña",
						guijarro: "Guijarro",
						crownRaceway: "Crown Raceway",
						breenberghHotel: "Breenbergh Hotel",
						farm18: "Farm 18",
						frag_grenade_mp: "FRAG GRENADE",
						at_mine_mp: "PROXIMITY MINE",
						bunkerbuster_round_mp: "DRILL CHARGE",
						molotov_mp: "MOLOTOV COCKTAIL",
						semtex_mp: "SEMTEX",
						c4_base: "C4",
						claymore_mp: "CLAYMORE",
						thermite_ap_mp: "THERMITE",
						throwingknife_mp: "THROWING KNIFE",
						assault_drone: "BOMB DRONE",
						cluster_spike: "CLUSTER MINE",
						precision_airstrike: "PRECISION AIRSTRIKE",
						cruise_predator: "CRUISE MISSLE",
						mortar_strike: "MORTAR STRIKE",
						sentry_gun: "SENTRY GUN",
						fuel_airstrike: "SAE",
						hover_jet: "VTOL JET",
						airdrop_escort: "OVERWATCH HELO",
						wheelson: "WHEELSON-HS",
						stealth_bomber: "STEALTH BOMBER",
						chopper_gunner: "CHOPPER GUNNER",
						gunship: "GUNSHIP",
						juggernaut: "JUGGERNAUT",
						open: "Openen",
						close: "Afsluiten",
						left: "Links",
						right: "Rechts",
						back: "Terug",
						select: "Selecteren",
						scroll: "Scrollen",
						details: "Details",
						motdTitle: "Bericht van de dag",
						error: "Onze excuses voor het ongemak, probeer het later nog eens.",
						viewPatchNotes: "Patchinformatie bekijken",
						hardClose: "Terug naar Lobby",
						filter: "Stel niveau in",
						menu: {
							0: "store",
							1: "loadout",
							2: "operator",
							3: "kazerne",
							4: "uitdagingen",
							5: "winkel",
							6: "CDL-website",
							cdl_news: "CDL-nieuws",
							cdl_schedule: "CDL-planning",
							cdl_standings: "CDL-standen"
						},
						loading: "Laden...",
						motdTabs: {
							motd: "Nieuwste",
							pn: "Patchaantekeningen",
							cdlChannel: "CDL-kanaal"
						},
						cdlEntry: "In het speciale CDL-kanaal vind je het laatste nieuws, scores en planning voor de Call of Duty League.",
						crTitle: "Gevechtsoverzicht",
						callOfDuty: "Call of Duty",
						multiplayer: "Multiplayer",
						coop: "Coöp",
						ranked: "Klassement",
						timePlayed: "Tijd gespeeld",
						gamesPlayed: "Games gespeeld",
						kdRatio: "K/D-ratio",
						topWeapon: "Topwapen",
						last10Games: "Laatste 10 games",
						currentSeason: "Huidige seizoen",
						lifetime: "Levensduur",
						kills: "Kills",
						dashboard: "Dashboard",
						entryTabs: {
							0: "Gevechtsoverzicht",
							1: "Leaderboards"
						},
						dashboardTabs: {
							0: "Multiplayer",
							1: "Coöp",
							2: "Klassement"
						},
						career: "Carrière",
						careerDesc: "Je Modern Warfare Multiplayer Carrièrekernstatistieken bekijken",
						brCareerDesc: "Bevat de Resurgence-statistieken tot 27 april 2023",
						resurgenceCareerDesc: "Statistieken vanaf 27 april 2023",
						viewCareer: "Carrièrestatistieken bekijken",
						loadOut: "Loadout",
						topWeapons: "Topwapens",
						topWeaponsDesc: "Bekijk specifieke stats voor wapens, wapenklassen, uitrusting en killstreaks",
						topWeaponsDescOld: "Bekijk specifieke stats voor wapens, wapenklassen, uitrusting, veldupgrades en killstreaks",
						recentMatches: "Recente matches",
						recentMatchesModes: "Recente matches, speltypen en maps",
						recentMatchesModesDesc: "Bekijk recente matches en specifieke stats voor speltypen en maps",
						lastMatch: "Laatste match",
						winsByMode: "Overwinningen per speltype",
						killDeathRatio: "Kills/Dood-ratio",
						winLossRatio: "Verloren/gewonnen-ratio",
						primaries: "Primaries",
						secondaries: "secondaries",
						loadoutTabs: {
							0: "klassen",
							1: "Wapens",
							2: "uitrusting",
							3: "killstreaks"
						},
						recentsTab: {
							0: "Recente matches",
							1: "Speltypen en maps"
						},
						killsTacUse: "Kills/tact gebruik",
						headshotPercent: "hoofdschot",
						accuracy: "precisie",
						stunnedKilled: "Verdoofd en gedood",
						revealedKills: "Onthulde kills",
						empdKills: "EMP-kills",
						uses: "Gebruik",
						matchesPlayed: "Gespeelde matches",
						scorePerMinute: "Score per minuut",
						deaths: "gedood",
						wins: "gewonnen",
						losses: "Verloren",
						victoryDefeat: "Overwinning en nederlaag",
						winLossRation: "Gewonnen/verloren-ratio",
						personalBests: "Persoonlijk record",
						highestKillStreak: "Hoogste killstreak",
						highestKillsPerGame: "Hoogste kills/game",
						highestScorePerGame: "Hoogste score/game",
						killOrBeKilled: "Doden of gedood worden",
						bootsOnGround: "Boots on the Ground",
						progression: "Voortgang",
						atviName: "ATVI-naam",
						level: "Level",
						matchSummary: "Wedstrijdoverzicht",
						last25Matches: "Laatste 25 matches",
						last10Matches: "Laatste 10 matches",
						scoreboard: "Scorebord",
						duration: "Duur",
						win: "gewonnen",
						loss: "verloren",
						damage: "Schade",
						player: "speler",
						score: "score",
						Allegiance: "Allegiance",
						coalition: "Coalition",
						modesMaps: "Speltypen en maps",
						assists: "Assists",
						viewMaps: "Maps bekijken",
						wlRatio: "G/V-ratio",
						allWeapons: "Alle wapens",
						equipment: "EQUIPMENT",
						killstreaks: "KILLSTREAKS",
						killstreak: "KILLSTREAK",
						viewCodProfile: "View COD Profile",
						lbFilter: "Filter",
						avgScorePerMin: "Score/Min",
						avgScore: "Score/Min",
						pageUp: "Page Up",
						pageDown: "Page Down",
						totalGames: "Games Played",
						highestKillstreak: "Highest Killstreak",
						avgKillsPerGame: "Avg Kills/Game",
						totalLosses: "Losses",
						highestWinstreak: "Winstreak",
						headshotPerGame: "Headshots/Game",
						avgDamage: "Avg Damage/Game",
						totalOneshotKills: "One Shot Kills",
						avgConfirms: "Avg Confirms/Game",
						avgCaptures: "Avg Captures/Game",
						globalAvgScorePerMin: "Score/Min",
						globalKills: "Kills",
						globalScore: "Score",
						globalWlRatio: "W/L Ratio",
						globalHeadshots: "Headshots",
						gulagWins: "Gewonnen",
						gulagLosses: "Verloren",
						gulagWinLossRatio: "W/L Ratio",
						gulagKills: "Kills",
						gulagJailorKills: "Jailor Kills",
						cqWins: "Champion's Quest Wins",
						recency: "Recency",
						unrankedMsgStart: "UNRANKED - Play 5 Games of",
						unrankedMsgEnd: "to get Ranked on this Leaderboard",
						name: "naam",
						undefined: "",
						noWeaponClassHistory: "",
						friends: "Friends",
						global: "Global",
						lockedTileMessage: "Speel 5 multiplayergames uit om te ontgrendelen",
						lockedTileWZMessage: "Speel 5 Warzone-games uit om te ontgrendelen",
						specgru: "Specgru",
						kortac: "Kortac",
						friendSnapshot: "Friend Snapshot",
						friendSnapshotDisclaimer: "*Position change since last login",
						friend: "Friend",
						goToTop: "Go to Top",
						lossPrevented: "Loss Prevented",
						deployments: "Einsätze",
						exfilRatio: "Exfiltration Erfolg-Verhältnis",
						lockedTileDMZMessage: "Schließt 5 DMZ-Spiele zum Freischalten ab",
						viewDMZStats: "Start Saison 2.5",
						eliminated: "Ausgeschieden",
						successfulExfils: "Erfolgreiche Exfiltrationen",
						highestExfilStreak: "Längste Exfiltrationsserie",
						highestAQKills: "Höchste AQ-Abschüsse/Einsatz",
						deploymentsExtractedItems: "Einsätze & extrahierte Objekte",
						viewDeploymentsExtractedItems: "Aktuelle Einsätze und extrahierte Objekte ansehen",
						cash: "Bargeld",
						extractedItems: "Extrahierte Objekte",
						weapons: "Waffen",
						dogTags: "Erkennungsmarken",
						teammatesRevived: "Wiederbelebte Teamkameraden",
						lootedContainers: "Erbeutete Container",
						cashExtracted: "Geldextraktion",
						mostCashExtracted: "Meiste Geldextraktion/Einsatz",
						highestDogTagExtracted: "Meiste extrahierte Erkennungsmarken",
						dogTagsExtracted: "Extrahierte Erkennungsmarken",
						weaponsExtracted: "Extrahierte Waffen",
						mostExtractedWeapons: "Meiste extrahierte Waffen",
						weapon: "Waffe",
						lethal: "Primär",
						tacticalEquipment: "Taktisch",
						timesExtracted: "Anzahl Extraktionen",
						xp: "EP",
						last10Deployments: "Letzte 10 Einsätze",
						noFriendsLeaderboard: "No friends ranked on this leaderboard",
						operatorHeadshotPercent: " Operator-Kopfschuss %",
						lastDeployment: "Letzter Einsatz",
						recentMatchesdmzDesc: "Aktuelle Einsätze und Extraktionsstatistiken ansehen",
						success: "Erfolg"
					},
					french: {
						langCode: "fr",
						statusMessage: "*Veuillez attendre 1 à 2 minutes pour actualiser vos statistiques les plus récentes",
						timePlayedPerMode: "Temps de jeu par mode",
						totalWins: "Total de victoires",
						lb: "Classement",
						warzone: "Warzone",
						warzone2: "Warzone 2",
						warzoneII: "Warzone II",
						aqSoldierKills: "Élim. soldats Al-Qatala",
						viewWarzoneStats: "Consultez vos principales statistiques de carrière dans Warzone",
						operatorKills: "Éliminations d’opérateur",
						aqKills: "Éliminations AQ",
						matches: "Parties",
						previousWarzoneMatchStats: "Statistiques des précédentes parties de Warzone",
						finishesBySquadSize: "Exécutions par taille d'escouade",
						squadSize: "Taille de l'équipe",
						all: "Tout",
						quads: "Quatuors",
						trios: "En trio",
						duos: "Duos",
						solos: "Solo",
						bestFinish: "Meilleure exécution",
						cashSpent: "Argent dépensé",
						killsDeathRatio: "Ratio éliminations/morts",
						top25: "Top 25",
						top10: "Top 10",
						top5: "Top 5",
						placement: "Classement",
						placements: "Classements",
						highestKillsPerGameShort: "Plus grand nombre d’éliminations par partie",
						personalBestShort: "Record personnel",
						gulag: "Goulag",
						highestScorePerGameShort: "Meilleure score par partie",
						furthestOperatorKill: "Éliminations d’opérateur supplémentaires",
						mostCashSpentPerGame: "Max d'argent dépensé/partie",
						aqSoldierKilled: "Soldats AQ éliminés",
						weaponClasses: "Classes d'arme",
						operators: "Opérateurs",
						lethality: "Létalité",
						shotTracker: "Traqueur de tir",
						engagementRanges: "Portée des tirs",
						fieldUpgrade: "Amélioration de combat",
						killStreak: "Série d'éliminations",
						contractsCompleted: "Contrats complétés",
						contracts: "Contrats",
						map: "Carte",
						maps: "Cartes",
						viewLoadoutStats: "Consulter les statistiques de l'attirail",
						recentMatches2Desc: "Consulter les statistiques des parties récentes, des modes et des cartes",
						totalKills: "Total d'élim.",
						battleRifles: "Fusils de combat",
						marksmanRifles: "Fusils tactiques",
						sniperRifles: "Fusils de précision",
						shotguns: "Fusils à pompe",
						lmgs: "Mitrailleuses",
						smgs: "Mitraillettes",
						handGuns: "Armes de poing",
						melee: "Corps à corps",
						launchers: "Lanceurs",
						stats: "Statistiques",
						assaultRifles: "Fusils d'assaut",
						apiError: "Impossible de charger les données",
						noWeapons: "Aucun historique d'arme",
						noMatchHistory: "Aucun historique de parties",
						noModesHistory: "Aucun historique de modes",
						teamDeathmatch: "MME",
						invasion: "Invasion",
						prisonerRescue: "Libération de prisonniers",
						charge: "Charge",
						cyberAttack: "Cyberattaque",
						domination: "Domination",
						searchAndDestroy: "Recherche et destruction",
						headquarters: "Quartier général",
						freeForAll: "Mêlée générale",
						gunfight: "Escarmouche",
						hardpoint: "Point stratégique",
						captureTheFlag: "Capture du drapeau",
						killConfirmed: "Élimination confirmée",
						onslaught: "Carnage",
						demolition: "Démolition",
						grind: "Dépôt",
						infected: "Infectés",
						gunGame: "Jeu d'armes",
						dropZone: "Zone de largage",
						ko: "K.O.",
						teamDefender: "Défenseur en équipe",
						groundWar: "Guerre terrestre",
						dmz: "DMZ",
						battleRoyale: "Battle Royale",
						br: "Battle Royale",
						resurgence: "Résurgence",
						plunder: "Pillage",
						alMazrah: "Al Mazrah",
						elBagra: "El Bagra Fortress",
						embassy: "Ambassade",
						zarqwaHydro: "Zarqwa Hydroelectric",
						taraq: "Taraq",
						sarrifBay: "Sarrif Bay",
						said: "Sa'id",
						santaSenaBorder: "Santa Seña Border Crossing",
						elAsilo: "El Asilo",
						mercadoLas: "Mercado Las Almas",
						santaSeña: "Santa Seña",
						guijarro: "Guijarro",
						crownRaceway: "Crown Raceway",
						breenberghHotel: "Breenbergh Hotel",
						farm18: "Farm 18",
						frag_grenade_mp: "GRENADE À FRAGMENTATION",
						at_mine_mp: "MINE DE PROXIMITÉ",
						bunkerbuster_round_mp: "CHARGE PÉNÉTRANTE",
						molotov_mp: "COCKTAIL MOLOTOV",
						semtex_mp: "SEMTEX",
						c4_base: "C4",
						claymore_mp: "CLAYMORE",
						thermite_ap_mp: "THERMITE",
						throwingknife_mp: "COUTEAU DE LANCER",
						assault_drone: "DRONE EXPLOSIF",
						cluster_spike: "MINE À DISPERSION",
						precision_airstrike: "FRAPPE DE PRÉCISION",
						cruise_predator: "MISSILE DE CROISIÈRE",
						mortar_strike: "FRAPPE DE MORTIER",
						sentry_gun: "TOURELLE AUTOMATIQUE",
						fuel_airstrike: "Bombardement stratégique",
						hover_jet: "ADAV",
						airdrop_escort: "HÉLICO DE SURVEILLANCE",
						wheelson: "WHEELSON-HS",
						stealth_bomber: "BOMBARDIER FURTIF",
						chopper_gunner: "HÉLICOPTÈRE D'ATTAQUE",
						gunship: "AVION D'ASSAUT",
						juggernaut: "SUPER MASTODONTE",
						open: "Ouvrir",
						close: "Fermer",
						left: "Gauche",
						right: "Droite",
						back: "Retour",
						select: "Sélectionnez",
						scroll: "parcourir",
						details: "Détails",
						motdTitle: "Message du jour",
						error: "Nous sommes désolés pour la gêne occasionnée. Veuillez réessayer ultérieurement.",
						viewPatchNotes: "Détails",
						hardClose: "Retour au Salon",
						filter: "Sélectionner une étape",
						menu: {
							0: "boutique",
							1: "équipement",
							2: "Opérateur",
							3: "caserne",
							4: "défis",
							5: "boutique",
							6: "SITE WEB CDL",
							cdl_news: "Nouveautés CDL",
							cdl_schedule: "Programme de la CDL",
							cdl_standings: "Classement CDL"
						},
						loading: "chargement",
						motdTabs: {
							motd: "Dernier",
							pn: "Correctifs",
							cdlChannel: "Canal CDL"
						},
						cdlEntry: "Découvrez les dernières actualités, les scores et le planning de la Call of Duty League sur le canal dédié CDL.",
						crTitle: "Rapport de combat",
						callOfDuty: "Call of Duty",
						multiplayer: "Multijoueur",
						coop: "Coop",
						ranked: "Partie classée",
						timePlayed: "Temps de jeu",
						gamesPlayed: "Parties jouées",
						kdRatio: "Ratio É/M",
						topWeapon: "Meilleure arme",
						last10Games: "10 dernières parties",
						currentSeason: "Saison actuelle",
						lifetime: "Global",
						kills: "Élim.",
						dashboard: "Classement",
						entryTabs: {
							0: "Rapport de combat",
							1: "classements"
						},
						dashboardTabs: {
							0: "Multijoueur",
							1: "Coop",
							2: "Partie classée"
						},
						career: "Carrière",
						careerDesc: "Voir les principales statistiques de carrière du mode Multijoueur de Modern Warfare",
						brCareerDesc: "Inclut les statistiques de Résurgence jusqu'au 27 avril 2023",
						resurgenceCareerDesc: "Statistiques à partir du 27 avril 2023",
						viewCareer: "Voir toutes les statistiques de carrière",
						loadOut: "Attirail",
						topWeapons: "Meilleures armes",
						topWeaponsDesc: "Voir les statistiques spécifiques aux armes, classes d'armes, équipements et série d'éliminations.",
						topWeaponsDescOld: "Voir les statistiques spécifiques aux armes, classes d'armes, équipements, améliorations de combat et série d'éliminations.",
						recentMatches: "Parties récentes",
						recentMatchesModes: "Parties récentes, modes et cartes",
						recentMatchesModesDesc: "Voir les parties récentes ainsi que les statistiques spécifiques aux modes et cartes",
						lastMatch: "Dernière partie",
						winsByMode: "Victoires par mode de jeu",
						killDeathRatio: "Ratio É/M",
						winLossRatio: "Ratio victoires/défaites",
						primaries: "Armes principales",
						secondaries: "Armes secondaires",
						loadoutTabs: {
							0: "classes",
							1: "Armes",
							2: "équipement",
							3: "séries d'éliminations"
						},
						recentsTab: {
							0: "Parties récentes",
							1: "Modes et cartes"
						},
						killsTacUse: "Éliminations/Équip. tactique",
						headshotPercent: "TIR DANS LA TÊTE (%)",
						accuracy: "Précision",
						stunnedKilled: "Paralysés et éliminés",
						revealedKills: "Éliminations",
						empdKills: "Éliminations à l’IEM",
						uses: "Utilisations",
						matchesPlayed: "Parties jouées",
						scorePerMinute: "Score par minute",
						deaths: "Morts",
						wins: "Victoires",
						losses: "Défaites",
						victoryDefeat: "Victoire et défaite",
						winLossRation: "Ratio victoires/défaites",
						personalBests: "Records personnels",
						highestKillStreak: "Meilleure série d'éliminations",
						highestKillsPerGame: "Plus grand nombre d’éliminations par partie",
						highestScorePerGame: "Meilleure score par partie",
						killOrBeKilled: "Tuer ou être tué",
						bootsOnGround: "Troupes au sol",
						progression: "Progression",
						atviName: "Nom ATVI",
						level: "Niveau",
						matchSummary: "Résumé de la partie",
						last25Matches: "25 dernières parties",
						last10Matches: "10 dernières parties",
						scoreboard: "Classement",
						duration: "Durée",
						win: "victoire",
						loss: "défaite",
						damage: "Dégâts",
						player: "Joueur",
						score: "score",
						Allegiance: "Allégeance",
						coalition: "Coalition",
						modesMaps: "Modes et cartes",
						assists: "Assistances",
						viewMaps: "Voir les cartes",
						wlRatio: "Ratio V/D",
						allWeapons: "Toutes les armes",
						equipment: "ÉQUIPEMENT",
						killstreaks: "SÉRIES D'ÉLIMINATIONS",
						killstreak: "SÉRIES D'ÉLIMINATIONS",
						gameModes: "Modes de jeu",
						critical: "Dégâts critiques",
						tdm: "Match à mort par équipe",
						dom: "Domination",
						koth: "Point stratégique",
						control: "Contrôle",
						conf: "Élimination confirmée",
						sd: "Recherche et destruction",
						cyber: "Cyberattaque",
						dd: "Démolition",
						hq: "Quartier général",
						hstg: "Libération de prisonniers",
						dm: "Mêlée générale",
						bounty: "Prime",
						rugby: "Rugby",
						viewCodProfile: "Voir le profil COD",
						lbFilter: "Filtres",
						avgScorePerMin: "SCORE/MIN",
						avgScore: "SCORE/MIN",
						pageUp: "Haut de page",
						pageDown: "Bas de page",
						totalGames: "Parties jouées",
						highestKillstreak: "Série d'éliminations la plus élevée",
						avgKillsPerGame: "Moyenne d'élim. par partie",
						totalLosses: "Défaites",
						highestWinstreak: "Série de victoires",
						headshotPerGame: "Tirs dans la tête/​partie",
						avgDamage: "Moy. dégâts/​partie",
						totalOneshotKills: "Coup mortel",
						avgConfirms: "Moy. confirmations/​partie",
						avgCaptures: "Moy. captures/​partie",
						globalAvgScorePerMin: "Score/Min",
						globalKills: "Élim",
						globalScore: "Score",
						globalWlRatio: "Ratio V/​D",
						globalHeadshots: "Tirs dans la tête",
						gulagWins: "Victoires",
						gulagLosses: "Défaites",
						gulagWinLossRatio: "Ratio V/​D",
						gulagKills: "Élim",
						gulagJailorKills: "Éliminations du Geôlier",
						cqWins: "Victoires de Quête du champion",
						recency: "Récemment",
						unrankedMsgStart: "NON CLASSÉ - Jouez 5 parties de",
						unrankedMsgEnd: "pour être classé dans ce classement",
						name: "Nom",
						undefined: "Indéterminé",
						noWeaponClassHistory: "Aucun historique de catégorie d'armes",
						lockedTileMessage: "Débloquez après 5 parties de Multijoueur",
						lockedTileWZMessage: "Débloquez après 5 parties de warzone",
						specgru: "Specgru",
						kortac: "Kortac",
						global: "Global",
						games: "Jeux",
						friends: "Amis",
						friendSnapshot: "Aperçu de l'ami",
						friendSnapshotDisclaimer: "*Changement de position depuis la dernière connexion",
						friend: "Ami",
						goToTop: "Visez les premières places.",
						lossPrevented: "Pertes évitées",
						deployments: "Déploiements",
						exfilRatio: "Ratio exfiltration victoire",
						lockedTileDMZMessage: "Terminez 5 parties DMZ pour débloquer",
						viewDMZStats: "Début de la Saison 2.5",
						eliminated: "Éliminé",
						successfulExfils: "Exfiltrations réussies",
						highestExfilStreak: "Plus grande série d’exfiltrations",
						highestAQKills: "Plus grand nombre d’éliminations QA/déploiement",
						deploymentsExtractedItems: "Déploiements et objets extraits",
						viewDeploymentsExtractedItems: "Voir les récents déploiements et objets extraits",
						cash: "Argent",
						extractedItems: "Objets extraits",
						weapons: "Armes",
						dogTags: "Plaques",
						teammatesRevived: "Coéquipiers réanimés",
						lootedContainers: "Conteneurs ouverts",
						cashExtracted: "Argent extrait",
						mostCashExtracted: "Plus grand montant d’argent extrait/déploiement",
						highestDogTagExtracted: "Plus grand nombre de plaques extraites",
						dogTagsExtracted: "Plaques extraites",
						weaponsExtracted: "Armes extraites",
						mostExtractedWeapons: "Plus grand nombre d’armes extraites",
						weapon: "Arme",
						lethal: "Explosez tout",
						tacticalEquipment: "Tactique",
						timesExtracted: "Temps d’extraction",
						xp: "EXP",
						last10Deployments: "10 derniers déploiements",
						noFriendsLeaderboard: "Aucun ami dans ce classement",
						operatorHeadshotPercent: " % TIRS DANS LA TÊTE D'OPÉR",
						lastDeployment: "Dernier déploiement",
						recentMatchesdmzDesc: "Voir les récents déploiements et les statistiques d'extractions",
						success: "Succès"
					},
					german: {
						langCode: "de",
						statusMessage: "*Bitte 1–2 Minuten abwarten, bis die letzten Spielstatistiken aktualisiert werden",
						timePlayedPerMode: "Gespielte Zeit pro Modus",
						totalWins: "Siege gesamt ",
						lb: "Ruhmeshalle",
						warzone: "Warzone",
						warzone2: "Warzone 2",
						warzoneII: "Warzone II",
						aqSoldierKills: "AQ-Soldaten-Abschüsse",
						viewWarzoneStats: "Standard-Warzone-Karrierestatistik anzeigen",
						operatorKills: "Operator-Abschüsse",
						aqKills: "AQ-Abschüsse",
						matches: "Spiele",
						previousWarzoneMatchStats: "Statistik vergangener Warzone-Spiele",
						finishesBySquadSize: "Abschlüsse pro Truppgröße",
						squadSize: "Truppgröße",
						all: "Alle",
						quads: "4er",
						trios: "3er",
						duos: "2er",
						solos: "Einzel",
						bestFinish: "Bestes Ende",
						cashSpent: "Ausgegebenes Geld",
						killsDeathRatio: "Abschuss/Tod-Quote",
						top25: "Top 25",
						top10: "Top 10",
						top5: "Top 5",
						placement: "Platzierung",
						placements: "Platzierungen",
						highestKillsPerGameShort: "Meiste Abschüsse/Spiel",
						personalBestShort: "Persönliche Bestleistung",
						gulag: "Gulag",
						highestScorePerGameShort: "Höchste Punktzahl/Spiel",
						furthestOperatorKill: "Weitester Operator-Abschuss",
						mostCashSpentPerGame: "Meiste Geld ausgegeben/Spiel",
						aqSoldierKilled: "Getötete AQ-Soldaten",
						weaponClasses: "Waffenklassen",
						operators: "Operator",
						lethality: "Tödlichkeit",
						shotTracker: "Schussverfolgung",
						engagementRanges: "Kampfreichweiten",
						fieldUpgrade: "Feldaufrüstung",
						killStreak: "Abschussserie",
						contractsCompleted: "Abgeschlossene Aufträge",
						contracts: "Aufträge",
						map: "Karte",
						maps: "Karten",
						viewLoadoutStats: "Ausrüstungsstatistik ansehen",
						recentMatches2Desc: "Letzte Spiel-, Modus- & Kartenstatistiken ansehen",
						totalKills: "Absch. gesamt",
						battleRifles: "Kampfgewehre",
						marksmanRifles: "DMR",
						sniperRifles: "Scharfschützengewehr",
						shotguns: "Schrotflinten",
						lmgs: "LMGs",
						smgs: "MPs",
						handGuns: "Pistolen",
						melee: "Nahkampf",
						launchers: "Werfer",
						stats: "Werte",
						assaultRifles: "Sturmgewehre",
						apiError: "Daten können nicht geladen werden",
						noWeapons: "Keine Waffenhistorie",
						noMatchHistory: "Keine Spielhistorie",
						noModesHistory: "Keine Modushistorie",
						teamDeathmatch: "TDM",
						invasion: "Invasion",
						prisonerRescue: "Gefangenenrettung",
						charge: "Ladung",
						cyberAttack: "Cyber-Angriff",
						domination: "Herrschaft",
						searchAndDestroy: "Suchen u. Zerstören",
						headquarters: "Hauptquartier",
						freeForAll: "Frei für alle",
						gunfight: "Feuergefecht",
						hardpoint: "Stellung",
						captureTheFlag: "Capture the Flag",
						killConfirmed: "Abschuss bestätigt",
						onslaught: "Ansturm",
						demolition: "Sprengkommando",
						grind: "Grind",
						infected: "Infected",
						gunGame: "Waffenspiel",
						dropZone: "Abwurfzone",
						ko: "Knock-out",
						teamDefender: "Team-Verteidiger",
						groundWar: "Bodenkrieg",
						dmz: "DMZ",
						battleRoyale: "Battle Royale",
						br: "Battle Royale",
						resurgence: "Wiederbelebung",
						plunder: "Beutegeld",
						alMazrah: "Al Mazrah",
						elBagra: "El Bagra Fortress",
						embassy: "Embassy",
						zarqwaHydro: "Zarqwa Hydroelectric",
						taraq: "Taraq",
						sarrifBay: "Sarrif Bay",
						said: "Sa'idx",
						santaSenaBorder: "Santa Seña Border Crossing",
						elAsilo: "El Asilo",
						mercadoLas: "Mercado Las Almas",
						santaSeña: "Santa Seña",
						guijarro: "Guijarro",
						crownRaceway: "Crown Raceway",
						breenberghHotel: "Breenbergh Hotel",
						farm18: "Farm 18",
						frag_grenade_mp: "SPLITTERGRANATE",
						at_mine_mp: "NÄHERUNGSMINE",
						bunkerbuster_round_mp: "BOHRLADUNG",
						molotov_mp: "MOLOTOWCOCKTAIL",
						semtex_mp: "SEMTEX",
						c4_base: "C4",
						claymore_mp: "CLAYMORE",
						thermite_ap_mp: "THERMIT",
						throwingknife_mp: "WURFMESSER",
						assault_drone: "BOMBENDROHNE",
						cluster_spike: "CLUSTER-MINE",
						precision_airstrike: "PRÄZISIONSLUFTSCHLAG",
						cruise_predator: "MARSCHFLUGKÖRPER",
						mortar_strike: "MÖRSERSCHLAG",
						sentry_gun: "GESCHÜTZ",
						fuel_airstrike: "Aerosol-Luftschlag",
						hover_jet: "VTOL-JET",
						airdrop_escort: "ÜBERWACHUNGSHELI",
						wheelson: "WHEELSON-HS",
						stealth_bomber: "TARNKAPPENBOMBER",
						chopper_gunner: "HELIKOPTERSCHÜTZE",
						gunship: "KAMPFFLUGZEUG",
						juggernaut: "JUGGERNAUT",
						open: "Offen",
						close: "Schließen",
						left: "Links",
						right: "Rechts",
						back: "Zurück",
						select: "WÄHLEN",
						scroll: "Scrollen",
						details: "details",
						motdTitle: "Nachricht des Tages",
						error: "Entschuldigung für diese Unannehmlichkeit. Versuche es bitte später erneut.",
						viewPatchNotes: "Patch-Hinweise lesen",
						hardClose: "Zurück zur Lobby",
						filter: "Phase festlegen",
						menu: {
							0: "Shop",
							1: "Ausrüstung",
							2: "operator",
							3: "Kaserne",
							4: "Herausforderungen",
							5: "Shop",
							6: "CDL-Website",
							cdl_news: "CDL-Neuigkeiten",
							cdl_schedule: "Zeitplan der CDL",
							cdl_standings: "CDL-Tabelle"
						},
						loading: "Laden",
						motdTabs: {
							motd: "Aktuell",
							pn: "Patchhinweise",
							cdlChannel: "CDL-Kanal"
						},
						cdlEntry: "Die neuesten Infos, Spielstände und den Zeitplan für die Call of Duty League gibt es immer im speziellen CDL-Kanal.",
						crTitle: "Kampfhistorie",
						callOfDuty: "callofduty",
						multiplayer: "Mehrspieler",
						coop: "Koop",
						ranked: "Ranglisten",
						timePlayed: "Spielzeit",
						gamesPlayed: "Spiele",
						kdRatio: "A/T-Quote",
						topWeapon: "Beste Waffe",
						last10Games: "Letzte 10 Spiele",
						currentSeason: "Aktuelle Saison",
						lifetime: "Ewig",
						kills: "Abschüsse",
						dashboard: "Zentrale",
						entryTabs: {
							0: "Kampfhistorie",
							1: "Bestenlisten"
						},
						dashboardTabs: {
							0: "Mehrspieler",
							1: "Koop",
							2: "Ranglisten"
						},
						career: "Karriere",
						careerDesc: "Zeige deine Karriere-Statistiken vom Standard-Modern Warfare-Mehrspieler an",
						brCareerDesc: "Enthält Wiederauferstehungsstatistiken bis zum 27. April 2023",
						resurgenceCareerDesc: "Statistiken ab 27. April 2023",
						viewCareer: "Karriere-Statistik anzeigen",
						loadOut: "Ausrüstung",
						topWeapons: "Beste Waffen",
						topWeaponsDesc: "Statistiken zu bestimmten Waffen, Waffenklassen, Ausrüstung und Abschussserien anzeigen",
						topWeaponsDescOld: "Statistiken zu bestimmten Waffen, Waffenklassen, Ausrüstung, Feldaufrüstungen und Abschussserien anzeigen",
						recentMatches: "Aktuelle Spiele",
						recentMatchesModes: "Letzte Spiele, Modi && Karten",
						recentMatchesModesDesc: "Letzte Spiele sowie modus- und kartenspezifische Statistiken anzeigen",
						lastMatch: "Letztes Spiel",
						winsByMode: "Siege pro Spielmodus",
						killDeathRatio: "Abschuss/Tod-Quote",
						winLossRatio: "Sieg/Niederlage-Quote",
						primaries: "Primärwaffen",
						secondaries: "Sekundärwaffen",
						loadoutTabs: {
							0: "Klassen",
							1: "Waffen",
							2: "Ausrüstung",
							3: "Abschussserien"
						},
						recentsTab: {
							0: "Aktuelle Spiele",
							1: "Modi & Karten"
						},
						killsTacUse: "Abschüsse/Einsatz von Taktikausrüstung",
						headshotPercent: "KOPFSCHÜSSE %",
						accuracy: "Präzision",
						stunnedKilled: "Betäubt & getötet",
						revealedKills: "Abschüsse mit Enthüllung",
						empdKills: "Abschüsse mit EMP",
						uses: "Nutzungen",
						matchesPlayed: "Gespielte Spiele",
						scorePerMinute: "Punkte pro Minute",
						deaths: "Tode",
						wins: "Siege",
						losses: "Niederlagen",
						victoryDefeat: "Sieg & Niederlage",
						winLossRation: "Sieg/Niederlage-Quote",
						personalBests: "Persönliche Bestleistungen",
						highestKillStreak: "Höchste Abschussserie",
						highestKillsPerGame: "Meiste Abschüsse/Spiel",
						highestScorePerGame: "Höchste Punktzahl/Spiel",
						killOrBeKilled: "Töten oder getötet werden",
						bootsOnGround: "Im Einsatz",
						progression: "Aufstieg",
						atviName: "ATVI-Name",
						level: "Level",
						matchSummary: "Spielübersicht",
						last25Matches: "Letzte 25 Spiele",
						last10Matches: "Letzte 10 Spiele",
						scoreboard: "Punkteübersicht",
						duration: "Dauer",
						win: "Siege",
						loss: "Niederlagen",
						damage: "Schaden",
						player: "Spieler",
						score: "Punkte",
						Allegiance: "Treuebund",
						coalition: "Koalition",
						modesMaps: "Modi & Karten",
						assists: "Assists",
						viewMaps: "Karten anzeigen",
						wlRatio: "S/N-Verhältnis",
						allWeapons: "Alle Waffen",
						equipment: "AUSRÜSTUNG",
						killstreaks: "ABSCHUSSSERIEN",
						killstreak: "ABSCHUSSSERIEN",
						gameModes: "Spielmodi",
						critical: "Kritischer Schaden",
						tdm: "Team-Deathmatch",
						dom: "Herrschaft",
						koth: "Stellung",
						control: "Kontrolle",
						conf: "Abschuss bestätigt",
						sd: "Suchen & Zerstören",
						cyber: "Cyber-Angriff",
						dd: "Sprengkommando",
						hq: "Hauptquartier",
						hstg: "Gefangenenrettung",
						dm: "Frei für alle",
						bounty: "Kopfgeld",
						rugby: "Rugby",
						viewCodProfile: "COD-Profil anzeigen",
						lbFilter: "Filter",
						avgScorePerMin: "Punkte/Minute",
						avgScore: "Punkte/Minute",
						pageUp: "Seite rauf",
						pageDown: "Seite runter",
						totalGames: "Spiele",
						highestKillstreak: "Höchste Abschussserie",
						avgKillsPerGame: "Durchschn. Abschüsse/​Spiel",
						totalLosses: "Niederlagen",
						highestWinstreak: "Siegesserie",
						headshotPerGame: "Kopfschüsse/​Spiel",
						avgDamage: "Dur. Schaden/​Spiel",
						totalOneshotKills: "Sofortabschüsse",
						avgConfirms: "Dur. Bestätigungen/​Spiel",
						avgCaptures: "Dur. Eroberungen/​Spiel",
						globalAvgScorePerMin: "Punkte/Minute",
						globalKills: "Abschüsse",
						globalScore: "Punkte",
						globalWlRatio: "S/​N-Verhältnis",
						globalHeadshots: "KOPFSCHÜSSE",
						gulagWins: "Siege",
						gulagLosses: "Niederlagen",
						gulagWinLossRatio: "S/​N-Verhältnis",
						gulagKills: "Abschüsse",
						gulagJailorKills: "Gefängniswärter-Abschüsse",
						cqWins: "Champion-Aufgabe-Siege",
						recency: "Aktualität",
						unrankedMsgStart: "OHNE RANGLISTE - Spielt 5 Spiele",
						unrankedMsgEnd: ", um in dieser Bestenliste gelistet zu werden",
						name: "Name",
						undefined: "Undefiniert",
						noWeaponClassHistory: "Kein Waffenklassenverlauf",
						friends: "Freunde",
						global: "Weltweit",
						games: "Spiele",
						lockedTileMessage: "5 MEHRSPIELERSPIELE ABSCHLIESSEN",
						lockedTileWZMessage: "5 WARZONE-SPIELE ABSCHLIESSEN",
						specgru: "SpecGru",
						kortac: "KorTac",
						friendSnapshot: "Freundesschnappschuss",
						friendSnapshotDisclaimer: "*Positionswechsel seit der letzten Anmeldung",
						friend: "Freund",
						goToTop: "Nach oben gehen",
						lossPrevented: "Verlust verhindert",
						deployments: "Einsätze",
						exfilRatio: "Exfiltration Erfolg-Verhältnis",
						lockedTileDMZMessage: "5 DMZ-SPIELE ABSCHLIESSEN Schließt",
						viewDMZStats: "Standard-Warzone 2.0-DMZ-Statistik",
						eliminated: "Ausgeschieden",
						successfulExfils: "Erfolgreiche Exfiltrationen",
						highestExfilStreak: "Längste Exfiltrationsserie",
						highestAQKills: "Höchste AQ-Abschüsse/Einsatz",
						deploymentsExtractedItems: "Einsätze & extrahierte Objekte",
						viewDeploymentsExtractedItems: "Aktuelle Einsätze und extrahierte Objekte ansehen",
						cash: "Bargeld",
						extractedItems: "Extrahierte Objekte",
						weapons: "Waffen",
						dogTags: "Erkennungsmarken",
						teammatesRevived: "Wiederbelebte Teamkameraden",
						lootedContainers: "Erbeutete Container",
						cashExtracted: "Geldextraktion",
						mostCashExtracted: "Meiste Geldextraktion/Einsatz",
						highestDogTagExtracted: "Meiste extrahierte Erkennungsmarken",
						dogTagsExtracted: "Extrahierte Erkennungsmarken",
						weaponsExtracted: "Extrahierte Waffen",
						mostExtractedWeapons: "Meiste extrahierte Waffen",
						weapon: "Waffe",
						lethal: "Primär",
						tacticalEquipment: "Taktisch",
						timesExtracted: "Anzahl Extraktionen",
						xp: "EP",
						last10Deployments: "Letzte 10 Einsätze",
						noFriendsLeaderboard: "In dieser Bestenliste sind keine Freunde gelistet",
						operatorHeadshotPercent: " Operator-Kopfschuss %",
						lastDeployment: "Letzter Einstieg",
						recentMatchesdmzDesc: "Statistiken kürzlicher Einsätze und Extraktionen ansehen",
						success: "Erfolg"
					},
					italian: {
						langCode: "it",
						statusMessage: "*Potrebbero volerci 1-2 minuti per aggiornare le statistiche partita più recenti",
						timePlayedPerMode: "Tempo di gioco per modalità",
						totalWins: "Totale - Vittorie",
						lb: "Classifica",
						warzone: "Warzone",
						warzone2: "Warzone 2",
						warzoneII: "Warzone II",
						aqSoldierKills: "Soldati di Al-Qatala uccisi",
						viewWarzoneStats: "Visualizza le tue statistiche principali della carriera di Warzone",
						operatorKills: "Uccisioni operatore",
						aqKills: "Uccisioni AQ",
						matches: "Partite",
						previousWarzoneMatchStats: "Statistiche delle precedenti partite di Warzone",
						finishesBySquadSize: "Risultati in base alla grandezza della squadra",
						squadSize: "Dimensione squadra",
						all: "Tutti",
						quads: "Quartetti",
						trios: "Terzetti",
						duos: "Coppie",
						solos: "Singolo",
						bestFinish: "Miglior risultato",
						cashSpent: "Denaro speso",
						killsDeathRatio: "Rapporto uccisioni/morti",
						top25: "Top 25",
						top10: "Top 10",
						top5: "Top 5",
						placement: "Piazzamento",
						placements: "Piazzamenti",
						highestKillsPerGameShort: "Record uccisioni/partita",
						personalBestShort: "Record personale",
						gulag: "Gulag",
						highestScorePerGameShort: "Record punteggio/partita",
						furthestOperatorKill: "Uccisione operatore più lontano",
						mostCashSpentPerGame: "Maggior quantità di denaro speso/partita",
						aqSoldierKilled: "Soldati AQ uccisi",
						weaponClasses: "Classi arma",
						operators: "Operatori",
						lethality: "Letalità",
						shotTracker: "Contatore di colpi",
						engagementRanges: "Distanza degli scontri",
						fieldUpgrade: "Potenziamenti da campo",
						killStreak: "Serie di uccisioni",
						contractsCompleted: "Contratti completati",
						contracts: "Contratti",
						map: "Mappa",
						maps: "Mappe",
						viewLoadoutStats: "Vedi statistiche equipaggiamento",
						recentMatches2Desc: "Visualizza statistiche di partite, modalità e mappe recenti",
						totalKills: "Tot. Uccisioni",
						battleRifles: "Fucili da battaglia",
						marksmanRifles: "Fucili tattici",
						sniperRifles: "Fucili di precisione",
						shotguns: "FUCILI A CANNA LISCIA",
						lmgs: "Mitragliatrici leggere",
						smgs: "Mitragliette",
						handGuns: "Pistole",
						melee: "Corpo a corpo",
						launchers: "LANCIATORI",
						stats: "Statistiche",
						assaultRifles: "Fucili d'assalto",
						apiError: "Impossibile caricare i dati",
						noWeapons: "Nessuna cronologia arma",
						noMatchHistory: "Nessuna cronologia partita",
						noModesHistory: "Nessuna cronologia modalità",
						teamDeathmatch: "DMS",
						invasion: "Invasion",
						prisonerRescue: "Soccorso prigionieri",
						charge: "Carica",
						cyberAttack: "Attacco informatico",
						domination: "Dominio",
						searchAndDestroy: "Cerca e distruggi",
						headquarters: "Quartier generale",
						freeForAll: "Tutti contro tutti",
						gunfight: "Scontro",
						hardpoint: "Postazione",
						captureTheFlag: "Cattura la bandiera",
						killConfirmed: "UCC. CONFERMATA",
						onslaught: "Carneficina",
						demolition: "Demolizione",
						grind: "Avvoltoio",
						infected: "Infezione",
						gunGame: "Gioco delle armi",
						dropZone: "Zona di lancio",
						ko: "Knock Out",
						teamDefender: "Difensore a squadre",
						groundWar: "Guerra terrestre",
						dmz: "DMZ",
						battleRoyale: "Battle royale",
						br: "Battle royale",
						resurgence: "Ritorno",
						plunder: "Bottino",
						alMazrah: "Al Mazrah",
						elBagra: "El Bagra Fortress",
						embassy: "Embassy",
						zarqwaHydro: "Zarqwa Hydroelectric",
						taraq: "Taraq",
						sarrifBay: "Sarrif Bay",
						said: "Sa'id",
						santaSenaBorder: "Santa Seña Border Crossing",
						elAsilo: "El Asilo",
						mercadoLas: "Mercado Las Almas",
						santaSeña: "Santa Seña",
						guijarro: "Guijarro",
						crownRaceway: "Crown Raceway",
						breenberghHotel: "Breenbergh Hotel",
						farm18: "Farm 18",
						frag_grenade_mp: "GRANATA A FRAMMENTAZIONE",
						at_mine_mp: "MINA DI PROSSIMITÀ",
						bunkerbuster_round_mp: "CARICA PERFORANTE",
						molotov_mp: "CARICA PERFORANTE",
						semtex_mp: "SEMTEX",
						c4_base: "C4",
						claymore_mp: "SPADONE A DOPPIO TAGLIO",
						thermite_ap_mp: "TERMITE",
						throwingknife_mp: "COLTELLO DA LANCIO",
						assault_drone: "DRONE BOMBA",
						cluster_spike: "MINA A GRAPPOLO",
						precision_airstrike: "BOMBARDAMENTO DI PRECISIONE",
						cruise_predator: "MISSILE CRUISE",
						mortar_strike: "ATTACCO CON MORTAIO",
						sentry_gun: "TORRETTA ROBOT",
						fuel_airstrike: "Esplosivo aereo strategico",
						hover_jet: "JET VTOL",
						airdrop_escort: "ELICOTTERO DI SUPPORTO",
						wheelson: "WHEELSON-HS",
						stealth_bomber: "BOMBARDIERE STEALTH",
						chopper_gunner: "ELICOTTERO D'ASSALTO",
						gunship: "CANNONIERA",
						juggernaut: "JUGGERNAUT",
						open: "Aperta",
						close: "Chiudere",
						left: "Sinistra",
						right: "Destra",
						back: "Indietro",
						select: "Seleziona",
						scroll: "scorri",
						details: "Dettagli",
						motdTitle: "Messaggio del giorno",
						error: "Siamo spiacenti per questo inconveniente. Riprova in seguito.",
						viewPatchNotes: "Dettagli",
						hardClose: "Torna alla Lobby",
						filter: "Seleziona fase",
						menu: {
							0: "negozio",
							1: "equipaggiamenti",
							2: "operatore",
							3: "caserma",
							4: "sfide",
							5: "negozio",
							6: "Sito Web CDL",
							cdl_news: "Notizie CDL",
							cdl_schedule: "Calendario CDL",
							cdl_standings: "Classifica CDL"
						},
						loading: "caricamento",
						motdTabs: {
							motd: "Recenti",
							pn: "Note patch",
							cdlChannel: "Canale CDL"
						},
						cdlEntry: "Tutte le ultime notizie, i punteggi e il programma della Call of Duty League nel canale CDL dedicato.",
						crTitle: "Registro di battaglia",
						callOfDuty: "callofduty",
						multiplayer: "Multigiocatore",
						coop: "Cooperativa",
						ranked: "Classificata",
						timePlayed: "Tempo di gioco",
						gamesPlayed: "Partite giocate",
						kdRatio: "Rapporto U/M",
						topWeapon: "Arma migliore",
						last10Games: "Ultime 10 partite",
						currentSeason: "Stagione attuale",
						lifetime: "Complessivo",
						kills: "Uccisioni",
						dashboard: "Dashboard",
						entryTabs: {
							0: "Registro di battaglia",
							1: "classifiche"
						},
						dashboardTabs: {
							0: "Multigiocatore",
							1: "Cooperativa",
							2: "Classificata"
						},
						career: "Carriera",
						careerDesc: "Visualizza le tue statistiche principali della carriera Multigiocatore di Modern Warfare",
						brCareerDesc: "Include le statistiche di Ritorno fino al 27 aprile 2023",
						resurgenceCareerDesc: "Statistiche a partire dal 27 aprile 2023",
						viewCareer: "Visualizza statistiche carriera",
						loadOut: "Equipaggiamento",
						topWeapons: "Armi migliori",
						topWeaponsDesc: "Visualizza statistiche specifiche per armi, classi di armi, equipaggiamento e serie di uccisioni",
						topWeaponsDescOld: "Visualizza statistiche specifiche per armi, classi di armi, equipaggiamento, potenziamenti da campo e serie di uccisioni",
						recentMatches: "Partite recenti",
						recentMatchesModes: "Partite recenti, modalità e mappe",
						recentMatchesModesDesc: "Visualizza statistiche relative a mappe, modalità e partite recenti",
						lastMatch: "Ultima partita",
						winsByMode: "Vittorie per modalità di gioco",
						killDeathRatio: "Rapporto uccisioni/morti",
						winLossRatio: "Rapporto vittorie/sconfitte",
						primaries: "Principali",
						secondaries: "secondarie",
						loadoutTabs: {
							0: "classi",
							1: "armi",
							2: "equipaggiamento",
							3: "serie di uccisioni"
						},
						recentsTab: {
							0: "Partite recenti",
							1: "Modalità e mappe"
						},
						killsTacUse: "Uccisioni/utilizzo tattiche",
						headshotPercent: "% COLPI ALLA TESTA",
						accuracy: "Precisione",
						stunnedKilled: "Stordito e ucciso",
						revealedKills: "Uccisioni rivelati",
						empdKills: "Uccisioni EMP",
						uses: "Utilizzi",
						matchesPlayed: "Partite giocate",
						scorePerMinute: "Punti per minuto",
						deaths: "Morti",
						wins: "Vittorie",
						losses: "Sconfitte",
						victoryDefeat: "Vittoria e sconfitta",
						winLossRation: "Rapporto vittorie/sconfitte",
						personalBests: "Record personali",
						highestKillStreak: "Serie di uccisioni massima",
						highestKillsPerGame: "Record uccisioni/partita",
						highestScorePerGame: "Record punteggio/partita",
						killOrBeKilled: "Uccidere o essere uccisi",
						bootsOnGround: "Piedi per terra",
						progression: "Avanzamento",
						atviName: "Nome ATVI",
						level: "Livello",
						matchSummary: "Riepilogo partita",
						last25Matches: "Ultime 25 partite",
						last10Matches: "Ultime 10 partite",
						scoreboard: "Classifica punteggi",
						duration: "Durata",
						win: "vittoria",
						loss: "sconfitta",
						damage: "Danni",
						player: "giocatore",
						score: "Punteggio",
						Allegiance: "Alleanza",
						coalition: "Coalizione",
						modesMaps: "Modalità e mappe",
						assists: "Assist",
						viewMaps: "Visualizza mappe",
						wlRatio: "Rapporto V/S",
						allWeapons: "Tutte le armi",
						equipment: "EQUIPAGGIAMENTO",
						killstreaks: "SERIE DI UCCISIONI",
						killstreak: "SERIE DI UCCISIONI",
						gameModes: "Modalità di gioco",
						critical: "Danni critici",
						tdm: "Deathmatch a squadre",
						dom: "Dominio",
						koth: "Postazione",
						control: "Controllo",
						conf: "UCC. CONFERMATA",
						sd: "Cerca e distruggi",
						cyber: "Attacco informatico",
						dd: "Demolizione",
						hq: "Quartier generale",
						hstg: "Soccorso prigionieri",
						dm: "Tutti contro tutti",
						bounty: "Taglia",
						rugby: "Rugby",
						viewCodProfile: "Visualizza profilo COD",
						lbFilter: "Filtro",
						avgScorePerMin: "Punteggio/Min",
						avgScore: "Punteggio/Min",
						pageUp: "Pagina su",
						pageDown: "Pagina giù",
						totalGames: "Partite giocate",
						highestKillstreak: "Serie di uccisioni più alta",
						avgKillsPerGame: "Media uccisioni/​partita",
						totalLosses: "Sconfitte",
						highestWinstreak: "Serie di vittorie",
						headshotPerGame: "Colpi alla testa/​partita",
						avgDamage: "Danni medi/​partita",
						totalOneshotKills: "Uccisioni colpo singolo",
						avgConfirms: "Conferme medie/​partita",
						avgCaptures: "Catture medie/​partita",
						globalAvgScorePerMin: "Punteggio/Min",
						globalKills: "Uccisioni",
						globalScore: "punteggio",
						globalWlRatio: "Rapporto V/​S",
						globalHeadshots: "Colpi alla testa",
						gulagWins: "Vittorie",
						gulagLosses: "Sconfitte",
						gulagWinLossRatio: "Rapporto V/​S",
						gulagKills: "Uccisioni",
						gulagJailorKills: "Uccisioni secondino",
						cqWins: "Vittorie Missione del Campione",
						recency: "Recenti",
						unrankedMsgStart: "NON CLASSIFICATO - Gioca 5 partite di",
						unrankedMsgEnd: "per essere inserito in questa classifica",
						name: "Nome",
						undefined: "Indefinita",
						noWeaponClassHistory: "Nessuno storico classe arma",
						friends: "Amici",
						global: "Globale",
						games: "Giochi",
						lockedTileMessage: "COMPLETA 5 PARTITE MG PER SBLOCCARE",
						lockedTileWZMessage: "COMPLETA 5 PARTITE WZ PER SBLOCCARE",
						specgru: "SpecGru",
						kortac: "KorTac",
						friendSnapshot: "Riepilogo amici",
						friendSnapshotDisclaimer: "*Cambio di posizione dall'ultimo accesso",
						friend: "amici",
						goToTop: "Vai in alto",
						lossPrevented: "Sconfitta non conteggiata",
						deployments: "Dispiegamenti",
						exfilRatio: "Rapporto estrazioni successi",
						lockedTileDMZMessage: "COMPLETA 5 PARTITE DMZ PER SBLOCCARE",
						viewDMZStats: "Inizio della Stagione 2.5",
						eliminated: "Eliminato",
						successfulExfils: "Estrazioni riuscite",
						highestExfilStreak: "Serie di estrazioni più elevata",
						highestAQKills: "Numero più alto di uccisioni AQ/dispiegamento",
						deploymentsExtractedItems: "Dispiegamenti ed elementi estratti",
						viewDeploymentsExtractedItems: "Visualizza dispiegamenti recenti ed elementi estratti",
						cash: "Denaro",
						extractedItems: "Elementi estratti",
						weapons: "Armi",
						dogTags: "Piastrine",
						teammatesRevived: "Compagni rianimati",
						lootedContainers: "Contenitori saccheggiati",
						cashExtracted: "Denaro estratto",
						mostCashExtracted: "Maggior quantità di denaro estratto/dispiegamento",
						highestDogTagExtracted: "Record piastrine estratte",
						dogTagsExtracted: "Piastrine estratte",
						weaponsExtracted: "Armi estratte",
						mostExtractedWeapons: "Armi più estratte",
						weapon: "Arma",
						lethal: "Letale",
						tacticalEquipment: "Tattico",
						timesExtracted: "Numero estrazioni",
						xp: "PE",
						last10Deployments: "Ultimi 10 dispiegamenti",
						noFriendsLeaderboard: "Nessun amico all'interno di questa classifica",
						operatorHeadshotPercent: "% COLPI ALLA TESTA OPERATORE",
						lastDeployment: "Ultimo dispiegamento",
						recentMatchesdmzDesc: "Visualizza statistiche di estrazioni e dispiegamenti recenti",
						success: "Successo"
					},
					japanese_full: {
						langCode: "ja",
						statusMessage: "*最新のプレイ記録が反映されるまで1-2分程お待ちください",
						timePlayedPerMode: "モード毎のプレイ時間",
						totalWins: "合計勝利 ",
						lb: "ランキング",
						warzone: "Warzone",
						warzoneII: "Warzone II",
						warzone2: "Warzone 2",
						aqSoldierKills: "アル・カターラ兵キル数",
						games: "ゲームモード",
						viewWarzoneStats: "Warzoneのキャリアステータスを表示",
						operatorKills: "オペレーターキル数",
						aqKills: "アル・カターラキル",
						matches: "マッチ",
						previousWarzoneMatchStats: "過去のWarzoneマッチのステータス",
						finishesBySquadSize: "スクアッド規模別のフィニッシュ",
						squadSize: "スクアッド人数",
						all: "全て",
						quads: "クアッド",
						trios: "トリオ",
						duos: "デュオ",
						solos: "ソロ",
						bestFinish: "ベスト フィニッシュ",
						cashSpent: "キャッシュ 消費額",
						killsDeathRatio: "キル / デス比",
						top25: "トップ25",
						top10: "トップ10",
						top5: "トップ5",
						placement: "順位",
						placements: "順位",
						highestKillsPerGameShort: "最多キル / ゲーム",
						personalBestShort: "自己ベスト",
						gulag: "Gulag",
						highestScorePerGameShort: "最高スコア / ゲーム",
						furthestOperatorKill: "最高到達オペレーターキル",
						mostCashSpentPerGame: "キャッシュ最高消費額 / ゲーム",
						aqSoldierKilled: "アル・カターラ兵キル数",
						weaponClasses: "武器クラス",
						operators: "オペレーター",
						lethality: "致死率",
						shotTracker: "ショットトラッカー",
						engagementRanges: "交戦距離",
						fieldUpgrade: "フィールドアップグレード",
						killStreak: "キルストリーク",
						contractsCompleted: "完了済み契約",
						contracts: "契約",
						map: "マップ",
						maps: "マップ",
						viewLoadoutStats: "ロードアウトのステータスを表示",
						recentMatches2Desc: "最近のマッチ、モード&マップのステータスを表示",
						totalKills: "合計キル数",
						battleRifles: "バトルライフル",
						marksmanRifles: "マークスマンライフル",
						sniperRifles: "スナイパーライフル",
						shotguns: "ショットガン",
						lmgs: "LMG",
						smgs: "SMG",
						handGuns: "ハンドガン",
						melee: "近接武器",
						launchers: "ランチャー",
						stats: "ステータス",
						assaultRifles: "アサルトライフル",
						apiError: "データをロードできません",
						noWeapons: "武器履歴がありません",
						noMatchHistory: "マッチ履歴がありません",
						noModesHistory: "モード履歴がありません",
						teamDeathmatch: "TDM",
						invasion: "インベージョン",
						prisonerRescue: "プリズナーレスキュー",
						charge: "チャージ",
						cyberAttack: "サイバーアタック",
						domination: "ドミネーション",
						searchAndDestroy: "サーチ・アンド・デストロイ",
						headquarters: "ヘッドクォーター",
						freeForAll: "フリー・フォー・オール",
						gunfight: "ガンファイト",
						hardpoint: "ハードポイント",
						captureTheFlag: "キャプチャー・ザ・フラッグ",
						killConfirmed: "キルコンファーム",
						onslaught: "オンスロート",
						demolition: "デモリション",
						grind: "グラインド",
						infected: "インフェクテッド",
						gunGame: "ガンゲーム",
						dropZone: "ドロップゾーン",
						ko: "ノックアウト",
						teamDefender: "チームディフェンダー",
						groundWar: "グラウンドウォー",
						dmz: "DMZ",
						battleRoyale: "バトルロイヤル",
						br: "バトルロイヤル",
						resurgence: "リサージェンス",
						plunder: "プランダー",
						alMazrah: "アル・マズラ",
						elBagra: "エル・バグラ・フォートレス",
						embassy: "エンバシー",
						zarqwaHydro: "ザルクワ・ハイドロエレクトリック",
						taraq: "タラク",
						sarrifBay: "サリフベイ",
						said: "サイード",
						santaSenaBorder: "サンタ・セニャ・ボーダークロス",
						elAsilo: "エル・アシーロ",
						mercadoLas: "メルカド・ラス・アルマス",
						santaSeña: "サンタ・セニャ",
						guijarro: "ギハロ",
						crownRaceway: "クラウンレースウェイ",
						breenberghHotel: "ブレーンベルフホテル",
						farm18: "ファーム18",
						frag_grenade_mp: "フラググレネード",
						at_mine_mp: "センサーマイン",
						bunkerbuster_round_mp: "ドリルチャージ",
						molotov_mp: "モロトフ",
						semtex_mp: "セムテックス",
						c4_base: "C4",
						claymore_mp: "クレイモア",
						thermite_ap_mp: "テルミット",
						throwingknife_mp: "投げナイフ",
						assault_drone: "ボムドローン",
						cluster_spike: "クラスターマイン",
						precision_airstrike: "エアストライク",
						cruise_predator: "巡航ミサイル",
						mortar_strike: "迫撃砲",
						sentry_gun: "セントリーガン",
						fuel_airstrike: "SAE",
						hover_jet: "V.T.O.L.",
						airdrop_escort: "監視ヘリ",
						wheelson: "ウィールソン-HS",
						stealth_bomber: "ステルスボマー",
						chopper_gunner: "ヘリガンナー",
						gunship: "ガンシップ",
						juggernaut: "ジャガーノート",
						open: "開く",
						close: "閉じる",
						left: "左",
						right: "右",
						back: "戻る",
						select: "選択",
						scroll: "スクロール",
						details: "詳細",
						motdTitle: "本日のメッセージ",
						error: "ご不便をおかけして申し訳ありませんが、後ほどもう一度お試しください。",
						viewPatchNotes: "パッチノートを見る",
						hardClose: "ロビーに戻る",
						filter: "ステージ設定",
						menu: {
							0: "ストア",
							1: "ロードアウト",
							2: "オペレーター",
							3: "兵舎",
							4: "チャレンジ",
							5: "ショップ",
							6: "CDLウェブサイト",
							cdl_news: "CDLニュース",
							cdl_schedule: "CDLスケジュール",
							cdl_standings: "CDL順位"
						},
						loading: "ロード中",
						motdTabs: {
							motd: "最新",
							pn: "パッチノート",
							cdlChannel: "CDLチャンネル"
						},
						cdlEntry: "専用のCDLチャンネルでCall of Duty Leagueの最新ニュース、スコア、日程をチェックしよう。",
						crTitle: "戦闘記録",
						callOfDuty: "Call of Duty",
						multiplayer: "マルチプレイヤー",
						coop: "協力モード",
						ranked: "ランク",
						timePlayed: "プレイ時間",
						gamesPlayed: "プレイしたゲーム",
						kdRatio: "キル/デス比",
						topWeapon: "トップ武器",
						last10Games: "最新10ゲーム",
						currentSeason: "現在のシーズン",
						lifetime: "アクティブ時間",
						kills: "キル",
						dashboard: "ダッシュボード",
						entryTabs: {
							0: "戦闘記録",
							1: "ランキング"
						},
						dashboardTabs: {
							0: "マルチプレイヤー",
							1: "協力モード",
							2: "ランク"
						},
						career: "キャリア",
						careerDesc: "Modern Warfareマルチプレイヤーのキャリアステータスを表示",
						brCareerDesc: "2023年4月27日(日本時間)までリサージェンスのステータスが含まれます",
						resurgenceCareerDesc: "2023年4月27日(日本時間)から開始するステータス",
						viewCareer: "キャリアステータスを表示",
						loadOut: "ロードアウト",
						topWeapons: "トップ武器",
						topWeaponsDesc: "武器、武器クラス、装備、キルストリーク別のステータスを表示",
						topWeaponsDescOld: "武器、武器クラス、装備、フィールドアップグレード、キルストリーク別のステータスを表示",
						recentMatches: "最近のマッチ",
						recentMatchesModes: "最近のマッチ、モード&マップ",
						recentMatchesModesDesc: "最近のマッチ、モード、マップ別のステータスを表示",
						lastMatch: "前回のマッチ",
						winsByMode: "ゲームモード別の勝利数",
						killDeathRatio: "キル / デス比",
						winLossRatio: "勝敗比",
						primaries: "メイン武器",
						secondaries: "サブ",
						loadoutTabs: {
							0: "クラス",
							1: "武器",
							2: "装備",
							3: "キルストリーク"
						},
						recentsTab: {
							0: "最近のマッチ",
							1: "モード&マップ"
						},
						killsTacUse: "キル数 / タクティカル使用",
						headshotPercent: "ヘッドショット率",
						accuracy: "命中率",
						stunnedKilled: "スタンキル数",
						revealedKills: "検知キル数",
						empdKills: "EMPキル数",
						uses: "使用回数",
						matchesPlayed: "マッチプレイ数",
						scorePerMinute: "スコア/分",
						deaths: "デス数",
						wins: "勝利数",
						losses: "敗北",
						victoryDefeat: "勝利&敗北",
						winLossRation: "勝敗比",
						personalBests: "自己ベスト",
						highestKillStreak: "最高キルストリーク",
						highestKillsPerGame: "最多キル数 / ゲーム",
						highestScorePerGame: "最高スコア / ゲーム",
						killOrBeKilled: "キル / デス",
						bootsOnGround: "戦闘時間",
						progression: "進行状況",
						atviName: "ATVI名",
						level: "レベル",
						matchSummary: "マッチ成績",
						last25Matches: "過去25マッチ",
						last10Matches: "過去10マッチ",
						scoreboard: "スコアボード",
						duration: "期間",
						win: "勝利",
						loss: "敗北",
						damage: "ダメージ",
						player: "プレイヤー",
						score: "スコア",
						Allegiance: "ALLEGIANCE",
						coalition: "COALITION",
						modesMaps: "モード&マップ",
						assists: "アシスト",
						viewMaps: "マップを表示",
						wlRatio: "勝敗比",
						allWeapons: "全ての武器",
						equipment: "装備",
						killstreaks: "キルストリーク",
						killstreak: "キルストリーク",
						gameModes: "ゲームモード",
						critical: "クリティカルダメージ",
						tdm: "チームデスマッチ",
						dom: "ドミネーション",
						koth: "ハードポイント",
						control: "コントロール",
						conf: "キルコンファーム",
						sd: "サーチ・アンド・デストロイ",
						cyber: "サイバーアタック",
						dd: "デモリション",
						hq: "ヘッドクォーター",
						hstg: "ホステージレスキュー",
						dm: "フリー・フォー・オール",
						bounty: "バウンティ",
						rugby: "ラグビー",
						viewCodProfile: "CODプロフィールを表示",
						lbFilter: "フィルター",
						avgScorePerMin: "スコア / 分",
						avgScore: "スコア / 分",
						pageUp: "上へ移動",
						pageDown: "下へ移動",
						totalGames: "プレイしたゲーム",
						highestKillstreak: "最高キルストリーク",
						avgKillsPerGame: "平均キル数 / ゲーム",
						totalLosses: "敗北",
						highestWinstreak: "勝利ストリーク",
						headshotPerGame: "ヘッドショット数/ゲーム",
						avgDamage: "平均 ダメージ / ゲーム",
						totalOneshotKills: "ワンショットキル",
						avgConfirms: "平均確定数/ゲーム",
						avgCaptures: "平均確保数/ゲーム",
						globalAvgScorePerMin: "スコア / 分",
						globalKills: "キル",
						globalScore: "スコア",
						globalWlRatio: "勝敗比",
						globalHeadshots: "ヘッドショット",
						gulagWins: "勝利数",
						gulagLosses: "敗北",
						gulagWinLossRatio: "勝敗比",
						gulagKills: "キル",
						gulagJailorKills: "看守キル数",
						cqWins: "チャンピオンクエスト勝利",
						recency: "最近",
						unrankedMsgStart: "ランクなし - 5回プレイしよう:",
						unrankedMsgEnd: "このランキングでランクを獲得しよう",
						name: "名前",
						undefined: "未定義",
						noWeaponClassHistory: "クラス武器データなし",
						friends: "フレンド",
						global: "グローバル",
						lockedTileMessage: "マルチプレイヤーのゲームを5回完了して解除",
						lockedTileWZMessage: "Warzoneのゲームを5回完了して解除",
						specgru: "スペックグルー",
						kortac: "コルタック",
						friendSnapshot: "フレンドスナップショット",
						friendSnapshotDisclaimer: "*最終ログイン時からの位置変更",
						friend: "フレンド",
						goToTop: "トップに移動",
						lossPrevented: "敗北無効",
						deployments: "出撃",
						exfilRatio: "脱出成功比",
						lockedTileDMZMessage: "DMZのゲームを5回完了して解除",
						viewDMZStats: "シーズン2.5が始動",
						eliminated: "脱落",
						successfulExfils: "脱出成功",
						highestExfilStreak: "最高脱出ストリーク",
						highestAQKills: "最多AQキル数/出撃",
						deploymentsExtractedItems: "出撃&回収したアイテム",
						viewDeploymentsExtractedItems: "最近の出撃と回収したアイテムを見る",
						cash: "キャッシュ",
						extractedItems: "回収したアイテム",
						weapons: "武器",
						dogTags: "ドッグタグ",
						teammatesRevived: "蘇生したチームメイト",
						lootedContainers: "開けたコンテナ",
						cashExtracted: "回収したキャッシュ",
						mostCashExtracted: "回収したキャッシュ最高額/出撃",
						highestDogTagExtracted: "回収した最多ドッグタグ数",
						dogTagsExtracted: "回収したドッグタグ",
						weaponsExtracted: "回収した武器",
						mostExtractedWeapons: "回収した最多武器数",
						weapon: "武器",
						lethal: "リーサル",
						tacticalEquipment: "タクティカル",
						timesExtracted: "回収した回数",
						xp: "XP",
						last10Deployments: "直近の出撃10回",
						noFriendsLeaderboard: "このランキングで順位付けされているフレンドはいません",
						operatorHeadshotPercent: "オペレーターHS率",
						lastDeployment: "最後の出撃",
						recentMatchesdmzDesc: "最近の出撃と回収したアイテムのステータスを見る",
						success: "成功"
					},
					spanish: {
						langCode: "es",
						statusMessage: "*Tus estadísticas más recientes pueden tardar unos minutos en actualizarse",
						timePlayedPerMode: "Tiempo jugado por modo",
						totalWins: "Total de victorias ",
						lb: "Marcador",
						warzone: "Warzone",
						warzoneII: "Warzone II",
						warzone2: "Warzone 2",
						aqSoldierKills: "Bajas de soldados de Al Qatala",
						games: "MODO",
						viewWarzoneStats: "Ve tus estadísticas de Warzone",
						operatorKills: "Bajas de operador",
						aqKills: "Bajas de AQ",
						matches: "Partidas",
						previousWarzoneMatchStats: "Estadísticas de partidas anteriores de Warzone",
						finishesBySquadSize: "Posición final por tamaño de pelotón",
						squadSize: "Tamaño de pelotón",
						all: "Todo",
						quads: "Cuartetos",
						trios: "Tríos",
						duos: "Dúos",
						solos: "Individual",
						bestFinish: "Mejor posición",
						cashSpent: "Dinero gastado",
						killsDeathRatio: "Proporción bajas/muertes",
						top25: "25 mejores",
						top10: "10 mejores",
						top5: "5 mejores",
						placement: "Posición",
						placements: "Posiciones",
						highestKillsPerGameShort: "Más bajas/partida",
						personalBestShort: "Mejor resultado",
						gulag: "Gulag",
						highestScorePerGameShort: "Mejor puntuación/partida",
						furthestOperatorKill: "Baja de operador a más distancia",
						mostCashSpentPerGame: "Más dinero gastado/partida",
						aqSoldierKilled: "Bajas de soldados de AQ",
						weaponClasses: "Clases de armas",
						operators: "Operadores",
						lethality: "Letalidad",
						shotTracker: "Seguimiento de disparo",
						engagementRanges: "Rangos de participación",
						fieldUpgrade: "Mejoras de campo",
						killStreak: "Rachas de bajas",
						contractsCompleted: "Contratos completados",
						contracts: "Contratos",
						map: "Mapa",
						maps: "Mapas",
						viewLoadoutStats: "Ver estadísticas del armamento",
						recentMatches2Desc: "Mira las estadísticas de partidas recientes, modos y mapas",
						totalKills: "Total de bajas",
						battleRifles: "Fusiles de combate",
						marksmanRifles: "Fusiles tácticos",
						sniperRifles: "Fusiles de precisión",
						shotguns: "Escopetas",
						lmgs: "Ametralladoras ligeras",
						smgs: "Subfusiles",
						handGuns: "Armas cortas",
						melee: "Cuerpo a cuerpo",
						launchers: "Lanzadores",
						stats: "Estadísticas",
						assaultRifles: "Fusiles de asalto",
						apiError: "No se pudo cargar datos",
						noWeapons: "No hay antecedentes de armas",
						noMatchHistory: "No hay antecedentes de partidas",
						noModesHistory: "No hay antecedentes de modos",
						teamDeathmatch: "DPE",
						invasion: "Invasión",
						prisonerRescue: "Recates de prisioneros",
						charge: "Carga",
						cyberAttack: "Ciberataque",
						domination: "Dominio",
						searchAndDestroy: "Buscar y destruir",
						headquarters: "Headquarters",
						freeForAll: "Todos contra todos",
						gunfight: "Tiroteo",
						hardpoint: "Punto caliente",
						captureTheFlag: "Capturar la bandera",
						killConfirmed: "Baja confirmada",
						onslaught: "Arremetida",
						demolition: "Demolición",
						grind: "Trabajo duro",
						infected: "Infectado",
						gunGame: "Juego de armas",
						dropZone: "Zona de lanzamiento",
						ko: "Noqueado",
						teamDefender: "Defensor por equipos",
						groundWar: "Guerra terrestre",
						dmz: "DMZ",
						battleRoyale: "Battle Royale",
						br: "Battle Royale",
						resurgence: "Resurgimiento",
						plunder: "Botín",
						alMazrah: "Al Mazrah",
						elBagra: "El Bagra Fortress",
						embassy: "Embassy",
						zarqwaHydro: "Zarqwa Hydroelectric",
						taraq: "Taraq",
						sarrifBay: "Sarrif Bay",
						said: "Sa'id",
						santaSenaBorder: "Santa Seña Border Crossing",
						elAsilo: "El Asilo",
						mercadoLas: "Mercado Las Almas",
						santaSeña: "Santa Seña",
						guijarro: "Guijarro",
						crownRaceway: "Crown Raceway",
						breenberghHotel: "Breenbergh Hotel",
						farm18: "Farm 18",
						frag_grenade_mp: "GRANADA DE FRAGMENTACIÓN",
						at_mine_mp: "MINA DE PROXIMIDAD",
						bunkerbuster_round_mp: "CARGA PERFORADORA",
						molotov_mp: "CÓCTEL MOLOTOV",
						semtex_mp: "SEMTEX",
						c4_base: "C4",
						claymore_mp: "CLAYMORE",
						thermite_ap_mp: "TERMITA",
						throwingknife_mp: "CUCHILLO ARROJADIZO",
						assault_drone: "DRON BOMBA",
						cluster_spike: "MINA RACIMO",
						precision_airstrike: "ATAQUE AÉREO DE PRECISIÓN",
						cruise_predator: "MISIL DE CRUCERO",
						mortar_strike: "ATAQUE DE MORTERO",
						sentry_gun: "TORRETA CENTINELA",
						fuel_airstrike: "EAE",
						hover_jet: "CAZA VTOL",
						airdrop_escort: "HELICÓPTERO DE APOYO",
						wheelson: "WHEELSON",
						stealth_bomber: "BOMBARDERO SIGILOSO",
						chopper_gunner: "ARTILLERO DE HELICÓPTERO",
						gunship: "AVIÓN ARTILLADO",
						juggernaut: "JUGGERNAUT",
						open: "Abierta",
						close: "Cerrar",
						left: "Izquierda",
						right: "Derecha",
						back: "Volver",
						select: "Seleccionar",
						scroll: "Desplazamiento",
						details: "Detalles",
						motdTitle: "Mensaje del día",
						error: "Lamentamos las molestias, vuelve a intentarlo más tarde.",
						viewPatchNotes: "Ver las notas del parche",
						hardClose: "Volver a la sala",
						filter: "Establecer etapa",
						menu: {
							0: "store",
							1: "armamento",
							2: "operador",
							3: "barracones",
							4: "desafíos",
							5: "tienda",
							6: "SITIO WEB",
							cdl_news: "Noticias de la CDL",
							cdl_schedule: "Calendario de la CDL",
							cdl_standings: "Posiciones de la CDL"
						},
						loading: "cargando",
						latest: "Latest",
						motdTabs: {
							motd: "Más reciente",
							pn: "Notas de la actualización",
							cdlChannel: "Canal de la CDL"
						},
						cdlEntry: "Encuentra las noticias más recientes, las puntuaciones y la programación de Call of Duty League en el canal dedicado a la CDL.",
						crTitle: "Historial de combate",
						callOfDuty: "Call of Duty",
						multiplayer: "Multijugador",
						coop: "Cooperativo",
						ranked: "Partida igualada",
						timePlayed: "Tiempo jugado",
						gamesPlayed: "Partidas jugadas",
						kdRatio: "% B/M",
						topWeapon: "Mejor arma",
						last10Games: "Últimas 10 partidas",
						currentSeason: "Temporada actual",
						lifetime: "General",
						kills: "Bajas",
						dashboard: "Interfaz",
						entryTabs: {
							0: "Historial de combate",
							1: "marcadores"
						},
						dashboardTabs: {
							0: "Multijugador",
							1: "Cooperativo",
							2: "Partida igualada"
						},
						career: "Carrera",
						careerDesc: "Ver las estadísticas principales de tu carrera en el multijugador de Modern Warfare.",
						brCareerDesc: "Incluye las estadísticas de Resurgimiento hasta el 27 de abril de 2023.",
						resurgenceCareerDesc: "Estadísticas a partir del 27 de abril de 2023.",
						viewCareer: "Ver estadísticas de carrera",
						loadOut: "Armamento",
						topWeapons: "Mejores armas",
						topWeaponsDesc: "Ver estadísticas específicas de armas, clases de armas, equipamiento y rachas de bajas",
						topWeaponsDescOld: "Ver estadísticas específicas de armas, clases de armas, equipamiento, mejoras de campo y rachas de bajas",
						recentMatches: "Partidas recientes",
						recentMatchesModes: "Partidas, modos y mapas recientes",
						recentMatchesModesDesc: "Ver partidas recientes, así como estadísticas específicas de los modos y mapas.",
						lastMatch: "Última partida",
						winsByMode: "Victorias por modo de juego",
						killDeathRatio: "Proporción bajas/muertes",
						winLossRatio: "Proporción victorias/derrotas",
						primaries: "Principales",
						secondaries: "Secundarias",
						loadoutTabs: {
							0: "clases",
							1: "armas",
							2: "equipamiento",
							3: "Rachas de bajas"
						},
						recentsTab: {
							0: "Partidas recientes",
							1: "Modos y mapas"
						},
						killsTacUse: "Bajas/táctico",
						headshotPercent: "% TIROS A LA CABEZA",
						accuracy: "Precisión",
						stunnedKilled: "aturdido y eliminado",
						revealedKills: "Bajas reveladas",
						empdKills: "Bajas por PEM",
						uses: "Usos",
						matchesPlayed: "Partidas jugadas",
						scorePerMinute: "Puntos por minuto",
						deaths: "Muertes",
						wins: "Victorias",
						losses: "Derrotas",
						victoryDefeat: "Victorias y derrotas",
						winLossRation: "Proporción victorias/derrotas",
						personalBests: "Mejores resultados personales",
						highestKillStreak: "Mayor racha de bajas",
						highestKillsPerGame: "Mayor número de bajas/partida",
						highestScorePerGame: "Mejor puntuación/partida",
						killOrBeKilled: "Matar o morir",
						bootsOnGround: "Botas en el terreno",
						progression: "Progresión",
						atviName: "Nombre de ATVI",
						level: "Nivel",
						matchSummary: "Resumen de la partida",
						last25Matches: "Últimas 25 partidas",
						last10Matches: "Últimas 10 partidas",
						scoreboard: "Marcador",
						duration: "Duración",
						win: "victoria",
						loss: "derrota",
						damage: "Daño",
						player: "jugador",
						score: "Puntos",
						Allegiance: "Unión",
						coalition: "Coalición",
						modesMaps: "Modos y mapas",
						assists: "Asistencias",
						viewMaps: "Ver mapas",
						wlRatio: "Ratio V/D",
						allWeapons: "Todas las armas",
						equipment: "EQUIPAMIENTO",
						killstreaks: "RACHAS DE BAJAS",
						killstreak: "RACHAS DE BAJAS",
						gameModes: "Modos de juego",
						critical: "Daño crítico",
						tdm: "Duelo por equipos",
						dom: "Dominio",
						koth: "Punto caliente",
						control: "Control",
						conf: "Baja confirmada",
						sd: "Buscar y destruir",
						cyber: "Ataque cibernético",
						dd: "Demolición",
						hq: "Cuartel general",
						hstg: "Rescate de rehenes",
						dm: "Contra todos",
						bounty: "Recompensa",
						rugby: "Rugby",
						viewCodProfile: "Ver el perfil de COD",
						lbFilter: "Filtros",
						avgScorePerMin: "Punt./Minuto",
						avgScore: "Punt./Minuto",
						pageUp: "Página hacia arriba",
						pageDown: "Página hacia abajo",
						totalGames: "Partidas jugadas",
						highestKillstreak: "Mayor racha de bajas",
						avgKillsPerGame: "Promedio de muertes/​partida",
						totalLosses: "Derrotas",
						highestWinstreak: "Racha de victorias",
						headshotPerGame: "Tiros a la cabeza/​partida",
						avgDamage: "Media de daño/​partida",
						totalOneshotKills: "Bajas de un tiro",
						avgConfirms: "Media de confirmadas/​partida",
						avgCaptures: "Media de capturas/​partida",
						globalAvgScorePerMin: "Punt./Minuto",
						globalKills: "Bajas",
						globalScore: "Puntuación",
						globalWlRatio: "Prop. V/​D",
						globalHeadshots: "Tiros a la cabeza",
						gulagWins: "Victorias",
						gulagLosses: "Derrotas",
						gulagWinLossRatio: "Prop. V/​D",
						gulagKills: "Bajas",
						gulagJailorKills: "Muertes del Carcelero",
						cqWins: "Victorias de Misión del campeón",
						recency: "Recientes",
						unrankedMsgStart: "SIN CLASIFICACIÓN - Juega 5 partidas de",
						unrankedMsgEnd: "para obtener una clasificación en este marcador",
						name: "Nombre",
						undefined: "Indefinida",
						noWeaponClassHistory: "Clase de arma sin registros",
						friends: "Amigos",
						global: "Global",
						lockedTileMessage: "COMPLETA 5 PARTIDAS EN MULTIJUGADOR",
						lockedTileWZMessage: "COMPLETA 5 PARTIDAS DE WARZONE",
						specgru: "Specgru",
						kortac: "Kortac",
						friendSnapshot: "Instantánea de un amigo",
						friendSnapshotDisclaimer: "*Cambio de posición desde el último inicio de sesión",
						friend: "Amigo",
						goToTop: "Ir al principio",
						lossPrevented: "Derrota evitada",
						deployments: "Despliegues",
						exfilRatio: "Ratio éxito extracción",
						lockedTileDMZMessage: "COMPLETA 5 PARTIDAS DE DMZ",
						viewDMZStats: "Tus estadísticas principales de DMZ en Warzone 2.0.",
						eliminated: "Eliminado",
						successfulExfils: "Extracciones con éxito",
						highestExfilStreak: "Mayor racha de extracciones",
						highestAQKills: "Máximo de bajas de AQ/despliegue",
						deploymentsExtractedItems: "Despliegues y elementos extraídos",
						viewDeploymentsExtractedItems: "Tus despliegues recientes y elementos extraídos",
						cash: "Dinero",
						extractedItems: "Elementos extraídos",
						weapons: "Armas",
						dogTags: "Chapas",
						teammatesRevived: "Compañeros de equipo revividos",
						lootedContainers: "Contenedores saqueados",
						cashExtracted: "Dinero extraído",
						mostCashExtracted: "Máximo de dinero extraído/despliegue",
						highestDogTagExtracted: "Máximo de chapas extraídas",
						dogTagsExtracted: "Chapas extraídas",
						weaponsExtracted: "Armas extraídas",
						mostExtractedWeapons: "Armas más extraídas",
						weapon: "Arma",
						lethal: "Letal",
						tacticalEquipment: "Táctico",
						timesExtracted: "Número de extracciones",
						xp: "PX",
						last10Deployments: "Últimos 10 despliegues",
						noFriendsLeaderboard: "No hay amigos clasificados en este marcador",
						operatorHeadshotPercent: " % de tiros a la cabeza (operador)",
						lastDeployment: "Último despliegue",
						recentMatchesdmzDesc: "Ver estadísticas recientes de despliegues y extracciones",
						success: "Éxito"
					},
					spanishna: {
						langCode: "es",
						statusMessage: "*Por favor, espera 1-2 minutos para que tus estadísticas más recientes se actualicen",
						timePlayedPerMode: "Tiempo jugado por modo",
						totalWins: "Total de victorias",
						lb: "Marcador",
						warzone: "Warzone",
						warzone2: "Warzone 2",
						warzoneII: "Warzone II",
						aqSoldierKills: "Bajas de Al Qatala",
						games: "MODO",
						viewWarzoneStats: "Consulta tus estadísticas de carrera de Warzone",
						operatorKills: "Bajas de operador",
						aqKills: "Bajas de AQ",
						matches: "Partidas",
						previousWarzoneMatchStats: "Estadísticas de partidas anteriores de Warzone",
						finishesBySquadSize: "Posición final por tamaño de pelotón",
						squadSize: "Tamaño de pelotón",
						all: "Todo",
						quads: "Cuartetos",
						trios: "Tríos",
						duos: "Dúos",
						solos: "Individual",
						bestFinish: "Mejor posición",
						cashSpent: "Efectivo gastado",
						killsDeathRatio: "Proporción bajas/muertes",
						top25: "25 mejores",
						top10: "10 mejores",
						top5: "5 mejores",
						placement: "Posición",
						placements: "Posiciones",
						highestKillsPerGameShort: "Mayor número de bajas/partida",
						personalBestShort: "Mejores resultados personales",
						gulag: "Gulag",
						highestScorePerGameShort: "Mejor puntuación/partida",
						furthestOperatorKill: "Baja de operador a larga distancia",
						mostCashSpentPerGame: "Mayor cantidad de efectivo gastado / partida",
						aqSoldierKilled: "Bajas de soldados de AQ",
						weaponClasses: "Clase de arma",
						operators: "Operadores",
						lethality: "Letalidad",
						shotTracker: "Contador de tiros",
						engagementRanges: "Rangos de participación",
						fieldUpgrade: "Mejoras de campo",
						killStreak: "Rachas de bajas",
						contractsCompleted: "Contratos completados",
						contracts: "Contratos",
						map: "Mapa",
						maps: "Mapas",
						viewLoadoutStats: "VER ESTADÍSTICAS DE ARMAMENTO",
						recentMatches2Desc: "VER ESTADÍSTICAS DE PARTIDAS, MODOS Y MAPAS RECIENTES",
						totalKills: "Total de bajas",
						battleRifles: "Fusiles de combate",
						marksmanRifles: "Fusiles tácticos",
						sniperRifles: "Fusiles de precisión",
						shotguns: "Escopetas",
						lmgs: "Ametralladoras ligeras",
						smgs: "Subfusiles",
						handGuns: "Pistolas",
						melee: "Cuerpo a cuerpo",
						launchers: "Lanzacohetes",
						stats: "Estadísticas",
						assaultRifles: "Fusiles de asalto",
						apiError: "No se pudo cargar datos",
						noWeapons: "No hay historial de armas.",
						noMatchHistory: "No hay historial de partidas.",
						noModesHistory: "No hay antecedentes de modos",
						teamDeathmatch: "DPE",
						invasion: "Invasión",
						prisonerRescue: "Recates de prisioneros",
						charge: "Carga",
						cyberAttack: "Ciberataque",
						domination: "Dominio",
						searchAndDestroy: "Buscar y destruir",
						headquarters: "Headquarters",
						freeForAll: "Todos contra todos",
						gunfight: "Tiroteo",
						hardpoint: "Punto caliente",
						captureTheFlag: "Capturar la bandera",
						killConfirmed: "Baja confirmada",
						onslaught: "Arremetida",
						demolition: "Demolición",
						grind: "Trabajo duro",
						infected: "Infectado",
						gunGame: "Juego de armas",
						dropZone: "Zona de lanzamiento",
						ko: "Nocaut",
						teamDefender: "Defensor por equipos",
						groundWar: "Guerra terrestre",
						dmz: "DMZ",
						battleRoyale: "Battle Royale",
						br: "Battle Royale",
						resurgence: "Resurgimiento",
						plunder: "Saqueo",
						alMazrah: "Al Mazrah",
						elBagra: "El Bagra Fortress",
						embassy: "Embassy",
						zarqwaHydro: "Zarqwa Hydroelectric",
						taraq: "Taraq",
						sarrifBay: "Sarrif Bay",
						said: "Sa'id",
						santaSenaBorder: "Santa Seña Border Crossing",
						elAsilo: "El Asilo",
						mercadoLas: "Mercado Las Almas",
						santaSeña: "Santa Seña",
						guijarro: "Guijarro",
						crownRaceway: "Crown Raceway",
						breenberghHotel: "Breenbergh Hotel",
						farm18: "Farm 18",
						frag_grenade_mp: "GRANADA DE FRAGMENTACIÓN",
						at_mine_mp: "MINA DE PROXIMIDAD",
						bunkerbuster_round_mp: "CARGA PERFORADORA",
						molotov_mp: "CÓCTEL MOLOTOV",
						semtex_mp: "SEMTEX",
						c4_base: "C4",
						claymore_mp: "CLAYMORE",
						thermite_ap_mp: "TERMITA",
						throwingknife_mp: "CUCHILLO ARROJADIZO",
						assault_drone: "DRON BOMBA",
						cluster_spike: "MINA RACIMO",
						precision_airstrike: "ATAQUE AÉREO DE PRECISIÓN",
						cruise_predator: "MISIL DE CRUCERO",
						mortar_strike: "ATAQUE DE MORTERO",
						sentry_gun: "TORRETA CENTINELA",
						fuel_airstrike: "EAE",
						hover_jet: "CAZA VTOL",
						airdrop_escort: "HELICÓPTERO DE APOYO",
						wheelson: "WHEELSON",
						stealth_bomber: "BOMBARDERO SIGILOSO",
						chopper_gunner: "ARTILLERO DE HELICÓPTERO",
						gunship: "AVIÓN ARTILLADO",
						juggernaut: "JUGGERNAUT",
						open: "Abierta",
						close: "Cerrar",
						left: "Izquierda",
						right: "Derecha",
						back: "Volver",
						select: "Seleccionar",
						scroll: "Desplazamiento",
						details: "Detalles",
						motdTitle: "Mensaje del día",
						error: "Lamentamos las molestias, vuelve a intentarlo más tarde.",
						viewPatchNotes: "Ver las notas del parche",
						hardClose: "Volver a la sala",
						filter: "Establecer etapa",
						menu: {
							0: "store",
							1: "armamento",
							2: "operador",
							3: "barracones",
							4: "desafíos",
							5: "tienda",
							6: "SITIO WEB",
							cdl_news: "Noticias de la CDL",
							cdl_schedule: "Calendario de la CDL",
							cdl_standings: "Posiciones de la CDL"
						},
						loading: "cargando",
						latest: "Latest",
						motdTabs: {
							motd: "Más reciente",
							pn: "Notas de la actualización",
							cdlChannel: "Canal de la CDL"
						},
						cdlEntry: "Encuentra las noticias más recientes, las puntuaciones y la programación de Call of Duty League en el canal dedicado a la CDL.",
						crTitle: "Historial de combate",
						callOfDuty: "Call of Duty",
						multiplayer: "Multijugador",
						coop: "Cooperativo",
						ranked: "Partida igualada",
						timePlayed: "Tiempo jugado",
						gamesPlayed: "Partidas jugadas",
						kdRatio: "Ratio B/M",
						topWeapon: "Mejor Arma",
						last10Games: "Últimas 10 partidas",
						currentSeason: "Temporada actual",
						lifetime: "Totales",
						kills: "Bajas",
						dashboard: "Interfaz",
						entryTabs: {
							0: "Historial de combate",
							1: "marcador"
						},
						dashboardTabs: {
							0: "Multijugador",
							1: "Cooperativo",
							2: "Partida igualada"
						},
						career: "Carrera",
						careerDesc: "Ver las estadísticas principales de tu carrera en el modo multijugador de Modern Warfare.",
						brCareerDesc: "Incluye las estadísticas de Resurgimiento hasta el 27 de abril de 2023.",
						resurgenceCareerDesc: "Estadísticas a partir del 27 de abril 2023",
						viewCareer: "Ver estadísticas de carrera",
						loadOut: "Armamento",
						topWeapons: "Mejor arma",
						topWeaponsDesc: "Ver estadísticas específicas de armas, clases de equipamiento y rachas de bajas.",
						topWeaponsDescOld: "Ver estadísticas específicas de armas, clases de equipamiento, mejoras de campo y rachas de bajas.",
						recentMatches: "Partidas recientes",
						recentMatchesModes: "Partidas, modos y mapas recientes",
						recentMatchesModesDesc: "Ver partidas recientes, así como estadísticas específicas de los modos y mapas.",
						lastMatch: "Última partida",
						winsByMode: "Victorias por modo de juego",
						killDeathRatio: "Ratio bajas/muertes",
						winLossRatio: "Ratio victorias/derrotas",
						primaries: "Principal",
						secondaries: "Secundarias",
						loadoutTabs: {
							0: "clases",
							1: "armas",
							2: "equipamiento",
							3: "Rachas de bajas"
						},
						recentsTab: {
							0: "Partidas recientes",
							1: "Modos y mapas"
						},
						killsTacUse: "Bajas/táctico",
						headshotPercent: "% DE TIROS A LA CABEZA",
						accuracy: "Precisión",
						stunnedKilled: "aturdido y eliminado",
						revealedKills: "Bajas reveladas",
						empdKills: "Bajas por PEM",
						uses: "Usos",
						matchesPlayed: "Partidas jugadas",
						scorePerMinute: "Puntos por minuto",
						deaths: "Muertes",
						wins: "Victorias",
						losses: "Derrotas",
						victoryDefeat: "Victorias y derrotas",
						winLossRation: "Ratio victorias/derrotas",
						personalBests: "Mejores resultados personales",
						highestKillStreak: "Mayor racha de bajas",
						highestKillsPerGame: "Mayor número de bajas/partida",
						highestScorePerGame: "Mayor puntuación/partida",
						killOrBeKilled: "Matar o morir",
						bootsOnGround: "Botas en el terreno",
						progression: "Progresión",
						atviName: "Nombre de ATVI",
						level: "Nivel",
						matchSummary: "Resumen de la partida",
						last25Matches: "Últimas 25 partidas",
						last10Matches: "Últimas 10 partidas",
						scoreboard: "Marcador",
						duration: "Duración",
						win: "victoria",
						loss: "derrota",
						damage: "Daño",
						player: "jugador",
						score: "Puntos",
						Allegiance: "Unión",
						coalition: "Coalición",
						modesMaps: "Modos y mapas",
						assists: "Asistencias",
						viewMaps: "Ver mapas",
						wlRatio: "Ratio V/D",
						allWeapons: "Todas las armas",
						equipment: "EQUIPAMIENTO",
						killstreaks: "RACHAS DE BAJAS",
						killstreak: "RACHAS DE BAJAS",
						gameModes: "Modos de juego",
						critical: "Daño crítico",
						tdm: "Duelo por equipos",
						dom: "Dominio",
						koth: "Punto caliente",
						control: "Control",
						conf: "Baja confirmada",
						sd: "Buscar y destruir",
						cyber: "Ciberataque",
						dd: "Demolición",
						hq: "Headquarters",
						hstg: "Rescate de rehenes",
						dm: "Contra todos",
						bounty: "Recompensa",
						rugby: "Rugby",
						viewCodProfile: "Ver el perfil de COD",
						lbFilter: "Filtros",
						avgScorePerMin: "Punt./Minuto",
						avgScore: "Punt./Minuto",
						pageUp: "Página hacia arriba",
						pageDown: "Página hacia abajo",
						totalGames: "Partidas jugadas",
						highestKillstreak: "Mayor racha de bajas",
						avgKillsPerGame: "Promedio de muertes/​partida",
						totalLosses: "Derrotas",
						highestWinstreak: "Racha de victorias",
						headshotPerGame: "Tiros a la cabeza/​partida",
						avgDamage: "Media de daño / partida",
						totalOneshotKills: "Bajas de un tiro",
						avgConfirms: "Media de confirmadas / partida",
						avgCaptures: "Media de capturas / partida",
						globalAvgScorePerMin: "Punt./Minuto",
						globalKills: "Bajas",
						globalScore: "Puntuación",
						globalWlRatio: "Ratio V/​D",
						globalHeadshots: "Tiros a la cabeza",
						gulagWins: "Victorias",
						gulagLosses: "Derrotas",
						gulagWinLossRatio: "Ratio V/​D",
						gulagKills: "Bajas",
						gulagJailorKills: "Bajas de carcelero",
						cqWins: "Victorias de Misión del campeón",
						recency: "Recientes",
						unrankedMsgStart: "SIN CLASIFICACIÓN - Juega 5 partidas de",
						unrankedMsgEnd: "para clasificar en este marcador",
						name: "Nombre",
						undefined: "Indefinida",
						noWeaponClassHistory: "Clase de arma sin registros",
						ruleset: "Reglas",
						friends: "Amigos",
						global: "Global",
						lockedTileMessage: "COMPLETA 5 PARTIDAS MULTIJUGADOR",
						lockedTileWZMessage: "COMPLETA 5 PARTIDAS DE WARZONE",
						specgru: "Specgru",
						kortac: "Kortac",
						friendSnapshot: "Instantánea de un amigo",
						friendSnapshotDisclaimer: "*Cambio de posición desde el último inicio de sesión",
						friend: "Amigo",
						goToTop: "Ir arriba",
						lossPrevented: "Derrota evitada",
						deployments: "Despliegues",
						exfilRatio: "Ratio éxito extracción",
						lockedTileDMZMessage: "COMPLETA 5 PARTIDAS DE DMZ",
						viewDMZStats: "Tus estadísticas principales de DMZ en Warzone 2.0.",
						eliminated: "Eliminado",
						successfulExfils: "Extracciones con éxito",
						highestExfilStreak: "Mayor racha de extracciones",
						highestAQKills: "Máximo de bajas de AQ/despliegue",
						deploymentsExtractedItems: "Despliegues y elementos extraídos",
						viewDeploymentsExtractedItems: "Tus despliegues recientes y elementos extraídos.",
						cash: "Dinero",
						extractedItems: "Elementos extraídos",
						weapons: "Armas",
						dogTags: "Chapas",
						teammatesRevived: "Compañeros de equipo revividos",
						lootedContainers: "Contenedores saqueados",
						cashExtracted: "Dinero extraído",
						mostCashExtracted: "Máximo de dinero extraído/despliegue",
						highestDogTagExtracted: "Máximo de chapas extraídas",
						dogTagsExtracted: "Chapas extraídas",
						weaponsExtracted: "Armas extraídas",
						mostExtractedWeapons: "Armas más extraídas",
						weapon: "Arma",
						lethal: "Letal",
						tacticalEquipment: "Táctico",
						timesExtracted: "Número de extracciones",
						xp: "PX",
						last10Deployments: "Últimos 10 despliegues",
						noFriendsLeaderboard: "No hay amistades clasificadas en este marcador",
						operatorHeadshotPercent: " % de tiros a la cabeza de operadores",
						lastDeployment: "Último despliegue",
						recentMatchesdmzDesc: "Ver estadísticas de despliegues recientes y extracciones",
						success: "Éxito"
					},
					polish_full: {
						langCode: "pl",
						timePlayedPerMode: "",
						statusMessage: "*Potrzebujemy 1-2 minut na przetworzenie statystyk z ostatnich meczów.",
						totalWins: "Łączna liczba zwycięstw ",
						lb: "Ranking",
						warzone: "Warzone",
						warzoneII: "Warzone II",
						warzone2: "Warzone 2",
						aqSoldierKills: "Zabici żołnierze Al-Katali",
						games: "GRY",
						viewWarzoneStats: "Wyświetl podstawowe statystyki kariery w Warzone",
						operatorKills: "Zabici operatorzy",
						aqKills: "Zabici żołnierze Al-Katali",
						matches: "Mecze",
						previousWarzoneMatchStats: "Statystyki z wcześniejszych meczów w Warzone",
						finishesBySquadSize: "Miejsca końcowe z uwzględnieniem wielkości oddziału",
						squadSize: "Wielkość zespołu",
						all: "wszyscy",
						quads: "Czwórki",
						trios: "Trójki",
						duos: "Dwójki",
						solos: "Solo",
						bestFinish: "Najlepsze zakończenie",
						cashSpent: "Wydana kasa",
						killsDeathRatio: "Współczynnik zabójstw / śmierci",
						top25: "Najlepsza 25",
						top10: "Najlepsza 10",
						top5: "Najlepsza 5",
						placement: "Miejsce",
						placements: "Miejsca",
						highestKillsPerGameShort: "Najlepsza seria zabójstw/gra",
						personalBestShort: "Osobisty rekord",
						gulag: "Gułag",
						highestScorePerGameShort: "Najlepszy wynik/gra",
						furthestOperatorKill: "Zabójstwo operatora z największej odległości",
						mostCashSpentPerGame: "Najwięcej wydanej w grze kasy",
						aqSoldierKilled: "Zabici żołnierze Al-Katali",
						weaponClasses: "Klasy broni",
						operators: "Operatorzy",
						lethality: "Śmiertelność",
						shotTracker: "Śledzenie strzałów",
						engagementRanges: "Zasięg działania",
						fieldUpgrade: "Ulepszenie polowe",
						killStreak: "Nagroda za serię",
						contractsCompleted: "Wykonane kontrakty",
						contracts: "Kontrakty",
						map: "Mapę",
						maps: "Mapy",
						viewLoadoutStats: "POKAŻ STATYSTYKI WYPOSAŻENIA",
						recentMatches2Desc: "POKAŻ STATYSTYKI OSTATNICH GIER, TRYBÓW I MAP",
						totalKills: "Zabójstwa",
						battleRifles: "Karabiny bojowe",
						marksmanRifles: "Karabiny wyborowe",
						sniperRifles: "Karabiny snajperskie",
						shotguns: "Strzelby",
						lmgs: "RKM-y",
						smgs: "PM-y",
						handGuns: "Broń krótka",
						melee: "Broń do walki wręcz",
						launchers: "Wyrzutnie",
						stats: "Statystyki",
						assaultRifles: "Karabiny szturmowe",
						apiError: "Nie można załadować danych",
						noWeapons: "Brak historii broni",
						noMatchHistory: "Brak historii meczów",
						noModesHistory: "Brak historii trybów",
						teamDeathmatch: "DMD",
						invasion: "Inwazja",
						prisonerRescue: "Ratunek więźnia",
						charge: "Wybuchowa wojna naziemna",
						cyberAttack: "Cyberatak",
						domination: "Dominacja",
						searchAndDestroy: "Znajdź i zniszcz",
						headquarters: "Sztab",
						freeForAll: "Deathmatch",
						gunfight: "Strzelanina",
						hardpoint: "Umocniony punkt",
						captureTheFlag: "Zdobądź flagę",
						killConfirmed: "Zabójstwo potwierdzone",
						onslaught: "Ofensywa",
						demolition: "Demolka",
						grind: "Kierat",
						infected: "Zarażony",
						gunGame: "Zabawa bronią",
						dropZone: "Strefa zrzutu",
						ko: "Nokaut",
						teamDefender: "Obrońca drużyny",
						groundWar: "Wojna naziemna",
						dmz: "DMZ",
						battleRoyale: "Battle Royale",
						br: "Battle Royale",
						resurgence: "Odnowa",
						plunder: "Grabież",
						alMazrah: "Al Mazrah",
						elBagra: "El Bagra Fortress",
						embassy: "Embassy",
						zarqwaHydro: "Zarqwa Hydroelectric",
						taraq: "Taraq",
						sarrifBay: "Sarrif Bay",
						said: "Sa'id",
						santaSenaBorder: "Santa Seña Border Crossing",
						elAsilo: "El Asilo",
						mercadoLas: "Mercado Las Almas",
						santaSeña: "Santa Seña",
						guijarro: "Guijarro",
						crownRaceway: "Crown Raceway",
						breenberghHotel: "Breenbergh Hotel",
						farm18: "Farm 18",
						frag_grenade_mp: "GRANAT ODŁAMKOWY",
						at_mine_mp: "MINA ZBLIŻENIOWA",
						bunkerbuster_round_mp: "ŁADUNEK PENETRUJĄCY",
						molotov_mp: "KOKTAJL MOŁOTOWA",
						semtex_mp: "SEMTEKS",
						c4_base: "C4",
						claymore_mp: "CLAYMORE",
						thermite_ap_mp: "TERMIT",
						throwingknife_mp: "NÓŻ DO RZUCANIA",
						assault_drone: "DRON Z BOMBĄ",
						cluster_spike: "MINA KASETOWA",
						precision_airstrike: "NALOT PRECYZYJNY",
						cruise_predator: "POCISK MANEWRUJĄCY",
						mortar_strike: "OSTRZAŁ MOŹDZIERZOWY",
						sentry_gun: "DZIAŁKO STRAŻNICZE",
						fuel_airstrike: "SBP",
						hover_jet: "ODRZUTOWIEC VTOL",
						airdrop_escort: "ŚMIGŁOWIEC PATROLOWY",
						wheelson: "WHEELSON-HS",
						stealth_bomber: "NIEWIDZIALNY BOMBOWIEC",
						chopper_gunner: "STRZELEC ŚMIGŁOWCA",
						gunship: "SAMOLOT BOJOWY",
						juggernaut: "KOLOS",
						open: "Otwórz",
						close: "Zamknij",
						left: "Lewo",
						right: "Prawo",
						back: "Wstecz",
						select: "Wybierz",
						scroll: "przewiń",
						details: "Szczegóły",
						motdTitle: "Wiadomość dnia",
						error: "Przepraszamy za niedogodności. Spróbuj ponownie później.",
						viewPatchNotes: "Szczegóły",
						hardClose: "Wróć do lobby",
						filter: "Wybierz etap",
						menu: {
							0: "sklep",
							1: "uzbrojenie",
							2: "operatora",
							3: "koszary",
							4: "wyzwania",
							5: "sklep",
							6: "Strona CDL",
							cdl_news: "Aktualności CDL",
							cdl_schedule: "Harmonogram CDL",
							cdl_standings: "Klasyfikacja CDL"
						},
						loading: "wczytywanie",
						motdTabs: {
							motd: "Najnowsze",
							pn: "Aktualizacje",
							cdlChannel: "Kanał CDL"
						},
						cdlEntry: "Najświeższe informacje, wyniki i harmonogram Call of Duty League znajdziesz na dedykowanym kanale CDL.",
						gameModes: "Tryby gry",
						critical: "Obrażenia krytyczne",
						crTitle: "Przebieg kariery",
						callOfDuty: "Call of Duty",
						multiplayer: "Tryb wieloosobowy",
						coop: "Kooperacja",
						ranked: "Tryb rankingowy",
						timePlayed: "Czas gry",
						gamesPlayed: "Rozegrane gry",
						kdRatio: "Wsp. Z/Ś",
						topWeapon: "Najlepsza broń",
						last10Games: "Ostatnie 10 gier",
						currentSeason: "Obecny sezon",
						lifetime: "Ogólne",
						kills: "Zabójstwa",
						dashboard: "Panel",
						entryTabs: {
							0: "Przebieg kariery",
							1: "rankingi"
						},
						dashboardTabs: {
							0: "Tryb wieloosobowy",
							1: "Kooperacja",
							2: "Tryb rankingowy"
						},
						career: "Kariera",
						careerDesc: "Zobacz najważniejsze statystyki kariery w trybie wieloosobowym Modern Warfare",
						brCareerDesc: "Zawiera statystyki Odnowy do 27 kwietnia 2023.",
						resurgenceCareerDesc: "Statystyki od 27 kwietnia 2023.",
						viewCareer: "Zobacz statystyki kariery",
						loadOut: "Uzbrojenie",
						topWeapons: "Najlepsze bronie",
						topWeaponsDesc: "Zobacz statystyki dotyczące broni, klas broni, wyposażenia, ulepszeń polowych i nagród za serię",
						recentMatches: "Niedawno rozegrane mecze",
						recentMatchesModes: "Ostatnie gry, tryby i mapy",
						recentMatchesModesDesc: "Zobacz statystyki dotyczące ostatnich gier, a także trybów i map",
						lastMatch: "Ostatnia gra",
						winsByMode: "Zwycięstwa według trybu gry",
						killDeathRatio: "Wsp. Z/Ś",
						winLossRatio: "Współ. W/P",
						primaries: "broń główna",
						secondaries: "broń dodatkowa",
						loadoutTabs: {
							0: "klasy",
							1: "broń",
							2: "wyposażenie",
							3: "nagrody za serię zabójstw"
						},
						recentsTab: {
							0: "Ostatnie gry",
							1: "Tryby i mapy"
						},
						killsTacUse: "Zabójstwa / wykorzystane taktyki",
						headshotPercent: "% zab. strzałem w głowę",
						accuracy: "Celność",
						stunnedKilled: "Ogłuszeni i zabici",
						revealedKills: "Ujawnione zabójstwa",
						empdKills: "Zabójstwa za pomocą impulsu EM",
						uses: "Użycia",
						matchesPlayed: "Rozegrane gry",
						scorePerMinute: "Punkty na minutę",
						deaths: "Śmierci",
						wins: "Wygrane",
						losses: "Porażki",
						victoryDefeat: "WYGRANA I PORAŻKA",
						winLossRation: "Współ. W/P",
						personalBests: "Osobiste rekordy",
						highestKillStreak: "Najlepsza seria zabójstw",
						highestKillsPerGame: "Najwięcej zabójstw/gra",
						highestScorePerGame: "Najlepszy wynik/gra",
						killOrBeKilled: "Zabij lub giń",
						bootsOnGround: "W TERENIE",
						progression: "Postępy",
						atviName: "Nazwa quada",
						level: "Poziom",
						matchSummary: "Podsumowanie meczu",
						last25Matches: "Ostatnie 25 gier",
						last10Matches: "Ostatnie 10 gier",
						scoreboard: "Tabela wyników",
						duration: "Czas trwania",
						win: "wygrana",
						loss: "przegrana",
						damage: "Obrażenia",
						player: "gracz",
						score: "Wynik",
						Allegiance: "Wierni",
						coalition: "Koalicja",
						modesMaps: "Tryby i mapy",
						assists: "Asysty",
						viewMaps: "Zobacz mapy",
						wlRatio: "Współ. W/P",
						allWeapons: "Wszystkie bronie",
						equipment: "WYPOSAŻENIE",
						killstreaks: "NAGRODY ZA SERIE",
						killstreak: "NAGRODY ZA SERIE",
						tdm: "Deathmatch Drużynowy",
						dom: "Dominacja",
						koth: "Umocniony punkt",
						control: "Kontrola",
						conf: "Zabójstwo Potwierdzone",
						sd: "Znajdź i zniszcz",
						cyber: "Cyberatak",
						dd: "Demolka",
						hq: "Sztab",
						hstg: "Ratunek więźnia",
						dm: "Free-For-All",
						bounty: "Kontrakt",
						rugby: "Rugby",
						viewCodProfile: "Zobacz profil COD",
						lbFilter: "Filtruj",
						avgScorePerMin: "Wynik/Min",
						avgScore: "Wynik/Min",
						pageUp: "W górę",
						pageDown: "W dół",
						totalGames: "Rozegrane gry",
						highestKillstreak: "Najdłuższa seria zabójstw",
						avgKillsPerGame: "Śr. zabójstw/gra",
						totalLosses: "Porażki",
						highestWinstreak: "Seria zwycięstw",
						headshotPerGame: "Trafienia w głowę/gra",
						avgDamage: "Śr. obrażeń/gra",
						totalOneshotKills: "1 Strzał, 1 trup",
						avgConfirms: "Śr. potwierdzeń/gra",
						avgCaptures: "Śr. zdobyć/gra",
						globalAvgScorePerMin: "Wynik/Min",
						globalKills: "Zabójstwa",
						globalScore: "wynik",
						globalWlRatio: "Współczynnik Z/​P",
						globalHeadshots: "Trafienia w głowę",
						gulagWins: "Zwycięstwa",
						gulagLosses: "Porażki",
						gulagWinLossRatio: "Współczynnik Z/​P",
						gulagKills: "Zabójstwa",
						gulagJailorKills: "Zabici strażnicy",
						cqWins: "Wykonane zadania czempiona",
						recency: "Okres",
						unrankedMsgStart: "BEZ RANGI – Rozegraj 5 meczów w trybie",
						unrankedMsgEnd: "i dostań się do tego rankingu.",
						name: "GRACZ",
						undefined: "niezdefiniowane",
						noWeaponClassHistory: "Brak historii klasy broni",
						friends: "znajomi",
						global: "Globalne",
						lockedTileMessage: "Ukończ 5 gier, aby odblokować",
						lockedTileWZMessage: "Ukończ 5 gier, aby odblokować",
						specgru: "Specgru",
						kortac: "Kortac",
						friendSnapshot: "Ranking znajomych",
						friendSnapshotDisclaimer: "*Zmiana miejsca od ostatniego logowania",
						friend: "znajomych",
						goToTop: "Przejdź do góry",
						lossPrevented: "Przegrana anulowana",
						deployments: "Wyprawy",
						exfilRatio: "Współ. udanych eksfiltracji",
						lockedTileDMZMessage: "Ukończ 5 gier, by odblokować",
						viewDMZStats: "Dostęp w sezonie 2.5",
						eliminated: "Wyeliminowano",
						successfulExfils: "Udane eksfiltracje",
						highestExfilStreak: "Najdłuższa seria eksfiltracji",
						highestAQKills: "Najwięcej zabójstw AK",
						deploymentsExtractedItems: "Wyprawy i ewakuowane przedmioty",
						viewDeploymentsExtractedItems: "Zobacz ostatnie wyprawy i ewakuowane przedmioty",
						cash: "Kasa",
						extractedItems: "Ewakuowane przedmioty",
						weapons: "Broń",
						dogTags: "Nieśmiertelniki",
						teammatesRevived: "Reanimowani sojusznicy",
						lootedContainers: "Splądrowane pojemniki",
						cashExtracted: "Ewakuowana kasa",
						mostCashExtracted: "Najwięcej ewakuowanej kasy",
						highestDogTagExtracted: "Najwięcej ewakuowanych nieśmiertelników",
						dogTagsExtracted: "Ewakuowane nieśmiertelniki",
						weaponsExtracted: "Ewakuowane bronie",
						mostExtractedWeapons: "Najczęściej ewakuowane bronie",
						weapon: "Broń",
						lethal: "Ofensywne",
						tacticalEquipment: "Taktyczne",
						timesExtracted: "Liczba ewakuacji",
						xp: "PD",
						last10Deployments: "Ostatnie 10 wypraw",
						noFriendsLeaderboard: "Brak znajomych w tym rankingu",
						operatorHeadshotPercent: " Trafienia w głowę operatora (%)",
						lastDeployment: "Ostatnia wyprawa",
						recentMatchesdmzDesc: "Zobacz statystyki ostatnich wypraw i ekstrakcji",
						success: "Sukces"
					},
					portuguese: {
						langCode: "pt",
						statusMessage: "*Please Allow 1-2 Minutes For Your Most Recent Match Stats To Process",
						timePlayedPerMode: "Tempo jogado por modo",
						totalWins: "Total de Vitórias ",
						lb: "Placar de líderes",
						warzone: "Warzone",
						warzoneII: "Warzone II",
						warzone2: "Warzone 2",
						aqSoldierKills: "Soldados da AQ abatidos",
						games: "JOGOS",
						viewWarzoneStats: "Veja suas estatísticas de carreira no Warzone",
						operatorKills: "Mortes por Operador",
						aqKills: "Mortes por AQ",
						matches: "Partidas",
						previousWarzoneMatchStats: "Estatísticas prévias de partidas no Warzone",
						finishesBySquadSize: "Finalizações por tamanho de esquadrão",
						squadSize: "Tamanho do Esquadrão",
						all: "Todos",
						quads: "Quartetos",
						trios: "Trios",
						duos: "Duplas",
						solos: "Solo",
						bestFinish: "Melhor Finalização",
						cashSpent: "Dinheiro Gasto",
						killsDeathRatio: "Relação Baixas/Mortes",
						top25: "Top 25",
						top10: "Top 10",
						top5: "Top 5",
						placement: "Posição",
						placements: "Colocações",
						highestKillsPerGameShort: "Mais Baixas/Jogo",
						personalBestShort: "Recordes Pessoais",
						gulag: "Gulag",
						highestScorePerGameShort: "Maior Pontuação/Jogo",
						furthestOperatorKill: "Morte mais distante por Operador",
						mostCashSpentPerGame: "Maior quantia de Dinheiro gasto/jogo",
						aqSoldierKilled: "Soldados AQ Mortos",
						weaponClasses: "Classes de Armas",
						operators: "Operadores",
						lethality: "Letalidade",
						shotTracker: "Rastreador de Tiros",
						engagementRanges: "Intervalos de Confrontos",
						fieldUpgrade: "Melhoria de Campo",
						killStreak: "Séries de Baixas",
						contractsCompleted: "Contratos concluídos",
						contracts: "Contratos",
						map: "Mapa",
						maps: "Mapas",
						viewLoadoutStats: "Ver estatísticas do armamento",
						recentMatches2Desc: "Ver partidas recentes, estatísticas de modos e mapas",
						totalKills: "Total de baixas",
						battleRifles: "Fuzis de batalha",
						marksmanRifles: "Fuzis de Atirador",
						sniperRifles: "Fuzis de precisão",
						shotguns: "Escopetas",
						lmgs: "MLS",
						smgs: "SMTS",
						handGuns: "Pistolas",
						melee: "Corpo a corpo",
						launchers: "Lançadores",
						stats: "Estatísticas",
						assaultRifles: "Fuzis de assalto",
						apiError: "Não foi possível carregar os dados",
						noWeapons: "Sem histórico de armas",
						noMatchHistory: "Sem histórico de partidas",
						noModesHistory: "Sem histórico de modos",
						teamDeathmatch: "MME",
						invasion: "Invasão",
						prisonerRescue: "Resgate de prisioneiro",
						charge: "Carga",
						cyberAttack: "Ataque Cibernético",
						domination: "Dominação",
						searchAndDestroy: "Localizar e Destruir",
						headquarters: "Quartel-general",
						freeForAll: "Contra Todos",
						gunfight: "Atirador",
						hardpoint: "Zona de Conflito",
						captureTheFlag: "Capture a bandeira",
						killConfirmed: "Baixa Confirmada",
						bounty: "Caçada",
						onslaught: "Chacina",
						demolition: "Demolição",
						grind: "Radical",
						infected: "Infectado",
						gunGame: "Jogo de Armas",
						dropZone: "Zona de Entrega",
						ko: "Nocaute",
						teamDefender: "Defensor da Equipe",
						groundWar: "Guerra Terrestre",
						dmz: "DMZ",
						battleRoyale: "Battle Royale",
						br: "Battle Royale",
						resurgence: "Ressurgência",
						plunder: "Saque",
						alMazrah: "Al Mazrah",
						elBagra: "Forte de Al Bagra",
						embassy: "Embaixada",
						zarqwaHydro: "Hidrelétrica Zarqwa",
						taraq: "Taraq",
						sarrifBay: "Baía de Sarrif",
						said: "Sa'id",
						santaSenaBorder: "Cruzamento de Fronteira Santa Seña",
						elAsilo: "El Asilo",
						mercadoLas: "Mercado Las AlmaS",
						santaSeña: "Santa Seña",
						guijarro: "Guijarro",
						crownRaceway: "Crown Raceway",
						breenberghHotel: "Hotel Breenbergh",
						farm18: "Farm 18",
						frag_grenade_mp: "GRANADA DE FRAGMENTAÇÃO",
						at_mine_mp: "MINA DE PROXIMIDADE",
						bunkerbuster_round_mp: "BOMBA ANTIBUNKER",
						molotov_mp: "COQUETEL MOLOTOV",
						semtex_mp: "SEMTEX",
						c4_base: "C4",
						claymore_mp: "CLAYMORE",
						thermite_ap_mp: "TERMITA",
						throwingknife_mp: "FACA DE ARREMESSO",
						assault_drone: "DRONE BOMBA",
						cluster_spike: "MINA DE DISPERSÃO",
						precision_airstrike: "ATAQUE AÉREO DE PRECISÃO",
						cruise_predator: "MÍSSIL CRUZADOR",
						mortar_strike: "ATAQUE DE MORTEIRO",
						sentry_gun: "SENTINELA",
						fuel_airstrike: "B.A.E.",
						hover_jet: "JATO VTOL",
						airdrop_escort: "HELICÓPTERO DE PATRULHA",
						wheelson: "WHEELSON",
						stealth_bomber: "BOMBARDEIRO FURTIVO",
						chopper_gunner: "ATIRADOR DE HELICÓPTERO",
						gunship: "AVIÃO-ARTILHADO",
						juggernaut: "JUGGERNAUT",
						open: "Aberto",
						close: "Fechar",
						left: "Esquerda",
						right: "Direita",
						back: "Voltar",
						select: "Selecionar",
						scroll: "Deslizar",
						details: "Detalhes",
						motdTitle: "Mensagem do dia",
						error: "Sentimos muito pela inconveniência, tente novamente mais tarde.",
						viewPatchNotes: "Ver notas de patch",
						hardClose: "Voltar ao Saguão",
						filter: "Definir fase",
						menu: {
							0: "store",
							1: "armamento",
							2: "operador",
							3: "quartel",
							4: "desafios",
							5: "loja",
							6: "Site CDL",
							cdl_news: "Notícias CDL",
							cdl_schedule: "Agenda CDL",
							cdl_standings: "Placar CDL"
						},
						loading: "Carregando",
						motdTabs: {
							motd: "Mais recente",
							pn: "Notas de atualização",
							cdlChannel: "Canal CDL"
						},
						cdlEntry: "Encontre as últimas notícias, pontuações e cronograma para a Call of Duty League no canal dedicado ao CDL.",
						crTitle: "Histórico de Combate",
						callOfDuty: "callofduty",
						multiplayer: "Multijogador",
						coop: "Cooperativo",
						ranked: "Ranqueado",
						timePlayed: "Tempo",
						gamesPlayed: "Partidas",
						kdRatio: "B/M",
						topWeapon: "Melhor Arma",
						last10Games: "Últimos 10 jogos",
						currentSeason: "Temporada Atual",
						lifetime: "Total",
						kills: "Baixas",
						dashboard: "Painel",
						entryTabs: {
							0: "Histórico de Combate",
							1: "Placares de líderes"
						},
						dashboardTabs: {
							0: "Multijogador",
							1: "Cooperativo",
							2: "Ranqueado"
						},
						career: "Carreira",
						careerDesc: "Veja suas principais estatísticas da carreira Multijogador no Modern Warfare",
						brCareerDesc: "Inclui as estatísticas do Resurgence até 27 de abril de 2023",
						resurgenceCareerDesc: "Estatísticas a partir de 27 de abril de 2023",
						viewCareer: "Ver Estatísticas de Carreira",
						loadOut: "Armamento",
						topWeapons: "Melhores Armas",
						topWeaponsDesc: "Veja estatísticas específicas de Armas, Classes de Arma, Equipamentos e Séries de Baixas",
						topWeaponsDescOld: "Veja estatísticas específicas de Armas, Classes de Arma, Equipamento, Melhorias de Campo e Séries de Baixas",
						recentMatches: "Partidas recentes",
						recentMatchesModes: "Partidas Recentes, Modos e Mapas",
						recentMatchesModesDesc: "Veja estatísticas específicas de Partidas Recentes, Modos e Mapas",
						lastMatch: "Última Partida",
						winsByMode: "Vitórias por modo de jogo",
						killDeathRatio: "Relação Baixas/Mortes",
						winLossRatio: "Razão vitórias/derrotas",
						primaries: "Primárias",
						secondaries: "Secundárias",
						loadoutTabs: {
							0: "Classes",
							1: "armas",
							2: "Equipamento",
							3: "Séries de Baixas"
						},
						recentsTab: {
							0: "Partidas recentes",
							1: "Modos e Mapas"
						},
						killsTacUse: "Baixas/Uso de Tático",
						headshotPercent: "Tiros na Cabeça",
						accuracy: "Precisão",
						stunnedKilled: "Baixas com concussão",
						revealedKills: "Baixas Reveladas",
						empdKills: "Baixas com PEM",
						uses: "Usos",
						matchesPlayed: "Partidas jogadas",
						scorePerMinute: "Pontos por minuto",
						deaths: "Mortes",
						wins: "Vitórias",
						losses: "Derrotas",
						victoryDefeat: "Vitória e Derrota",
						winLossRation: "Relação de vitórias/derrotas",
						personalBests: "Recordes Pessoais",
						highestKillStreak: "Maiores Séries de Baixas",
						highestKillsPerGame: "Mais Baixas/Jogo",
						highestScorePerGame: "Maior Pontuação/Jogo",
						killOrBeKilled: "Matar ou Morrer",
						bootsOnGround: "Tempo de Serviço",
						progression: "Progressão",
						atviName: "Nome ATVI",
						level: "Nível",
						matchSummary: "Resumo da Partida",
						last25Matches: "Últimas 25 Partidas",
						last10Matches: "Últimas 10 Partidas",
						scoreboard: "Placar",
						duration: "Duração",
						win: "Vitória",
						loss: "Derrota",
						damage: "Dano",
						player: "jogador",
						score: "Pontuação",
						Allegiance: "Aliança",
						coalition: "Coalizão",
						modesMaps: "Modos e Mapas",
						assists: "Assistências",
						viewMaps: "Ver Mapas",
						wlRatio: "Relação V/D",
						allWeapons: "Todas as Armas",
						equipment: "EQUIPAMENTO",
						killstreaks: "SÉRIES DE BAIXAS",
						killstreak: "SÉRIES DE BAIXAS",
						gameModes: "Modos de jogo",
						critical: "Dano Crítico",
						viewCodProfile: "Ver Perfil COD",
						tdm: "Mata-Mata em Equipe",
						dom: "Dominação",
						koth: "Zona de Conflito",
						control: "Controle",
						sd: "Localizar e Destruir",
						cyber: "Ataque Cibernético",
						dd: "Demolição",
						hq: "Quartel-general",
						hstg: "Resgate de Prisioneiros",
						dm: "Contra Todos",
						conf: "Baixa Confirmada",
						rugby: "Rugby",
						lbFilter: "Filtro",
						avgScorePerMin: "Pontuação/min.",
						avgScore: "Pontuação/min.",
						pageUp: "Subir página",
						pageDown: "Descer página",
						totalGames: "Partidas jogadas",
						highestKillstreak: "Série de Baixas mais alta",
						avgKillsPerGame: "Média Baixas/​Jogo",
						totalLosses: "Derrotas",
						highestWinstreak: "Vitórias Consecutivas",
						headshotPerGame: "Tiros na Cabeça/​Jogo",
						avgDamage: "Média de Dano/​Jogo",
						totalOneshotKills: "Baixas com Um Tiro",
						avgConfirms: "Média de Confirmação/​Jogo",
						avgCaptures: "Média de Capturas/​Jogo",
						globalAvgScorePerMin: "Pts/Min",
						globalKills: "Baixas",
						globalScore: "Pontuação",
						globalWlRatio: "Razão vitórias/derrotas",
						globalHeadshots: "Tiros na cabeça",
						gulagWins: "Vitórias",
						gulagLosses: "Derrotas",
						gulagWinLossRatio: "Razão vitórias/derrotas",
						gulagKills: "Baixas",
						gulagJailorKills: "Carcereiros mortos",
						cqWins: "Vitórias em Missão de Campeão",
						recency: "Recenticidade",
						unrankedMsgStart: "Joga mais 5 partidas de",
						unrankedMsgEnd: "para receberes uma classificação nesta tabela de liderança",
						name: "Nome",
						undefined: "Indefinida",
						noWeaponClassHistory: "Classe sem histórico",
						friends: "Amigos",
						global: "Global",
						lockedTileMessage: "Complete 5 jogos Multijogador para desbloquear",
						lockedTileWZMessage: "Complete 5 jogos Warzone para desbloquear",
						specgru: "Specgru",
						kortac: "Kortac",
						friendSnapshot: "Imagem do amigo",
						friendSnapshotDisclaimer: "*Alteração de posição desde o último início de sessão",
						friend: "amigo",
						goToTop: "Ir para o topo",
						lossPrevented: "Loss Prevented",
						deployments: "Mobilizações",
						exfilRatio: "Relação Extrações Sucesso",
						lockedTileDMZMessage: "Conclua 5 partidas de DMZ para desbloquear",
						viewDMZStats: "Iniciando a Temporada 2.5",
						eliminated: "Eliminado",
						successfulExfils: "Extrações Bem-sucedidas",
						highestExfilStreak: "Melhor Série de Extrações",
						highestAQKills: "Mobilização com mais Baixas da AQ",
						deploymentsExtractedItems: "Mobilizações e Itens extraídos",
						viewDeploymentsExtractedItems: "Ver Mobilizações recentes e Itens extraídos",
						cash: "Dinheiro",
						extractedItems: "Itens extraídos",
						weapons: "Armas",
						dogTags: "Plaquetas",
						teammatesRevived: "Companheiros de equipe revividos",
						lootedContainers: "Contêineres Vasculhados",
						cashExtracted: "Dinheiro extraído",
						mostCashExtracted: "Mobilização com mais Dinheiro extraído",
						highestDogTagExtracted: "Maior número de Plaquetas extraídas",
						dogTagsExtracted: "Plaquetas extraídas",
						weaponsExtracted: "Armas extraídas",
						mostExtractedWeapons: "Armas com maior quantidade de extrações",
						weapon: "Arma",
						lethal: "Letal",
						tacticalEquipment: "Tático",
						timesExtracted: "Quantidade de extrações",
						xp: "XP",
						last10Deployments: "Últimas 10 Mobilizações",
						noFriendsLeaderboard: "Nenhum amigo classificado nesta tabela",
						operatorHeadshotPercent: "% de Tiros na Cabeça",
						lastDeployment: "Last Deployment",
						recentMatchesdmzDesc: "View Recent Deployments and Extractions Stats",
						success: "Sucesso"
					},
					brazilianportuguese: {
						langCode: "pt-BR",
						statusMessage: "*Por favor, aguarde 1-2 minutos para as estatísticas da sua partida mais recente serem processadas",
						timePlayedPerMode: "Tempo jogado por modo",
						totalWins: "Total de Vitórias ",
						lb: "Placar de líderes",
						warzone: "Warzone",
						warzoneII: "Warzone II",
						warzone2: "Warzone 2",
						aqSoldierKills: "Soldados da AQ abatidos",
						games: "JOGOS",
						viewWarzoneStats: "Veja suas estatísticas de carreira no Warzone",
						operatorKills: "Operadores mortos",
						aqKills: "Mortes por AQ",
						matches: "Partidas",
						previousWarzoneMatchStats: "Estatísticas prévias de partidas no Warzone",
						finishesBySquadSize: "Finalizações por tamanho de esquadrão",
						squadSize: "Tamanho do Esquadrão",
						all: "Todos",
						quads: "Quartetos",
						trios: "Trios",
						duos: "Duplas",
						solos: "Solo",
						bestFinish: "Melhor Finalização",
						cashSpent: "Dinheiro Gasto",
						killsDeathRatio: "Relação Baixas/Mortes",
						top25: "Top 25",
						top10: "Top 10",
						top5: "Top 5",
						placement: "Posição",
						placements: "Colocações",
						highestKillsPerGameShort: "Mais Baixas/Jogo",
						personalBestShort: "Recordes Pessoais",
						gulag: "Gulag",
						highestScorePerGameShort: "Maior Pontuação/Jogo",
						furthestOperatorKill: "Morte mais distante por Operador",
						mostCashSpentPerGame: "Maior quantia de Dinheiro gasto/jogo",
						aqSoldierKilled: "Soldados AQ Mortos",
						weaponClasses: "Classes de Armas",
						operators: "Operadores",
						lethality: "Letalidade",
						shotTracker: "Rastreador de Tiros",
						engagementRanges: "Intervalos de Confrontos",
						fieldUpgrade: "Melhoria de Campo",
						killStreak: "Séries de Baixas",
						contractsCompleted: "Contratos concluídos",
						contracts: "Contratos",
						map: "Mapa",
						maps: "Mapas",
						viewLoadoutStats: "Ver estatísticas do armamento",
						recentMatches2Desc: "Ver partidas recentes, estatísticas de modos e mapas",
						totalKills: "Total de baixas",
						battleRifles: "Fuzis de batalha",
						marksmanRifles: "Fuzis de Atirador",
						sniperRifles: "Fuzis de precisão",
						shotguns: "Escopetas",
						lmgs: "MLS",
						smgs: "SMTS",
						handGuns: "Pistolas",
						melee: "Corpo a corpo",
						launchers: "Lançadores",
						stats: "Estatísticas",
						assaultRifles: "Fuzis de assalto",
						apiError: "Não foi possível carregar os dados",
						noWeapons: "Sem histórico de armas",
						noMatchHistory: "Sem histórico de partidas",
						noModesHistory: "Sem histórico de modos",
						teamDeathmatch: "MME",
						invasion: "Invasão",
						prisonerRescue: "Resgate de prisioneiro",
						charge: "Carga",
						cyberAttack: "Ataque Cibernético",
						domination: "Dominação",
						searchAndDestroy: "Localizar e Destruir",
						headquarters: "Quartel-general",
						freeForAll: "Contra Todos",
						gunfight: "Atirador",
						hardpoint: "Zona de Conflito",
						captureTheFlag: "Capture a bandeira",
						killConfirmed: "Baixa Confirmada",
						bounty: "Caçada",
						onslaught: "Chacina",
						demolition: "Demolição",
						grind: "Radical",
						infected: "Infectado",
						gunGame: "Jogo de Armas",
						dropZone: "Zona de Entrega",
						ko: "Nocaute",
						teamDefender: "Defensor da Equipe",
						groundWar: "Guerra Terrestre",
						dmz: "DMZ",
						battleRoyale: "Battle Royale",
						br: "Battle Royale",
						resurgence: "Ressurgência",
						plunder: "Saque",
						alMazrah: "Al Mazrah",
						elBagra: "Forte de Al Bagra",
						embassy: "Embaixada",
						zarqwaHydro: "Hidrelétrica Zarqwa",
						taraq: "Taraq",
						sarrifBay: "Baía de Sarrif",
						said: "Sa'id",
						santaSenaBorder: "Cruzamento de Fronteira Santa Seña",
						elAsilo: "El Asilo",
						mercadoLas: "Mercado Las AlmaS",
						santaSeña: "Santa Seña",
						guijarro: "Guijarro",
						crownRaceway: "Crown Raceway",
						breenberghHotel: "Hotel Breenbergh",
						farm18: "Farm 18",
						frag_grenade_mp: "GRANADA DE FRAGMENTAÇÃO",
						at_mine_mp: "MINA DE PROXIMIDADE",
						bunkerbuster_round_mp: "BOMBA ANTIBUNKER",
						molotov_mp: "COQUETEL MOLOTOV",
						semtex_mp: "SEMTEX",
						c4_base: "C4",
						claymore_mp: "CLAYMORE",
						thermite_ap_mp: "TERMITA",
						throwingknife_mp: "FACA DE ARREMESSO",
						assault_drone: "DRONE BOMBA",
						cluster_spike: "MINA DE DISPERSÃO",
						precision_airstrike: "ATAQUE AÉREO DE PRECISÃO",
						cruise_predator: "MÍSSIL CRUZADOR",
						mortar_strike: "ATAQUE DE MORTEIRO",
						sentry_gun: "SENTINELA",
						fuel_airstrike: "B.A.E.",
						hover_jet: "JATO VTOL",
						airdrop_escort: "HELICÓPTERO DE PATRULHA",
						wheelson: "WHEELSON",
						stealth_bomber: "BOMBARDEIRO FURTIVO",
						chopper_gunner: "ATIRADOR DE HELICÓPTERO",
						gunship: "AVIÃO-ARTILHADO",
						juggernaut: "JUGGERNAUT",
						open: "Aberto",
						close: "Fechar",
						left: "Esquerda",
						right: "Direita",
						back: "Voltar",
						select: "Selecionar",
						scroll: "Deslizar",
						details: "Detalhes",
						motdTitle: "Mensagem do dia",
						error: "Sentimos muito pela inconveniência, tente novamente mais tarde.",
						viewPatchNotes: "Ver notas de patch",
						hardClose: "Voltar ao Saguão",
						filter: "Definir fase",
						menu: {
							0: "store",
							1: "armamento",
							2: "operador",
							3: "quartel",
							4: "desafios",
							5: "loja",
							6: "Site CDL",
							cdl_news: "Notícias CDL",
							cdl_schedule: "Agenda CDL",
							cdl_standings: "Placar CDL"
						},
						loading: "Carregando",
						motdTabs: {
							motd: "Mais recente",
							pn: "Notas de atualização",
							cdlChannel: "Canal CDL"
						},
						cdlEntry: "Encontre as últimas notícias, pontuações e cronograma para a Call of Duty League no canal dedicado ao CDL.",
						crTitle: "Histórico de Combate",
						callOfDuty: "callofduty",
						multiplayer: "Multijogador",
						coop: "Cooperativo",
						ranked: "Ranqueado",
						timePlayed: "Tempo",
						gamesPlayed: "Partidas",
						kdRatio: "B/M",
						topWeapon: "Melhor Arma",
						last10Games: "Últimos 10 jogos",
						currentSeason: "Temporada Atual",
						lifetime: "Total",
						kills: "Baixas",
						dashboard: "Painel",
						entryTabs: {
							0: "Histórico de Combate",
							1: "Placares de líderes"
						},
						dashboardTabs: {
							0: "Multijogador",
							1: "Cooperativo",
							2: "Ranqueado"
						},
						career: "Carreira",
						careerDesc: "Veja suas principais estatísticas da carreira Multijogador no Modern Warfare",
						brCareerDesc: "Inclui estatísticas de Ressurgência até 27 de abril de 2023",
						resurgenceCareerDesc: "Estatísticas a partir de 27 de abril de 2023",
						viewCareer: "Ver Estatísticas de Carreira",
						loadOut: "Armamento",
						topWeapons: "Melhores Armas",
						topWeaponsDesc: "Veja estatísticas específicas de Armas, Classes de Arma, Equipamentos e Séries de Baixas",
						topWeaponsDescOld: "Veja estatísticas específicas de Armas, Classes de Arma, Equipamento, Melhorias de Campo e Séries de Baixas",
						recentMatches: "Partidas recentes",
						recentMatchesModes: "Partidas Recentes, Modos e Mapas",
						recentMatchesModesDesc: "Veja estatísticas específicas de Partidas Recentes, Modos e Mapas",
						lastMatch: "Última Partida",
						winsByMode: "Vitórias por modo de jogo",
						killDeathRatio: "Relação Baixas/Mortes",
						winLossRatio: "Razão vitórias/derrotas",
						primaries: "Primárias",
						secondaries: "Secundárias",
						loadoutTabs: {
							0: "Classes",
							1: "armas",
							2: "Equipamento",
							3: "Séries de Baixas"
						},
						recentsTab: {
							0: "Partidas recentes",
							1: "Modos e Mapas"
						},
						killsTacUse: "Baixas/Uso de Tático",
						headshotPercent: "% de T. na Cabeça de Op",
						accuracy: "Precisão",
						stunnedKilled: "Baixas com concussão",
						revealedKills: "Baixas Reveladas",
						empdKills: "Baixas com PEM",
						uses: "Usos",
						matchesPlayed: "Partidas jogadas",
						scorePerMinute: "Pontos por minuto",
						deaths: "Mortes",
						wins: "Vitórias",
						losses: "Derrotas",
						victoryDefeat: "Vitória e Derrota",
						winLossRation: "Relação de vitórias/derrotas",
						personalBests: "Recordes Pessoais",
						highestKillStreak: "Maiores Séries de Baixas",
						highestKillsPerGame: "Mais Baixas/Jogo",
						highestScorePerGame: "Maior Pontuação/Jogo",
						killOrBeKilled: "Matar ou Morrer",
						bootsOnGround: "Tempo de Serviço",
						progression: "Progressão",
						atviName: "Nome ATVI",
						level: "Nível",
						matchSummary: "Resumo da Partida",
						last25Matches: "Últimas 25 Partidas",
						last10Matches: "Últimas 10 Partidas",
						scoreboard: "Placar",
						duration: "Duração",
						win: "Vitória",
						loss: "Derrota",
						damage: "Dano",
						player: "jogador",
						score: "Pontos",
						Allegiance: "Aliança",
						coalition: "Coalizão",
						modesMaps: "Modos e Mapas",
						assists: "Assistências",
						viewMaps: "Ver Mapas",
						wlRatio: "Relação V/D",
						allWeapons: "Todas as Armas",
						equipment: "EQUIPAMENTO",
						killstreaks: "SÉRIES DE BAIXAS",
						killstreak: "SÉRIES DE BAIXAS",
						gameModes: "Modos de jogo",
						critical: "Dano Crítico",
						viewCodProfile: "Ver Perfil COD",
						tdm: "Mata-Mata em Equipe",
						dom: "Dominação",
						koth: "Zona de Conflito",
						control: "Controle",
						sd: "Localizar e Destruir",
						cyber: "Ataque Cibernético",
						dd: "Demolição",
						hq: "Quartel-general",
						hstg: "Resgate de Prisioneiros",
						dm: "Contra Todos",
						conf: "Baixa Confirmada",
						rugby: "Rugby",
						lbFilter: "Filtrar",
						avgScorePerMin: "Pts/Min",
						avgScore: "Pts/Min",
						pageUp: "Subir uma página",
						pageDown: "Descer uma página",
						totalGames: "Games Played",
						highestKillstreak: "Highest Killstreak",
						avgKillsPerGame: "Média Baixas/​Jogo",
						totalLosses: "Derrotas",
						highestWinstreak: "Vitórias Consecutivas",
						headshotPerGame: "Tiros na Cabeça/​Jogo",
						avgDamage: "Dano média/​Jogo",
						totalOneshotKills: "Baixas de Um Tiro",
						avgConfirms: "Média de Confirm/​Jogo",
						avgCaptures: "Média de Capturas/​Jogo",
						globalAvgScorePerMin: "Pts/Min",
						globalKills: "Baixas",
						globalScore: "Pontuação",
						globalWlRatio: "Razão vitórias/derrotas",
						globalHeadshots: "Tiros na cabeça",
						gulagWins: "Vitórias",
						gulagLosses: "Derrotas",
						gulagWinLossRatio: "Razão vitórias/derrotas",
						gulagKills: "Baixas",
						gulagJailorKills: "Carcereiros mortos",
						cqWins: "Vitórias em Missão de Campeão",
						recency: "Recente",
						unrankedMsgStart: "SEM RANKIN - Jogue 5 partidas de",
						unrankedMsgEnd: "para aparecer nesta Tabela de Classificação",
						name: "Jogador",
						undefined: "Indefinida",
						noWeaponClassHistory: "Classe sem histórico",
						friends: "Amigos",
						global: "Global",
						lockedTileMessage: "CONCLUA 5 JOGOS NO MJ PARA DESBLOQUEAR",
						lockedTileWZMessage: "CONCLUA 5 JOGOS NO WZ PARA DESBLOQUEAR",
						specgru: "Specgru",
						kortac: "Kortac",
						friendSnapshot: "Clique Amigo",
						friendSnapshotDisclaimer: "*Mudança de posição desde o último login",
						friend: "amigo",
						goToTop: "Voltar ao topo",
						lossPrevented: "Derrota Evitada",
						deployments: "Mobilizações",
						exfilRatio: "Razão Extrações Sucesso",
						lockedTileDMZMessage: "Conclua 5 partidas de DMZ para desbloquear",
						viewDMZStats: "Iniciando a Temporada 2.5",
						eliminated: "Eliminado(a)",
						successfulExfils: "Extrações concluídas",
						highestExfilStreak: "Melhor Série de Extrações",
						highestAQKills: "Maior Nº de Baixas da AQ por Mobilização",
						deploymentsExtractedItems: "Mobilizações e Itens extraídos",
						viewDeploymentsExtractedItems: "Ver Mobilizações recentes e Itens extraídos",
						cash: "Dinheiro",
						extractedItems: "Itens extraídos",
						weapons: "Armas",
						dogTags: "Plaquetas",
						teammatesRevived: "Companheiros de equipe revividos",
						lootedContainers: "Contêineres Vasculhados",
						cashExtracted: "Dinheiro extraído",
						mostCashExtracted: "Mobilização com mais Dinheiro extraído",
						highestDogTagExtracted: "Maior número de Plaquetas extraídas",
						dogTagsExtracted: "Plaquetas extraídas",
						weaponsExtracted: "Armas extraídas",
						mostExtractedWeapons: "Armas com maior quantidade de extrações",
						weapon: "Arma",
						lethal: "Letal",
						tacticalEquipment: "Tático",
						timesExtracted: "Quantidade de extrações",
						xp: "XP",
						last10Deployments: "Últimas 10 Mobilizações",
						noFriendsLeaderboard: "Nenhum amigo classificado nesta tabela",
						operatorHeadshotPercent: "% de T. na Cabeça de Op.",
						lastDeployment: "Última Mobilização",
						recentMatchesdmzDesc: "Ver mobilizações recentes e estatísticas de extrações",
						success: "Sucesso"
					},
					russian_full: {
						langCode: "ru",
						statusMessage: "* Пожалуйста, подождите 1-2 минуты для обработки статистики последнего матча.",
						timePlayedPerMode: "Время игры в каждом режиме",
						totalWins: "Всего побед",
						lb: "Список лидеров",
						warzone: "Warzone",
						warzoneII: "Warzone II",
						warzone2: "Warzone 2",
						aqSoldierKills: "Убито солдат АК",
						games: "ИГРЫ",
						viewWarzoneStats: "Просмотр статистики о карьере в Warzone",
						operatorKills: "Убито исполнителей",
						aqKills: "Убийства Аль-Каталой",
						matches: "Бои",
						previousWarzoneMatchStats: "Статистика предыдущих матчей Warzone",
						finishesBySquadSize: "Завершений по размеру отряда",
						squadSize: "Размер отряда",
						all: "Все",
						quads: "Четверки",
						trios: "Тройки",
						duos: "Пары",
						solos: "Одиночки",
						bestFinish: "Лучший финал",
						cashSpent: "Потрачено наличных",
						killsDeathRatio: "Баланс убийств и смертей",
						top25: "Топ-25",
						top10: "Топ-10",
						top5: "Топ-5",
						placement: "Место",
						placements: "Места",
						highestKillsPerGameShort: "Наибольшее количество убийств за игру",
						personalBestShort: "Личный рекорд",
						gulag: "ГУЛАГ",
						highestScorePerGameShort: "Наивысший счет за игру",
						furthestOperatorKill: "Самое дальнее убийство",
						mostCashSpentPerGame: "Больше всего денег потрачено",
						aqSoldierKilled: "Убитых солдат Аль-Каталы",
						weaponClasses: "Классы оружия",
						operators: "Исполнители",
						lethality: "Летальность",
						shotTracker: "Счетчик попаданий",
						engagementRanges: "Дальность захвата",
						fieldUpgrade: "Полевые модификации",
						killStreak: "Серии убийств",
						contractsCompleted: "Завершенные контракты",
						contracts: "Контракты",
						map: "Карта",
						maps: "Карты",
						viewLoadoutStats: "Посмотреть статистику по комплектам",
						recentMatches2Desc: "Просмотр последних матчей, режимов и статистики карт",
						totalKills: "Всего убийств",
						battleRifles: "Боевые винтовки",
						marksmanRifles: "Пехотные винтовки",
						sniperRifles: "Снайперские винтовки",
						shotguns: "Дробовики",
						lmgs: "Ручные пулеметы",
						smgs: "Пистолеты-пулеметы",
						handGuns: "Пистолеты",
						melee: "Рукопашное",
						launchers: "Ракетные установки",
						stats: "Статистика",
						assaultRifles: "Штурмовые винтовки",
						apiError: "Невозможно загрузить данные",
						noWeapons: "Нет истории оружия",
						noMatchHistory: "Нет истории матчей",
						noModesHistory: "Нет истории режимов",
						teamDeathmatch: "Командный бой",
						invasion: "Вторжение",
						prisonerRescue: "Спасение пленных",
						charge: "Заряд",
						cyberAttack: "Кибератака",
						domination: "Превосходство",
						searchAndDestroy: "Найти и уничтожить",
						headquarters: "Штаб",
						freeForAll: "Каждый за себя",
						gunfight: "Огневой контакт",
						hardpoint: "Опорный пункт",
						captureTheFlag: "Захват флага",
						killConfirmed: "Убийство подтверждено",
						onslaught: "Бойня",
						demolition: "Диверсия",
						grind: "Мясорубка",
						infected: "Заражение",
						gunGame: "Перестрелка",
						dropZone: "Зона высадки",
						ko: "Нокаут",
						teamDefender: "Защитник",
						groundWar: "Наземная война",
						dmz: "DMZ",
						battleRoyale: "Королевская битва",
						br: "Королевская битва",
						resurgence: "Возрождение",
						plunder: "Добыча",
						alMazrah: "Al Mazrah",
						elBagra: "El Bagra Fortress",
						embassy: "Embassy",
						zarqwaHydro: "Zarqwa Hydroelectric",
						taraq: "Taraq",
						sarrifBay: "Sarrif Bay",
						said: "Sa'id",
						santaSenaBorder: "Santa Seña Border Crossing",
						elAsilo: "El Asilo",
						mercadoLas: "Mercado Las Almas",
						santaSeña: "Santa Seña",
						guijarro: "Guijarro",
						crownRaceway: "Crown Raceway",
						breenberghHotel: "Breenbergh Hotel",
						farm18: "Farm 18",
						frag_grenade_mp: "Осколочная граната",
						at_mine_mp: "КОНТАКТНАЯ МИНА",
						bunkerbuster_round_mp: "ЗВБ",
						molotov_mp: "КОКТЕЙЛЬ МОЛОТОВА",
						semtex_mp: "СЕМТЕКС",
						c4_base: "C4",
						claymore_mp: "КЛЕЙМОРА",
						thermite_ap_mp: "ТЕРМИТ",
						throwingknife_mp: "МЕТАТЕЛЬНЫЙ НОЖ",
						assault_drone: "ДРОН-КАМИКАДЗЕ",
						cluster_spike: "КАССЕТНАЯ МИНА",
						precision_airstrike: "ТОЧЕЧНЫЙ АВИАУДАР",
						cruise_predator: "КРЫЛАТАЯ РАКЕТА",
						mortar_strike: "МИНОМЕТНЫЙ УДАР",
						sentry_gun: 'ТУРЕЛЬ "ЧАСОВОЙ"',
						fuel_airstrike: "Стратегический удар",
						hover_jet: "СВВП",
						airdrop_escort: "ВЕРТОЛЕТ ПРИКРЫТИЯ",
						wheelson: "РБМ",
						stealth_bomber: "СТЕЛС-БОМБАРДИРОВЩИК",
						chopper_gunner: "ВЕРТОЛЕТ СО СТРЕЛКОМ",
						gunship: "САМОЛЕТ ПОДДЕРЖКИ",
						juggernaut: "ДЖАГГЕРНАУТ",
						open: "Открыть",
						close: "Закрыть",
						left: "Влево",
						right: "Вправо",
						back: "Назад",
						select: "ВЫБОР",
						scroll: "прокрутить",
						details: "Подробности",
						motdTitle: "Сообщение дня",
						error: "Приносим извинения за неудобства, повторите попытку позже.",
						viewPatchNotes: "Описание обновления",
						hardClose: "Вернуться в лобби",
						filter: "Выбрать этап",
						menu: {
							0: "магазин",
							1: "комплект",
							2: "operator",
							3: "казармы",
							4: "испытания",
							5: "магазин",
							6: "Веб-сайт CDL",
							cdl_news: "Новости CDL",
							cdl_schedule: "Расписание CDL",
							cdl_standings: "Турнирная таблица CDL"
						},
						loading: "загрузка",
						motdTabs: {
							motd: "Последнее",
							pn: "Обновления",
							cdlChannel: "Канал CDL"
						},
						cdlEntry: "Узнавайте последние новости, результаты и расписание Лиги Call of Duty на специальном канале CDL",
						crTitle: "Послужной список",
						callOfDuty: "Call of Duty",
						multiplayer: "Сетевая игра",
						coop: "Совместная игра",
						ranked: "Рейтинг",
						timePlayed: "Время игры",
						gamesPlayed: "Всего игр",
						kdRatio: "Баланс уб/см",
						topWeapon: "Лучшее оружие",
						last10Games: "Последние 10 игр",
						currentSeason: "Текущий сезон",
						lifetime: "Все время",
						kills: "Убийства",
						dashboard: "Панель управления",
						entryTabs: {
							0: "Послужной список",
							1: "Списки лидеров"
						},
						dashboardTabs: {
							0: "Сетевая игра",
							1: "Совместная игра",
							2: "Рейтинг"
						},
						career: "Карьера",
						careerDesc: "Просмотр основных статистических данных по карьере в сетевой игре Modern Warfare",
						brCareerDesc: 'Включает статистику "Возрождения" до 27 апреля 2023',
						resurgenceCareerDesc: "Статистика от 27 апреля 2023",
						viewCareer: "Посмотреть статистику карьеры",
						loadOut: "Комплект",
						topWeapons: "Лучшее оружие",
						topWeaponsDesc: "Просмотр статистики, относящейся к оружию, классам оружия, снаряжению и сериям убийств",
						topWeaponsDescOld: "Просмотр статистики, относящейся к оружию, классам оружия, снаряжению, полевым модификациям и сериям убийств",
						recentMatches: "Недавние бои",
						recentMatchesModes: "Недавние бои, режимы и карты",
						recentMatchesModesDesc: "Просмотр недавних боев, а также статистики по режиму и конкретной карте",
						lastMatch: "Последний бой",
						winsByMode: "Победы по режимам игры",
						killDeathRatio: "Баланс уб/см",
						winLossRatio: "Баланс побед и поражений",
						primaries: "Основное оружие",
						secondaries: "Дополнительное оружие",
						loadoutTabs: {
							0: "Классы",
							1: "Оружие",
							2: "Снаряжение",
							3: "Серии убийств"
						},
						recentsTab: {
							0: "Недавние бои",
							1: "Режимы и карты"
						},
						killsTacUse: "Убийства и использование тактического снаряжения",
						headshotPercent: "% УБИЙСТВ В ГОЛОВУ",
						accuracy: "Точность",
						stunnedKilled: "Оглушено и убито",
						revealedKills: "Раскрытые убийства",
						empdKills: "Убийства с помощью ЭМИ",
						uses: "Использование",
						matchesPlayed: "Проведенные бои",
						scorePerMinute: "Очков в минуту",
						deaths: "Смерти",
						wins: "Победы",
						losses: "Поражения",
						victoryDefeat: "Победа и поражение",
						winLossRation: "Баланс побед и поражений",
						personalBests: "Личные рекорды",
						highestKillStreak: "Наивысшая достигнутая серия убийств",
						highestKillsPerGame: "Наибольшее количество убийств за игру",
						highestScorePerGame: "Наивысший счет за игру",
						killOrBeKilled: "Убей или будь убитым",
						bootsOnGround: "В бою",
						progression: "Прогресс",
						atviName: "Имя ATVI",
						level: "Уровень",
						matchSummary: "Итоги боя",
						last25Matches: "Последние 25 боев",
						last10Matches: "Последние 10 боев",
						scoreboard: "Таблица результатов",
						duration: "Длительность",
						win: "Победа",
						loss: "Поражение",
						damage: "Урон",
						player: "Игрок",
						score: "Счет",
						Allegiance: "Альянс",
						coalition: "Коалиция",
						modesMaps: "Режимы и карты",
						assists: "Помощь",
						viewMaps: "Просмотреть карты",
						wlRatio: "Баланс побед и поражений",
						allWeapons: "Все виды оружия",
						equipment: "СНАРЯЖЕНИЕ",
						killstreaks: "СЕРИИ УБИЙСТВ",
						killstreak: "СЕРИИ УБИЙСТВ",
						gameModes: "Режимы игры",
						critical: "Критический урон",
						tdm: "Командный бой",
						dom: "Превосходство",
						koth: "Опорный пункт",
						control: "Контроль",
						conf: "Убийство подтверждено",
						sd: "Найти и уничтожить",
						cyber: "Кибератака",
						dd: "Диверсия",
						hq: "Штаб",
						hstg: "СПАСЕНИЕ ЗАЛОЖНИКОВ",
						dm: "Каждый за себя",
						bounty: "Ликвидация",
						rugby: "Регби",
						viewCodProfile: "Посмотреть профиль COD",
						lbFilter: "Фильтр",
						avgScorePerMin: "Счет/мин.",
						avgScore: "Счет/мин.",
						pageUp: "Прокрутить вверх",
						pageDown: "Прокрутить вниз",
						totalGames: "Всего игр",
						highestKillstreak: "Лучшая серия убийств",
						avgKillsPerGame: "Средн. кол-во убийств",
						totalLosses: "ВСЕГО ПОРАЖЕНИЙ",
						highestWinstreak: "Серия побед",
						headshotPerGame: "Выстрелы в голову",
						avgDamage: "УРОН / ИГРА (СРЕД.)",
						totalOneshotKills: "Убийства один выстрелом",
						avgConfirms: "ЖЕТОНЫ / ИГРА (СРЕД.)",
						avgCaptures: "ЗАХВАТЫ / ИГРА (СРЕД.)",
						globalAvgScorePerMin: "Счет/мин.",
						globalKills: "Убийства",
						globalScore: "Счет",
						globalWlRatio: "Баланс побед и поражений",
						globalHeadshots: "Выстрелы в голову",
						gulagWins: "Победы",
						gulagLosses: "Поражения",
						gulagWinLossRatio: "Баланс побед и поражений",
						gulagKills: "Убийства",
						gulagJailorKills: "Убийства тюремщика",
						cqWins: 'Победы в "Геройском походе"',
						recency: "ВРЕМЯ",
						unrankedMsgStart: "БЕЗ РЕЙТИНГА - Сыграйте 5 игр в",
						unrankedMsgEnd: "и займите место в таблице лидеров",
						name: "Имя",
						undefined: "Неопределенный",
						noWeaponClassHistory: "Нет истории класса оружия",
						friends: "Друзья",
						global: "Общее",
						lockedTileMessage: "Завершите 5 игр в Cетевой игре",
						lockedTileWZMessage: "Завершите 5 игр в Warzone",
						specgru: "СпецГРУ",
						kortac: "КорТак",
						friendSnapshot: "Снимок друга",
						friendSnapshotDisclaimer: "*Изменение позиции с момента последнего входа в систему",
						friend: "Друзья",
						goToTop: "Перейти к началу",
						lossPrevented: "Поражение не зачтено",
						deployments: "Высадки",
						exfilRatio: "Соотнош. успешных эвакуаций",
						lockedTileDMZMessage: "Завершите 5 игр DMZ",
						viewDMZStats: "Начиная с сезона 2.5",
						eliminated: "Выбывание",
						successfulExfils: "Успешные эвакуации",
						highestExfilStreak: "Наивысшая достигнутая серия эвакуаций",
						highestAQKills: "Наибольшее количество убийств Аль-Каталы за высадку",
						deploymentsExtractedItems: "ВЫСАДКИ И ЭВАКУИРОВАННЫЕ ПРЕДМЕТЫ",
						viewDeploymentsExtractedItems: "Просмотр последних развертываний и эвакуированных предметов",
						cash: "Деньги",
						extractedItems: "Эвакуированные предметы",
						weapons: "Оружие",
						dogTags: "Жетоны",
						teammatesRevived: "Реанимировано союзников",
						lootedContainers: "Разграблено контейнеров",
						cashExtracted: "Эвакуировано денег",
						mostCashExtracted: "Наибольшее количество эвакуированных денег за высадку",
						highestDogTagExtracted: "Наибольшее количество эвакуированных жетонов",
						dogTagsExtracted: "Эвакуировано жетонов",
						weaponsExtracted: "Эвакуировано оружия",
						mostExtractedWeapons: "Больше всего эвакуировано оружия",
						weapon: "Оружие",
						lethal: "Боевое",
						tacticalEquipment: "Тактическое",
						timesExtracted: "Количество раз эвакуировано",
						xp: "Опыт",
						last10Deployments: "За последние 10 эвакуаций",
						noFriendsLeaderboard: "Нет друзей в этом списке лидеров",
						operatorHeadshotPercent: "Убийства в голову",
						lastDeployment: "Последняя высадка",
						recentMatchesdmzDesc: "Посмотреть статистику последних высадок и эвакуаций",
						success: "Успех"
					},
					simplified_chinese: {
						langCode: "zh-CN",
						statusMessage: "*需要1到2分钟的时间来处理您最近的比赛数据。",
						timePlayedPerMode: "各模式游戏时间",
						totalWins: "胜利总数 ",
						lb: "排行榜",
						warzone: "战争地带",
						warzoneII: "战争地带2.0",
						warzone2: "战争地带2.0",
						aqSoldierKills: "阿库塔拉击杀数",
						games: "模式",
						viewWarzoneStats: "查看您的《战争地带》生涯数据",
						operatorKills: "特遣队员击杀数",
						aqKills: "阿库塔拉击杀",
						matches: "比赛",
						previousWarzoneMatchStats: "上场《战争地带》比赛的统计数据",
						finishesBySquadSize: "完成小队人数",
						squadSize: "小队规模",
						all: "全部",
						quads: "四人组队",
						trios: "三人游戏",
						duos: "双人组队",
						solos: "单人",
						bestFinish: "最佳成绩",
						cashSpent: "花费现金",
						killsDeathRatio: "击杀死亡比",
						top25: "前25",
						top10: "前10",
						top5: "前5",
						placement: "排名",
						placements: "排名",
						highestKillsPerGameShort: "最多击杀/每场游戏",
						personalBestShort: "个人最佳",
						gulag: "苦力营",
						highestScorePerGameShort: "最高得分/游戏",
						furthestOperatorKill: "最远特遣队员击杀",
						mostCashSpentPerGame: "每局最多花费",
						aqSoldierKilled: "阿库塔拉士兵击杀",
						weaponClasses: "武器类别",
						operators: "特遣队员",
						lethality: "杀伤力",
						shotTracker: "射击追踪器",
						engagementRanges: "交战距离",
						fieldUpgrade: "战场升级",
						killStreak: "连杀奖励",
						contractsCompleted: "合同完成",
						contracts: "合同",
						map: "地图",
						maps: "地图",
						viewLoadoutStats: "查看作战配置统计",
						recentMatches2Desc: "查看最近的比赛，模式和地图统计",
						totalKills: "击杀总数",
						battleRifles: "战斗步枪",
						marksmanRifles: "精确射手步枪",
						sniperRifles: "狙击步枪",
						shotguns: "霰弹枪",
						lmgs: "轻机枪",
						smgs: "微型冲锋枪",
						handGuns: "手枪",
						melee: "近战",
						launchers: "发射器",
						stats: "统计数据",
						assaultRifles: "突击步枪",
						apiError: "无法加载数据",
						noWeapons: "没有武器历史",
						noMatchHistory: "没有比赛历史",
						noModesHistory: "没有模式历史",
						teamDeathmatch: "团队死斗",
						invasion: "入侵",
						prisonerRescue: "营救人质",
						charge: "充能",
						cyberAttack: "网络攻击",
						domination: "征服",
						searchAndDestroy: "搜索摧毁",
						headquarters: "指挥部",
						freeForAll: "混战",
						gunfight: "枪战",
						hardpoint: "据点",
						captureTheFlag: "夺旗",
						killConfirmed: "击杀确认",
						onslaught: "火力强袭",
						demolition: "爆破",
						grind: "磨练",
						infected: "感染",
						gunGame: "枪械游戏",
						dropZone: "空降区",
						ko: "争锋相对",
						teamDefender: "团队守护者",
						groundWar: "全面战争",
						dmz: "无人区",
						battleRoyale: "生存游戏",
						br: "生存游戏",
						resurgence: "重生",
						plunder: "勇往直钱",
						alMazrah: "马兹拉",
						elBagra: "埃尔巴格莱城堡",
						embassy: "大使馆",
						zarqwaHydro: "扎克瓦水电站",
						taraq: "塔拉克",
						sarrifBay: "沙里夫海湾",
						said: "萨伊德",
						santaSenaBorder: "圣塔西娜越境点",
						elAsilo: "避难所",
						mercadoLas: "拉斯阿玛斯市场",
						santaSeña: "圣塔西娜",
						guijarro: "吉哈罗",
						crownRaceway: "王冠赛车场",
						breenberghHotel: "布林伯格酒店",
						farm18: "18号农场",
						frag_grenade_mp: "破片手雷",
						at_mine_mp: "近炸地雷",
						bunkerbuster_round_mp: "钻地炸弹",
						molotov_mp: "燃烧瓶",
						semtex_mp: "粘性手雷",
						c4_base: "塑胶炸弹",
						claymore_mp: "阔刃大剑",
						thermite_ap_mp: "铝热剂",
						throwingknife_mp: "飞刀",
						assault_drone: "炸弹无人机",
						cluster_spike: "集束地雷",
						precision_airstrike: "精确空袭",
						cruise_predator: "巡航导弹",
						mortar_strike: "迫击炮打击",
						sentry_gun: "哨戒机枪",
						fuel_airstrike: "SAE",
						hover_jet: "垂直起降战机",
						airdrop_escort: "支援直升机",
						wheelson: "遥控战车",
						stealth_bomber: "隐形轰炸机",
						chopper_gunner: "攻击直升机",
						gunship: "空中炮艇",
						juggernaut: "无畏装甲",
						open: "打开",
						close: "关闭",
						left: "左",
						right: "右",
						back: "返回",
						select: "选择",
						scroll: "翻页",
						details: "详情",
						motdTitle: "每日信息",
						error: "抱歉给您造成了不便，请稍后再试。",
						viewPatchNotes: "查看补丁内容",
						hardClose: "返回大厅",
						filter: "赛段设置",
						menu: {
							0: "商店",
							1: "作战配置",
							2: "特战",
							3: "兵营",
							4: "挑战",
							5: "商城",
							6: "使命召唤联赛官网",
							cdl_news: "使命召唤联赛新闻",
							cdl_schedule: "使命召唤联赛时间表",
							cdl_standings: "使命召唤联赛排名"
						},
						loading: "正在加载",
						motdTabs: {
							motd: "最新",
							pn: "补丁说明",
							cdlChannel: "使命召唤联赛频道"
						},
						cdlEntry: "在专用的使命召唤联赛频道中查看最新的使命召唤联赛消息、比分和赛程。",
						crTitle: "战斗记录",
						callOfDuty: "使命召唤",
						multiplayer: "多人游戏",
						coop: "合作模式",
						ranked: "排名赛",
						timePlayed: "游戏时间",
						gamesPlayed: "游戏数",
						kdRatio: "击杀死亡比",
						topWeapon: "常用武器",
						last10Games: "最近10场游戏",
						currentSeason: "当前赛季",
						lifetime: "所有賽季",
						kills: "击杀",
						dashboard: "主页",
						entryTabs: {
							0: "战斗记录",
							1: "排行榜"
						},
						dashboardTabs: {
							0: "多人游戏",
							1: "合作模式",
							2: "排名赛"
						},
						career: "职业生涯",
						careerDesc: "查看您的《现代战争》多人游戏生涯数据",
						brCareerDesc: "包括直至2023年4月27日的重生数据",
						resurgenceCareerDesc: "2023年4月27日起的数据",
						viewCareer: "查看生涯数据",
						loadOut: "作战配置",
						topWeapons: "常用武器",
						topWeaponsDesc: "查看武器、武器类别、装备和连杀奖励的详细数据",
						topWeaponsDescOld: "查看武器、武器类别、装备、战场升级和连杀奖励的详细数据",
						recentMatches: "最近比赛",
						recentMatchesModes: "最近的比赛，模式和地图",
						recentMatchesModesDesc: "查看最近的比赛以及模式和地图的详细数据",
						lastMatch: "上一场比赛",
						winsByMode: "按游戏模式获胜",
						killDeathRatio: "击杀死亡比",
						winLossRatio: "胜负比",
						primaries: "主武器",
						secondaries: "副武器",
						loadoutTabs: {
							0: "作战配置",
							1: "武器",
							2: "装备",
							3: "连杀奖励"
						},
						recentsTab: {
							0: "最近比赛",
							1: "模式和地图"
						},
						killsTacUse: "道具使用",
						headshotPercent: "爆头率",
						accuracy: "精确度",
						stunnedKilled: "晕眩并击杀",
						revealedKills: "闪光并击杀",
						empdKills: "电磁脉冲击杀",
						uses: "使用",
						matchesPlayed: "完成的比赛",
						scorePerMinute: "每分钟得分",
						deaths: "死亡",
						wins: "胜利",
						losses: "战败",
						victoryDefeat: "胜败",
						winLossRation: "胜负比",
						personalBests: "个人最佳",
						highestKillStreak: "最高连杀",
						highestKillsPerGame: "最多击杀/每场游戏",
						highestScorePerGame: "最高得分/游戏",
						killOrBeKilled: "不是你死就是我亡",
						bootsOnGround: "脚踏实地",
						progression: "进度",
						atviName: "动视名称",
						level: "等级",
						matchSummary: "比赛摘要",
						last25Matches: "最近25场游戏",
						last10Matches: "最近10场比赛",
						scoreboard: "记分板",
						duration: "持续时间",
						win: "胜利",
						loss: "战败",
						damage: "伤害",
						player: "玩家",
						score: "得分",
						Allegiance: "同盟",
						coalition: "联军",
						modesMaps: "模式和地图",
						assists: "助攻",
						viewMaps: "查看地图",
						wlRatio: "胜负比",
						allWeapons: "全部武器",
						equipment: "装备",
						killstreaks: "连杀奖励",
						killstreak: "连杀奖励",
						gameModes: "游戏模式",
						critical: "暴击",
						tdm: "团队死斗",
						dom: "征服",
						koth: "热点",
						control: "占领",
						conf: "击杀确认",
						sd: "搜索摧毁",
						cyber: "网络攻击",
						dd: "爆破",
						hq: "指挥部",
						hstg: "营救人质",
						dm: "混战",
						bounty: "赏金猎人",
						rugby: "Rugby",
						viewCodProfile: "查看COD档案",
						lbFilter: "过滤",
						avgScorePerMin: "每分钟得分",
						avgScore: "每分钟得分",
						pageUp: "上一页",
						pageDown: "下一页",
						totalGames: "游戏数",
						highestKillstreak: "最高连杀奖励",
						avgKillsPerGame: "平均击杀/游戏",
						totalLosses: "战败",
						highestWinstreak: "连胜",
						headshotPerGame: "爆头/游戏",
						avgDamage: "场均伤害",
						totalOneshotKills: "一枪毙命",
						avgConfirms: "场均确认",
						avgCaptures: "场均占领",
						globalAvgScorePerMin: "每分钟得分",
						globalKills: "击杀",
						globalScore: "得分",
						globalWlRatio: "胜负比",
						globalHeadshots: "爆头",
						gulagWins: "胜利",
						gulagLosses: "战败",
						gulagWinLossRatio: "胜负比",
						gulagKills: "击杀",
						gulagJailorKills: "狱卒击杀数",
						cqWins: "冠军任务胜利",
						recency: "最近",
						unrankedMsgStart: "未排名-进行5场游戏",
						unrankedMsgEnd: "以获得排行榜名次",
						name: "名称",
						undefined: "未定义",
						noWeaponClassHistory: "无武器种类记录",
						friends: "好友",
						global: "全局",
						lockedTileMessage: "完成5场多人游戏比赛以解锁",
						lockedTileWZMessage: "完成5场战争地带比赛以解锁",
						specgru: "特别小组",
						kortac: "战术核心",
						friendSnapshot: "好友快照",
						friendSnapshotDisclaimer: "*自上次登录后地点更改",
						friend: "好友",
						goToTop: "回到顶部",
						lossPrevented: "未计入战败",
						deployments: "部署",
						exfilRatio: "撤离成功比率",
						lockedTileDMZMessage: "完成5场无人区游戏即可解锁",
						viewDMZStats: "开启第2.5赛季",
						eliminated: "终结",
						successfulExfils: "成功撤离",
						highestExfilStreak: "最高连续撤离纪录",
						highestAQKills: "最高阿库塔拉击杀数/部署",
						deploymentsExtractedItems: "部署&撤出的物品",
						viewDeploymentsExtractedItems: "查看最近的部署和撤出的物品",
						cash: "现金",
						extractedItems: "已撤出物品",
						weapons: "武器",
						dogTags: "身份牌",
						teammatesRevived: "复活队友数",
						lootedContainers: "战利品箱子",
						cashExtracted: "撤出现金",
						mostCashExtracted: "最多撤出现金/部署",
						highestDogTagExtracted: "最高撤出身份牌",
						dogTagsExtracted: "已撤出身份牌",
						weaponsExtracted: "已撤出武器",
						mostExtractedWeapons: "撤出次数最多的武器",
						weapon: "武器",
						lethal: "杀伤",
						tacticalEquipment: "战术",
						timesExtracted: "撤出时间",
						xp: "经验值",
						last10Deployments: "最近10次部署",
						noFriendsLeaderboard: "该排行榜上没有朋友在列",
						operatorHeadshotPercent: "特遣队员爆头率",
						lastDeployment: "上次部署",
						recentMatchesdmzDesc: "查看最近的部署和撤出的物品",
						success: "成功"
					},
					traditional_chinese: {
						langCode: "zh-TW",
						statusMessage: "*請等候1-2分鐘來處理你最近的對戰統計數據",
						timePlayedPerMode: "模式遊玩時間",
						totalWins: "總勝場數",
						lb: "排行榜",
						warzone: "《現代戰域》",
						warzoneII: "《現代戰域II》",
						warzone2: "《現代戰域2》",
						aqSoldierKills: "阿蓋塔拉士兵擊殺",
						games: "模式",
						viewWarzoneStats: "瀏覽你的核心《現代戰域》",
						operatorKills: "特戰兵擊殺",
						aqKills: "阿蓋塔拉擊殺",
						matches: "對戰",
						previousWarzoneMatchStats: "先前的《現代戰域》對戰數據",
						finishesBySquadSize: "以小隊人數分類之完成",
						squadSize: "小隊人數",
						all: "全部",
						quads: "四人組隊",
						trios: "三人組隊",
						duos: "雙人組隊",
						solos: "單人",
						bestFinish: "最佳完成",
						cashSpent: "花費現金",
						killsDeathRatio: "擊殺/死亡比",
						top25: "頭25名",
						top10: "頭10名",
						top5: "頭5名",
						placement: "排名",
						placements: "排名對戰獎勵",
						highestKillsPerGameShort: "最高對戰擊殺數",
						personalBestShort: "個人最佳紀錄",
						gulag: "古拉格",
						highestScorePerGameShort: "最高對戰分數",
						furthestOperatorKill: "最遠特戰兵擊殺",
						mostCashSpentPerGame: "每場最多花費現金",
						aqSoldierKilled: "阿蓋塔拉士兵擊殺數",
						weaponClasses: "武器類別",
						operators: "特戰兵",
						lethality: "致命道具",
						shotTracker: "命中追蹤器",
						engagementRanges: "交戰範圍",
						fieldUpgrade: "戰地升級",
						killStreak: "連殺獎勵",
						contractsCompleted: "完成的合約",
						contracts: "",
						map: "",
						maps: "",
						viewLoadoutStats: "查看對戰配置數據",
						recentMatches2Desc: "檢視最近的對戰、模式與地圖數據",
						totalKills: "總擊殺數",
						battleRifles: "戰鬥步槍",
						marksmanRifles: "射手步槍",
						sniperRifles: "狙擊步槍",
						shotguns: "霰彈槍",
						lmgs: "輕機槍",
						smgs: "衝鋒槍",
						handGuns: "手槍",
						melee: "近戰",
						launchers: "發射器",
						stats: "數據",
						assaultRifles: "突擊步槍",
						apiError: "無法讀取資料",
						noWeapons: "無武器紀錄",
						noMatchHistory: "無對戰紀錄",
						noModesHistory: "無模式紀錄",
						teamDeathmatch: "團隊死鬥",
						invasion: "入侵",
						prisonerRescue: "囚犯救援",
						charge: "炸藥",
						cyberAttack: "網絡戰",
						domination: "佔領",
						searchAndDestroy: "搜索與摧毀",
						headquarters: "總部",
						freeForAll: "自由混戰",
						gunfight: "槍戰",
						hardpoint: "據點戰",
						captureTheFlag: "搶旗",
						killConfirmed: "擊殺確認",
						onslaught: "進擊",
						demolition: "爆破",
						grind: "消耗戰",
						infected: "感染戰",
						gunGame: "軍火之王",
						dropZone: "空投區",
						ko: "擊暈",
						teamDefender: "防禦戰",
						groundWar: "地面戰爭",
						dmz: "非軍事區",
						battleRoyale: "大逃殺",
						br: "大逃殺",
						resurgence: "捲土重來",
						plunder: "奪金之王",
						alMazrah: "阿馬茲拉",
						elBagra: "巴格拉堡壘",
						embassy: "大使館攻防",
						zarqwaHydro: "扎垮水力發電廠",
						taraq: "塔拉克",
						sarrifBay: "薩里夫海灣",
						said: "薩伊德",
						santaSenaBorder: "聖錫納邊境檢查站",
						elAsilo: "庇護所",
						mercadoLas: "拉阿瑪斯市集",
						santaSeña: "聖錫納",
						guijarro: "吉亞羅",
						crownRaceway: "王冠賽道",
						breenberghHotel: "布倫伯格飯店",
						farm18: "18 號農場",
						frag_grenade_mp: "碎片手榴彈",
						at_mine_mp: "感應地雷",
						bunkerbuster_round_mp: "鑽地炸彈",
						molotov_mp: "汽油彈",
						semtex_mp: "塞姆汀炸藥",
						c4_base: "C4",
						claymore_mp: "大劍",
						thermite_ap_mp: "鋁熱劑",
						throwingknife_mp: "投擲小刀",
						assault_drone: "炸彈無人機",
						cluster_spike: "集束地雷",
						precision_airstrike: "精準空襲",
						cruise_predator: "巡弋飛彈",
						mortar_strike: "迫擊砲",
						sentry_gun: "步哨機槍",
						fuel_airstrike: "策略性空投炸彈",
						hover_jet: "VTOL戰機",
						airdrop_escort: "掩護直升機",
						wheelson: "遙控坦克",
						stealth_bomber: "匿蹤轟炸機",
						chopper_gunner: "直升機砲手",
						gunship: "砲艇機",
						juggernaut: "巨力戰甲",
						open: "開啟",
						close: "關閉",
						left: "左",
						right: "右",
						back: "返回",
						select: "選擇",
						scroll: "捲動",
						details: "細節",
						motdTitle: "今日訊息",
						error: "造成您的不便我們深感抱歉，請稍後再試。",
						viewPatchNotes: "查看更新檔說明",
						hardClose: "返回大廳",
						filter: "設定階段",
						menu: {
							0: "商店",
							1: "對戰配置",
							2: "特戰兵",
							3: "軍營",
							4: "挑戰",
							5: "商店",
							6: "CDL網站",
							cdl_news: "CDL新消息",
							cdl_schedule: "CDL賽程",
							cdl_standings: "CDL排名"
						},
						loading: "載入中",
						motdTabs: {
							motd: "最新",
							pn: "更新備註",
							cdlChannel: "CDL頻道"
						},
						cdlEntry: "在專屬的CDL頻道中獲得更多《決勝時刻》聯賽新消息、積分表及賽程。",
						crTitle: "戰鬥紀錄",
						callOfDuty: "《決勝時刻》",
						multiplayer: "多人對戰",
						coop: "合作",
						ranked: "排名對戰",
						timePlayed: "總遊戲時間",
						gamesPlayed: "玩過的遊戲",
						kdRatio: "擊殺/死亡比",
						topWeapon: "最佳武器",
						last10Games: "最近10場對戰",
						currentSeason: "當前賽季",
						lifetime: "生涯",
						kills: "擊殺",
						dashboard: "控制面板",
						entryTabs: {
							0: "戰鬥紀錄",
							1: "排行榜"
						},
						dashboardTabs: {
							0: "多人對戰",
							1: "合作",
							2: "排名對戰"
						},
						career: "生涯",
						careerDesc: "瀏覽你的核心《現代戰爭》多人遊戲生涯數據",
						brCareerDesc: "内含捲土重來數據直至2023年4月27日",
						resurgenceCareerDesc: "數據從2023年4月27日開始計算",
						viewCareer: "生涯數據",
						loadOut: "對戰配置",
						topWeapons: "最佳武器",
						topWeaponsDesc: "瀏覽武器，武器類別，裝備及連殺獎勵的個別數據",
						topWeaponsDescOld: "瀏覽武器，武器類別，裝備，戰地升級及連殺獎勵的個別數據",
						recentMatches: "近期對戰",
						recentMatchesModes: "最近對戰、模式及地圖",
						recentMatchesModesDesc: "瀏覽最近對戰以及個別模式及地圖數據",
						lastMatch: "最近一場對戰",
						winsByMode: "遊戲模式勝場",
						killDeathRatio: "擊殺/死亡比",
						winLossRatio: "勝利/失敗比",
						primaries: "主要武器",
						secondaries: "次要武器",
						loadoutTabs: {
							0: "類別",
							1: "武器",
							2: "道具",
							3: "連殺獎勵"
						},
						recentsTab: {
							0: "近期對戰",
							1: "模式及地圖"
						},
						killsTacUse: "擊殺/戰術使用",
						headshotPercent: "爆頭率",
						accuracy: "準確度",
						stunnedKilled: "暈眩及擊殺",
						revealedKills: "擊殺顯露行蹤的敵人",
						empdKills: "電磁脈衝擊殺",
						uses: "使用次數",
						matchesPlayed: "玩過的對戰",
						scorePerMinute: "每分鐘得分",
						deaths: "死亡",
						wins: "勝利",
						losses: "失敗",
						victoryDefeat: "勝利及失敗",
						winLossRation: "勝利/失敗比",
						personalBests: "個人最佳紀錄",
						highestKillStreak: "最高連殺",
						highestKillsPerGame: "最高對戰擊殺數",
						highestScorePerGame: "最高對戰分數",
						killOrBeKilled: "殺或被殺",
						bootsOnGround: "服役時間",
						progression: "進度",
						atviName: "ATVI帳號名稱",
						level: "等級",
						matchSummary: "對戰總結",
						last25Matches: "最近25場對戰",
						last10Matches: "最近10場對戰",
						scoreboard: "記分板",
						duration: "時長",
						win: "勝利",
						loss: "失敗",
						damage: "傷害",
						player: "玩家",
						score: "分數",
						Allegiance: "特種部隊",
						coalition: "核心戰術",
						modesMaps: "模式及地圖",
						assists: "助攻",
						viewMaps: "瀏覽地圖",
						wlRatio: "勝負比",
						allWeapons: "所有武器",
						equipment: "道具",
						killstreaks: "連殺獎勵",
						killstreak: "連殺獎勵",
						gameModes: "遊戲模式",
						critical: "暴擊傷害",
						tdm: "團隊死鬥",
						dom: "佔領",
						koth: "據點戰",
						control: "攻佔模式",
						conf: "擊殺確認",
						sd: "搜索與摧毀",
						cyber: "網絡戰",
						dd: "爆破",
						hq: "總部",
						hstg: "搶救俘虜",
						dm: "自由混戰",
						bounty: "賞金合約",
						rugby: "橄欖球",
						viewCodProfile: "瀏覽《決勝時刻》檔案",
						lbFilter: "篩選",
						avgScorePerMin: "每分鐘得分",
						avgScore: "每分鐘得分",
						pageUp: "向上翻頁",
						pageDown: "向下翻頁",
						totalGames: "玩過的遊戲",
						highestKillstreak: "最高連殺",
						avgKillsPerGame: "平均每場對戰擊殺數",
						totalLosses: "敗場",
						highestWinstreak: "連殺",
						headshotPerGame: "每場對戰爆頭",
						avgDamage: "場均傷害",
						totalOneshotKills: "一擊必殺",
						avgConfirms: "場均確認",
						avgCaptures: "場均奪取",
						globalAvgScorePerMin: "每分鐘得分",
						globalKills: "擊殺",
						globalScore: "分數",
						globalWlRatio: "勝負比",
						globalHeadshots: "爆頭",
						gulagWins: "勝利",
						gulagLosses: "失敗",
						gulagWinLossRatio: "勝負比",
						gulagKills: "擊殺",
						gulagJailorKills: "獄卒擊殺",
						cqWins: "冠軍任務勝利",
						recency: "最近",
						unrankedMsgStart: "沒有排名 - 遊玩5場",
						unrankedMsgEnd: "便可在記分板上獲得排名",
						name: "名稱",
						undefined: "未定義",
						noWeaponClassHistory: "無武器類別紀錄",
						friends: "好友",
						global: "全球",
						lockedTileMessage: "完成5場多人遊戲即可解鎖",
						lockedTileWZMessage: "完成5場《現代戰域》對戰即可解鎖",
						specgru: "特種部隊",
						kortac: "核心戰術",
						friendSnapshot: "好友快照",
						friendSnapshotDisclaimer: "*自從最近一次登入之後的位置變更",
						friend: "好友",
						goToTop: "前往頂部",
						lossPrevented: "不計算敗場",
						deployments: "部署",
						exfilRatio: "撤離成功比",
						lockedTileDMZMessage: "完成5個非軍事區遊戲以解鎖",
						viewDMZStats: "第2.5季開始",
						eliminated: "淘汰",
						successfulExfils: "成功撤離數",
						highestExfilStreak: "最高連續撤離數",
						highestAQKills: "每次部署最高阿蓋塔拉擊殺",
						deploymentsExtractedItems: "部署和帶出的物品",
						viewDeploymentsExtractedItems: "查看最近部署和帶出的物品",
						cash: "現金",
						extractedItems: "撤離的物品",
						weapons: "武器",
						dogTags: "兵籍牌",
						teammatesRevived: "已復活的隊友",
						lootedContainers: "已搜括的容器",
						cashExtracted: "撤離的總現金",
						mostCashExtracted: "每次部署最多撤離的現金",
						highestDogTagExtracted: "最高撤離的兵籍牌數",
						dogTagsExtracted: "撤離的兵籍牌總數",
						weaponsExtracted: "撤離的武器總次數",
						mostExtractedWeapons: "最多撤離的武器",
						weapon: "武器",
						lethal: "致命道具",
						tacticalEquipment: "戰術道具",
						timesExtracted: "撤離次數",
						xp: "經驗值",
						last10Deployments: "最近10次部署",
						noFriendsLeaderboard: "沒有好友在此排行榜上",
						operatorHeadshotPercent: "特戰兵爆頭率",
						lastDeployment: "最近部署",
						recentMatchesdmzDesc: "查看近期部署及撤離數據",
						success: "成功"
					},
					korean_full: {
						langCode: "ko",
						statusMessage: "*가장 최근 경기 전적 처리에 1-2분 정도 소요됩니다",
						timePlayedPerMode: "모드 별 플레이 시간",
						totalWins: "총 승리 ",
						lb: "순위표",
						warzone: "워존",
						warzoneII: "워존 II",
						warzone2: "워존 2",
						aqSoldierKills: "알카탈라 처치",
						viewWarzoneStats: "워존 코어 커리어 스탯 보기",
						operatorKills: "오퍼레이터 처치",
						aqKills: "알카탈라 처치",
						matches: "경기",
						previousWarzoneMatchStats: "이전 워존 경기 전적",
						finishesBySquadSize: "해당 스쿼드 규모로 마감",
						squadSize: "스쿼드 규모",
						all: "전체",
						quads: "4인",
						trios: "3인",
						duos: "2인",
						solos: "솔로",
						bestFinish: "최고의 마무리",
						cashSpent: "현금 지출",
						killsDeathRatio: "처치 사망비",
						top25: "탑 25",
						top10: "탑 10",
						top5: "탑 5",
						placement: "랭크",
						placements: "랭크",
						highestKillsPerGameShort: "경기당 최고 처치",
						personalBestShort: "개인 최고 기록",
						gulag: "Gulag",
						highestScorePerGameShort: "경기당 최고 점수",
						furthestOperatorKill: "최다 오퍼레이터 킬",
						mostCashSpentPerGame: "경기당 최다 현금 지출",
						aqSoldierKilled: "알카탈라 처치됨",
						weaponClasses: "무기 클래스",
						operators: "오퍼레이터",
						lethality: "살상력",
						shotTracker: "사격 추적",
						engagementRanges: "교전 사거리",
						fieldUpgrade: "특수 능력",
						killStreak: "킬스트릭",
						contractsCompleted: "계약 완료",
						contracts: "계약",
						map: "맵",
						maps: "지도",
						viewLoadoutStats: "무장 전적 보기",
						recentMatches2Desc: "최근 경기, 모드 및 맵 전적 보기",
						totalKills: "총 처치 수",
						battleRifles: "배틀 라이플",
						marksmanRifles: "DMR",
						sniperRifles: "SR",
						shotguns: "샷건",
						lmgs: "LMG",
						smgs: "SMG",
						handGuns: "핸드건",
						melee: "백병전",
						launchers: "로켓 런처",
						stats: "전적",
						assaultRifles: "AR",
						apiError: "데이터 불러올 수 없습니다",
						noWeapons: "무기 기록 없음",
						noMatchHistory: "경기 기록 없음",
						noModesHistory: "모드 기록 없음",
						teamDeathmatch: "팀 데스매치",
						invasion: "침입",
						prisonerRescue: "포로 구출",
						charge: "충전",
						cyberAttack: "사이버 공격",
						domination: "점령",
						searchAndDestroy: "수색 섬멸",
						headquarters: "본부",
						freeForAll: "개인전",
						gunfight: "건파이트",
						hardpoint: "주요 거점",
						captureTheFlag: "깃발 뺏기",
						killConfirmed: "확인 사살",
						onslaught: "맹공",
						demolition: "폭파",
						grind: "일과",
						infected: "감염",
						gunGame: "총싸움",
						dropZone: "낙하지점",
						ko: "녹아웃",
						teamDefender: "팀 디펜더",
						groundWar: "지상전",
						dmz: "DMZ",
						battleRoyale: "배틀 로얄",
						br: "배틀 로얄",
						resurgence: "리서전스",
						plunder: "약탈",
						alMazrah: "알 마자라",
						elBagra: "엘 바그라 요새",
						embassy: "대사관",
						zarqwaHydro: "자르콰 수력 발전",
						taraq: "타라크",
						sarrifBay: "사리프 베이",
						said: "사이드",
						santaSenaBorder: "산타 세냐 국경 교차로",
						elAsilo: "엘 아실로",
						mercadoLas: "메르카도 라스 알마스",
						santaSeña: "산타 세냐",
						guijarro: "기하로",
						crownRaceway: "크라운 경주로",
						breenberghHotel: "브린버그 호텔",
						farm18: "농장 18",
						frag_grenade_mp: "세열 수류탄",
						at_mine_mp: "근접신관 지뢰",
						bunkerbuster_round_mp: "드릴 차지",
						molotov_mp: "화염병",
						semtex_mp: "셈텍스",
						c4_base: "C4",
						claymore_mp: "클레이모어",
						thermite_ap_mp: "테르밋",
						throwingknife_mp: "투척 단검",
						assault_drone: "폭탄 드론",
						cluster_spike: "집속 지뢰",
						precision_airstrike: "정밀 공습",
						cruise_predator: "순항 미사일",
						mortar_strike: "박격포 폭격",
						sentry_gun: "감시 포탑",
						fuel_airstrike: "SAE",
						hover_jet: "호버젯",
						airdrop_escort: "감시 헬기",
						wheelson: "휠슨-HS",
						stealth_bomber: "스텔스 폭격기",
						chopper_gunner: "헬기 사수",
						gunship: "건십",
						juggernaut: "저거넛",
						open: "열기",
						close: "닫기",
						left: "왼쪽",
						right: "오른쪽",
						back: "뒤로",
						select: "선택",
						scroll: "스크롤",
						details: "세부 정보",
						motdTitle: "당일 전달 사항",
						error: "불편을 드려서 죄송합니다. 나중에 다시 시도해 주시기 바랍니다.",
						viewPatchNotes: "세부 정보",
						hardClose: "로비로 돌아가기",
						filter: "스테이지 설정",
						menu: {
							0: "스토어",
							1: "무장",
							2: "오퍼레이터",
							3: "병영",
							4: "챌린지",
							5: "상점",
							6: "CDL 웹사이트",
							cdl_news: "CDL 뉴스",
							cdl_schedule: "CDL 스케쥴",
							cdl_standings: "CDL 랭크"
						},
						loading: "로딩",
						motdTabs: {
							motd: "최신",
							pn: "패치 정보",
							cdlChannel: "CDL 채널"
						},
						cdlEntry: "전용 CDL 채널에서 Call of Duty League의 최신 뉴스, 점수 및 일정을 확인하십시오.",
						crTitle: "전투 기록",
						callOfDuty: "Call of Duty",
						multiplayer: "멀티플레이",
						coop: "협동전",
						ranked: "랭크",
						timePlayed: "플레이 시간",
						gamesPlayed: "플레이한 경기 수",
						kdRatio: "처치 사망비",
						topWeapon: "TOP 무기",
						last10Games: "최근 10게임",
						currentSeason: "현재 시즌",
						lifetime: "전체 시간",
						kills: "처치",
						dashboard: "대시보드",
						entryTabs: {
							0: "전투 기록",
							1: "순위표"
						},
						dashboardTabs: {
							0: "멀티플레이",
							1: "협동전",
							2: "랭크"
						},
						career: "커리어",
						careerDesc: "모던 워페어 멀티플레이어 코어 커리어 전적 보기",
						brCareerDesc: "2023년 4월 27일까지의 리서전스 전적 포함",
						resurgenceCareerDesc: "2023년 4월 27일부터의 전적",
						viewCareer: "커리어 스탯 보기",
						loadOut: "무장",
						topWeapons: "TOP 무기들",
						topWeaponsDesc: "무기, 무기 병과, 장비, 그리고 킬스트릭들을 자세히 살펴보기",
						topWeaponsDescOld: "무기, 무기 병과, 장비, 특수 능력, 그리고 킬스트릭들을 자세히 살펴보기",
						recentMatches: "최근 경기",
						recentMatchesModes: "최근 경기, 모드 & 맵",
						recentMatchesModesDesc: "최근 경기와 모드 및 맵별 전적 보기",
						lastMatch: "마지막 경기",
						winsByMode: "승수로 경기 모드 정렬",
						killDeathRatio: "처치 사망비",
						winLossRatio: "승/패 비율",
						primaries: "주 무기",
						secondaries: "보조 무기",
						loadoutTabs: {
							0: "병과",
							1: "무기",
							2: "장비",
							3: "킬스트릭"
						},
						recentsTab: {
							0: "최근 경기",
							1: "모드 & 맵"
						},
						killsTacUse: "킬/장비 사용",
						headshotPercent: "헤드샷 %",
						accuracy: "정확도",
						stunnedKilled: "기절시킴 및 처치",
						revealedKills: "처치 관여",
						empdKills: "EMP 킬",
						uses: "사용",
						matchesPlayed: "플레이한 경기",
						scorePerMinute: "분당 점수",
						deaths: "사망",
						wins: "승리",
						losses: "패배",
						victoryDefeat: "승리 & 패배",
						winLossRation: "승/패 비율",
						personalBests: "개인 최고 기록",
						highestKillStreak: "최고 킬스트릭",
						highestKillsPerGame: "경기당 최고 처치",
						highestScorePerGame: "경기당 최고 점수",
						killOrBeKilled: "전적",
						bootsOnGround: "전투 기록",
						progression: "진행도",
						atviName: "ATVI 이름",
						level: "레벨",
						matchSummary: "경기 요약",
						last25Matches: "최근 25게임",
						last10Matches: "최근 10게임",
						scoreboard: "점수판",
						duration: "기간",
						win: "승리",
						loss: "패배",
						damage: "피해",
						player: "플레이어",
						score: "점수",
						Allegiance: "동맹군",
						coalition: "연합군",
						modesMaps: "모드 & 맵",
						assists: "어시스트",
						viewMaps: "맵 보기",
						wlRatio: "승/패 비율",
						allWeapons: "모든 무기",
						equipment: "장비",
						killstreaks: "킬스트릭",
						killstreak: "킬스트릭",
						gameModes: "경기 모드",
						critical: "치명타 피해",
						tdm: "팀 데스매치",
						dom: "점령",
						koth: "주요 거점",
						control: "컨트롤",
						conf: "확인 사살",
						sd: "수색 섬멸",
						cyber: "사이버 공격",
						dd: "폭파",
						hq: "본부",
						hstg: "인질 구출",
						dm: "개인전",
						bounty: "현상금",
						rugby: "럭비",
						viewCodProfile: "COD 프로필 보기",
						lbFilter: "필터",
						avgScorePerMin: "점수/분",
						avgScore: "점수/분",
						pageUp: "페이지 위로",
						pageDown: "페이지 아래로",
						totalGames: "플레이한 경기 수",
						highestKillstreak: "최고 킬스트릭",
						avgKillsPerGame: "평균 처치/게임",
						totalLosses: "패",
						highestWinstreak: "연승",
						headshotPerGame: "헤드샷/경기",
						avgDamage: "평균 피해량/경기",
						totalOneshotKills: "원샷 킬",
						avgConfirms: "평균 확인 사살/경기",
						avgCaptures: "평균 점령/경기",
						globalAvgScorePerMin: "점수/분",
						globalKills: "처치",
						globalScore: "점수",
						globalWlRatio: "승/패 비율",
						globalHeadshots: "헤드샷",
						gulagWins: "승리",
						gulagLosses: "패배",
						gulagWinLossRatio: "승/패 비율",
						gulagKills: "처치",
						gulagJailorKills: "간수 처치",
						cqWins: "챔피언 퀘스트 승리",
						recency: "최근",
						unrankedMsgStart: "랭크 없음 - 5 경기 플레이",
						unrankedMsgEnd: "순위표에서 랭크를 얻으십시오",
						name: "플레이어",
						undefined: "정의되지 않음",
						noWeaponClassHistory: "무기 기록 없음",
						friends: "친구",
						global: "글로벌",
						games: "경기",
						lockedTileMessage: "5개의 멀티플레이어 게임을 완료하여 해제",
						lockedTileWZMessage: "5개의 워존 게임을 완료하여 해제",
						specgru: "Specgru",
						kortac: "Kortac",
						friendSnapshot: "친구 스냅샷",
						friendSnapshotDisclaimer: "*마지막 로그인 이후 위치 변경",
						friend: "친구",
						goToTop: "맨 위로 이동",
						lossPrevented: "결과를 참조하십시오",
						deployments: "배치",
						exfilRatio: "철수 성공 비율",
						lockedTileDMZMessage: "DMZ 경기 5개를 완료하여 해제",
						viewDMZStats: "시즌 2.5 시작",
						eliminated: "전멸",
						successfulExfils: "성공적인 철수",
						highestExfilStreak: "최고 연속 철수",
						highestAQKills: "최고 알카탈라 킬 /배치",
						deploymentsExtractedItems: "배치 & 회수한 아이템",
						viewDeploymentsExtractedItems: "최근 배치 및 회수된 항목 보기",
						cash: "현금",
						extractedItems: "회수한 아이템",
						weapons: "무기",
						dogTags: "군번줄",
						teammatesRevived: "팀원 부활",
						lootedContainers: "컨테이너 루팅",
						cashExtracted: "현금 회수",
						mostCashExtracted: "최다 현금 회수 / 배치",
						highestDogTagExtracted: "최고 군번줄 회수",
						dogTagsExtracted: "군번줄 회수",
						weaponsExtracted: "무기 회수",
						mostExtractedWeapons: "가장 많이 회수한 무기",
						weapon: "무기",
						lethal: "살상 장비",
						tacticalEquipment: "전술 장비",
						timesExtracted: "철수한 횟수",
						xp: "경험치 2배",
						last10Deployments: "최근 10 배치",
						noFriendsLeaderboard: "순위표에 랭크된 친구가 없습니다",
						operatorHeadshotPercent: "오퍼레이터 헤드샷 %",
						lastDeployment: "마지막 배치",
						recentMatchesdmzDesc: "최근 배치 및 철수 통계 보기",
						success: "성공"
					}
				};
				var xt = n(51127),
					Rt = function(e, t, n) {
						return "".concat("https://assets.callofduty.com/cdn/app/codp/iw9", "/").concat(t, "/").concat(e, "_").concat(n, ".png")
					},
					Tt = function(e) {
						var t = e,
							n = parseInt(t / 86400, 10);
						t %= 86400;
						var a = parseInt(t / 3600, 10),
							r = (t %= 3600) / 60;
						return "".concat(n, "d ").concat(a, "h ").concat(r.toFixed(), "m ")
					},
					Lt = function(e, t) {
						var a = n(63210)("./".concat(t, "/index.js"));
						return (0, xt.Z)(new Date(1e3 * e), new Date, {
							locale: a,
							addSuffix: !0
						})
					},
					Dt = function(e, t) {
						var n = t - e,
							a = Math.floor(n / 60),
							r = n - 60 * a,
							i = Math.floor(n / 3600),
							o = "";
						return i > 0 && (o += "".concat(i, ":").concat(a < 10 ? "0" : "")), (o += "".concat(a, ":").concat(r < 10 ? "0" : "")) + "".concat(r)
					},
					Mt = function(e, t) {
						switch (e) {
							case "assault":
								return kt[t].assaultRifles;
							case "smg":
								return kt[t].smgs;
							case "lmg":
								return kt[t].lmgs;
							case "shotgun":
								return kt[t].shotguns;
							case "sniper":
								return kt[t].sniperRifles;
							case "dmr":
								return kt[t].marksmanRifles;
							case "battle":
								return kt[t].battleRifles;
							case "pistol":
								return kt[t].handGuns;
							case "melee":
							case "melee2":
								return kt[t].melee;
							case "launcher":
							case "projectile":
								return kt[t].launchers;
							default:
								return e
						}
					},
					It = function(e, t, n, a) {
						return 1 === e ? n : 2 === e ? function(e, t, n) {
							switch (e) {
								case "frag_grenade_mp":
									return kt[n].frag_grenade_mp;
								case "at_mine_mp":
									return kt[n].at_mine_mp;
								case "bunkerbuster_round_mp":
									return kt[n].bunkerbuster_round_mp;
								case "molotov_mp":
									return kt[n].molotov_mp;
								case "semtex_mp":
									return kt[n].semtex_mp;
								case "c4_base":
									return kt[n].c4_base;
								case "claymore_mp":
									return kt[n].claymore_mp;
								case "thermite_ap_mp":
									return kt[n].thermite_ap_mp;
								case "throwingknife_mp":
									return kt[n].throwingknife_mp;
								default:
									return t
							}
						}(a, n, t) : 3 === e ? function(e, t, n) {
							switch (e) {
								case "bomb_drone":
									return kt[n].bomb_drone;
								case "cluster_spike":
									return kt[n].cluster_spike;
								case "precision_airstrike":
									return kt[n].precision_airstrike;
								case "cruise_predator":
									return kt[n].cruise_predator;
								case "mortar_strike":
									return kt[n].mortar_strike;
								case "sentry_gun":
									return kt[n].sentry_gun;
								case "fuel_airstrike":
									return kt[n].fuel_airstrike;
								case "hover_jet":
									return kt[n].hover_jet;
								case "airdrop_escort":
									return kt[n].airdrop_escort;
								case "wheelson":
									return kt[n].wheelson;
								case "stealth_bomber":
									return kt[n].stealth_bomber;
								case "chopper_gunner":
									return kt[n].chopper_gunner;
								case "gunship":
									return kt[n].gunship;
								case "juggernaut":
									return kt[n].juggernaut;
								default:
									return t
							}
						}(a, n, t) : "--"
					},
					At = function(e, t) {
						var a = n(63210)("./".concat(t, "/index.js"));
						if ("pl" === t) return "".concat(a.localize.ordinalNumber(e), ".");
						if ("ja" === t) return "".concat(e, "位");
						if ("ar-SA" === t) {
							var r = ["th", "st", "nd", "rd"],
								i = e % 100;
							return e + (r[(i - 20) % 10] || r[i] || r[0])
						}
						return a.localize.ordinalNumber(e)
					},
					Nt = function(e) {
						if (void 0 !== e) {
							for (var t = e.toString(), n = t.length - 3; n > 0; n -= 3) t = t.slice(0, n) + "," + t.slice(n);
							return "$".concat(t)
						}
						return ""
					},
					Ct = function(e) {
						return e.toString().length <= 4 ? e : Nt(e).substring(1)
					},
					Pt = function(e) {
						return null == e
					},
					zt = function(e, t, n, a, r, i, o) {
						var l, s;
						if ("mw2" === e) return void 0 === (null == n || null === (l = n.genericStats) || void 0 === l ? void 0 : l.totalGamesPlayed) || (null == n || null === (s = n.genericStats) || void 0 === s ? void 0 : s.totalGamesPlayed) < 5;
						if ("wz2" === e) {
							var c, d, m, u, g, p, h, f;
							if ("br" === t) return void 0 === (null == a || null === (c = a.genericStats) || void 0 === c ? void 0 : c.totalGamesPlayed) || (null == a || null === (d = a.genericStats) || void 0 === d ? void 0 : d.totalGamesPlayed) < 5;
							if ("resurgence" === t) return void 0 === (null == r || null === (m = r.genericStats) || void 0 === m ? void 0 : m.totalGamesPlayed) || (null == r || null === (u = r.genericStats) || void 0 === u ? void 0 : u.totalGamesPlayed) < 5;
							if ("plunder" === t) return void 0 === (null == i || null === (g = i.genericStats) || void 0 === g ? void 0 : g.totalGamesPlayed) || (null == i || null === (p = i.genericStats) || void 0 === p ? void 0 : p.totalGamesPlayed) < 5;
							if ("dmz" === t) return void 0 === (null == o || null === (h = o.genericStats) || void 0 === h ? void 0 : h.totalDeployments) || (null == o || null === (f = o.genericStats) || void 0 === f ? void 0 : f.totalDeployments) < 5
						}
					};
				const Ot = function(e) {
					var t, n, r, o, l, s = e.activeCrTitle,
						c = (0, i.v9)((function(e) {
							return e.global.language
						})),
						d = (0, i.v9)((function(e) {
							return e.record.selectedGameMode
						})),
						m = (0, i.v9)((function(e) {
							return "mp" === d ? e.record.crData : "br" === d ? e.record.wzData : "resurgence" === d ? e.record.resurgenceData : "plunder" === d ? e.record.plunderData : "dmz" === d ? e.record.dmzData : void 0
						})),
						u = (0, i.v9)((function(e) {
							return e.record.crData
						})),
						g = (0, i.v9)((function(e) {
							return e.record.wzData
						})),
						p = (0, i.v9)((function(e) {
							return e.record.resurgenceData
						})),
						h = (0, i.v9)((function(e) {
							return e.record.plunderData
						})),
						f = (0, i.v9)((function(e) {
							return e.record.dmzData
						})),
						v = zt(s, d, u, g, p, h, f),
						b = null == m ? void 0 : m.genericStats;
					return "dmz" !== d ? a.createElement(bt, null, a.createElement("div", {
						className: "main-title-section"
					}, a.createElement("div", {
						className: "game-icons"
					}, "mp" === d ? a.createElement("img", {
						src: "https://assets.callofduty.com/cdn/app/codp/iw9/logo/icon_branding_mwii_watermark_med_173x48.png"
					}) : a.createElement("img", {
						src: "https://assets.callofduty.com/cdn/app/codp/iw9/logo/icon_branding_wz2_watermark_med_158x48.png"
					})), a.createElement("div", null, function(e, t) {
						return "mp" === e ? kt[t].multiplayer : "br" === e ? kt[t].battleRoyale : "resurgence" === e ? kt[t].resurgence : "plunder" === e ? kt[t].plunder : kt[t].dmz
					}(d, c))), a.createElement("div", {
						className: "stats-values"
					}, a.createElement("div", null, a.createElement("div", null, a.createElement("div", {
						className: "sub-title"
					}, kt[c].timePlayed), a.createElement("div", {
						className: "sub-value"
					}, null != b && b.totalTimePlayed || 0 === (null == b ? void 0 : b.totalTimePlayed) ? Tt(null == b ? void 0 : b.totalTimePlayed) : "--")), a.createElement("div", null, a.createElement("div", {
						className: "sub-title"
					}, kt[c].kdRatio), v ? a.createElement("div", {
						className: "sub-value"
					}, "--") : a.createElement("div", {
						className: "sub-value"
					}, null != b && b.killDeathRatio || 0 === (null == b ? void 0 : b.killDeathRatio) ? (100 * (null == b ? void 0 : b.killDeathRatio) / 100).toFixed(2) : "--"))), a.createElement("div", null, a.createElement("div", null, a.createElement("div", {
						className: "sub-title"
					}, kt[c].gamesPlayed), a.createElement("div", {
						className: "sub-value"
					}, null != b && b.totalGamesPlayed || 0 === (null == b ? void 0 : b.totalGamesPlayed) ? null == b ? void 0 : b.totalGamesPlayed : "--")), "mw2" === s ? a.createElement("div", null, a.createElement("div", {
						className: "sub-title"
					}, kt[c].winLossRatio), v ? a.createElement("div", {
						className: "sub-value"
					}, "--") : a.createElement("div", {
						className: "sub-value"
					}, null != b && b.winLossRatio || 0 === (null == b ? void 0 : b.winLossRatio) ? (100 * (null == b ? void 0 : b.winLossRatio) / 100).toFixed(2) : "--")) : a.createElement("div", null, a.createElement("div", {
						className: "sub-title"
					}, null != m && null !== (t = m.modeStats) && void 0 !== t && t.wzWins ? kt[c].totalWins : kt[c].bestFinish), v ? a.createElement("div", {
						className: "sub-value"
					}, "--") : null != m && null !== (n = m.modeStats) && void 0 !== n && n.wzWins ? a.createElement("div", {
						className: "sub-value"
					}, null == m || null === (r = m.modeStats) || void 0 === r ? void 0 : r.wzWins) : a.createElement("div", {
						className: "sub-value"
					}, null != m && null !== (o = m.modeStats) && void 0 !== o && o.wzBestPlacement ? At(null == m || null === (l = m.modeStats) || void 0 === l ? void 0 : l.wzBestPlacement, kt[c].langCode) : "--"))))) : a.createElement(bt, null, a.createElement("div", {
						className: "main-title-section"
					}, a.createElement("div", {
						className: "game-icons"
					}, a.createElement("img", {
						src: "https://assets.callofduty.com/cdn/app/codp/iw9/logo/icon_branding_wz2_watermark_med_158x48.png"
					})), a.createElement("div", null, kt[c].dmz)), a.createElement("div", {
						className: "stats-values"
					}, a.createElement("div", null, a.createElement("div", null, a.createElement("div", {
						className: "sub-title"
					}, kt[c].timePlayed), a.createElement("div", {
						className: "sub-value"
					}, null != b && b.totalTimePlayed || 0 === (null == b ? void 0 : b.totalTimePlayed) ? Tt(null == b ? void 0 : b.totalTimePlayed) : "--")), a.createElement("div", null, a.createElement("div", {
						className: "sub-title"
					}, kt[c].aqSoldierKills), v ? a.createElement("div", {
						className: "sub-value"
					}, "--") : a.createElement("div", {
						className: "sub-value"
					}, null != b && b.aqSoldierKills || 0 === (null == b ? void 0 : b.aqSoldierKills) ? null == b ? void 0 : b.aqSoldierKills : "--"))), a.createElement("div", null, a.createElement("div", null, a.createElement("div", {
						className: "sub-title"
					}, kt[c].deployments), a.createElement("div", {
						className: "sub-value"
					}, null != b && b.totalDeployments || 0 === (null == b ? void 0 : b.totalDeployments) ? null == b ? void 0 : b.totalDeployments : "--")), a.createElement("div", null, a.createElement("div", {
						className: "sub-title"
					}, kt[c].exfilRatio), v ? a.createElement("div", {
						className: "sub-value"
					}, "--") : a.createElement("div", {
						className: "sub-value"
					}, null != b && b.exfilSuccessRatio || 0 === (null == b ? void 0 : b.exfilSuccessRatio) ? (100 * (null == b ? void 0 : b.exfilSuccessRatio) / 100).toFixed(2) : "--")))))
				};
				var jt = function(e, t) {
						return (0, Y.Z)(t).sort((n = e, function(e, t) {
							var a = "string" == typeof e[n] ? parseFloat(e[n]) : e[n],
								r = "string" == typeof t[n] ? parseFloat(t[n]) : t[n];
							return a > r ? -1 : a < r ? 1 : 0
						}));
						var n
					},
					Bt = function(e) {
						return e.filter((function(e) {
							return e.kills > 0
						}))
					},
					Gt = function(e) {
						return e.filter((function(e) {
							return e.aiAgentKills > 0
						}))
					},
					Zt = function(e) {
						return 1 === e ? "#3ECCED" : e >= 1 && e <= 5 ? "#1B4DFF" : e > 5 && e <= 10 ? "#F333F6" : e > 10 && e <= 25 ? "#4B02A7" : e > 25 ? "#3B3B3A" : void 0
					},
					Ut = function(e, t, n, a, r, i) {
						return r > 0 ? {
							label: kt[i].totalWins,
							val: r
						} : {
							label: kt[i].bestFinish,
							val: e ? At(e, kt[i].langCode) : "--"
						}
					};
				const Kt = function(e) {
					var t, n, r, o, l, s, c, d, m = e.activeCrTitle,
						u = (0, i.v9)((function(e) {
							return e.global.language
						})),
						g = (0, i.v9)((function(e) {
							return e.record.selectedGameMode
						})),
						p = (0, i.v9)((function(e) {
							return "mp" === g ? e.record.crData : "br" === g ? e.record.wzData : "resurgence" === g ? e.record.resurgenceData : "plunder" === g ? e.record.plunderData : "dmz" === g ? e.record.dmzData : void 0
						})),
						h = (0, i.v9)((function(e) {
							return e.record.crData
						})),
						f = (0, i.v9)((function(e) {
							return e.record.wzData
						})),
						v = (0, i.v9)((function(e) {
							return e.record.resurgenceData
						})),
						b = (0, i.v9)((function(e) {
							return e.record.plunderData
						})),
						_ = (0, i.v9)((function(e) {
							return e.record.dmzData
						})),
						y = zt(m, g, h, f, v, b, _),
						E = (null == p ? void 0 : p.weaponStats) && jt("kills", null == p ? void 0 : p.weaponStats);
					return a.createElement(Et, null, a.createElement("div", {
						className: "top-border-box"
					}), a.createElement("div", {
						className: "weapon-block"
					}, a.createElement("div", {
						className: "main-title-section"
					}, a.createElement("div", null, kt[u].topWeapon, " | ", kt[u].lifetime), !y && E && (null !== (t = E[0]) && void 0 !== t && t.label || null !== (n = E[0]) && void 0 !== n && n.name) ? a.createElement("div", null, E && (null === (r = E[0]) || void 0 === r ? void 0 : r.label) || "--") : a.createElement("div", {
						className: "empty-text"
					}, " --")), a.createElement("div", {
						className: "weapon-image-section"
					}, !y && E && null !== (o = E[0]) && void 0 !== o && o.hudImage ? a.createElement("img", {
						className: "weapon-image",
						src: "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/".concat(E && (null === (l = E[0]) || void 0 === l ? void 0 : l.hudImage), "_410x112.png")
					}) : a.createElement("img", {
						className: "weapon-image default-weapon-image",
						src: "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/hud_icon_weapon_ar_mike4_410x112.png"
					})), a.createElement("div", {
						className: "kills-section"
					}, a.createElement("span", {
						className: "sub-title"
					}, kt[u].kills), !y && E && null !== (s = E[0]) && void 0 !== s && s.kills || E && 0 === (null === (c = E[0]) || void 0 === c ? void 0 : c.kills) ? a.createElement("span", {
						className: "sub-value"
					}, null === (d = E[0]) || void 0 === d ? void 0 : d.kills) : a.createElement("span", {
						className: "sub-value empty-text"
					}, "--"))), a.createElement("div", {
						className: "bottom-border-box"
					}), a.createElement("div", null, a.createElement("div", null)))
				};
				var Ht, Wt = function(e, t) {
					window.Telescope_API_PlaySound && ("number" != typeof e && "string" == typeof e && "string" == typeof t || "number" != typeof e && "string" == typeof e) && Telescope_API_PlaySound(e)
				};
				const qt = se.ZP.div(Ht || (Ht = (0, me.Z)(["\n    width: ", "rem;\n    height: ", "rem;\n    display: ", ";\n    justify-content: center;\n    align-items: center;\n    margin-left: ", "rem;\n    margin-right: ", "rem;\n"])), (function(e) {
					return e.width
				}), (function(e) {
					return e.height
				}), (function(e) {
					return e.isPC ? "none" : "flex"
				}), (function(e) {
					return e.marginLeft ? e.marginLeft : 0
				}), (function(e) {
					return e.marginRight ? e.marginRight : 0
				}));

				function Ft() {
					return Ft = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, Ft.apply(this, arguments)
				}
				const Vt = function(e) {
					return a.createElement("svg", Ft({
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 58 36"
					}, e), a.createElement("path", {
						d: "M4 35c-1.65 0-3-1.35-3-3V12C1 5.93 5.93 1 12 1h34c6.07 0 11 4.93 11 11v20c0 1.65-1.35 3-3 3H4Z",
						style: {
							fill: "#2e2e2e"
						}
					}), a.createElement("path", {
						d: "M46 0H12C5.37 0 0 5.37 0 12v20c0 2.21 1.79 4 4 4h50c2.21 0 4-1.79 4-4V12c0-6.63-5.37-12-12-12ZM27.85 28H15V8h4.41v16.15h8.44V28Zm16.4 0H30.34v-3.73h4.79V13.36c-1.71.5-3.59.59-5.38.62V10.6c2.79-.06 4.44-.79 5.59-2.59h4.15v16.27h4.76v3.73Z",
						style: {
							fill: "#e7e7e7"
						}
					}))
				};
				var Yt, Qt;

				function Xt() {
					return Xt = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, Xt.apply(this, arguments)
				}
				const Jt = function(e) {
					return a.createElement("svg", Xt({
						viewBox: "0 0 47 24",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, e), Yt || (Yt = a.createElement("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M30.954 8.583c0-.994-.636-1.47-1.908-1.47h-2.662v2.98h2.861c1.113.04 1.709-.477 1.709-1.51ZM29.444 12.04h-3.06v3.497h3.02c1.351 0 2.066-.557 2.066-1.67 0-1.231-.675-1.827-2.026-1.827Z",
						fill: "#fff"
					})), Qt || (Qt = a.createElement("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M43.192 0H11.166c-.994 0-1.908.437-2.583 1.152L.834 10.013A3.372 3.372 0 0 0 0 12.238v8.345A3.417 3.417 0 0 0 3.417 24h39.855a3.417 3.417 0 0 0 3.417-3.417V3.457C46.649 1.55 45.099 0 43.192 0ZM12.517 17.722V4.967h2.82v10.41h6.24v2.345h-9.06Zm20.503-.994c-.835.676-1.907.994-3.258.994h-6.2V4.967h6.04c2.703 0 4.054 1.033 4.054 3.139 0 1.192-.596 2.106-1.749 2.702.795.238 1.391.636 1.749 1.192.397.556.596 1.232.596 2.066 0 1.113-.398 1.987-1.232 2.662Z",
						fill: "#fff"
					})))
				};

				function $t() {
					return $t = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, $t.apply(this, arguments)
				}
				const en = function(e) {
					return a.createElement("svg", $t({
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 58 36"
					}, e), a.createElement("path", {
						d: "M4.02 35c-1.65 0-3-1.35-3-3V12c0-6.07 4.93-11 11-11h34c6.07 0 11 4.93 11 11v20c0 1.65-1.35 3-3 3h-50Z",
						style: {
							fill: "#2e2e2e"
						}
					}), a.createElement("path", {
						d: "M23.63 14.32c0 1.79-.77 2.53-2.91 2.53h-3.29v-5.09h3.29c2.15 0 2.91.74 2.91 2.56ZM58 12v20c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4V12C0 5.37 5.37 0 12 0h34c6.63 0 12 5.37 12 12ZM28.81 28l-4.32-7.79c2.5-.74 3.56-2.62 3.56-5.88 0-4.47-1.94-6.32-6.85-6.32h-8.18v20h4.41v-7.38h2.38l3.97 7.38h5.03Zm16.71-3.73h-4.76V8h-4.15c-1.15 1.79-2.79 2.53-5.59 2.59v3.38c1.79-.03 3.68-.12 5.38-.62v10.91h-4.79v3.73h13.91v-3.73Z",
						style: {
							fill: "#e7e7e7"
						}
					}))
				};
				var tn, nn;

				function an() {
					return an = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, an.apply(this, arguments)
				}
				const rn = function(e) {
					return a.createElement("svg", an({
						viewBox: "0 0 47 24",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, e), tn || (tn = a.createElement("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M32.093 8.569c0-.992-.635-1.468-1.905-1.468h-2.657v2.975h2.856c1.11.04 1.706-.476 1.706-1.507ZM30.585 12.02H27.53v3.49h3.015c1.389 0 2.063-.555 2.063-1.665 0-1.23-.674-1.825-2.023-1.825ZM17.256 7.14h-3.054v3.57h3.094c.595 0 1.07-.118 1.388-.396.357-.278.516-.754.516-1.428 0-.635-.159-1.11-.516-1.349-.357-.238-.793-.396-1.428-.396Z",
						fill: "#fff"
					})), nn || (nn = a.createElement("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M45.779 9.997 38.043 1.15C37.408.397 36.456 0 35.464 0H3.491A3.496 3.496 0 0 0 0 3.49v17.098A3.411 3.411 0 0 0 3.412 24H43.2a3.411 3.411 0 0 0 3.412-3.412v-8.33c0-.833-.278-1.666-.834-2.261Zm-26.222 7.696c-.159-.397-.278-1.111-.357-2.222-.08-1.15-.317-1.904-.635-2.221-.317-.357-.833-.516-1.587-.516h-2.816v4.998h-2.817V4.998h6.863c1.071 0 1.944.318 2.658.992.714.674 1.071 1.508 1.071 2.539 0 1.587-.674 2.658-2.023 3.213v.04c.436.119.793.357 1.071.634.238.318.437.675.595 1.072.159.396.199 1.07.238 1.943.04 1.15.198 1.944.516 2.34h-2.777v-.078Zm14.598-.992c-.833.674-1.904.992-3.253.992h-6.188V4.959h6.03c2.697 0 4.046 1.031 4.046 3.134 0 1.19-.595 2.102-1.745 2.697.793.238 1.388.635 1.745 1.19.397.556.595 1.23.595 2.063 0 1.11-.397 1.983-1.23 2.658Z",
						fill: "#fff"
					})))
				};
				var on, ln;

				function sn() {
					return sn = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, sn.apply(this, arguments)
				}
				const cn = function(e) {
					return a.createElement("svg", sn({
						viewBox: "0 0 20 20",
						fill: "inherit",
						xmlns: "http://www.w3.org/2000/svg"
					}, e), a.createElement("mask", {
						id: "cross-console_svg__a",
						style: {
							maskType: "alpha"
						},
						maskUnits: "userSpaceOnUse",
						x: 0,
						y: 0,
						width: 20,
						height: 20
					}, on || (on = a.createElement("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm4.588-16 1.41 1.412-4.58 4.586L16 14.575l-1.412 1.41-4.58-4.575L5.423 16l-1.41-1.412L8.596 10 4 5.41 5.412 4l4.594 4.588L14.588 4Z"
					}))), ln || (ln = a.createElement("g", {
						mask: "url(#cross-console_svg__a)"
					}, a.createElement("path", {
						d: "M-6-6h32v32H-6z"
					}))))
				};
				var dn, mn;

				function un() {
					return un = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, un.apply(this, arguments)
				}
				const gn = function(e) {
					return a.createElement("svg", un({
						viewBox: "0 0 24 24",
						fill: "#fff",
						xmlns: "http://www.w3.org/2000/svg"
					}, e), dn || (dn = a.createElement("path", {
						d: "m11.819 8.241-1.585 4.506h3.17l-1.54-4.506h-.045Z",
						fill: "inherit"
					})), mn || (mn = a.createElement("path", {
						d: "M12 0C5.366 0 0 5.366 0 12s5.366 12 12 12 12-5.366 12-12S18.611 0 12 0Zm3.057 17.502-.929-2.74H9.532l-.974 2.74h-2.74l4.665-12.294h2.762l4.597 12.294h-2.785Z",
						fill: "inherit"
					})))
				};
				var pn, hn;

				function fn() {
					return fn = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, fn.apply(this, arguments)
				}
				const vn = function(e) {
					return a.createElement("svg", fn({
						viewBox: "0 0 20 20",
						fill: "inherit",
						xmlns: "http://www.w3.org/2000/svg"
					}, e), a.createElement("mask", {
						id: "circle-console_svg__a",
						style: {
							maskType: "alpha"
						},
						maskUnits: "userSpaceOnUse",
						x: 0,
						y: 0,
						width: 20,
						height: 20
					}, pn || (pn = a.createElement("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm4-10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm2 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
					}))), hn || (hn = a.createElement("g", {
						mask: "url(#circle-console_svg__a)"
					}, a.createElement("path", {
						d: "M-6-6h32v32H-6z"
					}))))
				};
				var bn, _n;

				function yn() {
					return yn = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, yn.apply(this, arguments)
				}
				const En = function(e) {
					return a.createElement("svg", yn({
						viewBox: "0 0 24 24",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, e), bn || (bn = a.createElement("path", {
						d: "M14.015 8.74c0-.951-.611-1.404-1.834-1.404H9.623v2.875h2.762c1.087-.022 1.63-.498 1.63-1.471ZM12.589 12.045H9.623v3.374h2.898c1.313 0 1.97-.543 1.97-1.608.022-1.2-.634-1.766-1.902-1.766Z",
						fill: "#fff"
					})), _n || (_n = a.createElement("path", {
						d: "M12 0C5.366 0 0 5.366 0 12s5.366 12 12 12 12-5.366 12-12S18.634 0 12 0Zm4.008 16.551c-.793.634-1.834.95-3.148.95H6.906V5.209h5.796c2.604 0 3.917 1.018 3.917 3.034 0 1.154-.566 2.015-1.676 2.58.748.227 1.314.59 1.699 1.155.362.544.566 1.2.566 1.97 0 1.11-.408 1.97-1.2 2.604Z",
						fill: "#fff"
					})))
				};
				var wn;

				function Sn() {
					return Sn = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, Sn.apply(this, arguments)
				}
				const kn = function(e) {
					return a.createElement("svg", Sn({
						viewBox: "0 0 16 32",
						fill: "inherit",
						xmlns: "http://www.w3.org/2000/svg"
					}, e), wn || (wn = a.createElement("path", {
						d: "M0 0h4l12 16L4 32H0l12-16L0 0Z"
					})))
				};
				var xn;

				function Rn() {
					return Rn = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, Rn.apply(this, arguments)
				}
				const Tn = function(e) {
					return a.createElement("svg", Rn({
						viewBox: "0 0 16 32",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, e), xn || (xn = a.createElement("path", {
						d: "M16 32h-4L0 16 12 0h4L4 16l12 16Z",
						fill: "inherit"
					})))
				};
				var Ln, Dn;

				function Mn() {
					return Mn = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, Mn.apply(this, arguments)
				}
				const In = function(e) {
					return a.createElement("svg", Mn({
						viewBox: "0 0 20 20",
						fill: "inherit",
						xmlns: "http://www.w3.org/2000/svg"
					}, e), a.createElement("mask", {
						id: "square-console_svg__a",
						style: {
							maskType: "alpha"
						},
						maskUnits: "userSpaceOnUse",
						x: 0,
						y: 0,
						width: 20,
						height: 20
					}, Ln || (Ln = a.createElement("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm-4-6V6h8v8H6ZM4 4h12v12H4V4Z",
						fill: "#141313"
					}))), Dn || (Dn = a.createElement("g", {
						mask: "url(#square-console_svg__a)"
					}, a.createElement("path", {
						d: "M-6-6h32v32H-6z"
					}))))
				};
				var An;

				function Nn() {
					return Nn = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, Nn.apply(this, arguments)
				}
				const Cn = function(e) {
					return a.createElement("svg", Nn({
						viewBox: "0 0 20 20",
						fill: "inherit",
						xmlns: "http://www.w3.org/2000/svg"
					}, e), An || (An = a.createElement("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm5.344-9.597c.281.506.281 1.08.281 1.627v.048c0 .856 0 1.619-.756 2.276-.474.41-1.17.616-1.881.616-.712 0-1.423-.206-1.897-.63-.474-.41-.726-.902-.726-1.75v-.52h1.986v.589c0 .451.281.67.637.67a.592.592 0 0 0 .474-.233c.18-.217.179-.807.178-1.14v-.131c0-.323.002-.838-.163-1.08-.104-.137-.252-.233-.504-.233h-.474V8.981h.474a.54.54 0 0 0 .415-.164c.185-.208.181-.636.178-.929v-.201c.004-.27.008-.634-.149-.84-.089-.109-.207-.19-.43-.19-.31 0-.562.19-.562.587v.67h-1.986v-.547c0-.793.252-1.326.726-1.736.474-.424 1.111-.615 1.823-.615.8 0 1.392.218 1.807.601.519.465.756 1.19.756 2.037 0 .506-.015 1.012-.252 1.477a1.692 1.692 0 0 1-.578.615c.267.192.474.397.623.657Zm-6.11 2.862v1.75H4.376V5.282h2.104v7.984h2.756Z"
					})))
				};
				var Pn;

				function zn() {
					return zn = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, zn.apply(this, arguments)
				}
				const On = function(e) {
					return a.createElement("svg", zn({
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 52 50.1"
					}, e), Pn || (Pn = a.createElement("path", {
						className: "ls-console_svg__cls-1",
						d: "M44 40.1H8c-4.42 0-8-3.58-8-8s3.58-8 8-8h36c4.42 0 8 3.58 8 8s-3.58 8-8 8Zm-12 4H20c0 3.31 2.69 6 6 6s6-2.69 6-6Zm-7.17-27.85v3.85H12V.14h4.4v16.11h8.42Zm1.86-2.15h4.23c0 1.91 1.07 2.75 3.19 2.75 1.91 0 2.87-.69 2.87-2.11 0-1.62-1.04-2.32-3.97-2.78-4.37-.7-6.02-2.32-6.02-5.91 0-4.03 2.46-6.05 7.15-6.05s6.92 1.97 6.92 6.11h-4.23c0-1.71-.9-2.58-2.78-2.58s-2.72.78-2.72 2.09c0 1.48 1.01 2.14 3.79 2.55 4.6.67 6.2 2.43 6.2 6.14 0 4.08-2.4 6.08-7.33 6.08s-7.3-1.97-7.3-6.28Z"
					})))
				};

				function jn() {
					return jn = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, jn.apply(this, arguments)
				}
				const Bn = function(e) {
					return a.createElement("svg", jn({
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 64 64"
					}, e), a.createElement("path", {
						d: "M9.86 57c-1.65 0-3-1.35-3-3V10c0-1.65 1.35-3 3-3h42.28c.95 0 1.83.44 2.4 1.2.57.76.75 1.73.48 2.64L42.99 51.96c-.87 2.96-3.63 5.04-6.72 5.04H9.86Z",
						style: {
							fill: "#231f20",
							opacity: .2
						}
					}), a.createElement("path", {
						d: "M24.62 28.32c0 1.79-.76 2.53-2.91 2.53h-3.29v-5.09h3.29c2.15 0 2.91.74 2.91 2.56Zm31.5-17.2L44.09 52.24c-1 3.41-4.12 5.75-7.68 5.75H10c-2.21 0-4-1.79-4-4V10c0-2.21 1.79-4 4-4h42.29c2.67 0 4.59 2.56 3.84 5.12ZM29.79 42l-4.32-7.79c2.5-.74 3.56-2.62 3.56-5.88 0-4.47-1.94-6.32-6.85-6.32H14v20h4.41v-7.38h2.38l3.97 7.38h5.03Zm15.32-20H29.99v3.85h5.35V42h4.41V25.85h5.35V22Z",
						style: {
							fill: "#fff"
						}
					}))
				};

				function Gn() {
					return Gn = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, Gn.apply(this, arguments)
				}
				const Zn = function(e) {
					return a.createElement("svg", Gn({
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 64 64"
					}, e), a.createElement("path", {
						d: "M27.58 57c-3.09 0-5.85-2.07-6.72-5.04L8.84 10.84c-.27-.92-.09-1.88.48-2.64.57-.76 1.45-1.2 2.4-1.2H54c1.65 0 3 1.35 3 3v44c0 1.65-1.35 3-3 3H27.58Z",
						style: {
							fill: "#231f20",
							opacity: .2
						}
					}), a.createElement("path", {
						d: "M54 6H11.71c-2.67 0-4.59 2.56-3.84 5.12L19.9 52.24c1 3.41 4.12 5.75 7.68 5.75H54c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4ZM36.85 42H24V22h4.41v16.15h8.44V42Zm14.26-16.15h-5.35V42h-4.41V25.85H36V22h15.12v3.85Z",
						style: {
							fill: "#fff"
						}
					}))
				};

				function Un() {
					return Un = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, Un.apply(this, arguments)
				}
				const Kn = function(e) {
					return a.createElement("svg", Un({
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 50.29 52"
					}, e), a.createElement("path", {
						d: "M19.87 51c-3.09 0-5.85-2.07-6.72-5.04L1.12 4.84c-.27-.92-.09-1.88.48-2.64C2.17 1.44 3.05 1 4 1h42.29c1.65 0 3 1.35 3 3v44c0 1.65-1.35 3-3 3H19.87Z",
						style: {
							fill: "#2e2e2e"
						}
					}), a.createElement("path", {
						d: "M28.92 36H16.29V16.35h4.34v15.87h8.3v3.79Zm15.81-3.67V36H30.48v-2.02c0-3.73 1.68-5.95 6.07-8.01 2.95-1.39 3.93-2.37 3.93-4.02 0-1.42-.87-2.34-2.75-2.34s-2.89.95-2.89 2.98v.55h-4.05v-.93c0-4.08 2.46-6.21 6.97-6.21s6.97 2.17 6.97 5.92c0 3.27-1.71 5.35-6.01 7.28-2.66 1.19-3.67 1.94-3.93 3.12h9.94ZM46.29 0H4C1.33 0-.59 2.56.16 5.12l12.03 41.12c1 3.41 4.12 5.75 7.68 5.75h26.42c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4Z",
						style: {
							fill: "#e7e7e7"
						}
					}))
				};

				function Hn() {
					return Hn = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, Hn.apply(this, arguments)
				}
				const Wn = function(e) {
					return a.createElement("svg", Hn({
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 50.29 52"
					}, e), a.createElement("path", {
						d: "M4 51c-1.65 0-3-1.35-3-3V4c0-1.65 1.35-3 3-3h42.29c.95 0 1.83.44 2.4 1.2.57.76.75 1.73.48 2.64L37.14 45.96c-.87 2.96-3.63 5.04-6.72 5.04H4Z",
						style: {
							fill: "#2e2e2e"
						}
					}), a.createElement("path", {
						d: "M46.29 0H4C1.79 0 0 1.79 0 4v44c0 2.21 1.79 4 4 4h26.42c3.55 0 6.68-2.34 7.68-5.75L50.12 5.12C50.87 2.56 48.95 0 46.28 0ZM16.58 36l-3.9-7.25h-2.34V36H6V16.35h8.04c4.83 0 6.73 1.82 6.73 6.21 0 3.21-1.04 5.06-3.5 5.78L21.52 36h-4.94Zm21.18-3.67V36H23.51v-2.02c0-3.73 1.68-5.95 6.07-8.01 2.95-1.39 3.93-2.37 3.93-4.02 0-1.42-.87-2.34-2.75-2.34s-2.89.95-2.89 2.98v.55h-4.05v-.92c0-4.07 2.46-6.21 6.97-6.21s6.97 2.17 6.97 5.92c0 3.27-1.71 5.35-6.01 7.28-2.66 1.19-3.67 1.94-3.93 3.12h9.94Zm-21.33-9.77c0 1.76-.75 2.49-2.86 2.49h-3.24v-5h3.24c2.11 0 2.86.72 2.86 2.52Z",
						style: {
							fill: "#e7e7e7"
						}
					}))
				};
				var qn, Fn, Vn;

				function Yn() {
					return Yn = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, Yn.apply(this, arguments)
				}
				const Qn = function(e) {
					return a.createElement("svg", Yn({
						id: "dpad_horizontal_svg__Prompts",
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 64 64"
					}, e), qn || (qn = a.createElement("defs", null, a.createElement("style", null, ".dpad_horizontal_svg__cls-1{fill:#fff}"))), a.createElement("g", {
						id: "dpad_horizontal_svg__D-Pad_Horizontal"
					}, a.createElement("g", {
						style: {
							opacity: .2
						}
					}, a.createElement("path", {
						d: "M26.08 62c-1.1 0-2-.9-2-2V46.94c0-1.34.52-2.59 1.46-3.54l5.74-5.74c.19-.19.44-.29.71-.29s.52.1.71.29l5.71 5.71c.94.94 1.46 2.2 1.46 3.54v13.1c0 1.1-.9 2-2 2h-11.8Zm21.01-21.92c-1.34 0-2.59-.52-3.54-1.46l-5.9-5.9a.996.996 0 0 1 0-1.41l5.81-5.81c.93-.93 2.22-1.46 3.54-1.46h12.99c1.1 0 2 .9 2 2V38.1c0 1.1-.9 2-2 2h-12.9Zm-15.1-13.44a.99.99 0 0 1-.71-.29l-5.74-5.74c-.94-.94-1.46-2.2-1.46-3.54V4c0-1.1.9-2 2-2h11.8c1.1 0 2 .9 2 2v13.1c0 1.34-.52 2.59-1.46 3.54l-5.71 5.71a.99.99 0 0 1-.71.29Zm-15.1 13.44c1.34 0 2.59-.52 3.54-1.46l5.9-5.9a.996.996 0 0 0 0-1.41l-5.81-5.81c-.94-.94-2.2-1.46-3.54-1.46H4c-1.1 0-2 .9-2 2V38.1c0 1.1.9 2 2 2h12.9Z",
						style: {
							fill: "#231f20"
						},
						id: "dpad_horizontal_svg__Protection"
					})), Fn || (Fn = a.createElement("path", {
						className: "dpad_horizontal_svg__cls-1",
						d: "M36.88 5v12.1c0 .53-.21 1.04-.59 1.41l-4.3 4.3-4.33-4.33c-.38-.38-.59-.88-.59-1.41V5h9.8m-4.88 36.19 4.3 4.3c.38.38.59.88.59 1.41V59h-9.8V46.94c0-.53.21-1.04.59-1.41L32 41.2M37.88 1h-11.8c-1.65 0-3 1.35-3 3v13.06c0 1.59.63 3.12 1.76 4.24l5.74 5.74c.39.39.9.59 1.41.59s1.02-.2 1.41-.59l5.71-5.71a5.987 5.987 0 0 0 1.76-4.24V4c0-1.65-1.35-3-3-3ZM32 36.36c-.51 0-1.02.2-1.41.59l-5.74 5.74a5.987 5.987 0 0 0-1.76 4.24v13.06c0 1.65 1.35 3 3 3h11.8c1.66 0 3-1.34 3-3v-13.1c0-1.59-.63-3.12-1.76-4.24l-5.71-5.71c-.39-.39-.9-.59-1.41-.59Z",
						id: "dpad_horizontal_svg__Unused"
					})), Vn || (Vn = a.createElement("path", {
						className: "dpad_horizontal_svg__cls-1",
						d: "m36.95 33.41 5.9 5.9a5.987 5.987 0 0 0 4.24 1.76h12.9c1.65 0 3-1.35 3-3V26.01c0-1.66-1.34-3-3-3H47c-1.59 0-3.12.63-4.24 1.76l-5.81 5.81c-.78.78-.78 2.05 0 2.83Zm-9.9-2.83-5.81-5.81A5.987 5.987 0 0 0 17 23.01H4c-1.65 0-3 1.35-3 3v12.06c0 1.65 1.35 3 3 3h12.9c1.59 0 3.12-.63 4.24-1.76l5.9-5.9c.78-.78.78-2.05 0-2.83Z",
						id: "dpad_horizontal_svg__Used"
					}))))
				};
				var Xn, Jn, $n;

				function ea() {
					return ea = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, ea.apply(this, arguments)
				}
				const ta = function(e) {
					return a.createElement("svg", ea({
						id: "xb4_dpad_horizontal_svg__Prompts",
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 64 64"
					}, e), Xn || (Xn = a.createElement("defs", null, a.createElement("style", null, ".xb4_dpad_horizontal_svg__cls-1{fill:#fff}.xb4_dpad_horizontal_svg__cls-3{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:4px}"))), a.createElement("g", {
						id: "xb4_dpad_horizontal_svg__D-Pad_Horizontal"
					}, a.createElement("path", {
						id: "xb4_dpad_horizontal_svg__Protection",
						d: "M24.83 62c-1.1 0-2-.9-2-2V41h-19c-1.1 0-2-.9-2-2V25c0-1.1.9-2 2-2h19V4c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v19h19c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2h-19v19c0 1.1-.9 2-2 2h-14Z",
						style: {
							fill: "#231f20",
							opacity: .2
						}
					}), Jn || (Jn = a.createElement("g", {
						id: "xb4_dpad_horizontal_svg__Outline"
					}, a.createElement("path", {
						className: "xb4_dpad_horizontal_svg__cls-1",
						d: "M38 5v54H26V5h12m1-4H25c-1.66 0-3 1.34-3 3v56c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3Z"
					}), a.createElement("path", {
						className: "xb4_dpad_horizontal_svg__cls-3",
						d: "M42 22 22 42M42 42 22 22"
					}))), $n || ($n = a.createElement("path", {
						id: "xb4_dpad_horizontal_svg__Used",
						className: "xb4_dpad_horizontal_svg__cls-1",
						d: "M4 22c-1.66 0-3 1.34-3 3v14c0 1.66 1.34 3 3 3h18l10-10-10-10H4Zm8 10v6l-4.8-3.6a3 3 0 0 1 0-4.8L12 26v6Zm48-10H42L32 32l10 10h18c1.66 0 3-1.34 3-3V25c0-1.66-1.34-3-3-3Zm-8 16V26l8 6-8 6Z"
					}))))
				};
				var na, aa;

				function ra() {
					return ra = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, ra.apply(this, arguments)
				}
				const ia = function(e) {
					return a.createElement("svg", ra({
						viewBox: "0 0 20 20",
						fill: "inherit",
						xmlns: "http://www.w3.org/2000/svg"
					}, e), a.createElement("mask", {
						id: "triangle-console_svg__a",
						style: {
							maskType: "alpha"
						},
						maskUnits: "userSpaceOnUse",
						x: 0,
						y: 0,
						width: 20,
						height: 20
					}, na || (na = a.createElement("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10ZM8.882 5.236 10 3l1.118 2.236L15 13l1 2H4l1-2 3.882-7.764ZM7.236 13 10 7.472 12.764 13H7.236Z"
					}))), aa || (aa = a.createElement("g", {
						mask: "url(#triangle-console_svg__a)"
					}, a.createElement("path", {
						d: "M-6-6h32v32H-6z"
					}))))
				};
				var oa;

				function la() {
					return la = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, la.apply(this, arguments)
				}
				const sa = function(e) {
					return a.createElement("svg", la({
						viewBox: "0 0 24 24",
						fill: "inherit",
						xmlns: "http://www.w3.org/2000/svg"
					}, e), oa || (oa = a.createElement("path", {
						d: "M12 0C5.366 0 0 5.366 0 12s5.366 12 12 12 12-5.366 12-12S18.634 0 12 0Zm1.2 12.793v4.709h-2.694v-4.777L5.977 5.23h3.057l2.875 4.845 2.853-4.845h3.012L13.2 12.793Z"
					})))
				};
				var ca;

				function da() {
					return da = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, da.apply(this, arguments)
				}
				const ma = function(e) {
					return a.createElement("svg", da({
						className: "x-console_svg__xbox-X-svg",
						viewBox: "0 0 107 106",
						fill: "inherit",
						xmlns: "http://www.w3.org/2000/svg"
					}, e), ca || (ca = a.createElement("path", {
						className: "x-console_svg__svg-fill-path x-console_svg__default-white",
						d: "M53.1 0C23.8 0 .1 23.7.1 53s23.7 53 53 53 53-23.7 53-53-23.7-53-53-53Zm11 77.3L52.2 58.5 40.1 77.3H26.6l19-28.4-17.5-25.8h13.8l10.6 17.3 11-17.3h13.1L59.2 49l18.9 28.3h-14Z"
					})))
				};
				var ua = function(e) {
						return e
					},
					ga = function(e) {
						return 2 * e
					};
				const pa = function() {
					return (0, i.v9)((function(e) {
						return e.global.is4k
					})) ? ga : ua
				};
				var ha = function(e) {
					var t = e.type,
						n = e.is4k,
						r = e.lastInputGamepad,
						i = e.fill,
						o = pa();
					switch (t) {
						case "LB_L1":
							if (3 === r) return a.createElement(Vt, {
								width: o(28),
								height: o(16)
							});
							if (2 === r) return a.createElement(Jt, {
								width: o(28),
								height: o(16)
							});
							break;
						case "RB_R1":
							if (3 === r) return a.createElement(en, {
								width: o(28),
								height: o(16)
							});
							if (2 === r) return a.createElement(rn, {
								width: o(28),
								height: o(16)
							});
							break;
						case "XBA_PSCROSS":
							if (3 === r) return a.createElement(cn, {
								width: o(20),
								height: o(20),
								fill: i || "#e7e7e7"
							});
							if (2 === r) return a.createElement(gn, {
								width: o(20),
								height: o(20),
								fill: "#141313"
							});
							break;
						case "XBB_PSCIRCLE":
							if (3 === r) return a.createElement(vn, {
								width: o(20),
								height: o(20),
								fill: i || "#e7e7e7"
							});
							if (2 === r) return a.createElement(En, {
								width: o(20),
								height: o(20)
							});
							break;
						case "XBX_PSSQUARE":
							if (3 === r) return a.createElement(In, {
								width: o(20),
								height: o(20),
								fill: i || "#e7e7e7"
							});
							if (2 === r) return a.createElement(ma, {
								width: o(20),
								height: o(20),
								fill: i || "#e7e7e7"
							});
							break;
						case "DPAD_LEFT_RIGHT":
							if (3 === r) return a.createElement(Qn, {
								width: n ? 40 : 35,
								height: n ? 40 : 35,
								fill: i || "#e7e7e7"
							});
							if (2 === r) return a.createElement(ta, {
								width: n ? 40 : 35,
								height: n ? 40 : 35,
								fill: i || "#e7e7e7"
							});
							break;
						case "L3":
							if (3 === r) return a.createElement(Cn, {
								width: o(20),
								height: o(20),
								fill: i || "#e7e7e7"
							});
							if (2 === r) return a.createElement(On, {
								width: o(20),
								height: o(20),
								fill: i || "#e7e7e7"
							});
							break;
						case "RT_R2":
							if (3 === r) return a.createElement(Wn, {
								width: o(32),
								height: o(32),
								fill: i || "#e7e7e7"
							});
							if (2 === r) return a.createElement(Bn, {
								width: o(32),
								height: o(32),
								fill: i || "#e7e7e7"
							});
							break;
						case "LT_L2":
							if (3 === r) return a.createElement(Kn, {
								width: o(32),
								height: o(32),
								fill: i || "#e7e7e7"
							});
							if (2 === r) return a.createElement(Zn, {
								width: o(32),
								height: o(32),
								fill: i || "#e7e7e7"
							});
							break;
						case "XBY_PSTRIANGLE":
							if (3 === r) return a.createElement(ia, {
								width: o(20),
								height: o(20),
								fill: i || "#e7e7e7"
							});
							if (2 === r) return a.createElement(sa, {
								width: n ? 40 : 24,
								height: n ? 40 : 24,
								fill: i || "#e7e7e7"
							});
							break;
						default:
							return null
					}
				};
				const fa = function(e) {
					var t = e.type,
						n = e.width,
						r = void 0 === n ? 3.2 : n,
						o = e.height,
						l = void 0 === o ? 3.2 : o,
						s = e.marginLeft,
						c = e.marginRight,
						d = e.fill,
						m = e.style,
						u = (0, i.v9)((function(e) {
							return e.global.lastInputDevice
						})),
						g = (0, i.v9)((function(e) {
							return e.global.lastInputGamepad
						})),
						p = (0, i.v9)((function(e) {
							return e.global.is4k
						})),
						h = pa();
					return 1 !== u || "rightArrow" !== t && "leftArrow" !== t ? 0 === u ? a.createElement(qt, {
						width: r,
						height: l,
						marginLeft: s,
						marginRight: c,
						style: m
					}, a.createElement(ha, {
						type: t,
						is4k: p,
						lastInputGamepad: g,
						fill: d
					})) : null : a.createElement(qt, {
						width: r,
						height: l,
						marginLeft: s,
						marginRight: c
					}, "rightArrow" === t && a.createElement(kn, {
						width: h(16),
						height: h(32),
						fill: d || "#9AA39A"
					}), "leftArrow" === t && a.createElement(Tn, {
						width: h(16),
						height: h(32),
						fill: d || "#9AA39A"
					}))
				};
				var va = function(e, t, n, a) {
						e(F.setClose({
							screen: t,
							type: n,
							tab: a
						})), Wt("ui_select_back", t)
					},
					ba = function(e, t, n, a, r) {
						e(F.setFilterRecency(t)), "Last 10 Games" !== t || n || (e(K({
							gameTitle: "mw2"
						})), e(F.setFilterRecency(t))), "Lifetime" !== t || a || (e(W({
							gameTitle: "mw2"
						})), e(F.setFilterRecency(t))), "Current Season" !== t || r || (e(q()), e(F.setFilterRecency(t)))
					},
					_a = n(87462);

				function ya(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var a = Object.getOwnPropertySymbols(e);
						t && (a = a.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, a)
					}
					return n
				}

				function Ea(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? ya(Object(n), !0).forEach((function(t) {
							(0, N.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ya(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}
				var wa = new Map([
						[1, "LEFT"],
						[2, "RIGHT"],
						[3, "UP"],
						[4, "DOWN"],
						[5, "XBA_PSCROSS"],
						[6, "XBB_PSCIRCLE"],
						[7, "XBX_PSSQUARE"],
						[8, "XBY_PSTRIANGLE"],
						[9, "LB"],
						[10, "RB"],
						[11, "LTRIG"],
						[12, "RTRIG"],
						[13, "LSTICK_PRESSED"],
						[14, "RSTICK_PRESSED"],
						[15, "START"],
						[16, "SELECT"]
					]),
					Sa = {};

				function ka(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
					Sa = Ea(Ea({}, Sa), t), (0, a.useEffect)((function() {
						return window.Telescope_CB_ControllerButtonEvent = function(t, n) {
								var a = Sa[wa.get(n)];
								t === e && "function" == typeof a && a()
							},
							function() {}
					}), (0, Y.Z)(n))
				}
				const xa = function(e, t) {
					var n = t.prev,
						r = t.next,
						o = t.up,
						l = t.down,
						s = t.direct,
						c = t.moveRight,
						d = t.moveLeft,
						m = t.shiftRight,
						u = t.shiftLeft,
						g = t.close,
						p = t.pageUp,
						h = t.pageDown,
						f = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
						v = (0, i.v9)((function(e) {
							return e.global.isBrowser
						}));
					(0, a.useEffect)((function() {
						var e = function(e) {
							switch (e.keyCode) {
								case 71:
									return n && n(e);
								case 72:
									return r && r(e);
								case 38:
									return o && o(e);
								case 40:
									return l && l(e);
								case 13:
									return s && s(e);
								case 188:
									return d && d(e);
								case 190:
									return c && c(e);
								case 49:
									return u && u(e);
								case 50:
									return m && m(e);
								case 27:
									return g && g(e);
								case 33:
									return p && p(e);
								case 34:
									return h && h(e);
								default:
									return function() {}
							}
						};
						if (v) return window.addEventListener("keydown", e),
							function() {
								window.removeEventListener("keydown", e)
							}
					}), [e].concat((0, Y.Z)(f)))
				};
				var Ra, Ta, La = function(e, t, n) {
						return Math.max(t, Math.min(n, e))
					},
					Da = Number.isFinite,
					Ma = function(e) {
						return (100 * e).toFixed(2)
					},
					Ia = function(e) {
						return e.toFixed(2)
					},
					Aa = se.ZP.nav(Ra || (Ra = (0, me.Z)(["\n    .tab-container {\n        border-radius: 0.4rem;\n        position: absolute;\n        display: flex;\n        align-items: center;\n        height: 100%;\n        left: 50%;\n        transform: translate(-50%, 0);\n        justify-content: center;\n        margin: 0 auto;\n        top: 0;\n\n        .arrow {\n            height: 3.2rem;\n            width: 3rem;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            border-radius: 0.4rem;\n            background: #2e2e2e;\n\n            &.arrow-left {\n                left: 0;\n                margin-right: -0.2rem;\n            }\n\n            &.arrow-right {\n                right: 0;\n                margin-left: -0.2rem;\n            }\n\n            svg {\n                fill: #e7e7e7;\n            }\n\n            &:hover {\n                background: ", ";\n\n                svg {\n                    fill: #141313;\n                }\n            }\n        }\n    }\n\n    .tab-list-container {\n        width: auto;\n    }\n\n    .tab-list {\n        align-items: center;\n        border-radius: 0.4rem;\n        color: #727272;\n        cursor: default;\n        display: flex;\n        font-size: 2rem;\n        font-weight: 700;\n        height: 3.2rem;\n        line-height: 2.4rem;\n        margin: 0 auto;\n        max-width: 70rem;\n        overflow: hidden;\n        text-transform: uppercase;\n        gap: 0.4rem;\n\n        // This container *must* have position: relative so that it is the offsetParent\n        // of the tabs, which rely on offsetLeft.\n        position: relative;\n\n        ", "\n\n        .tab {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            background-color: rgba(46, 46, 46, 0.7);\n            color: #afafaf;\n            padding: 0 1.6rem;\n            height: inherit;\n            white-space: nowrap;\n            border-radius: 0.4rem;\n            transition: all 0.15s !important;\n\n            &:hover {\n                background-color: rgba(230, 230, 230, 0.7);\n                border-radius: 0.4rem;\n                color: #353434;\n            }\n        }\n\n        .active-tab {\n            background-color: ", ";\n            color: #141313;\n        }\n\n        .disabled-tab {\n            color: rgba(231, 231, 231, 0.12);\n            pointer-events: none;\n        }\n    }\n\n    .tab-controls {\n        display: flex;\n        flex-direction: row;\n        height: 3.2rem;\n        width: 8rem;\n        align-items: center;\n\n        &.tab-controls-left {\n            justify-content: flex-end;\n        }\n\n        &.tab-controls-right {\n            justify-content: flex-start;\n        }\n    }\n\n    .tab-pips {\n        position: absolute;\n        left: 50%;\n        bottom: 0;\n        transform: translate(-50%, 0);\n        display: flex;\n    }\n\n    .bar {\n        width: 3.6rem;\n        background: #323331;\n        height: 0.4rem;\n        margin-right: 0.6rem;\n        &-active {\n            background: #e7e7e7;\n        }\n    }\n"])), (function(e) {
						return e.theme.colors.primaryGreen
					}), (function(e) {
						var t = e.isScrolledToLeftEdge,
							n = e.isScrolledToRightEdge;
						return (0, se.iv)(Ta || (Ta = (0, me.Z)(["\n            // This adds a shadow to the left or right edge if not scrolled all the way\n            // in that direction.\n            -webkit-mask: linear-gradient(\n                90deg,\n                #0000,\n                #000 ", " ", ",\n                #0000\n            );\n        "])), t ? 0 : "4.8rem", n ? "100%" : "calc(100% - 4.8rem)")
					}), (function(e) {
						return e.theme.colors.neutralLight
					}));

				function Na(e, t) {
					var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
					if (!n) {
						if (Array.isArray(e) || (n = function(e, t) {
								if (e) {
									if ("string" == typeof e) return Ca(e, t);
									var n = Object.prototype.toString.call(e).slice(8, -1);
									return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ca(e, t) : void 0
								}
							}(e)) || t && e && "number" == typeof e.length) {
							n && (e = n);
							var a = 0,
								r = function() {};
							return {
								s: r,
								n: function() {
									return a >= e.length ? {
										done: !0
									} : {
										done: !1,
										value: e[a++]
									}
								},
								e: function(e) {
									throw e
								},
								f: r
							}
						}
						throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}
					var i, o = !0,
						l = !1;
					return {
						s: function() {
							n = n.call(e)
						},
						n: function() {
							var e = n.next();
							return o = e.done, e
						},
						e: function(e) {
							l = !0, i = e
						},
						f: function() {
							try {
								o || null == n.return || n.return()
							} finally {
								if (l) throw i
							}
						}
					}
				}

				function Ca(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
					return a
				}
				const Pa = function() {
					for (var e = new Set, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
					for (var r = [].concat(n); 0 !== r.length;) {
						var i = r.shift();
						if (i)
							if ("string" == typeof i) {
								var o, s = Na(i.split(/\s+/));
								try {
									for (s.s(); !(o = s.n()).done;) {
										var c = o.value;
										e.add(c)
									}
								} catch (e) {
									s.e(e)
								} finally {
									s.f()
								}
							} else if (Array.isArray(i)) {
							var d, m = Na(i);
							try {
								for (m.s(); !(d = m.n()).done;) {
									var u = d.value;
									r.push(u)
								}
							} catch (e) {
								m.e(e)
							} finally {
								m.f()
							}
						} else if ("object" === (0, l.Z)(i))
							for (var g = 0, p = Object.keys(i); g < p.length; g++) {
								var h = p[g];
								i.hasOwnProperty && !i.hasOwnProperty(h) || i[h] && e.add(h)
							} else e.add(String(i))
					}
					return Array.from(e).join(" ")
				};
				var za = function(e) {
					var t = e.index,
						n = e.label,
						r = e.isSelected,
						i = e.isDisabled,
						o = e.onHover,
						l = e.onClick;
					return a.createElement("div", {
						onMouseOver: o,
						onClick: function() {
							return l(t)
						},
						className: Pa("tab", {
							"disabled-tab": i
						}, r && !i ? "active-tab" : "inactive-tab"),
						"data-index": t
					}, n)
				};
				const Oa = (0, a.forwardRef)((function(e, t) {
					var n = e.tabs,
						r = e.selectedIndex,
						o = e.tabLabel,
						l = e.isTabDisabled,
						s = e.onTabHover,
						c = e.onTabClick,
						d = e.onScroll,
						m = (0, i.v9)((function(e) {
							return e.global.language
						}));
					return a.createElement("div", {
						ref: t,
						className: "tab-list",
						onScroll: d
					}, n.map((function(e, t) {
						var n = l(e);
						return a.createElement(za, {
							key: t,
							index: t,
							label: o(e),
							isSelected: t === r,
							isDisabled: n,
							onHover: n ? void 0 : s,
							onClick: n ? void 0 : c,
							language: m
						})
					})))
				}));
				var ja = function(e) {
					var t = e.index,
						n = e.isSelected,
						r = e.onClick;
					return a.createElement("div", {
						className: Pa("bar", {
							"bar-active": n
						}),
						"data-index": t,
						onClick: function() {
							return r(t)
						}
					})
				};
				const Ba = function(e) {
					var t = e.count,
						n = e.selectedIndex,
						r = e.onPipClick;
					return a.createElement("div", {
						className: "tab-pips"
					}, Array.from({
						length: t
					}).map((function(e, t) {
						return a.createElement(ja, {
							key: t,
							index: t,
							isSelected: t === n,
							onClick: r
						})
					})))
				};
				var Ga = function(e, t) {
						return e.map((function(e, n) {
							return "".concat(n, ":").concat(String(t(e)))
						})).join(",")
					},
					Za = function(e) {
						var t, n, r = e.tabs,
							o = e.tabLabel,
							l = e.selectedTabIndex,
							s = e.onTabSelect,
							c = e.isTabDisabled,
							d = void 0 === c ? function() {
								return !1
							} : c,
							m = (0, a.useRef)(),
							u = (0, a.useState)(!0),
							g = (0, et.Z)(u, 2),
							p = g[0],
							h = g[1],
							f = (0, a.useState)(!0),
							v = (0, et.Z)(f, 2),
							b = v[0],
							_ = v[1],
							y = (0, i.v9)((function(e) {
								return e.record.selectedScreen
							})),
							E = (0, i.v9)((function(e) {
								return e.leaderboard.showFilter
							})),
							w = pa(),
							S = (0, i.v9)(D),
							k = function(e) {
								var t = m.current,
									n = null == t ? void 0 : t.querySelector('[data-index="'.concat(e, '"]'));
								if (!t || !n) return !1;
								var a = t.scrollLeft,
									i = t.scrollWidth,
									o = t.clientWidth,
									l = a + o;
								if (0 !== e)
									if (e !== (null == r ? void 0 : r.length) - 1) {
										var s = n.offsetLeft,
											c = s + n.getBoundingClientRect().width;
										if (s < a + 48) {
											var d = Math.floor(Math.max(0, s - 48));
											t.scrollLeft = d
										} else if (c > l - 48) {
											var u = Math.ceil(Math.min(i, c + 48)) - o;
											t.scrollLeft = u
										}
									} else t.scrollLeft = i;
								else t.scrollLeft = 0
							},
							x = (0, a.useCallback)((function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
									n = La(e, 0, (null == r ? void 0 : r.length) - 1);
								Wt("ui_hilite_tab", "tab"), n !== l && (s(null == r ? void 0 : r[e], e, t), k(n))
							}), [r, s, l]);
						(0, a.useEffect)((function() {
							for (var e = l; e > 0 && d(r[l]);) e -= 1;
							e !== l && x(e)
						}), [r, l]);
						var R = (0, a.useCallback)((function() {
								x(l - 1, "left")
							}), [x, l]),
							T = (0, a.useCallback)((function() {
								x(l + 1, "right")
							}), [x, l]),
							L = function() {
								return "leaderboards" === y ? !E && (S ? T() : R()) : S ? T() : R()
							},
							M = function() {
								return "leaderboards" === y ? !E && (S ? R() : T()) : S ? R() : T()
							},
							I = function(e) {
								x(e)
							};
						xa(l, {
							moveLeft: L,
							moveRight: M
						}, [E, R, T]), ka(1, {
							LB: L,
							RB: M
						}, [E, R, T]), (0, a.useEffect)((function() {
							k(l)
						}), [l]), (0, a.useEffect)((function() {
							k(l)
						}), [null === (t = m.current) || void 0 === t ? void 0 : t.getBoundingClientRect().width, null === (n = m.current) || void 0 === n ? void 0 : n.scrollWidth]), (0, a.useEffect)((function() {
							var e = m.current;
							e && (e.scrollLeft = e.scrollWidth, setTimeout((function() {
								return e.scrollLeft = 0
							}), 0)), A()
						}), []);
						var A = function() {
								var e;
								h(!!(e = m.current) && e.scrollLeft < 1), _(function() {
									var e = m.current;
									if (!e) return !1;
									var t = e.scrollWidth,
										n = e.scrollLeft + e.clientWidth;
									return Math.abs(t - n) < 1
								}())
							},
							N = p && b;
						return a.createElement(Aa, {
							isScrolledToLeftEdge: p,
							isScrolledToRightEdge: b
						}, a.createElement("div", {
							className: "tab-container",
							style: {
								direction: S ? "rtl" : ""
							}
						}, a.createElement("div", {
							className: "tab-controls tab-controls-left"
						}, a.createElement(fa, {
							type: "LB_L1",
							width: 2,
							height: 2,
							marginLeft: .4,
							marginRight: 1.4,
							fill: "#C0C0C0"
						}), !p && a.createElement("div", {
							className: "arrow-left arrow",
							onClick: R
						}, a.createElement(Tn, {
							width: w(12),
							height: w(22.5)
						}))), a.createElement("div", {
							className: "tab-list-container"
						}, a.createElement(Oa, {
							ref: m,
							tabs: r,
							tabLabel: o,
							isTabDisabled: d,
							onTabSelect: s,
							selectedIndex: l,
							onTabHover: function() {
								Wt("ui_hilite")
							},
							onTabClick: I,
							onScroll: A
						})), a.createElement("div", {
							className: "tab-controls tab-controls-right"
						}, !b && a.createElement("div", {
							className: "arrow-right arrow",
							onClick: T
						}, a.createElement(kn, {
							width: w(12),
							height: w(22.5)
						})), a.createElement(fa, {
							type: "RB_R1",
							width: 2,
							height: 2,
							marginLeft: 1.4,
							marginRight: .6,
							fill: "#C0C0C0"
						}))), r.length > 0 && !N && a.createElement(Ba, {
							count: r.length,
							selectedIndex: l,
							onPipClick: I
						}))
					};
				const Ua = function(e) {
					var t = e.tabs,
						n = e.tabId,
						r = e.tabLabel;
					return t && 0 !== t.length ? a.createElement(Za, (0, _a.Z)({
						key: Ga(t, n || r)
					}, e)) : null
				};
				var Ka, Ha, Wa = se.ZP.nav(Ka || (Ka = (0, me.Z)(["\n    height: 8.8rem;\n    position: relative;\n    display: flex;\n    align-items: center;\n    flex: 1;\n    margin-right: 24rem;\n\n    .screen-name {\n        font-size: 3.2rem;\n        color: ", ";\n        text-transform: uppercase;\n        padding-left: 1.6rem;\n        width: ", "rem;\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.isController ? 56.8 : 62
					})),
					qa = se.ZP.nav(Ha || (Ha = (0, me.Z)(["\n    height: 8.8rem;\n    position: relative;\n    display: flex;\n    align-items: center;\n    width: 90%;\n    div {\n        font-size: 2rem;\n        text-transform: uppercase;\n        cursor: pointer;\n        border-radius: 0.4rem;\n        margin: 0 auto;\n        background: ", ";\n        color: #141313;\n        padding: 0.8rem;\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}));
				const Fa = function(e) {
					var t = e.tabs,
						n = void 0 === t ? [] : t,
						r = e.selectedTabIndex,
						o = e.onTabSelect,
						l = (0, i.v9)((function(e) {
							return e.record.selectedScreen
						})),
						s = (0, i.v9)((function(e) {
							return e.global.language
						})),
						c = 0 === (0, i.v9)((function(e) {
							return e.global.lastInputDevice
						}));
					return a.createElement(Wa, {
						isController: c
					}, a.createElement("div", {
						className: "screen-name"
					}, function(e, t) {
						switch (e) {
							case "entryscreen":
							case "lbentryscreen":
								return kt[t].stats;
							case "dashboard":
								return kt[t].dashboard;
							case "loadout":
								return kt[t].loadOut;
							case "recents":
								return kt[t].recentMatchesModes;
							case "recentsWz2":
								return kt[t].recentMatches;
							case "recentsDmz":
								return kt[t].deploymentsExtractedItems;
							case "career":
								return kt[t].career;
							default:
								return ""
						}
					}(l, s)), a.createElement(Ua, {
						tabs: n,
						tabId: function(e) {
							var t;
							return (null == kt || null === (t = kt[s]) || void 0 === t ? void 0 : t[e.title]) || e.title
						},
						tabLabel: function(e) {
							var t;
							return (null == kt || null === (t = kt[s]) || void 0 === t ? void 0 : t[e.title]) || e.title
						},
						selectedTabIndex: r,
						onTabSelect: o,
						isTabDisabled: function(e) {
							return e.isDisabled
						}
					}))
				};
				se.ZP.section(Va || (Va = (0, me.Z)(["\n    min-height: 108rem;\n    ", "\n    &.entry-screen-background {\n        background-image: url('https://assets.callofduty.com/cdn/app/codp/iw9/background/menu_keyart_team_deathmatch_layer_1920x1080.jpg');\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: center;\n    }\n    &.default-background {\n        background: linear-gradient(360deg, #000000 0%, #000000 31.66%, rgba(0, 0, 0, 0) 67.74%),\n            url('https://assets.callofduty.com/cdn/app/codp/iw9/background/CR_bkgd_1920x1080.jpg');\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: center;\n    }\n    .empty-background {\n        background: #3b3b3a !important;\n    }\n    .empty-text {\n        color: #9aa39a !important;\n    }\n"])), (function(e) {
					return e.isArabic && (0, se.iv)(Ya || (Ya = (0, me.Z)(["\n            direction: rtl;\n        "])))
				}));
				var Va, Ya, Qa, Xa, Ja = se.ZP.div(Qa || (Qa = (0, me.Z)(["\n    height: 8.8rem;\n    display: flex;\n    align-items: center;\n    padding-left: 2.4rem;\n    text-transform: uppercase;\n    width: 100%;\n    background: linear-gradient(88.12% 100% at 50% 0%, #1d1f14 0%, rgba(29, 31, 20, 0.01) 100%);\n    .close-button {\n        width: 4.8rem;\n        height: 5.4rem;\n        display: flex;\n        align-items: center;\n        margin-right: 1.6rem;\n        transition: all 0.2s;\n        border-color: rgba(231, 231, 231, 0.1);\n        border-width: 0.1rem;\n        border-style: solid;\n        border-radius: 0.3rem;\n        justify-content: center;\n        background: rgba(20, 19, 19, 0.2);\n        svg {\n            color: rgb(231, 231, 231);\n            opacity: 0.6;\n        }\n        &:hover {\n            color: #9aa39a;\n            background: linear-gradient(180deg, rgba(154, 163, 154, .2) 0%, rgba(154, 163, 154, 0.04) 100%), rgba(20, 19, 19, 0.2);\n            svg {\n                opacity: 0.8;\n            }\n        }\n    }\n"]))),
					$a = se.ZP.div(Xa || (Xa = (0, me.Z)(["\n    top: 14rem;\n    color: #494949;\n    font-style: italic;\n    font-family: 'DIN Next LT Pro';\n    text-align: right;\n    margin: 1.1rem 9.6rem;\n    font-size: 1.8rem;\n"])));
				const er = function(e) {
					var t = e.tabs,
						n = (0, i.I0)(),
						r = (0, i.v9)((function(e) {
							return e.global.language
						})),
						o = ((0, i.v9)((function(e) {
							return e.global.is4k
						})), (0, i.v9)((function(e) {
							return e.global.isCrossConfirm
						}))),
						l = (0, i.v9)((function(e) {
							return e.record.selectedScreen
						})),
						s = (0, i.v9)((function(e) {
							return e.record.selectedType
						})),
						c = (0, i.v9)(D),
						d = (0, i.v9)((function(e) {
							return e.global.env
						})),
						m = (0, i.v9)((function(e) {
							return e.record.selectedTab
						})),
						u = (0, i.v9)((function(e) {
							return e.global.selectedMainTabIndex
						})),
						g = "entryscreen" === l ? u : m,
						p = pa();
					return a.createElement(Ja, {
						style: {
							direction: c ? "ltr" : ""
						}
					}, a.createElement("div", {
						className: "close-button",
						onClick: function() {
							return va(n, l, s, m)
						},
						onMouseEnter: function() {
							return Wt("ui_hilite")
						}
					}, a.createElement(Tn, {
						width: p(12),
						height: p(22.5),
						fill: "#e7e7e7"
					}), a.createElement(fa, {
						type: o ? "XBB_PSCIRCLE" : "XBA_PSCROSS",
						width: 2,
						height: 2,
						marginLeft: .4
					})), "cert" === d ? a.createElement(qa, null, a.createElement("div", null, kt[r].entryTabs[1])) : a.createElement(Fa, {
						tabs: t,
						selectedTabIndex: g,
						onTabSelect: function(e, a, r) {
							var i = a;
							if (e.isDisabled) {
								var o = !1;
								if ("right" === r) {
									for (; i < t.length;) {
										if (!t[i].isDisabled) {
											o = !0;
											break
										}
										i += 1
									}
									o || (i = a - 1)
								} else if ("left" === r) {
									for (; i >= 0;) {
										if (!t[i].isDisabled) {
											o = !0;
											break
										}
										i -= 1
									}
									o || (i = a + 1)
								}
							}
							n(F.setSelectedTab(i));
							var l = t[i];
							"cr" === l.val || "lb" === l.val ? (n(F.setSelectedScreen("entryscreen")), n(M.setSelectedMainTabIndex(i))) : "mp" === l.val ? (n(M.setGameTitle("mw2")), n(F.setSelectedGameMode(l.val))) : ["br", "resurgence", "plunder", "dmz"].includes(l.val) && (n(M.setGameTitle("wz2")), n(F.setSelectedGameMode(l.val))), Wt("ui_hilite_tab", "tab")
						}
					}))
				};
				var tr, nr = se.ZP.section(tr || (tr = (0, me.Z)(["\n    height: 99.2rem;\n    width: 192rem;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0.38) 0%, #000000 100%);\n    display: flex;\n    justify-content: center;\n    .message-section {\n        color: #e7e7e7;\n        font-size: 3.2rem;\n        bottom: 20rem;\n        position: absolute;\n        text-transform: uppercase;\n        padding: 0.2rem;\n        background: rgba(186, 186, 186, 0.06);\n    }\n    .message-section {\n        animation: fade 2s linear infinite;\n    }\n    @keyframes fade {\n        from {\n            opacity: 1;\n        }\n        to {\n            opacity: 0;\n        }\n    }\n"])));
				const ar = function(e) {
					var t = e.message,
						n = (0, i.v9)((function(e) {
							return e.global.language
						}));
					return a.createElement(nr, null, a.createElement("div", {
						className: "message-section"
					}, t || kt[n].loading))
				};
				Number.isFinite;
				var rr, ir = [{
					title: "iw9",
					gameType: [{
						type: "multiplayer",
						icon: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/icon_branding_mwii_watermark_med_108x30.png",
						tileImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/icon_mode_mw_mp_120x120.png",
						tileGameIcon: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/mw2-logo-white-gray_58x16.png",
						tileBgImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/entrypoint-mw2-multiplayer_424x204.jpg",
						bgImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/entrypoint_mw2_mp_1920x1080.jpg",
						options: [{
							gameTitle: "mw2",
							gameMode: "career",
							tileImage: "https://assets.callofduty.com/cdn/app/codp/iw9/background/combat_record_lb_mp_btn_bkgd_multiplayer_426x240.jpg",
							tileIcon: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/CR_icon_career_104x104.png",
							bgImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/combat_record_lb_mp_bkgd_career_1920x1080.jpg",
							menuItems: [{
								gameMode: "career"
							}, {
								gameMode: "kills"
							}, {
								gameMode: "wins"
							}, {
								gameMode: "critical"
							}]
						}, {
							gameTitle: "mw2",
							gameMode: "kills",
							tileImage: "https://assets.callofduty.com/cdn/app/codp/iw9/background/combat_record_lb_mp_btn_bkgd_kills_426x240.jpg",
							tileIcon: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/CR_icon_kills_104x104.png",
							bgImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/combat_record_lb_mp_bkgd_kills_1920x1080.jpg",
							menuItems: [{
								gameMode: "career"
							}, {
								gameMode: "kills"
							}, {
								gameMode: "wins"
							}, {
								gameMode: "critical"
							}]
						}, {
							gameTitle: "mw2",
							gameMode: "wins",
							tileImage: "https://assets.callofduty.com/cdn/app/codp/iw9/background/combat_record_lb_mp_btn_bkgd_wins_426x240.jpg",
							tileIcon: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/CR_icon_wins_104x104.png",
							bgImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/combat_record_lb_mp_bkgd_wins_1920x1080.jpg",
							menuItems: [{
								gameMode: "career"
							}, {
								gameMode: "kills"
							}, {
								gameMode: "wins"
							}, {
								gameMode: "critical"
							}]
						}, {
							gameTitle: "mw2",
							gameMode: "critical",
							tileImage: "https://assets.callofduty.com/cdn/app/codp/iw9/background/combat_record_lb_mp_btn_bkgd_critical_damage_426x240.jpg",
							tileIcon: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/CR_icon_critical_damage_104x104.png",
							bgImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/combat_record_lb_mp_bkgd_cdamage_1920x1080.jpg",
							menuItems: [{
								gameMode: "career"
							}, {
								gameMode: "kills"
							}, {
								gameMode: "wins"
							}, {
								gameMode: "critical"
							}]
						}, {
							gameTitle: "mw2",
							gameMode: "gameModes",
							tileImage: "https://assets.callofduty.com/cdn/app/codp/iw9/background/combat_record_lb_mp_btn_bkgd_game_modes_426x240.jpg",
							tileIcon: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/CR_icon_game_mode_104x04.png",
							bgImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/combat_record_lb_mp_bkgd_gamemodes_1920x1080.jpg",
							menuItems: [{
								gameMode: "tdm"
							}, {
								gameMode: "dm"
							}, {
								gameMode: "conf"
							}, {
								gameMode: "control"
							}, {
								gameMode: "sd"
							}, {
								gameMode: "cyber"
							}, {
								gameMode: "bounty"
							}, {
								gameMode: "dom"
							}, {
								gameMode: "koth"
							}, {
								gameMode: "hq"
							}, {
								gameMode: "ko"
							}]
						}]
					}, {
						type: "battleRoyale",
						icon: "https://assets.callofduty.com/cdn/app/codp/iw9/logo/icon_branding_wz2_watermark_med_99x30.png",
						tileImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/icon_mode_wz_br%20_120x120.png",
						tileGameIcon: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/wz2-logo-icon-37x16.png",
						tileBgImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/EntryPoint-WZ2-BattleRoyal_424x204.jpg",
						bgImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/entrypoint_wz2_br_1920x1080.jpg",
						options: [{
							gameTitle: "wz2",
							gameMode: "career",
							tileImage: "https://assets.callofduty.com/cdn/app/codp/iw9/background/combat_record_lb_mp_btn_bkgd_multiplayer_426x240.jpg",
							tileIcon: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/CR_icon_career_104x104.png",
							bgImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/combat_record_lb_mp_bkgd_career_1920x1080.jpg",
							menuItems: [{
								gameMode: "career"
							}, {
								gameMode: "kills"
							}, {
								gameMode: "placement"
							}, {
								gameMode: "critical"
							}, {
								gameMode: "gulag"
							}]
						}, {
							gameTitle: "wz2",
							gameMode: "kills",
							tileImage: "https://assets.callofduty.com/cdn/app/codp/iw9/background/combat_record_lb_mp_btn_bkgd_kills_426x240.jpg",
							tileIcon: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/CR_icon_kills_104x104.png",
							bgImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/combat_record_lb_mp_bkgd_kills_1920x1080.jpg",
							menuItems: [{
								gameMode: "career"
							}, {
								gameMode: "kills"
							}, {
								gameMode: "placement"
							}, {
								gameMode: "critical"
							}, {
								gameMode: "gulag"
							}]
						}, {
							gameTitle: "wz2",
							gameMode: "placement",
							tileImage: "https://assets.callofduty.com/cdn/app/codp/iw9/background/combat_record_lb_mp_btn_bkgd_wins_426x240.jpg",
							tileIcon: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/CR_icon_placement_104x104.png",
							bgImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/combat_record_lb_mp_bkgd_wins_1920x1080.jpg",
							menuItems: [{
								gameMode: "career"
							}, {
								gameMode: "kills"
							}, {
								gameMode: "placement"
							}, {
								gameMode: "critical"
							}, {
								gameMode: "gulag"
							}]
						}, {
							gameTitle: "wz2",
							gameMode: "critical",
							tileImage: "https://assets.callofduty.com/cdn/app/codp/iw9/background/combat_record_lb_mp_btn_bkgd_critical_damage_426x240.jpg",
							tileIcon: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/CR_icon_critical_damage_104x104.png",
							bgImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/combat_record_lb_mp_bkgd_cdamage_1920x1080.jpg",
							menuItems: [{
								gameMode: "career"
							}, {
								gameMode: "kills"
							}, {
								gameMode: "placement"
							}, {
								gameMode: "critical"
							}, {
								gameMode: "gulag"
							}]
						}, {
							gameTitle: "wz2",
							gameMode: "gulag",
							tileImage: "https://assets.callofduty.com/cdn/app/codp/iw9/background/combat_record_lb_mp_btn_bkgd_game_modes_426x240.jpg",
							tileIcon: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/CR_icon_gulag_104x104.png",
							bgImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/combat_record_lb_mp_bkgd_gameModes_1920x1080.jpg",
							menuItems: [{
								gameMode: "career"
							}, {
								gameMode: "kills"
							}, {
								gameMode: "placement"
							}, {
								gameMode: "critical"
							}, {
								gameMode: "gulag"
							}]
						}, {
							gameTitle: "wz2",
							gameMode: "gameModes",
							tileImage: "https://assets.callofduty.com/cdn/app/codp/iw9/background/combat_record_lb_mp_btn_bkgd_game_modes_426x240.jpg",
							tileIcon: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/CR_icon_game_mode_104x04.png",
							bgImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/combat_record_lb_mp_bkgd_gameModes_1920x1080.jpg",
							menuItems: [{
								gameMode: "br"
							}]
						}]
					}]
				}];

				function or() {
					return or = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, or.apply(this, arguments)
				}
				const lr = function(e) {
						return a.createElement("svg", or({
							viewBox: "0 0 16 20",
							fill: "current",
							xmlns: "http://www.w3.org/2000/svg"
						}, e), rr || (rr = a.createElement("path", {
							d: "M15.231 8.497H14.08c-.148 0-.296-.113-.296-.282V5.628c0-2.981-2.42-5.512-5.548-5.624-3.277-.113-5.992 2.39-5.992 5.512v2.728c0 .14-.118.282-.296.282H.797c-.443 0-.797.337-.797.759v9.956c0 .421.354.759.797.759H15.2c.443 0 .797-.338.797-.76l.001-9.984c.03-.422-.324-.76-.767-.76ZM4.044 5.516c0-2.166 1.89-3.91 4.192-3.797 2.155.112 3.807 1.856 3.807 3.909v2.616c0 .14-.117.281-.295.281H4.31c-.148 0-.296-.113-.296-.282V5.516h.03Z",
							fill: "666A66"
						})))
					},
					sr = n.p + "529b0dcfbc689790ec28.png";
				var cr, dr, mr, ur = se.ZP.button(cr || (cr = (0, me.Z)(["\n    width: 5.2rem;\n    height: 5.6rem;\n    background-color: #3b3b3a;\n    border: 1px solid #50504f;\n    border-radius: 0.5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    pointer-events: none;\n    transform-origin: center center;\n    flex-shrink: 0;\n"]))),
					gr = se.ZP.div(dr || (dr = (0, me.Z)(["\n    width: 1.6rem;\n    height: 3.2rem;\n    mask-image: url('", "');\n    background-color: #e7e7e7;\n    opacity: 0.6;\n    pointer-events: none;\n    -webkit-mask-size: cover;\n"])), sr),
					pr = se.ZP.div(mr || (mr = (0, me.Z)(["\n    /* for debug: */\n    /* background-color: #5f28; */\n    position: absolute;\n    top: 0;\n    width: 10rem;\n    height: 21.1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 1rem;\n\n    &:hover {\n        ", " {\n            background-image: linear-gradient(#79c370, #639f5b);\n            border-color: #368947;\n        }\n\n        ", " {\n            background-color: #141313;\n            opacity: 0.8;\n        }\n    }\n"])), ur, gr),
					hr = function(e) {
						var t = e.hoverTargetStyle,
							n = e.arrowButtonStyle,
							r = e.onClick;
						return a.createElement(pr, {
							style: t,
							onClick: function() {
								Wt("ui_select_confirm"), r()
							},
							onMouseOver: function() {
								Wt("ui_mouse_over_hilite")
							}
						}, a.createElement(ur, {
							style: n
						}, a.createElement(gr, null)))
					};

				function fr(e) {
					var t = e.onClick,
						n = e.isRtl;
					return a.createElement(hr, {
						hoverTargetStyle: {
							left: 0,
							justifyContent: n ? "flex-start" : "flex-end"
						},
						arrowButtonStyle: {
							transform: "rotate(180deg)"
						},
						onClick: t
					})
				}

				function vr(e) {
					var t = e.onClick,
						n = e.isRtl;
					return a.createElement(hr, {
						hoverTargetStyle: {
							right: 0,
							justifyContent: n ? "flex-end" : "flex-start"
						},
						onClick: t
					})
				}
				const br = function(e) {
						var t = e.tiles,
							n = e.selectedTile,
							r = e.onTileSelect,
							o = (0, i.v9)((function(e) {
								return e.global.language
							})),
							l = (0, i.v9)(D),
							s = (0, i.v9)((function(e) {
								return e.global.isCrossConfirm
							})),
							c = 0 === (0, i.v9)((function(e) {
								return e.global.lastInputDevice
							})),
							d = function(e) {
								return e ? Ke : Ue
							}(l),
							m = (0, a.useMemo)((function() {
								return parseInt(pt, 10) * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 10)
							}), []),
							u = at(d, '[data-scroll-item="CRGameTiles"]', {
								scrollOptions: {
									padding: m
								},
								itemScrollOptions: {
									padding: m
								}
							}),
							g = u.scrollContainerRef,
							p = u.scrollContentRef,
							h = u.itemScroll,
							f = u.hscroll,
							v = t.findIndex((function(e) {
								return e.id === n
							}));
						return (0, a.useEffect)((function() {
							h && h.scrollItemAtIndexIntoView(v)
						}), [h, n, v]), a.createElement(St, {
							ref: g,
							direction: d
						}, a.createElement(Ye, {
							ref: p,
							className: "game-types"
						}, t.map((function(e) {
							return a.createElement("div", {
								key: e.title,
								onMouseEnter: function() {
									e.hoverFunction(), Wt("ui_hilite")
								},
								className: e.classNames,
								"data-scroll-item": "CRGameTiles",
								onClick: function() {
									return e.clickFunction()
								},
								style: {
									backgroundImage: "url(".concat(e.backgroundImage, ")")
								}
							}, e.isLocked && a.createElement("div", {
								className: "lock-icon"
							}, a.createElement(lr, {
								fill: "#9AA39A"
							})), a.createElement("img", {
								className: "tile-image",
								src: e.tileImage
							}), a.createElement("div", {
								className: "tile-name"
							}, a.createElement("div", null, e.title)), a.createElement("img", {
								className: "tile-game-icon",
								src: e.tileGameIcon
							}), n === e.label && a.createElement("div", {
								className: "bottom"
							}, a.createElement("div", {
								className: "bottom-content"
							}, a.createElement("div", {
								className: "bottom-icon"
							}, a.createElement(fa, {
								type: s ? "XBA_PSCROSS" : "XBB_PSCIRCLE",
								width: 2,
								height: 2,
								marginLeft: l ? .8 : 0,
								marginRight: l ? 0 : .8,
								fill: "#3c5938"
							})), a.createElement("div", {
								className: "bottom-text",
								style: {
									fontSize: "brazilianportuguese" === o || "portuguese" === o ? "calc(100% - 0.3rem)" : ""
								}
							}, e.isLocked ? e.lockMessage : kt[o].select))))
						}))), f && !c && a.createElement(a.Fragment, null, !f.isScrolledToLeftEdge() && a.createElement(fr, {
							onClick: function() {
								if (h && (h.shiftLeft(), !h.isItemAtIndexFullyVisible(v))) {
									var e = h.getRightMostVisibleIndex();
									r(e)
								}
							},
							isRtl: l
						}), !f.isScrolledToRightEdge() && a.createElement(vr, {
							onClick: function() {
								if (h && (h.shiftRight(), !h.isItemAtIndexFullyVisible(v))) {
									var e = h.getLeftMostVisibleIndex();
									r(e)
								}
							},
							isRtl: l
						})))
					},
					_r = function() {
						var e = (0, i.I0)(),
							t = (0, i.v9)((function(e) {
								return e.global.language
							})),
							n = (0, i.v9)(D),
							r = (0, i.v9)((function(e) {
								return e.global.isCrossConfirm
							})),
							o = (0, i.v9)((function(e) {
								return e.record.crData
							})),
							l = (0, i.v9)((function(e) {
								return e.record.wzData
							})),
							s = (0, i.v9)((function(e) {
								return e.record.resurgenceData
							})),
							c = (0, i.v9)((function(e) {
								return e.record.plunderData
							})),
							d = (0, i.v9)((function(e) {
								return e.record.dmzData
							})),
							m = (0, i.v9)((function(e) {
								return e.record.crDataLoaded
							})),
							u = (0, i.v9)((function(e) {
								return e.record.wzDataLoaded
							})),
							g = (0, i.v9)((function(e) {
								return e.record.resurgenceDataLoaded
							})),
							p = (0, i.v9)((function(e) {
								return e.record.plunderDataLoaded
							})),
							h = (0, i.v9)((function(e) {
								return e.record.dmzDataLoaded
							})),
							f = (0, i.v9)((function(e) {
								return e.record.selectedGameMode
							})),
							v = ["mp", "br", "resurgence", "plunder", "dmz"],
							b = function(e) {
								var t = null == o ? void 0 : o.genericStats;
								if ("br" === e ? t = null == l ? void 0 : l.genericStats : "resurgence" === e ? t = null == s ? void 0 : s.genericStats : "plunder" === e ? t = null == c ? void 0 : c.genericStats : "dmz" === e && (t = null == d ? void 0 : d.genericStats), f === e) {
									var n, a, r, i;
									if ("dmz" === e) {
										if (null !== (r = t) && void 0 !== r && r.totalDeployments && (null === (i = t) || void 0 === i ? void 0 : i.totalDeployments) >= 5) return "active-tile game-type"
									} else if (null !== (n = t) && void 0 !== n && n.totalGamesPlayed && (null === (a = t) || void 0 === a ? void 0 : a.totalGamesPlayed) >= 5) return "active-tile game-type";
									return "active-tile locked-tile game-type"
								}
								return "game-type"
							},
							_ = [{
								id: "mp",
								gameTitle: "mw2",
								title: kt[t].multiplayer,
								isLocked: zt("mw2", "mp", o, l, s, c, d),
								icon: ir[0].gameType[0].icon,
								label: "mp",
								hoverFunction: function() {
									e(M.setGameTitle("mw2")), e(F.setActiveCrTitle("mw2")), e(F.setSelectedGameMode("mp"))
								},
								clickFunction: function() {
									return A()
								},
								classNames: b("mp"),
								backgroundImage: ir[0].gameType[0].tileBgImage,
								tileImage: ir[0].gameType[0].tileImage,
								tileGameIcon: ir[0].gameType[0].tileGameIcon,
								lockMessage: kt[t].lockedTileMessage
							}],
							y = [{
								id: "br",
								gameTitle: "wz2",
								title: kt[t].battleRoyale,
								icon: ir[0].gameType[1].icon,
								isLocked: zt("wz2", "br", o, l, s, c, d),
								label: "br",
								hoverFunction: function() {
									e(M.setGameTitle("wz2")), e(F.setActiveCrTitle("wz2")), e(F.setSelectedGameMode("br"))
								},
								clickFunction: function() {
									return A()
								},
								classNames: b("br"),
								backgroundImage: ir[0].gameType[1].tileBgImage,
								tileImage: ir[0].gameType[1].tileImage,
								tileGameIcon: ir[0].gameType[1].tileGameIcon,
								lockMessage: kt[t].lockedTileWZMessage
							}],
							E = [{
								id: "resurgence",
								gameTitle: "wz2",
								title: kt[t].resurgence,
								icon: ir[0].gameType[1].icon,
								isLocked: zt("wz2", "resurgence", o, l, s, c, d),
								label: "resurgence",
								hoverFunction: function() {
									e(M.setGameTitle("wz2")), e(F.setActiveCrTitle("wz2")), e(F.setSelectedGameMode("resurgence"))
								},
								clickFunction: function() {
									return A()
								},
								classNames: b("resurgence"),
								backgroundImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/entrypoint-wz2-resurgence_424x204.jpg",
								tileImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/icon_mode_wz_br_resurge_120x120.png",
								tileGameIcon: ir[0].gameType[1].tileGameIcon,
								lockMessage: kt[t].lockedTileWZMessage
							}],
							w = [{
								id: "plunder",
								gameTitle: "wz2",
								title: kt[t].plunder,
								icon: ir[0].gameType[1].icon,
								isLocked: zt("wz2", "plunder", o, l, s, c, d),
								label: "plunder",
								hoverFunction: function() {
									e(M.setGameTitle("wz2")), e(F.setActiveCrTitle("wz2")), e(F.setSelectedGameMode("plunder"))
								},
								clickFunction: function() {
									return A()
								},
								classNames: b("plunder"),
								backgroundImage: "https://assets.callofduty.com/cdn/app/codp/iw9/background/wz2-plunder-entrypoint-424x204.jpg",
								tileImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/icon_mode_wz_br_resurge_120x120.png",
								tileGameIcon: ir[0].gameType[1].tileGameIcon,
								lockMessage: kt[t].lockedTileWZMessage
							}],
							S = [{
								id: "dmz",
								title: kt[t].dmz,
								gameTitle: "dmz",
								icon: ir[0].gameType[1].icon,
								isLocked: zt("wz2", "dmz", o, l, s, c, d),
								label: "dmz",
								hoverFunction: function() {
									e(M.setGameTitle("wz2")), e(F.setActiveCrTitle("wz2")), e(F.setSelectedGameMode("dmz"))
								},
								clickFunction: function() {
									return A()
								},
								classNames: b("dmz"),
								backgroundImage: "https://assets.callofduty.com/cdn/app/codp/iw9/dmz/EntryPoint-WZ2-DMZ_424x204.jpg",
								tileImage: "https://assets.callofduty.com/cdn/app/codp/iw9/menu/icon_mode_dmz_120x120.png",
								tileGameIcon: ir[0].gameType[1].tileGameIcon,
								lockMessage: kt[t].lockedTileDMZMessage
							}],
							k = [].concat(_, y, E, w, S),
							x = k.filter((function(e) {
								return !e.isLocked
							})),
							R = k.filter((function(e) {
								return e.isLocked
							})),
							T = x.concat(R),
							L = [{
								title: kt[t].games,
								tiles: T
							}],
							I = function(t) {
								e(F.setSelectedGameMode(t)), e(F.setFilterRecency("Lifetime")), e(F.unloadRecentMatchesData()), e(F.setSelectedScreen("dashboard")), Wt("ui_select_confirm")
							},
							A = function() {
								["mp"].includes(f) ? zt("mw2", f, o, l, s, c, d) || (e(M.setGameTitle("mw2")), e(F.setSortByValue("kills")), e(F.setSelectedTab(v.indexOf(f))), I(f)) : ["br", "resurgence", "plunder", "dmz"].includes(f) && (zt("wz2", f, o, l, s, c, d) || (e(M.setGameTitle("wz2")), e(F.setSelectedTab(v.indexOf(f))), I(f)), "dmz" === f && e(F.setSortByValue("operatorKills")))
							},
							N = function(t) {
								var n, a, r = T[(n = t, 0, a = T.length - 1, Math.max(0, Math.min(a, n)))];
								r.id !== f && (e(M.setGameTitle(r.gameTitle)), e(F.setSelectedGameMode(r.id)), e(F.setActiveCrTitle(r.gameTitle)), Wt("ui_hilite", f))
							},
							C = function() {
								var e = T.findIndex((function(e) {
									return e.id === f
								}));
								N(e - 1)
							},
							P = function() {
								var e = T.findIndex((function(e) {
									return e.id === f
								}));
								N(e + 1)
							},
							z = function() {
								window.Telescope_API_SetDisplayMode && (Telescope_API_SetDisplayMode(0), window.Telescope_API_SetDisplayMode(0)), Wt("ui_select_back", window)
							};
						ka(1, {
							RIGHT: n ? C : P,
							LEFT: n ? P : C,
							XBA_PSCROSS: r ? A : function() {
								return z()
							},
							XBB_PSCIRCLE: r ? function() {
								return z()
							} : A
						}), xa(f, {
							next: n ? C : P,
							prev: n ? P : C,
							direct: A,
							close: function() {
								return z()
							}
						});
						var O = m && u && g && p && h;
						return (0, a.useEffect)((function() {
							O && (e(F.setActiveCrTitle(T[0].gameTitle)), e(F.setSelectedGameMode(T[0].id)))
						}), [O]), a.createElement(yt, null, O && L.map((function(e, t) {
							return a.createElement("div", {
								key: t,
								className: "game-tiles-section"
							}, a.createElement("div", {
								className: "game-title"
							}, e.title), a.createElement(vt, null, a.createElement(br, {
								tiles: e.tiles,
								selectedTile: f,
								onTileSelect: N
							})))
						})))
					},
					yr = function(e) {
						var t = e.activeLbTile,
							n = (0, i.v9)((function(e) {
								return e.global.language
							})),
							r = (0, i.v9)((function(e) {
								return e.leaderboard.userLeaderboardDataMap[t.gameTitle] && e.leaderboard.userLeaderboardDataMap[t.gameTitle].career
							})),
							o = (null == r ? void 0 : r.ranks) && r.ranks[0].stats,
							l = function(e) {
								return r ? "timePlayed" === e ? Tt(0) : 0 : "--"
							};
						return a.createElement(bt, null, a.createElement("div", {
							className: "main-title-section"
						}, a.createElement("div", {
							className: "game-icons"
						}, "mw2" === t.gameTitle ? a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/logo/icon_branding_mwii_watermark_med_173x48.png"
						}) : a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/logo/icon_branding_wz2_watermark_med_158x48.png"
						})), a.createElement("div", null, kt[n][null == t ? void 0 : t.gameMode])), "career" === (null == t ? void 0 : t.gameMode) && a.createElement("div", {
							className: "stats-values"
						}, a.createElement("div", null, a.createElement("div", null, a.createElement("div", {
							className: "sub-title"
						}, kt[n].timePlayed), a.createElement("div", {
							className: "sub-value"
						}, Da(null == o ? void 0 : o.timePlayed) ? Tt(null == o ? void 0 : o.timePlayed) : l("timePlayed"))), a.createElement("div", null, a.createElement("div", {
							className: "sub-title"
						}, kt[n].score), a.createElement("div", {
							className: "sub-value"
						}, Da(null == o ? void 0 : o.globalScore) ? null == o ? void 0 : o.globalScore : l("globalScore")))), a.createElement("div", null, a.createElement("div", null, a.createElement("div", {
							className: "sub-title"
						}, kt[n].gamesPlayed), a.createElement("div", {
							className: "sub-value"
						}, Da(null == o ? void 0 : o.totalGames) ? null == o ? void 0 : o.totalGames : l("totalGames"))), a.createElement("div", null, a.createElement("div", {
							className: "sub-title"
						}, kt[n].avgScorePerMin), a.createElement("div", {
							className: "sub-value"
						}, Da(null == o ? void 0 : o.avgScorePerMin) ? (100 * (null == o ? void 0 : o.avgScorePerMin) / 100).toFixed(2) : l("avgScorePerMin"))))))
					},
					Er = function(e) {
						var t = e.activeLbTile,
							n = (0, i.v9)((function(e) {
								return e.global.language
							})),
							r = (0, i.v9)((function(e) {
								return e.leaderboard.friendsLeaderboardRanksDataMap
							})),
							o = (0, i.v9)((function(e) {
								return e.leaderboard.userLeaderboardDataMap
							})),
							l = (0, a.useState)([]),
							s = (0, et.Z)(l, 2),
							c = s[0],
							d = s[1],
							m = (0, a.useMemo)((function() {
								return t.gameTitle
							})),
							u = (0, a.useMemo)((function() {
								return "gameModes" === t.gameMode ? "mw2" === m ? "tdm" : "br" : t.gameMode
							})),
							g = (0, a.useRef)(""),
							p = function(e, t) {
								for (var n = e, a = 0; a < t.length; a++) t[a].rank = n, n++;
								return t
							};
						return (0, a.useEffect)((function() {
							var e = null,
								t = null;
							if (r[m] && r[m][u]) {
								var a = r[m][u];
								o && o[m] && o[m][u] && a && (e = function(e, t, n) {
									var a = null;
									return e[t][n].ranks && e[t][n].ranks[0] && (a = e[t][n].ranks[0]), a
								}(o, m, u), t = function(e, t) {
									if (e) {
										var n = JSON.parse(JSON.stringify(t)),
											a = [];
										if (n.ranks.length < 1) {
											var r = {
												rank: "--",
												gamertag: e.gamertag,
												sortKeyStat: e.sortKeyStat
											};
											return a.push(r), a
										}
										if (e && e.gamertag) {
											var i = n.ranks.findIndex((function(t) {
												return t.gamertag === e.gamertag
											}));
											i >= 0 && (null !== e.rank || null !== e.percentileRank) ? n.ranks.length >= 3 ? 0 === i ? (a = (0, Y.Z)(n.ranks.slice(0, 3)), p(1, a)) : i === n.ranks.length - 1 ? (a = (0, Y.Z)(n.ranks.slice(n.ranks.length - 3, n.ranks.length)), p(n.ranks.length - 3, a)) : (a = (0, Y.Z)(n.ranks.slice(i - 1, i + 2)), p(i, a)) : (a = n.ranks.slice(), p(1, a)) : (a = 0 === i ? [] : i > 0 && i < 3 ? (0, Y.Z)(n.ranks.slice(0, i)) : (0, Y.Z)(n.ranks.slice(0, 2)), p(1, a), a.push(e))
										}
										return a
									}
								}(e, a), d(t), g.current = function(e) {
									return e && e.length > 1 ? kt[n].friendSnapshotDisclaimer : kt[n].noFriendsLeaderboard
								}(t))
							}
						}), [m, u, r, o]), a.createElement(wt, null, o && o[m] && o[m][u] && r && r[m] && r[m][u] && r[m][u].ranks && a.createElement(a.Fragment, null, a.createElement("div", {
							className: "top-border-box"
						}), a.createElement("div", {
							className: "snapshot-block"
						}, a.createElement("div", {
							className: "main-title-section"
						}, a.createElement("div", null, kt[n].friendSnapshot)), a.createElement("div", {
							className: "sub-copy"
						}, a.createElement("p", null, kt[n].friend), a.createElement("p", {
							className: "sub-copy__score"
						}, o[m][u].columns && o[m][u].columns[0] ? kt[n][o[m][u].columns[0]] : "")), a.createElement("div", {
							className: "friends-list"
						}, null == c ? void 0 : c.map((function(e) {
							var t, n, r;
							return a.createElement("div", {
								key: e.gamertag,
								className: Pa("friends-list__row", {
									active: e.gamertag === ((null === (t = o[m][u]) || void 0 === t ? void 0 : t.ranks) && (null === (n = o[m][u]) || void 0 === n || null === (r = n.ranks[0]) || void 0 === r ? void 0 : r.gamertag))
								})
							}, a.createElement("p", null, e.rank ? e.rank : "--"), a.createElement("p", null, e.gamertag ? e.gamertag : "--"), a.createElement("p", null, e.sortKeyStat ? Math.round(e.sortKeyStat) === e.sortKeyStat ? e.sortKeyStat : parseFloat(e.sortKeyStat).toFixed(2) : 0))
						}))), a.createElement("div", {
							className: "disclaimer-copy"
						}, g.current)), a.createElement("div", {
							className: "bottom-border-box"
						})))
					},
					wr = function(e) {
						var t = e.tileData,
							n = e.activeLbTitle,
							r = (0, i.I0)(),
							o = (0, i.v9)((function(e) {
								return e.global.language
							})),
							l = (0, i.v9)((function(e) {
								return e.global.isCrossConfirm
							})),
							s = (0, i.v9)(D),
							c = "mw2" === n ? 0 : 1,
							d = (0, a.useRef)();
						d.current = (0, i.v9)((function(e) {
							return e.leaderboard.activeLbGameModeTileIndex
						}));
						var m = function(e) {
								return d.current === e
							},
							u = function(e) {
								return m(e) ? "active-tile game-mode" : "game-mode"
							},
							g = t[0].gameType[c].options.length,
							p = function(e) {
								d.current = e, r(ie.setActiveLbGameModeTileIndex(e))
							},
							h = function(e, t) {
								r("gameModes" === t ? ie.setSelectedTabIndex(0) : ie.setSelectedTabIndex(e)), r(F.setSelectedScreen("leaderboards")), r(ie.setSelectedLeaderboardListType("global")), Wt("ui_select_confirm")
							},
							f = function() {
								h(d.current, t[0].gameType[c].options[d.current].gameMode)
							},
							v = function() {
								if (!(d.current >= g - 1)) {
									var e = d.current + 1;
									p(e), Wt("ui_hilite")
								}
							},
							b = function() {
								if (!(d.current <= 0)) {
									var e = d.current - 1;
									p(e), Wt("ui_hilite")
								}
							},
							_ = function() {
								Wt("ui_select_back"), r(F.setSelectedScreen("entryscreen"))
							};
						return ka(1, {
							LEFT: s ? v : b,
							RIGHT: s ? b : v,
							XBA_PSCROSS: l ? f : function() {
								return _()
							},
							XBB_PSCIRCLE: l ? function() {
								return _()
							} : f,
							XBX_PSSQUARE: null,
							LSTICK_PRESSED: null,
							XBY_PSTRIANGLE: null
						}), xa(null, {
							next: s ? b : v,
							prev: s ? v : b,
							direct: f,
							close: function() {
								return _()
							}
						}), a.createElement(_t, {
							activeTabName: "lb",
							isArabic: s
						}, a.createElement(a.Fragment, null, t.map((function(e) {
							return a.createElement("div", {
								className: "game-tiles-section",
								key: e.gameType
							}, a.createElement("div", {
								className: "game-title"
							}, a.createElement("p", {
								className: "game-title-copy"
							}, kt[o][e.gameType[c].type])), a.createElement("div", {
								className: "game-tiles-row"
							}, e.gameType[c].options.map((function(e, t) {
								return a.createElement("div", {
									className: "game-modes",
									key: e.gameMode,
									onClick: function() {
										return h(t, e.gameMode)
									},
									onMouseEnter: function() {
										p(t), Wt("ui_hilite")
									}
								}, a.createElement("div", {
									className: u(t)
								}, e.isLocked && a.createElement("div", {
									className: "lock-icon"
								}, a.createElement(lr, {
									fill: "#666A66"
								})), a.createElement("img", {
									className: "tile-img",
									src: "".concat(e.tileIcon)
								}), a.createElement("div", {
									className: "tile-name"
								}, kt[o][e.gameMode]), m(t) && a.createElement("div", {
									className: "bottom"
								}, a.createElement("div", {
									className: "bottom-content"
								}, a.createElement("div", {
									className: "bottom-icon"
								}, a.createElement(fa, {
									type: l ? "XBA_PSCROSS" : "XBB_PSCIRCLE",
									width: 2,
									height: 2,
									marginLeft: s ? .8 : 0,
									marginRight: s ? 0 : .8,
									fill: "#3c5938"
								})), a.createElement("div", {
									className: "bottom-text"
								}, kt[o].select)))))
							}))))
						}))))
					},
					Sr = function(e) {
						var t = e.setActiveLbTitle,
							n = e.activeLbTitle,
							r = [{
								title: "mw2",
								label: "mp"
							}, {
								title: "wz2",
								label: "br"
							}],
							o = (0, a.useState)(r.find((function(e) {
								return e.title === n
							})).label),
							l = (0, et.Z)(o, 2),
							s = l[0],
							c = l[1],
							d = (0, a.useState)(r.indexOf(r.find((function(e) {
								return e.title === n
							})))),
							m = (0, et.Z)(d, 2),
							u = m[0],
							g = m[1],
							p = (0, i.I0)(),
							h = (0, i.v9)((function(e) {
								return e.global.language
							})),
							f = (0, i.v9)((function(e) {
								return e.global.isCrossConfirm
							})),
							v = (0, i.v9)(D),
							b = function(e) {
								return s === e ? "active-tile game-type" : "game-type"
							},
							_ = [{
								title: kt[h].multiplayer,
								icon: ir[0].gameType[0].icon,
								label: "mp",
								hoverFunction: function() {
									p(M.setGameTitle("mw2")), p(ie.setSelectedGameTitle("mw2")), c("mp"), g(0), t("mw2")
								},
								clickFunction: function() {
									return w("mw2")
								},
								classNames: b("mp"),
								backgroundImage: ir[0].gameType[0].tileBgImage,
								tileImage: ir[0].gameType[0].tileImage,
								tileGameIcon: ir[0].gameType[0].tileGameIcon
							}],
							y = [{
								title: kt[h].battleRoyale,
								icon: ir[0].gameType[1].icon,
								label: "br",
								hoverFunction: function() {
									p(M.setGameTitle("wz2")), p(ie.setSelectedGameTitle("wz2")), c("br"), g(1), t("wz2")
								},
								clickFunction: function() {
									return w("wz2")
								},
								classNames: b("br"),
								backgroundImage: ir[0].gameType[1].tileBgImage,
								tileImage: ir[0].gameType[1].tileImage,
								tileGameIcon: ir[0].gameType[1].tileGameIcon
							}],
							E = [{
								title: kt[h].games,
								tiles: [].concat(_, y)
							}],
							w = function() {
								p(F.setSelectedScreen("lbentryscreen")), Wt("ui_select_confirm")
							},
							S = function() {
								if (u > 0) {
									var e = u - 1;
									g(e);
									var n = r[e];
									p(M.setGameTitle(n.title)), p(ie.setSelectedGameTitle(n.title)), t(n.title), c(n.label), Wt("ui_hilite", s)
								}
							},
							k = function() {
								if (u < r.length - 1) {
									var e = u + 1;
									g(e);
									var n = r[e];
									p(M.setGameTitle(n.title)), p(ie.setSelectedGameTitle(n.title)), t(n.title), c(n.label), Wt("ui_hilite", s)
								}
							},
							x = function() {
								window.Telescope_API_SetDisplayMode && (Telescope_API_SetDisplayMode(0), window.Telescope_API_SetDisplayMode(0)), Wt("ui_select_back", window)
							};
						return ka(1, {
							RIGHT: v ? S : k,
							LEFT: v ? k : S,
							XBA_PSCROSS: f ? w : function() {
								return x()
							},
							XBB_PSCIRCLE: f ? function() {
								return x()
							} : w
						}), xa(s, {
							next: v ? S : k,
							prev: v ? k : S,
							direct: w,
							close: function() {
								return x()
							}
						}), a.createElement(yt, {
							activeTabName: "lb"
						}, a.createElement(a.Fragment, null, E.map((function(e, t) {
							return a.createElement("div", {
								key: t,
								className: "game-tiles-section"
							}, a.createElement("div", {
								className: "game-title"
							}, e.title), a.createElement("div", {
								className: "game-types"
							}, e.tiles.map((function(e) {
								return a.createElement("div", {
									key: e.title,
									onMouseEnter: function() {
										e.hoverFunction(), Wt("ui_hilite")
									},
									className: e.classNames,
									onClick: function() {
										return e.clickFunction()
									},
									style: {
										backgroundImage: "url(".concat(e.backgroundImage, ")")
									}
								}, a.createElement("img", {
									className: "tile-image",
									src: e.tileImage
								}), a.createElement("div", {
									className: "tile-name"
								}, a.createElement("div", null, e.title)), a.createElement("img", {
									className: "tile-game-icon",
									src: e.tileGameIcon
								}), s === e.label && a.createElement("div", {
									className: "bottom"
								}, a.createElement("div", {
									className: "bottom-content"
								}, a.createElement("div", {
									className: "bottom-icon"
								}, a.createElement(fa, {
									type: f ? "XBA_PSCROSS" : "XBB_PSCIRCLE",
									width: 2,
									height: 2,
									marginLeft: v ? .8 : 0,
									marginRight: v ? 0 : .8,
									fill: "#3c5938"
								})), a.createElement("div", {
									className: "bottom-text"
								}, kt[h].select))))
							}))))
						}))))
					},
					kr = function(e, t) {
						var n = (0, a.useRef)(0);
						return function() {
							clearTimeout(n.current);
							for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
							n.current = setTimeout.apply(void 0, [t, e].concat(r))
						}
					},
					xr = function(e) {
						var t = e.lbTileData,
							n = e.activeLbTitle,
							r = e.setActiveLbTitle,
							o = (0, i.I0)(),
							l = (0, i.v9)((function(e) {
								return e.record.selectedScreen
							})),
							s = (0, i.v9)((function(e) {
								return e.leaderboard.activeLbGameModeTileIndex
							})),
							c = t[0].gameType["mw2" === n ? 0 : 1].options[s],
							d = (0, i.v9)((function(e) {
								return e.leaderboard.userLeaderboardDataMap
							})),
							m = (0, i.v9)((function(e) {
								return e.leaderboard.friendsLeaderboardRanksDataMap
							})),
							u = kr(400, (function() {
								o(re(c))
							})),
							g = kr(400, (function() {
								o(ae(c))
							}));
						return (0, a.useEffect)((function() {
							"entryscreen" === l && (o(ie.setSelectedTabIndex(0)), o(ie.setActiveLbGameModeTileIndex(0)))
						}), [l]), (0, a.useEffect)((function() {
							var e = c.gameTitle,
								t = "gameModes" === c.gameMode ? "mw2" === e ? "tdm" : "br" : c.gameMode;
							o(ie.setSelectedGameTitle(e)), o(ie.setSelectedGameMode(t)), d[e] && d[e][t] || u(), m[e] && m[e][t] || g()
						}), [c]), a.createElement(ft, null, a.createElement("div", {
							className: "entry-screen-block"
						}, a.createElement("div", {
							className: "stats-overview"
						}, a.createElement(yr, {
							activeLbTile: c
						}), a.createElement(Er, {
							activeLbTile: c
						})), a.createElement("div", {
							className: "game-type-wrap"
						}, "entryscreen" === l ? a.createElement(Sr, {
							setActiveLbTitle: r,
							activeLbTitle: n
						}) : a.createElement(wr, {
							tileData: t,
							activeLbTitle: n
						}))))
					},
					Rr = function(e) {
						var t = e.activeCrTitle,
							n = e.activeLbTitle,
							r = e.setActiveLbTitle,
							o = e.selectedMainTabIndex,
							l = (0, i.I0)(),
							s = (0, i.v9)((function(e) {
								return e.record.crDataLoaded
							})),
							c = (0, i.v9)((function(e) {
								return e.global.language
							})),
							d = (0, i.v9)((function(e) {
								return e.global.env
							})),
							m = (0, i.v9)(D);
						(0, a.useEffect)((function() {
							"cert" === d && l(M.setSelectedMainTabIndex(1)), s || (l(W({
								gameTitle: "mw2"
							})), l(W({
								gameTitle: "wz2",
								gameMode: "wz"
							})), l(W({
								gameTitle: "wz2",
								gameMode: "resurgence"
							})), l(W({
								gameTitle: "wz2",
								gameMode: "plunder"
							})), l(W({
								gameTitle: "dmz"
							})))
						}), []);
						var u = function() {
								"cert" !== d && (Wt("ui_hilite_tab", "tab"), l(F.setSelectedScreen("entryscreen")), l(M.setSelectedMainTabIndex(1)))
							},
							g = function() {
								"cert" !== d && (Wt("ui_hilite_tab", "tab"), l(F.setSelectedScreen("entryscreen")), l(M.setSelectedMainTabIndex(0)))
							};
						xa(o, {
							moveRight: m ? g : u,
							moveLeft: m ? u : g
						}), ka(1, {
							LB: m ? u : g,
							RB: m ? g : u
						});
						var p = [{
							title: kt[c].entryTabs[0],
							val: "cr",
							key: 0
						}, {
							title: kt[c].entryTabs[1],
							val: "lb",
							key: 1
						}];
						return a.createElement(a.Fragment, null, !s && a.createElement(ar, null), a.createElement(er, {
							tabs: p
						}), 1 === o ? a.createElement(ft, null, a.createElement(xr, {
							lbTileData: ir,
							activeLbTitle: n,
							setActiveLbTitle: r
						})) : a.createElement(ft, null, a.createElement("div", {
							className: "entry-screen-block"
						}, a.createElement("div", {
							className: "stats-overview"
						}, a.createElement(Ot, {
							activeCrTitle: t
						}), a.createElement(Kt, {
							activeCrTitle: t
						})), a.createElement(_r, null))))
					};
				var Tr, Lr = se.ZP.div(Tr || (Tr = (0, me.Z)(["\n    height: 8.8rem;\n    position: relative;\n    display: flex;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 8rem;\n    padding-left: 2.4rem;\n    direction: ", ";\n\n    .screen-name {\n        font-size: 3.6rem;\n        color: ", ";\n        text-transform: uppercase;\n        padding-left: 1.6rem;\n    }\n\n    .nav-close-button {\n        width: 4.8rem;\n        height: 5.4rem;\n        display: flex;\n        align-items: center;\n        margin-right: 1.6rem;\n        transition: all 0.2s;\n        border-color: rgba(231, 231, 231, 0.1);\n        border-width: 0.1rem;\n        border-style: solid;\n        border-radius: 0.3rem;\n        justify-content: center;\n        background: rgba(20, 19, 19, 0.2);\n        svg {\n            color: rgb(231, 231, 231);\n            opacity: 0.6;\n        }\n\n        &:hover {\n            color: #9aa39a;\n            background: linear-gradient(180deg, rgba(154, 163, 154, .2) 0%, rgba(154, 163, 154, 0.04) 100%), rgba(20, 19, 19, 0.2);\n            svg {\n                opacity: 0.8;\n            }\n        }\n    }\n"])), (function(e) {
					return e.isArabic ? "ltr" : ""
				}), (function(e) {
					return e.theme.colors.neutralLightAlt
				}));
				const Dr = function(e) {
					var t = e.tabs,
						n = void 0 === t ? [] : t,
						r = e.screenTitle,
						o = r.gameTitle,
						l = r.gameMode,
						s = e.onBack,
						c = (0, i.I0)(),
						d = (0, i.v9)((function(e) {
							return e.global.language
						})),
						m = (0, i.v9)(D),
						u = (0, i.v9)((function(e) {
							return e.global.isCrossConfirm
						})),
						g = pa(),
						p = (0, i.v9)((function(e) {
							return e.leaderboard.selectedTabIndex
						})),
						h = n.length <= 1;
					return a.createElement(Lr, {
						isArabic: m
					}, a.createElement("div", {
						className: "nav-close-button",
						onClick: s,
						onMouseEnter: function() {
							return Wt("ui_hilite")
						}
					}, a.createElement(Tn, {
						width: g(12),
						height: g(22.5),
						fill: "#e7e7e7"
					}), a.createElement(fa, {
						type: u ? "XBB_PSCIRCLE" : "XBA_PSCROSS",
						width: 2,
						height: 2,
						marginLeft: .4
					})), a.createElement("div", {
						className: "screen-name"
					}, function(e, t, n) {
						return "wz2" === e && "gameModes" === t ? kt[n].battleRoyale : "gameModes" === t ? kt[n].gameModes : "mw2" === e ? kt[n].multiplayer : "wz2" === e ? kt[n].warzone : void 0
					}(o, l, d)), !h && a.createElement(Ua, {
						tabs: n,
						tabId: function(e) {
							return kt[d][e.gameMode]
						},
						tabLabel: function(e) {
							return kt[d][e.gameMode]
						},
						selectedTabIndex: p,
						onTabSelect: function(e, t) {
							c(ie.setSelectedTabIndex(t)), c(ie.setSelectedGameMode(e.gameMode))
						}
					}))
				};
				var Mr, Ir, Ar, Nr, Cr, Pr, zr, Or = se.ZP.section(Mr || (Mr = (0, me.Z)(["\n    //pulling styling from Entry/Styles.js\n    min-height: 108rem;\n    background: linear-gradient(360deg, #000000 0%, #000000 31.66%, rgba(0, 0, 0, 0) 67.74%),\n        url('https://assets.callofduty.com/cdn/app/codp/iw9/background/CR_bkgd_1920x1080.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    .close {\n        width: max-content;\n        height: 8rem;\n        color: white;\n        font-size: 3.6rem;\n        display: flex;\n        align-items: center;\n        padding-left: 2.4rem;\n        text-transform: uppercase;\n        font-size: 2rem;\n\n        &-button {\n            display: flex;\n            background: ", ";\n            border-radius: 0.4rem;\n            padding: 0.475rem 0.8rem;\n            align-items: center;\n            margin-right: 1.6rem;\n            transition: all 0.2s;\n            &:hover {\n                background: ", ";\n            }\n        }\n    }\n\n    .button {\n        background: linear-gradient(180deg, #2a2b2b 0%, #232324 100%);\n        opacity: 0.95;\n        border: 0.1rem solid rgba(154, 163, 154, 0.15);\n        border-radius: 0.4rem;\n        color: #9aa39a;\n        font-weight: 700;\n        font-size: 2rem;\n        text-transform: uppercase;\n        &:hover {\n            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), #79c370;\n            border: 0.1rem solid #368947;\n            color: #141313;\n        }\n    }\n\n    .leaderboard-content {\n        display: flex;\n        width: 90%;\n        margin: 0 auto;\n        font-size: 1.6rem;\n    }\n\n    .leaderboard-left {\n        width: 125.5rem;\n        height: 81.8rem;\n        color: #e7e7e7;\n        margin-right: 1.6rem;\n        // padding-left: 2.4rem;\n        margin: 0 auto;\n        position: relative;\n    }\n\n    .leaderboard-table-filters {\n        display: flex;\n        height: 2.5rem;\n        justify-content: space-between;\n        align-items: center;\n        font-size: 2rem;\n        line-height: 2.4rem;\n        letter-spacing: 0.02em;\n        text-transform: uppercase;\n        font-weight: 500;\n        margin-bottom: 1.5rem;\n    }\n\n    .filter-status {\n        display: flex;\n        align-items: center;\n        padding: 0.5rem 4.6rem;\n        &:hover {\n            // text-decoration: underline;\n        }\n        ", "\n    }\n\n    .list-type {\n        display: flex;\n        align-items: center;\n        color: #9aa39a;\n\n        .controller-item {\n            color: #9aa39a;\n            margin: 0 2rem;\n            &.active {\n                color: #e7e7e7;\n                border-bottom: 0.2rem solid #e7e7e7;\n            }\n        }\n        .button {\n            display: flex;\n            justify-content: space-between;\n            padding: 0.5rem 1.2rem 0.5rem 5.2rem;\n            ", "\n            &:first-child {\n                margin-left: ", "rem;\n                margin-right: ", "rem;\n            }\n            &.active {\n                .radio-btn {\n                    &::after {\n                        content: '';\n                        position: absolute;\n                        width: 1.7rem;\n                        height: 1.7rem;\n                        background: #368947;\n                        top: 50%;\n                        left: 50%;\n                        transform: translate(-50%, -50%);\n                        border-radius: 5rem;\n                    }\n                }\n            }\n        }\n        .radio-btn {\n            width: 2.4rem;\n            height: 2.4rem;\n            border-radius: 5rem;\n            background: linear-gradient(180deg, rgba(20, 19, 19, 0.8) 0%, rgba(59, 59, 58, 0.8) 100%);\n            border: 0.1rem solid rgba(231, 231, 231, 0.24);\n\n            position: relative;\n            ", "\n        }\n    }\n\n    .leaderboard-right {\n        // background #0F0;\n        // display: flex;\n        width: 42rem;\n        height: 81.8rem;\n        // padding-top: 5.7rem;\n        padding-bottom: 5.7rem;\n        flex-direction: column;\n        align-items: space-between;\n        justify-content: space-between;\n    }\n\n    .pagination {\n        display: flex;\n        justify-content: flex-end;\n        margin: 2rem 6rem;\n\n        &__button {\n            display: flex;\n            align-items: center;\n            color: #e7e7e7;\n            font-weight: 500;\n            font-size: 2rem;\n            text-transform: uppercase;\n            p {\n                padding: 0 1.2rem;\n            }\n        }\n    }\n\n    .footer-wrap {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        .button {\n            padding: 0.5rem 1rem;\n            line-height: normal;\n        }\n    }\n\n    .user-unranked-msg {\n        text-align: center;\n        font-weight: 700;\n        font-size: 1.8rem;\n        color: #9aa39a;\n        margin-top: 1.5rem;\n    }\n"])), (function(e) {
						return e.theme.colors.elPaso
					}), (function(e) {
						return e.theme.colors.primaryGreen
					}), (function(e) {
						return e.isController && (0, se.iv)(Ir || (Ir = (0, me.Z)(["\n                padding: 0;\n                text-transform: uppercase;\n                color: #727272;\n                font-size: 2rem;\n                font-weight: 500;\n            "])))
					}), (function(e) {
						return e.isArabic ? (0, se.iv)(Ar || (Ar = (0, me.Z)(["\n                          padding: 0.5rem 5.2rem 0.5rem 1.2rem;\n                      "]))) : (0, se.iv)(Nr || (Nr = (0, me.Z)(["\n                          padding: 0.5rem 1.2rem 0.5rem 5.2rem;\n                      "])))
					}), (function(e) {
						return e.isArabic ? 2.2 : 0
					}), (function(e) {
						return e.isArabic ? 0 : 2.2
					}), (function(e) {
						return e.isArabic ? (0, se.iv)(Cr || (Cr = (0, me.Z)(["\n                          margin-right: 1.8rem;\n                      "]))) : (0, se.iv)(Pr || (Pr = (0, me.Z)(["\n                          margin-left: 1.8rem;\n                      "])))
					})),
					jr = n(78092),
					Br = function(e) {
						return function(t) {
							(null == t ? void 0 : t.preventDefault) && (null == t || t.preventDefault()), e(t)
						}
					},
					Gr = se.ZP.div(zr || (zr = (0, me.Z)(["\n    .leaderboard-row-container {\n        width: 100%;\n        color: #e7e7e7;\n        border-radius: 0.4rem;\n        margin-right: 2px;\n        &.active {\n            .view-profile {\n                display: flex;\n                position: relative;\n                z-index: 1;\n            }\n            .row {\n                background: #666a66;\n                border: 0.2rem solid #79c370;\n                border-radius: 0.4rem 0.4rem 0px 0px;\n            }\n        }\n        .row {\n            background: #3b3b3a;\n            margin: 2px 0 2px 0;\n            padding: 0 2rem;\n            border-radius: 0.4rem;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            height: 5rem;\n            text-transform: uppercase;\n            direction: ", ";\n\n            .level {\n                width: 9rem;\n                display: flex;\n                align-items: center;\n                justify-content: space-around;\n            }\n            .col {\n                width: 16.5rem;\n                padding-right: 2rem;\n                &.active {\n                    background: rgba(255, 255, 255, 0.1);\n                    height: 100%;\n                    display: flex;\n                    align-items: center;\n                    justify-content: flex-", ";\n                }\n            }\n            .rank {\n                width: 6.6rem;\n            }\n            .player {\n                width: 21.1rem;\n            }\n            &.curr-user {\n                color: #eaea43;\n            }\n        }\n\n        .view-profile {\n            font-weight: 700;\n            font-size: 2rem;\n            line-height: 2.4rem;\n            color: #141313;\n            background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)), #79c370;\n            height: 3.2rem;\n            border-bottom-right-radius: 0.4rem;\n            border-bottom-left-radius: 0.4rem;\n            text-transform: uppercase;\n            display: none;\n            align-items: center;\n            padding: 0 2rem;\n            transform: translateY(-0.4rem);\n            direction: ", ";\n        }\n\n        .user-row {\n            padding: 0 2rem;\n            border-radius: 0.4rem;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            height: 5rem;\n            text-transform: uppercase;\n            color: #eaea43;\n            background: #000;\n\n            border-color: #3b3b3a;\n            border-width: 1px;\n            border-style: solid;\n\n            .level {\n                width: 9rem;\n                display: flex;\n                align-items: center;\n                justify-content: space-around;\n            }\n            .col {\n                width: 16.5rem;\n                text-align: right;\n                padding-right: 2rem;\n                &.active {\n                    background: rgba(255, 255, 255, 0.1);\n                    height: 100%;\n                    display: flex;\n                    align-items: center;\n                    justify-content: flex-", ";\n                }\n            }\n            .rank {\n                width: 6.6rem;\n            }\n            .player {\n                width: 21.1rem;\n            }\n        }\n    }\n"])), (function(e) {
						return e.isArabic ? "rtl" : ""
					}), (function(e) {
						return e.isArabic ? "start" : "end"
					}), (function(e) {
						return e.isArabic ? "rtl" : ""
					}), (function(e) {
						return e.isArabic ? "start" : "end"
					}));
				const Zr = function(e) {
					var t = e.playerData,
						n = e.index,
						r = e.isIsolatedUserRow,
						o = e.isActive,
						l = e.columns,
						s = e.style,
						c = e.handleMouseOver,
						d = e.handleRowClick,
						m = e.lbRank,
						u = e.authenticatedUseGamertag,
						g = (0, i.v9)((function(e) {
							return e.global.language
						})),
						p = (0, i.v9)((function(e) {
							return e.global.isCrossConfirm
						})),
						h = (0, i.v9)(D),
						f = (0, i.v9)((function(e) {
							return e.leaderboard.selectedLeaderboardListType
						})),
						v = (0, i.v9)((function(e) {
							return e.leaderboard.userLeaderboardDataMap
						})),
						b = (0, i.v9)((function(e) {
							return e.leaderboard.friendsLeaderboardRanksDataMap
						})),
						_ = (0, i.v9)((function(e) {
							return e.global.gameTitle
						})),
						y = (0, i.v9)((function(e) {
							return e.leaderboard.selectedGameMode
						}));
					if (!t.gamertag && null === t.rank && null === t.percentileRank) return null;
					var E = {
							headshotPercent: Ma,
							headshotPerGame: Ia,
							globalWlRatio: Ia,
							gulagWinLossRatio: Ia,
							kdRatio: Ia,
							timePlayed: Tt
						},
						w = function(e, t) {
							return E[e] ? E[e](t) : function(e) {
								return e.toFixed(0)
							}(t)
						},
						S = function(e) {
							return e.toLowerCase().includes("ratio") ? "--" : 0
						};
					return a.createElement(Gr, {
						isArabic: h
					}, a.createElement("div", {
						className: o ? "leaderboard-row-container active" : "leaderboard-row-container",
						style: s,
						onMouseEnter: function() {
							c && c(n)
						}
					}, r ? a.createElement("div", {
						className: "user-row"
					}, a.createElement("p", {
						className: "rank"
					}, function() {
						var e;
						if (null === t.rank && null === t.percentileRank) e = "--";
						else if (null !== t.rank)
							if ("global" === f) e = "".concat(t.rank + 1);
							else {
								var n = (v && v[_] ? v[_][y] : "").ranks[0];
								if (b[_] && b[_][y]) {
									var a = b[_][y].ranks.findIndex((function(e) {
										return e.gamertag === n.gamertag
									}));
									e = "".concat(a + 1)
								}
							}
						else e = "".concat(t.percentileRank.toFixed(0), "%");
						return e
					}()), a.createElement("p", {
						className: "player"
					}, t.gamertag), null == l ? void 0 : l.map((function(e, n) {
						return a.createElement("p", {
							className: Pa("col", {
								active: 0 === n
							}),
							key: e
						}, null !== (null == t ? void 0 : t.stats[e]) ? w(e, null == t ? void 0 : t.stats[e]) : S(e))
					}))) : a.createElement("div", {
						className: Pa("row", {
							"curr-user": u && u === t.gamertag
						}),
						onClick: o ? function() {
							return d("iw9", "mp", t.id)
						} : null
					}, a.createElement("p", {
						className: "rank"
					}, m), a.createElement("p", {
						className: "player"
					}, t.gamertag), null == l ? void 0 : l.map((function(e, n) {
						return a.createElement("p", {
							className: Pa("col", {
								active: 0 === n
							}),
							key: e
						}, null !== (null == t ? void 0 : t.stats[e]) ? w(e, null == t ? void 0 : t.stats[e]) : S(e))
					}))), o && a.createElement("div", {
						className: "view-profile",
						onClick: function() {
							return d("iw9", "mp", t.id)
						}
					}, a.createElement(fa, {
						type: p ? "XBA_PSCROSS" : "XBB_PSCIRCLE",
						width: 2,
						height: 2,
						marginLeft: h ? 1 : 0,
						marginRight: h ? 0 : 1,
						fill: "#141313"
					}), a.createElement("p", null, kt[g].viewCodProfile))))
				};
				var Ur, Kr = se.ZP.section(Ur || (Ur = (0, me.Z)(["\n    width: 100%;\n\n    .leaderboard-header {\n        background: #1e1c1a;\n        display: flex;\n        justify-content: space-between;\n        height: 5.6rem;\n        align-items: center;\n        text-transform: uppercase;\n        &.row {\n            .col {\n                &.active {\n                    span {\n                        position: relative;\n                        &::before {\n                            left: -2rem;\n                            position: absolute;\n                            content: '';\n                            width: 1.5rem;\n                            height: 1.5rem;\n                            background: linear-gradient(135deg, transparent 0 50%, #79c370 50% 100%);\n                        }\n                    }\n                }\n            }\n        }\n    }\n\n    .row {\n        padding: 0 2rem;\n        border-radius: 0.4rem;\n        z-index: 0;\n        .rank {\n            width: 6.6rem;\n        }\n        .level {\n            width: 9rem;\n        }\n        .player {\n            width: 21.1rem;\n        }\n        .col {\n            width: 16.5rem;\n            text-align: right;\n            padding-right: 2rem;\n            &.active {\n                text-align: right;\n                background: none;\n            }\n        }\n    }\n\n    .error-friends {\n        width: 100%;\n        height: 52.6rem;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        text-transform: uppercase;\n        color: #727272;\n        font-size: 2rem;\n    }\n\n    .leaderboards-list {\n        background: #1e1c1a;\n    }\n\n    .leaderboard-rows {\n        height: 52.6rem;\n        overflow-y: scroll;\n        padding-right: 0.8rem;\n        width: 101.5%;\n        &::-webkit-scrollbar {\n            width: 1.3rem;\n            background: #3b3b3a;\n        }\n        &::-webkit-scrollbar-track {\n            background-clip: content-box;\n        }\n        &::-webkit-scrollbar-thumb {\n            background-clip: padding-box;\n            background: #e7e7e74d;\n            opacity: 0.3;\n            border-radius: 9px;\n            height: 1.6rem;\n        }\n    }\n"])));

				function Hr(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var a = Object.getOwnPropertySymbols(e);
						t && (a = a.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, a)
					}
					return n
				}

				function Wr(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? Hr(Object(n), !0).forEach((function(t) {
							(0, N.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hr(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}
				const qr = function(e) {
					var t, n, r = e.controlRef,
						o = e.leaderboardRanksDataMap,
						l = e.onBack,
						s = e.authenticatedUseGamertag,
						c = e.errorMsg,
						d = (0, i.I0)(),
						m = (0, a.useRef)(),
						u = (0, a.useState)(),
						g = (0, et.Z)(u, 2),
						p = g[0],
						h = g[1],
						f = (0, a.useState)(),
						v = (0, et.Z)(f, 2),
						b = v[0],
						_ = v[1],
						E = (0, i.v9)((function(e) {
							return e.leaderboard.selectedLeaderboardListType
						})),
						w = (0, i.v9)((function(e) {
							return e.leaderboard.searchFilter
						})),
						S = (0, i.v9)((function(e) {
							return e.global.language
						})),
						k = (0, i.v9)((function(e) {
							return e.global.isCrossConfirm
						})),
						x = (0, a.useState)(0),
						R = (0, et.Z)(x, 2),
						T = R[0],
						L = R[1],
						D = pa(),
						M = (null == o ? void 0 : o.ranks) || [],
						I = (null == o || null === (t = o.data) || void 0 === t ? void 0 : t.nextPageToken) || (null == o ? void 0 : o.nextPageToken) || null,
						A = !!I,
						N = M.length >= 1e3,
						C = (0, i.v9)((function(e) {
							return e.leaderboard.showFilter
						})),
						P = (0, i.v9)((function(e) {
							return e.leaderboard.selectedGameTitle
						})),
						z = (0, i.v9)((function(e) {
							return e.leaderboard.selectedGameMode
						}));
					(0, a.useEffect)((function() {
						V()
					}), [M[0]]);
					var O = kr(300, (function() {
							"global" === E ? d(ne(Wr(Wr({
								listType: E,
								gameMode: z,
								gameTitle: P
							}, w), {}, {
								nextPageToken: I
							}))) : "friends" === E && d(ae(Wr(Wr({
								listType: E,
								gameMode: z,
								gameTitle: P
							}, w), {}, {
								nextPageToken: I
							})))
						})),
						j = function(e, t) {
							var n = G(e, t);
							if (n) return B("iw9", "mp", n.id)
						},
						B = function(e, t, n) {
							var a = function(e, t, n) {
								return e && t && n ? "".concat(e, "://").concat(t, "/profile?xuid=").concat(n) : null
							}(e, t, n);
							y("generated profile URL: ".concat(a)), Wt("ui_select_confirm"), a && window.Telescope_API_GotoByUri && Telescope_API_GotoByUri(a)
						},
						G = function(e, t) {
							if (!(e.length < 0)) return e[t]
						},
						Z = function(e) {
							U(e, !1)
						},
						U = function(e) {
							var t, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
								a = M.length - 1,
								r = La(e, 0, a);
							L(r), r !== T && Wt("ui_hilite");
							var i, o = La(e, 0, T);
							null === (t = m.current) || void 0 === t || t.resetAfterIndex(o), n && (null === (i = m.current) || void 0 === i || i.scrollToItem(r, "smart"))
						},
						K = Br((function() {
							return U(T - 1)
						})),
						H = Br((function() {
							return U(T + 1)
						})),
						W = Br((function() {
							return U(T - 9)
						})),
						q = Br((function() {
							return U(T + 9)
						}));
					xa(T, {
						up: K,
						down: H,
						pageUp: W,
						pageDown: q
					}, [M.length]), ka(1, C ? {} : {
						UP: K,
						DOWN: H,
						LTRIG: W,
						RTRIG: q,
						XBA_PSCROSS: k ? function() {
							j(M, T)
						} : l,
						XBB_PSCIRCLE: k ? l : function() {
							j(M, T)
						}
					}, [T, 9, M.length]);
					var F = function() {
							A && !N && function() {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
									t = document.querySelector(".leaderboards-list"),
									n = t.scrollHeight,
									a = t.scrollTop + t.clientHeight;
								return Math.abs(n - a) <= e
							}() && O()
						},
						V = function() {
							setTimeout((function() {
								return U(0, !0)
							}), 0)
						};

					function Y(e) {
						var t = e.index,
							n = e.style;
						return a.createElement(Zr, {
							playerData: M[t],
							key: t,
							index: t,
							isActive: t === T,
							columns: null == o ? void 0 : o.cols,
							style: n,
							handleMouseOver: Z,
							handleRowClick: B,
							lbRank: t + 1,
							authenticatedUseGamertag: s
						})
					}
					return (0, a.useEffect)((function() {
						r && (r.current = {
							goToTop: V
						})
					}), [r]), (0, a.useEffect)((function() {
						null != o && o.ranks ? "global" === E ? h(!0) : "friends" === E && _(!0) : "global" === E ? h(!1) : "friends" === E && _(!1)
					}), [o]), a.createElement(Kr, null, a.createElement("div", {
						className: "leaderboard-container"
					}, a.createElement("div", {
						className: "leaderboard-header row"
					}, ("global" === E && p || "friends" === E && b) && a.createElement(a.Fragment, null, a.createElement("p", {
						className: "rank"
					}, "#"), a.createElement("p", {
						className: "player"
					}, kt[S].player ? kt[S].player : "Player"), null == o || null === (n = o.cols) || void 0 === n ? void 0 : n.map((function(e, t) {
						return a.createElement("p", {
							key: e,
							className: Pa("col", {
								active: 0 === t
							})
						}, a.createElement("span", null, kt[S][e] ? kt[S][e] : "--"))
					})))), "friends" === E && (!b || M.length >= 1) ? a.createElement(jr.S_, {
						ref: m,
						height: D(526),
						itemCount: M.length,
						estimatedItemSize: D(54),
						itemSize: function(e) {
							return D(e === T ? 84 : 54)
						},
						width: D(1255),
						onScroll: F,
						className: "leaderboards-list leaderboard-rows"
					}, Y) : "friends" === E && a.createElement("div", {
						className: "error-friends"
					}, c), "global" === E && a.createElement(jr.S_, {
						ref: m,
						height: D(526),
						itemCount: M.length,
						estimatedItemSize: D(54),
						itemSize: function(e) {
							return D(e === T ? 84 : 54)
						},
						width: D(1255),
						onScroll: F,
						className: "leaderboards-list leaderboard-rows"
					}, Y)))
				};
				var Fr, Vr, Yr, Qr, Xr, Jr = se.ZP.div(Fr || (Fr = (0, me.Z)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    background: transparent;\n    z-index: 9;\n"]))),
					$r = se.ZP.div(Vr || (Vr = (0, me.Z)(["\n    background: #141313;\n    width: 64rem;\n    height: 100%;\n    text-transform: uppercase;\n    color: white;\n    .header {\n        // width: 192rem;\n        height: 8.8rem;\n        // background: red;\n        padding: ", ";\n        font-family: 'Stratum2';\n        font-style: normal;\n        font-weight: 500;\n        line-height: 4.3rem;\n        display: flex;\n        align-items: center;\n        letter-spacing: -0.05em;\n        color: #9aa39a;\n        text-shadow: 0rem 0.6rem 1.2rem rgba(20, 19, 19, 0.35);\n        text-transform: uppercase;\n        .close {\n            width: max-content;\n            display: flex;\n            align-items: center;\n            font-size: 4.8rem;\n            padding-left: 0px;\n            &-button {\n                width: 4.8rem;\n                height: 5.4rem;\n                display: flex;\n                align-items: center;\n                margin-left: ", "rem;\n                margin-right: ", "rem;\n                transition: all 0.2s;\n                border-color: rgba(231, 231, 231, 0.1);\n                border-width: 0.1rem;\n                border-style: solid;\n                border-radius: 0.3rem;\n                justify-content: center;\n                background: rgba(20, 19, 19, 0.2);\n                svg {\n                    color: rgb(231, 231, 231);\n                    opacity: 0.6;\n                }\n\n                &:hover {\n                    color: #9aa39a;\n                    background: linear-gradient(180deg, rgba(154, 163, 154, 0.2) 0%, rgba(154, 163, 154, 0.04) 100%), rgba(20, 19, 19, 0.2);\n                    svg {\n                        opacity: 0.8;\n                    }\n                }\n            }\n        }\n    }\n\n    .body {\n        margin-left: ", "rem;\n        margin-right: ", "rem;\n        width: 75%;\n    }\n"])), (function(e) {
						return e.isArabic ? "2.45rem 1.25rem 2rem 0" : "2.45rem 0 2rem 1.25rem"
					}), (function(e) {
						return e.isArabic ? 2.6 : 0
					}), (function(e) {
						return e.isArabic ? 0 : 2.6
					}), (function(e) {
						return e.isArabic ? 0 : 6.8
					}), (function(e) {
						return e.isArabic ? 6.8 : 0
					})),
					ei = se.ZP.div(Yr || (Yr = (0, me.Z)(["\n    background: linear-gradient(180deg, #2a2b2b 0%, #232324 100%);\n    opacity: 0.95;\n    border: 1px solid rgba(154, 163, 154, 0.15);\n    border-radius: 4px;\n    color: #9aa39a;\n    padding: ", ";\n    height: 3.2rem;\n    font-weight: 700;\n    font-size: 2rem;\n    display: flex;\n    align-items: center;\n    margin-bottom: 0.8rem;\n    position: relative;\n    ", "\n\n    // .hovered, &:hover {\n    //     color: black;\n    //     background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), #79C370;\n    //     background-blend-mode: multiply, normal;\n    //     border: 1px solid #368947;\n    //     position: relative;\n    // }\n    &.selected {\n        &::after {\n            position: absolute;\n            content: '';\n            width: 0.8rem;\n            height: 0.8rem;\n            border-radius: 1rem;\n            background: #faa94c;\n            left: ", "%;\n            top: 50%;\n            transform: translate(0, -50%);\n        }\n    }\n"])), (function(e) {
						return e.isArabic ? "0.4rem 5.2rem 0.4rem 0" : "0.4rem 0 0.4rem 5.2rem"
					}), (function(e) {
						return e.isHovered && (0, se.iv)(Qr || (Qr = (0, me.Z)(["\n            color: black;\n            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), #79c370;\n            background-blend-mode: multiply, normal;\n            border: 1px solid #368947;\n            position: relative;\n        "])))
					}), (function(e) {
						return e.isArabic ? 5 : 95
					})),
					ti = se.ZP.div(Xr || (Xr = (0, me.Z)(["\n    position: absolute;\n    left: ", "%;\n    top: 50%;\n    transform: translate(0, -50%);\n"])), (function(e) {
						return e.isArabic ? 91 : 4
					}));
				const ni = function(e) {
					var t = e.option,
						n = e.isHovered,
						r = e.coords,
						o = e.handleMouseOut,
						l = e.handleMouseOver,
						s = e.isSelected,
						c = e.handleClick,
						d = e.mapping,
						m = (0, i.v9)((function(e) {
							return e.global.isCrossConfirm
						})),
						u = (0, i.v9)((function(e) {
							return e.global.language
						})),
						g = (0, i.v9)(D);
					return a.createElement(ei, {
						className: s ? "selected" : "",
						onMouseOver: function() {
							return l(r)
						},
						onMouseOut: function() {
							return o()
						},
						isHovered: n,
						onClick: function() {
							return c(d, r)
						},
						isArabic: g
					}, n && a.createElement(ti, {
						isArabic: g
					}, a.createElement(fa, {
						type: m ? "XBA_PSCROSS" : "XBB_PSCIRCLE",
						width: 2.8,
						height: 8.4,
						fill: "black",
						borderRadius: "0.4rem 0rem 0rem 0.4rem;",
						backgroundColor: "#79C370"
					})), kt[u][t] ? kt[u][t] : t)
				};
				var ai, ri, ii = se.ZP.div(ai || (ai = (0, me.Z)(["\n    margin-bottom: 4rem;\n"]))),
					oi = se.ZP.div(ri || (ri = (0, me.Z)(["\n    font-size: 2.8rem;\n    color: white;\n    margin-bottom: 1rem;\n"])));
				const li = function(e) {
						var t = e.btnGrouping,
							n = e.parentIndex,
							r = e.parentArray,
							o = (0, i.I0)(),
							l = (0, i.v9)((function(e) {
								return e.global.language
							})),
							s = (0, i.v9)((function(e) {
								return e.leaderboard.filterHoverIndex
							})),
							c = (0, i.v9)((function(e) {
								return e.leaderboard.searchFilter
							})),
							d = function(e) {
								o(ie.setFilterHoverIndex(e))
							},
							m = function(e) {
								for (var t = [], n = 0, a = Object.keys(e); n < a.length; n++) {
									var r = a[n];
									t.push({
										type: r,
										option: e[r].option
									})
								}
								return t
							},
							u = function(e) {
								Wt("ui_hilite"), d(e)
							},
							g = function() {
								d([])
							},
							p = function(e) {
								! function(e) {
									if (e) {
										if (!m(c).filter((function(t) {
												return t.type === e.type && t.option === e.option
											})).length) {
											o(ie.setUserLeaderboardDataMap({})), o(ie.setLeaderboardDataMap({})), o(ie.setFriendsLeaderboardDataMap({}));
											var t = m(c);
											(t = t.filter((function(t) {
												return t.type !== e.type
											}))).push(e),
												function(e) {
													Wt("ui_select_confirm"), o(ie.setSearchFilter(e))
												}(t)
										}
									} else y("missing key from search filter")
								}(e)
							};
						return a.createElement(ii, null, a.createElement(oi, null, kt[l][t.type]), a.createElement("div", {
							className: "filter-btn-group__buttons"
						}, t.options.map((function(e, i) {
							return a.createElement(ni, {
								key: e,
								btnGroup: t,
								option: e,
								coords: [n, i],
								"data-type": t.type,
								handleMouseOver: u,
								handleMouseOut: g,
								parentArray: r,
								mapping: {
									type: t.type,
									option: e
								},
								isHovered: s && s[0] === n && s[1] === i,
								isSelected: c[t.type] && c[t.type].option === e,
								handleClick: p
							}, e, kt[l][e] ? kt[l][e] : e)
						}))))
					},
					si = function(e) {
						var t = (0, i.I0)(),
							n = (0, i.v9)((function(e) {
								return e.global.language
							})),
							r = (0, i.v9)((function(e) {
								return e.global.isCrossConfirm
							})),
							o = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							l = (0, a.useState)(!1),
							s = (0, et.Z)(l, 2),
							c = s[0],
							d = s[1],
							m = (0, i.v9)((function(e) {
								return e.leaderboard.showFilter
							})),
							u = (0, i.v9)((function(e) {
								return e.leaderboard.filterHoverIndex
							})),
							g = (0, i.v9)((function(e) {
								return e.leaderboard.searchFilter
							})),
							p = (0, i.v9)(D),
							h = function() {
								y("FILTER CLOSE"), e.close()
							},
							f = (0, a.useRef)([{
								type: "recency",
								options: ["lifetime", "currentSeason"]
							}]),
							v = function(e) {
								t(ie.setFilterHoverIndex(e))
							},
							b = function() {
								var e = 0 === u.length ? [0, 0] : u,
									t = e[0],
									n = e[1];
								(f.current[t].options[n - 1] || f.current[t - 1]) && (f.current[t].options[n - 1] ? v([t, n - 1]) : !f.current[t].options[n - 1] && f.current[t - 1] && v([t - 1, f.current[t - 1].options.length - 1]), Wt("ui_hilite"))
							},
							_ = function() {
								var e = 0 === u.length ? [0, 0] : u,
									t = e[0],
									n = e[1];
								(f.current[t].options[n + 1] || f.current[t + 1]) && (f.current[t].options[n + 1] ? v([t, n + 1]) : !f.current[t].options[n + 1] && f.current[t + 1] && v([t + 1, 0]), Wt("ui_hilite"))
							},
							E = function(e) {
								for (var t = [], n = 0, a = Object.keys(e); n < a.length; n++) {
									var r = a[n];
									t.push({
										type: r,
										option: e[r].option
									})
								}
								return t
							},
							w = function() {
								y("FILTERBTN CONTROLLER PRIMARY"), t(ie.setShowFilter(!1));
								var e = u;
								if (!(e.length <= 0)) {
									var n = function(e) {
										var t = {
											type: void 0,
											option: void 0
										};
										return t.type = f.current[e[0]].type, t.option = f.current[e[0]].options[e[1]], t
									}(e);
									n && function(e) {
										if (e) {
											if (!E(g).filter((function(t) {
													return t.type === e.type && t.option === e.option
												})).length) {
												t(ie.setUserLeaderboardDataMap({})), t(ie.setLeaderboardDataMap({})), t(ie.setFriendsLeaderboardDataMap({}));
												var n = E(g);
												(n = n.filter((function(t) {
													return t.type !== e.type
												}))).push(e),
													function(e) {
														Wt("ui_select_confirm"), t(ie.setSearchFilter(e))
													}(n)
											}
										} else y("missing key from search filter")
									}(n)
								}
							};
						return xa(u, {
							up: b,
							down: _,
							direct: w
						}), ka(1, {
							UP: b,
							DOWN: _,
							XBB_PSCIRCLE: r ? h : w,
							XBA_PSCROSS: r ? w : h
						}, [m]), (0, a.useEffect)((function() {
							v([0, 0]), "wz2" === e.gameType.gameTitle && "gameModes" === e.gameType.gameMode && f.current.push({
								type: "squadSize",
								options: ["all", "quads", "trios", "duos", "solos"]
							}), d(!0)
						}), []), a.createElement(Jr, {
							onClick: function() {
								return h()
							}
						}, a.createElement($r, {
							onClick: function(e) {
								return e.stopPropagation()
							},
							isArabic: p
						}, a.createElement("div", {
							className: "header"
						}, a.createElement("div", {
							className: "close",
							onClick: function() {
								return h()
							}
						}, a.createElement("div", {
							className: "close-button",
							onMouseEnter: function() {
								Wt("ui_hilite")
							}
						}, p ? a.createElement(kn, {
							width: o ? 24 : 12,
							height: o ? 45 : 22.5,
							fill: "#e7e7e7"
						}) : a.createElement(Tn, {
							width: o ? 24 : 12,
							height: o ? 45 : 22.5,
							fill: "#e7e7e7"
						}), a.createElement(fa, {
							type: r ? "XBB_PSCIRCLE" : "XBA_PSCROSS",
							width: 2,
							height: 2,
							marginLeft: .4
						})), kt[n].lbFilter && kt[n] ? kt[n].lbFilter : "FILTER")), a.createElement("div", {
							className: "body"
						}, c && f.current.map((function(e, t, n) {
							return a.createElement(li, {
								key: e.type,
								btnGrouping: e,
								parentIndex: t,
								parentArray: n
							})
						})))))
					};

				function ci(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var a = Object.getOwnPropertySymbols(e);
						t && (a = a.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, a)
					}
					return n
				}
				var di = ir;
				const mi = function() {
					var e, t, n, r, o, l, s, c, d, m, u, g = (0, i.I0)(),
						p = (0, i.v9)((function(e) {
							return e.leaderboard.selectedScreen
						})),
						h = (0, a.useRef)(),
						f = (0, i.v9)((function(e) {
							return e.global.isCrossConfirm
						})),
						v = (0, i.v9)((function(e) {
							return e.global.language
						})),
						b = (0, i.v9)((function(e) {
							return e.leaderboard.searchFilter
						})),
						_ = (0, i.v9)((function(e) {
							return e.leaderboard.showFilter
						})),
						y = (0, i.v9)((function(e) {
							return e.leaderboard.selectedLeaderboardListType
						})),
						E = (0, i.v9)((function(e) {
							return e.leaderboard.selectedTabIndex
						})),
						w = (0, i.v9)((function(e) {
							return e.leaderboard.leaderboardRanksDataMap
						})),
						S = (0, i.v9)((function(e) {
							return e.leaderboard.friendsLeaderboardRanksDataMap
						})),
						k = (0, i.v9)(D),
						x = (0, i.v9)((function(e) {
							return e.global.lastInputDevice
						})),
						R = (0, i.v9)((function(e) {
							return e.leaderboard.userLeaderboardDataMap
						})),
						T = (0, i.v9)((function(e) {
							return e.leaderboard.selectedGameTitle
						})),
						L = (0, i.v9)((function(e) {
							return e.leaderboard.selectedGameMode
						})),
						M = 0 === x,
						I = (0, i.v9)((function(e) {
							return e.leaderboard.activeLbGameModeTileIndex
						})),
						A = "mw2" === (0, i.v9)((function(e) {
							return e.record.activeLbTitle
						})) ? 0 : 1,
						C = pa(),
						P = di[0].gameType[A].options[I],
						z = P.menuItems,
						O = P.gameMode,
						j = (0, a.useRef)(),
						B = (0, a.useRef)();
					j.current = T, B.current = L;
					var G = function(e, t) {
						var n = "";
						return e === t && (n += "active"), n + (M ? " controller-item" : " button")
					};
					u = R && R[j.current] ? R[j.current][B.current] : "";
					var Z = function() {
							Wt("ui_select_back"), g(F.setClose({
								screen: "leaderboards"
							}))
						},
						U = function() {
							Wt(_ ? "ui_select_back" : "ui_generic_pop_up"), g(ie.setShowFilter(!_))
						},
						K = function(e) {
							g(e ? ie.setSelectedLeaderboardListType(e) : "friends" === y ? ie.setSelectedLeaderboardListType("global") : ie.setSelectedLeaderboardListType("friends")), Wt("ui_select_confirm")
						},
						H = function() {
							var e;
							Wt("ui_select_confirm"), null === (e = h.current) || void 0 === e || e.goToTop()
						},
						W = kr(400, (function() {
							var e = function(e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = null != arguments[t] ? arguments[t] : {};
									t % 2 ? ci(Object(n), !0).forEach((function(t) {
										(0, N.Z)(e, t, n[t])
									})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ci(Object(n)).forEach((function(t) {
										Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
									}))
								}
								return e
							}({
								listType: y,
								gameTitle: j.current,
								gameMode: B.current
							}, b);
							"global" === y ? w[j.current] && w[j.current][B.current] || (g(ie.setLeaderboardDataMap({})), g(ne(e))) : S[j.current] && S[j.current][B.current] || (g(ie.setFriendsLeaderboardDataMap({})), g(ae(e))), R && R[j.current] && R[j.current][B.current] || g(re(e))
						}));
					return ka(1, {
						XBB_PSCIRCLE: !f && close,
						XBA_PSCROSS: f && close,
						XBX_PSSQUARE: U,
						LSTICK_PRESSED: K,
						XBY_PSTRIANGLE: H,
						LEFT: null,
						RIGHT: null
					}), (0, a.useEffect)((function() {
						W()
					}), [b, y, E]), (0, a.useEffect)((function() {
						var e = {
							recency: {
								option: "lifetime"
							}
						};
						"wz2" === j.current && "br" === B.current && (e.squadSize = {
							option: "all"
						}), g(ie.setSearchFilter(function(e) {
							for (var t = [], n = 0, a = Object.keys(e); n < a.length; n++) {
								var r = a[n];
								t.push({
									type: r,
									option: e[r].option
								})
							}
							return t
						}(e)))
					}), []), (0, a.useEffect)((function() {
						"gameModes" !== O && g(ie.setActiveLbGameModeTileIndex(E))
					}), [E]), (0, a.useEffect)((function() {
						"leaderboards" === p && g(ie.setFriendsLeaderboardDataMap({}))
					}), [p]), a.createElement(Or, {
						isArabic: k,
						isController: M
					}, a.createElement(Dr, {
						tabs: z,
						screenTitle: P,
						onBack: Z
					}), _ && a.createElement(si, {
						show: _,
						close: U,
						gameType: P
					}), a.createElement("div", {
						className: "leaderboard-content"
					}, a.createElement("div", {
						className: "leaderboard-left"
					}, a.createElement("div", {
						className: "leaderboard-table-filters"
					}, a.createElement("div", {
						className: M ? "filter-status" : "button filter-status",
						onClick: U,
						onMouseEnter: function() {
							return Wt("ui_hilite")
						}
					}, a.createElement(fa, {
						type: "XBX_PSSQUARE",
						width: 2,
						height: 2,
						marginLeft: k ? 2.2 : 0,
						marginRight: k ? 0 : 2.2,
						fill: "#e7e7e7"
					}), a.createElement("span", {
						className: "filter-status-static"
					}, null == kt || null === (e = kt[v]) || void 0 === e ? void 0 : e.lbFilter, " : ", function(e) {
						var t = Object.keys(e),
							n = t.length,
							a = 1,
							r = " ";
						if (!(n <= 0)) {
							for (var i = 0, o = ["recency", "squadSize"]; i < o.length; i++) {
								var l = o[i];
								t.includes(l) && (r += "".concat((null == kt ? void 0 : kt[v][e[l].option]) || "--", " ").concat(a < n ? " / " : "", " ")), a++
							}
							return r
						}
					}(b))), a.createElement("div", {
						className: "list-type"
					}, a.createElement(fa, {
						type: "L3",
						width: C(2),
						height: C(2),
						marginLeft: C(k ? .4 : 0),
						marginRight: C(k ? 0 : .4)
					}), a.createElement("div", {
						className: G("friends", y),
						onClick: function() {
							return K("friends")
						},
						onMouseEnter: function() {
							return Wt("ui_hilite")
						}
					}, kt[v].friends, M ? a.createElement(a.Fragment, null) : a.createElement("div", {
						className: "radio-btn"
					})), a.createElement("div", {
						className: G("global", y),
						onClick: function() {
							return K("global")
						},
						onMouseEnter: function() {
							return Wt("ui_hilite")
						}
					}, kt[v].global, M ? a.createElement(a.Fragment, null) : a.createElement("div", {
						className: "radio-btn"
					})))), w && a.createElement(qr, {
						controlRef: h,
						leaderboardRanksDataMap: "global" === y ? w[j.current] && w[j.current][B.current] : S[j.current] && S[j.current][B.current],
						onBack: Z,
						authenticatedUseGamertag: null === (t = u) || void 0 === t || null === (n = t.ranks) || void 0 === n ? void 0 : n[0].gamertag,
						errorMsg: "global" === y ? "" : kt[v].noFriendsLeaderboard
					}), a.createElement("div", {
						className: "pagination"
					}, M ? a.createElement(a.Fragment, null, a.createElement("div", {
						className: "pagination__button"
					}, a.createElement(fa, {
						type: "LT_L2",
						width: C(3.2),
						height: C(3.2),
						fill: "#e7e7e7"
					}), a.createElement("p", null, kt[v].pageUp)), a.createElement("div", {
						className: "pagination__button"
					}, a.createElement(fa, {
						type: "RT_R2",
						width: C(3.2),
						height: C(3.2),
						fill: "#e7e7e7"
					}), a.createElement("p", null, kt[v].pageDown))) : a.createElement(a.Fragment, null)), u && a.createElement("div", {
						style: {
							paddingRight: "1rem"
						}
					}, u.ranks && a.createElement(Zr, {
						playerData: null === (r = u) || void 0 === r || null === (o = r.ranks) || void 0 === o ? void 0 : o[0],
						isIsolatedUserRow: !0,
						columns: u.columns
					}), !(null !== (l = u) && void 0 !== l && null !== (s = l.ranks) && void 0 !== s && s[0].rank) && !(null !== (c = u) && void 0 !== c && null !== (d = c.ranks) && void 0 !== d && d[0].percentileRank) && a.createElement("p", {
						className: "user-unranked-msg"
					}, function(e, t, n) {
						var a, r;
						if (e && t && n) {
							var i, o, l, s = "";
							return "gameModes" === n ? s = null == kt || null === (i = kt[e]) || void 0 === i ? void 0 : i[n] : "mw2" === t ? s = kt[e].multiplayer : "wz2" === t && (s = kt[e].battleRoyale), e.includes("japanese") ? "".concat(s || "", " ").concat(null == kt || null === (o = kt[e]) || void 0 === o ? void 0 : o.unrankedMsgStart, " ").concat(null == kt || null === (l = kt[e]) || void 0 === l ? void 0 : l.unrankedMsgEnd) : "".concat(null == kt || null === (a = kt[e]) || void 0 === a ? void 0 : a.unrankedMsgStart, " ").concat(s || "", " ").concat(null == kt || null === (r = kt[e]) || void 0 === r ? void 0 : r.unrankedMsgEnd)
						}
					}(v, j.current, B.current))), a.createElement("div", {
						className: "footer-wrap"
					}, a.createElement("div", {
						className: M ? "filter-status" : "button filter-status",
						onClick: function() {
							return H()
						}
					}, a.createElement(fa, {
						type: "XBY_PSTRIANGLE",
						width: C(2.4),
						height: C(2.4),
						marginLeft: C(k ? 2.2 : 0),
						marginRight: C(k ? 0 : 2.2),
						fill: "#e7e7e7"
					}), a.createElement("span", {
						className: "filter-status-static"
					}, null == kt || null === (m = kt[v]) || void 0 === m ? void 0 : m.goToTop))))))
				};
				var ui = n(34896);
				const gi = function(e) {
						var t = e.size,
							n = void 0 === t ? 192 : t,
							r = e.color,
							o = void 0 === r ? "#358545" : r,
							l = e.title,
							s = e.ratioVal,
							c = e.fillVal,
							d = void 0 === c ? 0 : c,
							m = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							u = m ? n : n / 2,
							g = (0, ui.Nb1)().innerRadius(m ? .85 * n : n / 2 * .85).outerRadius(m ? .88 * n : n / 2 * .88),
							p = (0, ui.Nb1)().innerRadius(m ? .94 * n : n / 2 * .94).outerRadius(m ? n : n / 2).cornerRadius(5);
						return a.createElement("svg", {
							width: m ? 2 * n : n,
							height: m ? 2 * n : n
						}, a.createElement("g", {
							transform: "translate(".concat(u, ",").concat(u, ")")
						}, a.createElement("path", {
							fill: "#3e3e3d",
							d: g({
								startAngle: 0,
								endAngle: 2 * Math.PI
							})
						}), a.createElement("path", {
							fill: o,
							d: p({
								startAngle: 0,
								endAngle: 2 * Math.PI * d
							})
						}), a.createElement("text", {
							style: {
								textAnchor: "middle"
							}
						}, a.createElement("tspan", {
							className: "number",
							x: "0",
							dy: ".1em",
							style: {
								fontSize: "".concat(m ? 100 : 50),
								fill: "#fff",
								fontWeight: "bold"
							}
						}, s || 0), a.createElement("tspan", {
							x: "0",
							dy: "1.5em",
							style: {
								fontSize: "".concat(m ? 28 : 14),
								fill: "#9AA39A"
							}
						}, l))))
					},
					pi = function(e, t, n, a, r) {
						var i = a ? 600 : 375,
							o = a ? 290 : 192;
						ui.Ys(e).select("svg").remove();
						var l = ui.Ys(e).append("svg").attr("preserveAspectRatio", "xMidYMid meet").attr("height", a ? 310 : 155).attr("width", o).attr("viewBox", "0 0 ".concat(i, " ").concat(i)).append("g").attr("transform", "translate(".concat(o, ", ").concat(a ? 270 : 202, ")")),
							s = ui.Nb1().padAngle(.02).innerRadius(a ? 195 : 120).outerRadius(a ? 290 : 165),
							c = ui.ve8().sort(null).startAngle(0).value((function(e) {
								return e.value
							})),
							d = ui.ve8().startAngle(0).value(4 * Math.PI);
						(r ? l.selectAll().data(d([{}])).enter() : l.selectAll().data(c(t)).enter()).append("path").attr("d", s).style("fill", (function(e, n) {
							return r ? " rgba(231, 231, 231, 0.15)" : t[n % t.length].color
						})), l.append("text").attr("text-anchor", "middle").text((function() {
							return kt[n].placements
						})).style("fill", "#9AA39A").style("font-size", "3.6rem")
					};
				var hi = function(e) {
					var t = e.data,
						n = e.isEmpty,
						r = (0, a.useRef)(null),
						o = (0, i.v9)((function(e) {
							return e.global.language
						})),
						l = (0, i.v9)((function(e) {
							return e.global.is4k
						}));
					return pi(r.current, t, o, l, n), (0, a.useEffect)((function() {
						pi(r.current, t, o, l, n)
					}), []), a.createElement("div", {
						className: "container",
						style: {
							height: "15.7rem"
						}
					}, a.createElement("div", {
						className: "graph",
						ref: r
					}))
				};
				const fi = a.memo(hi);
				var vi, bi, _i, yi, Ei, wi, Si = se.ZP.section(vi || (vi = (0, me.Z)(["\n    width: 100%;\n    height: 100%;\n    .screen-content {\n        margin: 0 9.6rem;\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .dashboard-right {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n    }\n    .recency-filter {\n        display: flex;\n        margin: 0 9.6rem;\n        padding: 2rem 0;\n        gap: 2rem;\n        .filter-option {\n            font-size: 2rem;\n            text-align: center;\n            color: #555;\n            text-transform: uppercase;\n            cursor: pointer;\n            :hover {\n                color: #e7e7e7;\n            }\n        }\n        .active {\n            color: #e7e7e7;\n            text-decoration: underline;\n            text-underline-offset: 0.4rem;\n        }\n    }\n"]))),
					ki = se.ZP.div(bi || (bi = (0, me.Z)(["\n    width: 56.4rem;\n    height: 81.8rem;\n    border-radius: 0.4rem;\n    border: 0.1rem solid ", ";\n    position: relative;\n    background: linear-gradient(360deg, #000000 0%, #000000 31.66%, rgba(0, 0, 0, 0) 67.74%);\n\n    .header {\n        display: flex;\n        border-bottom: 0.1rem solid ", ";\n        align-items: center;\n        padding-right: 2.1rem;\n\n        &-main {\n            font-size: 2.8rem;\n            font-weight: bold;\n            color: #fff;\n            text-transform: uppercase;\n            padding: 2.1rem 0.8rem 2.1rem 2.1rem;\n            white-space: nowrap;\n        }\n\n        &-desc {\n            font-size: 1.8rem;\n            font-style: italic;\n            font-family: 'DIN Next LT Pro';\n            color: rgba(231, 231, 231, 0.25);\n        }\n    }\n\n    .played {\n        padding: 1.2rem 2.8rem;\n        display: flex;\n        border-bottom: 0.1rem solid ", ";\n        justify-content: space-evenly;\n        &-block {\n            width: max-content;\n            text-align: center;\n            line-height: 3rem;\n            & > div:nth-of-type(1) {\n                color: ", ";\n                font-size: 2.8rem;\n                font-weight: bold;\n            }\n\n            & > div:nth-of-type(2) {\n                color: ", ";\n                font-size: 1.8rem;\n            }\n        }\n    }\n\n    .levels {\n        padding: 4.4rem 0;\n        display: flex;\n        justify-content: center;\n\n        &-info {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n\n            & > div:nth-of-type(1) {\n                font-size: 4rem;\n                font-weight: bold;\n                text-transform: uppercase;\n                color: ", ";\n                margin-bottom: 0.4rem;\n            }\n\n            & > div:nth-of-type(2) {\n                font-size: 2rem;\n                color: #9aa39a;\n                white-space: nowrap;\n            }\n        }\n    }\n\n    .ratios {\n        display: flex;\n        justify-content: space-evenly;\n        margin-top: 2.4rem;\n        .kill-death-section,\n        .win-loss-section {\n            width: 24rem;\n            height: 34.1rem;\n            border: 0.1rem solid rgba(231, 231, 231, 0.15);\n            text-align: center;\n            padding-top: 2rem;\n            .container {\n                margin-top: -0.6rem;\n            }\n        }\n        .kill-death-stats,\n        .win-loss-stats {\n            display: flex;\n            text-align: left;\n        }\n        .placement-stats {\n            margin-top: 1.6rem;\n            > div {\n                display: flex;\n                text-align: left;\n                justify-content: space-around;\n            }\n            .wz-wins > div:nth-of-type(1) {\n                background: #3ecced;\n                height: 0.4rem;\n                border-radius: 0.4rem;\n                width: 2.4rem;\n                margin-bottom: 1.4rem;\n            }\n            .wz-top5 > div:nth-of-type(1) {\n                background: #1b4dff;\n                height: 0.4rem;\n                border-radius: 0.4rem;\n                width: 2.4rem;\n                margin-bottom: 1.4rem;\n            }\n            .wz-top10 > div:nth-of-type(1) {\n                background: #f333f6;\n                height: 0.4rem;\n                border-radius: 0.4rem;\n                width: 2.4rem;\n                margin-bottom: 1.4rem;\n            }\n            .wz-top25 > div:nth-of-type(1) {\n                background: #4b02a7;\n                height: 0.4rem;\n                border-radius: 0.4rem;\n                width: 2.4rem;\n                margin-bottom: 1.4rem;\n            }\n            .wz-wins,\n            .wz-top5,\n            .wz-top10,\n            .wz-top25 {\n                width: 50%;\n                padding-left: 2rem;\n                display: flex;\n                flex-direction: column;\n            }\n        }\n        .empty-donut {\n            height: 15.5rem;\n            margin-top: -0.6rem;\n        }\n    }\n    .careers {\n        &-sub-header {\n            font-size: 2rem;\n            font-weight: bold;\n            color: rgba(85, 85, 85, 0.7);\n            text-transform: uppercase;\n        }\n        &-sub-title {\n            font-size: 1.8rem;\n            color: #9aa39a;\n        }\n        &-sub-value {\n            font-size: 2.8rem;\n            font-weight: bold;\n            line-height: 4.3rem;\n            color: ", ";\n        }\n    }\n    .kill-count,\n    .death-count {\n        margin: 3rem;\n        display: flex;\n        flex-direction: column;\n    }\n    .kill-count > div:nth-of-type(1) {\n        background: #368947;\n        height: 0.4rem;\n        border-radius: 0.4rem;\n        width: 2.4rem;\n        margin-bottom: 1.4rem;\n    }\n    .death-count > div:nth-of-type(1) {\n        background: rgba(231, 231, 231, 0.2);\n        height: 0.4rem;\n        border-radius: 0.4rem;\n        width: 2.4rem;\n        margin-bottom: 1.4rem;\n    }\n    .win-count > div:nth-of-type(1) {\n        background: #3ecced;\n        height: 0.4rem;\n        border-radius: 0.4rem;\n        width: 2.4rem;\n        margin-bottom: 1.4rem;\n    }\n    .loss-count > div:nth-of-type(1) {\n        background: rgba(231, 231, 231, 0.2);\n        height: 0.4rem;\n        border-radius: 0.4rem;\n        width: 2.4rem;\n        margin-bottom: 1.4rem;\n    }\n    .win-count,\n    .loss-count {\n        margin: 3rem;\n        display: flex;\n        flex-direction: column;\n    }\n    .streaks {\n        height: 14.7rem;\n        justify-content: center;\n        align-items: center;\n        border: 0.1rem solid rgba(211, 165, 0, 0.4);\n        margin: 3.2rem 3.2rem 0;\n        .streaks-title {\n            position: relative;\n            top: -1rem;\n            display: inline;\n            background: black;\n            padding: 0 1.2rem;\n            font-size: 1.8rem;\n            color: #d3a500;\n            left: 35%;\n        }\n        &-block {\n            display: flex;\n            align-items: center;\n            justify-content: space-evenly;\n            text-align: center;\n            margin-top: 1rem;\n            .divider {\n                height: 9rem;\n                width: 0.1rem;\n                background: rgba(211, 165, 0, 0.4);\n            }\n            .highest-kills,\n            .highest-score {\n                & > div:nth-of-type(2) {\n                    font-size: 2rem;\n                    color: #d3a500;\n                    margin-bottom: 0.4rem;\n                }\n\n                & > div:nth-of-type(1) {\n                    font-size: 5rem;\n                    margin-bottom: 0.4rem;\n                    font-weight: bold;\n                    color: #e7e7e7;\n                }\n            }\n\n            &_personal-best {\n                margin-left: 1rem;\n            }\n        }\n    }\n"])), (function(e) {
						return e.theme.colors.darkGray
					}), (function(e) {
						return e.theme.colors.darkGray
					}), (function(e) {
						return e.theme.colors.darkGray
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLightAlt
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					})),
					xi = se.ZP.div(_i || (_i = (0, me.Z)(["\n    width: 56.4rem;\n    height: 81.8rem;\n    border-radius: 0.4rem;\n    border: 0.1rem solid ", ";\n    position: relative;\n    background: linear-gradient(360deg, #000000 0%, #000000 31.66%, rgba(0, 0, 0, 0) 67.74%);\n\n    .header {\n        display: flex;\n        padding: 2.1rem;\n        border-bottom: 0.1rem solid ", ";\n        align-items: center;\n\n        &-main {\n            font-size: 2.8rem;\n            font-weight: bold;\n            color: #fff;\n            text-transform: uppercase;\n            margin-right: 0.8rem;\n        }\n\n        &-side {\n            font-size: 1.8rem;\n            font-style: italic;\n            font-family: 'DIN Next LT Pro';\n            color: #494949;\n        }\n    }\n\n    .played {\n        padding: 1.2rem 2.8rem;\n        display: flex;\n        border-bottom: 0.1rem solid ", ";\n        justify-content: space-evenly;\n        &-block {\n            width: max-content;\n            text-align: center;\n            line-height: 3rem;\n            & > div:nth-of-type(1) {\n                color: ", ";\n                font-size: 2.8rem;\n                font-weight: bold;\n            }\n\n            & > div:nth-of-type(2) {\n                color: ", ";\n                font-size: 1.8rem;\n            }\n        }\n    }\n\n    .levels {\n        padding: 4.4rem 0;\n        display: flex;\n        justify-content: center;\n\n        &-info {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n\n            & > div:nth-of-type(1) {\n                font-size: 4rem;\n                font-weight: bold;\n                text-transform: uppercase;\n                color: ", ";\n                margin-bottom: 0.4rem;\n            }\n\n            & > div:nth-of-type(2) {\n                font-size: 2rem;\n                color: #9aa39a;\n                white-space: nowrap;\n            }\n        }\n    }\n\n    .ratios {\n        display: flex;\n        justify-content: space-evenly;\n        margin-top: 2.4rem;\n        .exfils-stats-section,\n        .win-loss-section {\n            width: 24rem;\n            height: 44.1rem;\n            border: 0.1rem solid rgba(231, 231, 231, 0.15);\n            text-align: center;\n            padding-top: 2rem;\n        }\n    }\n    .careers {\n        &-sub-header {\n            font-size: 2rem;\n            font-weight: bold;\n            color: rgba(85, 85, 85, 0.7);\n            text-transform: uppercase;\n        }\n        &-sub-title {\n            font-size: 1.8rem;\n            color: #9aa39a;\n        }\n        &-sub-value {\n            font-size: 2.8rem;\n            font-weight: bold;\n            line-height: 4.3rem;\n            color: ", ";\n        }\n    }\n    .exfils-count,\n    .eliminated-count {\n        margin: 2rem 3rem;\n        display: flex;\n        flex-direction: column;\n        text-align: left;\n    }\n    .exfils-count > div:nth-of-type(1) {\n        background: #3bc2e1;\n        height: 0.4rem;\n        border-radius: 0.4rem;\n        width: 2.4rem;\n        margin-bottom: 1.4rem;\n    }\n    .eliminated-count > div:nth-of-type(1) {\n        background: rgba(231, 231, 231, 0.2);\n        height: 0.4rem;\n        border-radius: 0.4rem;\n        width: 2.4rem;\n        margin-bottom: 1.4rem;\n    }\n    .kill-stats-section {\n        width: 24rem;\n        height: 44.1rem;\n        border: 0.1rem solid rgba(231, 231, 231, 0.15);\n        text-align: left;\n        padding-top: 2rem;\n        > div {\n            margin: 3rem;\n            margin-right: 0;\n            padding-left: 2rem;\n            padding-top: 0.5rem;\n            border-left: 0.2rem solid rgb(59, 59, 58, 0.7);\n        }\n    }\n    .streaks {\n        height: 14.7rem;\n        justify-content: center;\n        align-items: center;\n        border: 0.1rem solid rgba(211, 165, 0, 0.4);\n        margin: 3.2rem 3.2rem 0;\n        .streaks-title {\n            position: relative;\n            top: -1rem;\n            display: inline;\n            background: black;\n            padding: 0 1.2rem;\n            font-size: 1.8rem;\n            color: #d3a500;\n            left: 35%;\n        }\n        &-block {\n            display: flex;\n            align-items: center;\n            justify-content: space-evenly;\n            text-align: center;\n            margin-top: 1rem;\n\n            .highest-kills,\n            .highest-score {\n                & > div:nth-of-type(2) {\n                    font-size: 2rem;\n                    color: #d3a500;\n                    margin-bottom: 0.4rem;\n                }\n\n                & > div:nth-of-type(1) {\n                    font-size: 5rem;\n                    margin-bottom: 0.4rem;\n                    font-weight: bold;\n                    color: #e7e7e7;\n                }\n            }\n\n            &_personal-best {\n                margin-left: 1rem;\n            }\n        }\n    }\n"])), (function(e) {
						return e.theme.colors.darkGray
					}), (function(e) {
						return e.theme.colors.darkGray
					}), (function(e) {
						return e.theme.colors.darkGray
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLightAlt
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					})),
					Ri = se.ZP.div(yi || (yi = (0, me.Z)(["\n    width: 114.4rem;\n    height: 40.1rem;\n    background-color: #181717;\n    position: relative;\n    .weapon_num {\n        clip-path: polygon(0 0, 100% 0, 100% 100%, 22% 100%, 0 76%);\n        width: 2.4rem;\n        height: 2.4rem;\n        background: #368947;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-weight: bold;\n        font-size: 1.6rem;\n    }\n    .empty_weapon_num {\n        background: #3b3b3a;\n    }\n    .sort-section {\n        display: flex;\n        gap: 1rem;\n        padding: 1rem 0;\n        z-index: 1;\n        div {\n            color: ", ";\n            text-transform: uppercase;\n            font-size: 1.8rem;\n            cursor: pointer;\n            display: flex;\n            gap: 1rem;\n\n            &.active {\n                text-decoration: underline;\n                text-underline-offset: 0.4rem;\n                opacity: 100%;\n            }\n\n            &.inactive {\n                opacity: 20%;\n            }\n\n            :hover {\n                opacity: 100%;\n            }\n        }\n        .inactive-button {\n            opacity: 0.2;\n            pointer-events: none;\n        }\n        .down-arrow {\n            clip-path: polygon(100% 0, 0% 100%, 100% 100%);\n            width: 1.3rem;\n            height: 1.4rem;\n            background: #79c370;\n        }\n    }\n    .loadout {\n        &_header_section {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin-right: 1rem;\n        }\n        &_header {\n            padding: 1.9rem 0 2.6rem 2.7rem;\n            display: flex;\n            align-items: center;\n\n            & > div:nth-of-type(1) {\n                font-size: 2.8rem;\n                font-weight: bold;\n                text-transform: uppercase;\n                color: #fff;\n                margin-right: 1.3rem;\n            }\n\n            & > div:nth-of-type(2) {\n                font-size: 1.8rem;\n                font-family: 'DIN Next LT Pro';\n                font-style: italic;\n                color: #494949;\n            }\n        }\n\n        &_subheader {\n            padding-left: 2.7rem;\n            font-size: 2.4rem;\n            font-weight: bold;\n            text-transform: uppercase;\n            color: ", ";\n            font-weight: bold;\n        }\n\n        &_weapons {\n            display: flex;\n            margin-top: 1.8rem;\n            padding: 0 2.9rem;\n            padding-left: 5.3rem;\n            gap: 6rem;\n            height: 25rem;\n            align-items: center;\n            .empty-weapons {\n                margin: 0 auto;\n                font-size: 1.8rem;\n                font-weight: bold;\n                color: ", ";\n            }\n            &-empty-block {\n                display: flex;\n                align-items: center;\n                border-left: 0.1rem solid #3b3b3a !important;\n                div {\n                    text-align: center;\n                    margin: 0px auto;\n                    font-size: 1.8rem;\n                    color: #3b3b3a;\n                }\n            }\n\n            &-block {\n                padding-left: 1.6rem;\n                border-left: 0.1rem solid #368947;\n                height: 22.7rem;\n                width: 27.7rem;\n                &-column {\n                    display: flex;\n                    flex-direction: row;\n                }\n\n                &:first-child {\n                    margin-left: 0;\n                }\n\n                div {\n                    margin-bottom: 0.8rem;\n\n                    &:last-child {\n                        margin-bottom: 0;\n                    }\n                }\n\n                &--name {\n                    text-transform: uppercase;\n                    color: #e7e7e7;\n                    font-size: 1.8rem;\n                    font-weight: bold;\n                }\n\n                &--subtitle {\n                    text-transform: uppercase !important;\n                }\n\n                &--text {\n                    color: #9aa39a;\n                    font-size: 1.8rem;\n                }\n\n                &--icon {\n                    width: 26rem;\n                    height: 12rem;\n                    display: flex;\n                    align-items: center;\n                }\n\n                &--number {\n                    color: #e7e7e7;\n                    font-size: 3.6rem;\n                    font-weight: bold;\n                }\n\n                &--lower-text {\n                    position: absolute;\n                    bottom: 4.2rem;\n                }\n            }\n        }\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					})),
					Ti = se.ZP.div(Ei || (Ei = (0, me.Z)(["\n    width: 114.4rem;\n    height: 40.1rem;\n    background-color: #181717;\n    position: relative;\n\n    .cr-recent {\n        &_header {\n            padding: 1.9rem 2.7rem;\n            display: flex;\n            align-items: center;\n\n            & > div:nth-of-type(1) {\n                font-size: 2.8rem;\n                font-weight: bold;\n                text-transform: uppercase;\n                color: #fff;\n                margin-right: 1.3rem;\n            }\n\n            & > div:nth-of-type(2) {\n                font-size: 1.8rem;\n                font-family: 'DIN Next LT Pro';\n                font-style: italic;\n                color: #494949;\n            }\n        }\n\n        &_content {\n            margin-top: 3rem;\n            padding: 0 2.7rem;\n            display: flex;\n            .error-block {\n                height: 22rem;\n                display: flex;\n                align-items: center;\n                div {\n                    margin: 0 auto;\n                    font-size: 1.8rem;\n                    font-weight: bold;\n                    color: ", ";\n                }\n            }\n            &-subhead {\n                font-size: 1.8rem;\n                font-weight: bold;\n                color: #e7e7e7;\n                text-transform: uppercase;\n                margin-bottom: 1rem;\n\n                span {\n                    text-transform: lowercase;\n                }\n            }\n\n            &-match {\n                width: 50%;\n                border-right: 0.1rem solid #368947;\n                height: max-content;\n            }\n\n            &-wins {\n                padding-left: 3.7rem;\n                width: 50%;\n            }\n\n            &_sub-title {\n                color: #9aa39a;\n                font-size: 1.8rem;\n            }\n            .map-data {\n                margin: 1rem;\n            }\n            .graph-label-value {\n                font-size: 1.8rem;\n                margin-left: 0.5rem;\n                color: #e7e7e7;\n            }\n        }\n        &_match-summary {\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            padding: 2rem;\n            background-repeat: no-repeat;\n            background-size: cover;\n            width: 50rem;\n            height: 21.5rem;\n            margin-top: 1rem;\n\n            .match-data-item-result {\n                font-size: 1.8rem;\n                text-transform: uppercase;\n                padding-bottom: 0.2rem;\n\n                &.win {\n                    color: #3ecced;\n                }\n\n                &.loss {\n                    color: #ec4442;\n                }\n\n                &.eliminated {\n                    color: #3ecced;\n                }\n            }\n        }\n        &_match_header {\n            display: flex;\n            justify-content: space-between;\n            div:nth-of-type(1) {\n                display: flex;\n                img {\n                    height: fit-content;\n                }\n            }\n            .placement-val {\n                color: #e7e7e7;\n                font-weight: bold;\n                font-size: 3.6rem;\n                text-transform: uppercase;\n            }\n            .match-icon {\n                margin-right: 1.7rem;\n            }\n            div:nth-of-type(2) {\n                display: flex;\n                flex-direction: column;\n                .map-title {\n                    font-size: 3.6rem;\n                    color: #e7e7e7;\n                    font-weight: bold;\n                    text-transform: uppercase;\n                }\n                div:nth-of-type(2) {\n                    font-size: 1.8rem;\n                    color: #9aa39a;\n                    text-transform: uppercase;\n                }\n                .match_victory {\n                    color: #3ecced;\n                    font-weight: bold;\n                    font-size: 1.8rem;\n                    text-transform: uppercase;\n                }\n                .match_defeat {\n                    color: #ec4442;\n                    font-weight: bold;\n                    font-size: 1.8rem;\n                    text-transform: uppercase;\n                }\n            }\n        }\n        &_match_stats {\n            display: flex;\n            justify-content: space-between;\n            margin-right: 1rem;\n            > div {\n                div:nth-of-type(1) {\n                    font-size: 1.8rem;\n                    color: #9aa39a;\n                }\n                div:nth-of-type(2) {\n                    font-size: 2.8rem;\n                    color: #e7e7e7;\n                    font-weight: bold;\n                }\n            }\n        }\n    }\n\n    .finishes_section {\n        padding-left: 3.7rem;\n        width: 50%;\n\n        .finishes_box {\n            display: flex;\n            gap: 1.1rem;\n        }\n        .finishes_block {\n            width: 11.9rem;\n            height: 23.1rem;\n            background: rgba(231, 231, 231, 0.05);\n            border-radius: 4px;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            padding: 1.6rem 0rem;\n            justify-content: space-evenly;\n            text-align: center;\n            position: relative;\n            &.empty_block {\n                background: rgba(0, 0, 0, 0.56);\n                opacity: 0.36;\n                color: #9aa39a;\n            }\n            .finishes-text {\n                font-size: 1.8rem;\n                color: #9aa39a;\n            }\n            .finishes-score {\n                font-style: normal;\n                font-weight: bold;\n                font-size: 3.6rem;\n                color: #e7e7e7;\n            }\n            .finishes-border {\n                border-radius: 0px 0px 4px 4px;\n                height: 2rem;\n                width: 11.9rem;\n                bottom: -0.1rem;\n                position: absolute;\n            }\n        }\n    }\n    .extracted_items_section {\n        padding-left: 3.7rem;\n        width: 50%;\n        .extracted_items_sub_section {\n            display: flex;\n        }\n        .dog-tag-section {\n            width: 24.5rem;\n            height: 21.5rem;\n            background: rgba(231, 231, 231, 0.05);\n            border-radius: 4px;\n            display: flex;\n            flex-direction: column;\n            gap: 1rem;\n            align-items: center;\n            .dog-tag-image {\n                width: 12.8rem;\n                height: 12.8rem;\n            }\n        }\n        .extracted_items_stats {\n            display: flex;\n            flex-direction: column;\n            margin-left: 1.8rem;\n\n            .cash-section,\n            .weapons-section {\n                width: 24.5rem;\n                height: 9.8rem;\n                background: rgba(231, 231, 231, 0.05);\n                border-radius: 4px;\n                gap: 1rem;\n                display: flex;\n                flex-direction: column;\n                padding: 2rem;\n            }\n            .weapons-section {\n                margin-top: 1.8rem;\n            }\n        }\n        .sub-header {\n            font-size: 1.8rem;\n            color: #9aa39a;\n        }\n        .sub-value {\n            font-size: 2.8rem;\n            color: #e7e7e7;\n            font-weight: bold;\n        }\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					})),
					Li = se.ZP.div(wi || (wi = (0, me.Z)(["\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    pointer-events: none;\n\n    .top {\n        position: absolute;\n        border-top-left-radius: 0.4rem;\n        border-top-right-radius: 0.4rem;\n        top: -0.1rem;\n        left: -0.1rem;\n        height: 1.2rem;\n        width: calc(100% + 0.3rem);\n        background: ", ";\n    }\n\n    .bottom {\n        position: absolute;\n        border-bottom-left-radius: 0.4rem;\n        border-bottom-right-radius: 0.4rem;\n        bottom: -0.1rem;\n        left: -0.1rem;\n        height: 3.2rem;\n        width: calc(100% + 0.3rem);\n        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), ", ";\n        font-size: 1.8rem;\n        font-weight: bold;\n        text-transform: uppercase;\n        padding: 0 1.2rem;\n        display: flex;\n        align-items: center;\n        line-height: normal;\n    }\n"])), (function(e) {
						return e.theme.colors.primaryGreen
					}), (function(e) {
						return e.theme.colors.primaryGreen
					}));
				const Di = function(e) {
					var t = e.type,
						n = (0, i.v9)((function(e) {
							return e.global.language
						})),
						r = (0, i.v9)((function(e) {
							return e.global.isCrossConfirm
						}));
					return a.createElement(Li, null, a.createElement("div", {
						className: "top"
					}), a.createElement("div", {
						className: "bottom"
					}, a.createElement(fa, {
						type: r ? "XBA_PSCROSS" : "XBB_PSCIRCLE",
						width: 2,
						height: 2,
						marginLeft: .4,
						marginRight: .4,
						fill: "#3c5938"
					}), "career" === t && kt[n].viewCareer, "loadout" === t && kt[n].viewLoadoutStats, "recent" === t && kt[n].recentMatches2Desc, "recentdmz" === t && kt[n].recentMatchesdmzDesc))
				};

				function Mi() {
					return Mi = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, Mi.apply(this, arguments)
				}
				const Ii = function(e) {
						return a.createElement("svg", Mi({
							xmlns: "http://www.w3.org/2000/svg",
							viewBox: "0 0 14 16",
							fill: "current"
						}, e), a.createElement("path", {
							d: "M11 1V0H3v1H0v2.91C0 5.8 1.07 7.54 2.76 8.38l.32.16C3.55 10.18 6 11 6 11v2l-3 2v1h8v-1l-3-2v-2s2.45-.82 2.92-2.46l.32-.16A5.008 5.008 0 0 0 14 3.91V1h-3ZM1 3.91V2h2v5.36c-1.24-.71-2-2.01-2-3.45Zm12 0c0 1.44-.76 2.74-2 3.45V2h2v1.91Z",
							style: {
								fill: "fill"
							}
						}))
					},
					Ai = function(e) {
						var t, n, r, o, l, s, c, d, m, u, g, p, h, f, v, b, _, y, E, w, S = e.selectedTile,
							k = e.data,
							x = e.dataLoaded,
							R = (0, i.v9)((function(e) {
								return e.global.language
							})),
							T = (0, i.v9)((function(e) {
								return e.global.gameTitle
							})),
							L = (0, i.v9)((function(e) {
								return e.record.selectedGameMode
							})),
							D = null == k ? void 0 : k.genericStats;
						return a.createElement(ki, null, x && a.createElement(a.Fragment, null, a.createElement("div", {
							className: "header"
						}, a.createElement("div", {
							className: "header-main"
						}, kt[R].career), a.createElement("div", {
							className: "header-desc"
						}, function(e) {
							switch (e) {
								case "mp":
									return kt[R].careerDesc;
								case "br":
									return kt[R].brCareerDesc;
								case "resurgence":
									return kt[R].resurgenceCareerDesc
							}
						}(L))), a.createElement("div", {
							className: "played"
						}, a.createElement("div", {
							className: "played-block"
						}, a.createElement("div", null, null != D && D.totalTimePlayed || 0 === (null == D ? void 0 : D.totalTimePlayed) ? Tt(null == D ? void 0 : D.totalTimePlayed) : "--"), a.createElement("div", null, kt[R].timePlayed)), a.createElement("div", {
							className: "played-block"
						}, a.createElement("div", null, null != D && D.totalGamesPlayed || 0 === (null == D ? void 0 : D.totalGamesPlayed) ? null == D ? void 0 : D.totalGamesPlayed : "--"), a.createElement("div", null, kt[R].gamesPlayed))), a.createElement("div", {
							className: "played"
						}, a.createElement("div", {
							className: "played-block"
						}, a.createElement("div", null, null != D && D.avgKillsPerGame || 0 === (null == D ? void 0 : D.avgKillsPerGame) ? null == D ? void 0 : D.avgKillsPerGame : "--"), a.createElement("div", null, kt[R].avgKillsPerGame)), a.createElement("div", {
							className: "played-block"
						}, a.createElement("div", null, null != D && D.scorePerMinute || 0 === (null == D ? void 0 : D.scorePerMinute) ? null == D ? void 0 : D.scorePerMinute : "--"), a.createElement("div", null, kt[R].scorePerMinute))), a.createElement("div", {
							className: "ratios"
						}, a.createElement("div", {
							className: "kill-death-section"
						}, a.createElement(gi, {
							ratioVal: null != D && D.killDeathRatio || 0 === (null == D ? void 0 : D.killDeathRatio) ? (100 * (null == D ? void 0 : D.killDeathRatio) / 100).toFixed(2) : "--",
							fillVal: (null == D ? void 0 : D.kills) / ((null == D ? void 0 : D.kills) + (null == D ? void 0 : D.deaths)),
							title: kt[R].kdRatio
						}), a.createElement("div", {
							className: "kill-death-stats"
						}, a.createElement("div", {
							className: "kill-count"
						}, a.createElement("div", null), a.createElement("div", {
							className: "careers-sub-title"
						}, kt[R].kills), a.createElement("div", {
							className: "careers-sub-value"
						}, null != D && D.kills || 0 === (null == D ? void 0 : D.kills) ? null == D ? void 0 : D.kills : "--")), a.createElement("div", {
							className: "death-count"
						}, a.createElement("div", null), a.createElement("div", {
							className: "careers-sub-title"
						}, kt[R].deaths), a.createElement("div", {
							className: "careers-sub-value"
						}, null != D && D.deaths || 0 === (null == D ? void 0 : D.deaths) ? null == D ? void 0 : D.deaths : "--")))), a.createElement("div", {
							className: "win-loss-section"
						}, "mw2" === T ? a.createElement(gi, {
							ratioVal: null != D && D.winLossRatio || 0 === (null == D ? void 0 : D.winLossRatio) ? (100 * (null == D ? void 0 : D.winLossRatio) / 100).toFixed(2) : "--",
							fillVal: (null == D ? void 0 : D.wins) / ((null == D ? void 0 : D.wins) + (null == D ? void 0 : D.losses)),
							title: kt[R].wlRatio,
							color: "#3ECCED"
						}) : null != k && k.modeStats ? a.createElement(fi, {
							isEmpty: (null == k || null === (t = k.modeStats) || void 0 === t ? void 0 : t.wzWins) + (null == k || null === (n = k.modeStats) || void 0 === n ? void 0 : n.wzTop5) + (null == k || null === (r = k.modeStats) || void 0 === r ? void 0 : r.wzTop10) + (null == k || null === (o = k.modeStats) || void 0 === o ? void 0 : o.wzTop25) === 0,
							data: [{
								value: null != k && null !== (l = k.modeStats) && void 0 !== l && l.wzWins || 0 === (null == k || null === (s = k.modeStats) || void 0 === s ? void 0 : s.wzWins) ? null == k || null === (c = k.modeStats) || void 0 === c ? void 0 : c.wzWins : "--",
								color: "#3ECCED",
								label: "Wins"
							}, {
								value: null != k && null !== (d = k.modeStats) && void 0 !== d && d.wzTop5 || 0 === (null == k || null === (m = k.modeStats) || void 0 === m ? void 0 : m.wzTop5) ? null == k || null === (u = k.modeStats) || void 0 === u ? void 0 : u.wzTop5 : "--",
								color: "#1B4DFF",
								label: "Top 5"
							}, {
								value: null != k && null !== (g = k.modeStats) && void 0 !== g && g.wzTop10 || 0 === (null == k || null === (p = k.modeStats) || void 0 === p ? void 0 : p.wzTop10) ? null == k || null === (h = k.modeStats) || void 0 === h ? void 0 : h.wzTop10 : "--",
								color: "#F333F6",
								label: "Top 10"
							}, {
								value: null != k && null !== (f = k.modeStats) && void 0 !== f && f.wzTop25 || 0 === (null == k || null === (v = k.modeStats) || void 0 === v ? void 0 : v.wzTop25) ? null == k || null === (b = k.modeStats) || void 0 === b ? void 0 : b.wzTop25 : "--",
								color: "#4B02A7",
								label: "Top 25"
							}]
						}) : a.createElement("div", {
							className: "empty-donut"
						}), "mw2" === T ? a.createElement("div", {
							className: "win-loss-stats"
						}, a.createElement("div", {
							className: "win-count"
						}, a.createElement("div", null), a.createElement("div", {
							className: "careers-sub-title"
						}, kt[R].wins), a.createElement("div", {
							className: "careers-sub-value"
						}, null == D ? void 0 : D.wins)), a.createElement("div", {
							className: "loss-count"
						}, a.createElement("div", null), a.createElement("div", {
							className: "careers-sub-title"
						}, kt[R].losses), a.createElement("div", {
							className: "careers-sub-value"
						}, null == D ? void 0 : D.losses))) : a.createElement("div", {
							className: "placement-stats"
						}, a.createElement("div", null, a.createElement("div", {
							className: "wz-wins"
						}, a.createElement("div", null), a.createElement("div", {
							className: "careers-sub-title"
						}, kt[R].wins), a.createElement("div", {
							className: "careers-sub-value"
						}, (null == k || null === (_ = k.modeStats) || void 0 === _ ? void 0 : _.wzWins) || 0)), a.createElement("div", {
							className: "wz-top5"
						}, a.createElement("div", null), a.createElement("div", {
							className: "careers-sub-title"
						}, kt[R].top5), a.createElement("div", {
							className: "careers-sub-value"
						}, (null == k || null === (y = k.modeStats) || void 0 === y ? void 0 : y.wzTop5) || 0))), a.createElement("div", null, a.createElement("div", {
							className: "wz-top10"
						}, a.createElement("div", null), a.createElement("div", {
							className: "careers-sub-title"
						}, kt[R].top10), a.createElement("div", {
							className: "careers-sub-value"
						}, (null == k || null === (E = k.modeStats) || void 0 === E ? void 0 : E.wzTop10) || 0)), a.createElement("div", {
							className: "wz-top25"
						}, a.createElement("div", null), a.createElement("div", {
							className: "careers-sub-title"
						}, kt[R].top25), a.createElement("div", {
							className: "careers-sub-value"
						}, (null == k || null === (w = k.modeStats) || void 0 === w ? void 0 : w.wzTop25) || 0)))))), a.createElement("div", {
							className: "streaks"
						}, a.createElement("div", {
							style: {
								left: "arabic" === R ? "0" : "",
								right: "arabic" === R ? "29%" : ""
							},
							className: "streaks-title"
						}, a.createElement(Ii, {
							width: "1.4rem",
							fill: "#D3A500"
						}), a.createElement("span", {
							className: "streaks-block_personal-best"
						}, kt[R].personalBests)), a.createElement("div", {
							className: "streaks-block"
						}, "wz2" === T ? a.createElement("div", {
							className: "highest-score"
						}, a.createElement("div", null, null != D && D.highestKillsPerGame || 0 === (null == D ? void 0 : D.highestKillsPerGame) ? null == D ? void 0 : D.highestKillsPerGame : "--"), a.createElement("div", null, kt[R].highestKillsPerGame)) : a.createElement("div", {
							className: "highest-kills"
						}, a.createElement("div", null, null != D && D.highestKillStreak || 0 === (null == D ? void 0 : D.highestKillStreak) ? null == D ? void 0 : D.highestKillStreak : "--"), a.createElement("div", null, kt[R].highestKillStreak)), a.createElement("div", {
							className: "divider"
						}), "mw2" === T ? a.createElement("div", {
							className: "highest-score"
						}, a.createElement("div", null, null != D && D.highestKillsPerGame || 0 === (null == D ? void 0 : D.highestKillsPerGame) ? null == D ? void 0 : D.highestKillsPerGame : "--"), a.createElement("div", null, kt[R].highestKillsPerGame)) : a.createElement("div", {
							className: "highest-score"
						}, a.createElement("div", null, null != D && D.highestCashSpent || 0 === (null == D ? void 0 : D.highestCashSpent) ? "".concat(Nt(null == D ? void 0 : D.highestCashSpent)) : "--"), a.createElement("div", null, kt[R].mostCashSpentPerGame)))), "career" === S && a.createElement(Di, {
							type: "career"
						})))
					},
					Ni = function(e) {
						var t = e.selectedTile,
							n = e.setSelectedTile,
							r = e.data,
							o = e.dataError,
							l = e.dataLoaded,
							s = (0, i.I0)(),
							c = (0, i.v9)((function(e) {
								return e.global.language
							})),
							d = (0, i.v9)((function(e) {
								return e.record.sortByVal
							})),
							m = (0, a.useState)(jt(d, (null == r ? void 0 : r.weaponStats) || [])),
							u = (0, et.Z)(m, 2),
							g = u[0],
							p = u[1],
							h = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							f = (0, i.v9)((function(e) {
								return e.global.gameTitle
							})),
							v = (0, i.v9)((function(e) {
								return e.record.selectedGameMode
							}));
						(0, a.useEffect)((function() {
							if ((null == r ? void 0 : r.gameMode) === v) {
								var e, t = [];
								"kills" === d ? t = l && (null == r ? void 0 : r.weaponStats) && Bt(null == r ? void 0 : r.weaponStats) : "aiAgentKills" === d ? t = l && (null == r ? void 0 : r.weaponStats) && Gt(null == r ? void 0 : r.weaponStats) : "kdRatio" === d && (t = l && (null == r ? void 0 : r.weaponStats) && (null == r ? void 0 : r.weaponStats).filter((function(e) {
									return parseFloat(e.kdRatio) > 0
								})));
								var n = t.length ? jt(d, t || []) : [],
									a = 3 - (null === (e = n) || void 0 === e ? void 0 : e.length) > 0 ? 3 - n.length : 0;
								if (a) {
									var i = Array.from(Array(a), (function() {
										return {
											isEmpty: !0
										}
									}));
									n = [].concat((0, Y.Z)(n), i)
								}
								p(n)
							}
						}), [d, r, l]);
						var b = function(e, t) {
								e.stopPropagation();
								var n = l && (null == r ? void 0 : r.weaponStats) && Bt(null == r ? void 0 : r.weaponStats);
								s(F.setSortByValue(t)), p(jt(t, n || [])), Wt("ui_hilite_tab", "tab")
							},
							_ = function() {
								"kills" === d ? "mw2" === f ? b("kdRatio") : "wz2" === f && b("aiAgentKills") : ["aiAgentKills", "kdRatio"].includes(d) && b("kills")
							};
						return ka(1, {
							RTRIG: _
						}), xa(d, {
							shiftRight: _
						}), a.createElement(Ri, {
							onMouseEnter: function() {
								n("loadout")
							},
							onClick: function() {
								s(F.setSelectedScreen("loadout")), s(F.setSortByValue("kills")), Wt("ui_select_confirm")
							}
						}, a.createElement("div", {
							className: "loadout_header_section"
						}, a.createElement("div", {
							className: "loadout_header"
						}, a.createElement("div", null, kt[c].loadOut), a.createElement("div", {
							style: {
								fontSize: "japanese_full" === c || "polish_full" === c || "spanish" === c || "french" === c || "german" === c ? "calc(100% + 0.6rem)" : "",
								paddingRight: "arabic" === c ? "10px" : ""
							}
						}, kt[c].topWeaponsDesc)), "mw2" === f && "loadout" === t && g && g.length > 0 && a.createElement("div", {
							className: "sort-section"
						}, a.createElement("div", null, a.createElement(fa, {
							type: "RT_R2",
							width: 3,
							height: 2,
							fill: "#e7e7e7"
						})), a.createElement("div", {
							onClick: function(e) {
								return b(e, "kills")
							},
							className: "kills" === d ? "active" : "inactive"
						}, "kills" === d && a.createElement("div", {
							className: "down-arrow"
						}), kt[c].kills), a.createElement("div", {
							onClick: function(e) {
								return b(e, "kdRatio")
							},
							className: "kdRatio" === d ? "active" : "inactive"
						}, "kdRatio" === d && a.createElement("div", {
							className: "down-arrow"
						}), kt[c].kdRatio)), "wz2" === f && "loadout" === t && g && g.length > 0 && a.createElement("div", {
							className: "sort-section"
						}, a.createElement("div", {
							className: "inactive-button"
						}, a.createElement(fa, {
							type: "RT_R2",
							width: 3,
							height: 2,
							fill: "#e7e7e7"
						})), a.createElement("div", {
							onClick: function(e) {
								return b(e, "kills")
							},
							className: "kills" === d ? "active" : "inactive"
						}, "kills" === d && a.createElement("div", {
							className: "down-arrow"
						}), kt[c].operatorKills))), a.createElement("div", null, a.createElement("div", {
							style: {
								paddingRight: "arabic" === c ? "10px" : ""
							},
							className: "loadout_subheader"
						}, kt[c].topWeapons), a.createElement("div", {
							className: "loadout_weapons"
						}, o ? a.createElement("div", {
							className: "empty-weapons"
						}, kt[c].apiError) : g && g.slice(0, 3).map((function(e, t) {
							return a.createElement("div", {
								key: t,
								className: "loadout_weapons-block-column"
							}, a.createElement("div", {
								className: e.isEmpty ? "weapon_num empty_weapon_num" : "weapon_num"
							}, t + 1), e.isEmpty ? a.createElement("div", {
								key: "no-weapons",
								className: "loadout_weapons-block loadout_weapons-empty-block"
							}, a.createElement("div", null, kt[c].noWeapons)) : a.createElement("div", {
								key: e.key,
								className: "loadout_weapons-block"
							}, a.createElement("div", {
								className: "loadout_weapons-block--name"
							}, e.label), a.createElement("div", {
								className: "loadout_weapons-block--text loadout_weapons-block--subtitle"
							}, Mt(null == e ? void 0 : e.classLabel, c) || "--"), a.createElement("div", {
								className: "loadout_weapons-block--icon"
							}, h ? a.createElement("img", {
								style: {
									width: "30rem"
								},
								src: Rt(null == e ? void 0 : e.hudImage, "weapon", "410x112"),
								alt: ""
							}) : a.createElement("img", {
								src: Rt(null == e ? void 0 : e.hudImage, "weapon", "280x140"),
								alt: ""
							})), a.createElement("div", {
								className: "loadout_weapons-block--lower-text"
							}, a.createElement("div", {
								className: "loadout_weapons-block--text"
							}, "wz2" === f && "kills" === d ? kt[c].operatorKills : kt[c][d]), a.createElement("div", {
								className: "loadout_weapons-block--number"
							}, e[d]))))
						})))), "loadout" === t && a.createElement(Di, {
							type: "loadout"
						}))
					},
					Ci = function(e) {
						var t = e.max,
							n = e.current,
							r = void 0 === n ? 0 : n,
							o = e.width,
							l = void 0 === o ? 180 : o,
							s = e.fillColor,
							c = void 0 === s ? "#fff" : s,
							d = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							m = r ? r / t * l : 0;
						return a.createElement("div", null, a.createElement("svg", {
							width: d ? 2 * l : l,
							height: 4
						}, a.createElement("rect", {
							fill: "#555",
							width: d ? 2 * l : l,
							height: 4
						}), a.createElement("rect", {
							fill: c,
							width: d ? 2 * m : m,
							height: 4
						})))
					},
					Pi = function(e) {
						var t, n, r, o, l, s, c, d, m, u, g, p = e.selectedTile,
							h = e.setSelectedTile,
							f = e.data,
							v = e.dataError,
							b = e.dataLoaded,
							_ = (0, i.I0)(),
							y = (0, i.v9)((function(e) {
								return e.global.language
							})),
							k = (0, i.v9)((function(e) {
								return e.record.recentMatches
							})),
							x = (0, a.useState)(),
							R = (0, et.Z)(x, 2),
							T = R[0],
							L = R[1],
							D = (0, i.v9)((function(e) {
								return e.record.recentMatchesError
							})),
							M = (0, i.v9)((function(e) {
								return e.record.recentMatchesLoaded
							})),
							I = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							A = (0, i.v9)((function(e) {
								return e.global.gameTitle
							})),
							N = (0, i.v9)((function(e) {
								return e.record.selectedGameMode
							})),
							C = k && (null == k || null === (t = k.matches) || void 0 === t ? void 0 : t.length) > 0 && !D && M,
							P = b && (null == f ? void 0 : f.modeStats),
							z = b && (null == f ? void 0 : f.modeStats) && 0 === (null == f ? void 0 : f.modeStats.length);
						(0, a.useEffect)((function() {
							L(null), _(F.setRecentMatches(null)), _(K({
								gameTitle: A,
								gameMode: N
							}))
						}), [N]), (0, a.useEffect)((function() {
							k && k.matches && L(k.matches[0])
						}), [k]);
						var O = function() {
								var e = [];
								return P && Array.isArray(P) && e.push(null == P ? void 0 : P.map((function(e) {
									return {
										map: e.name,
										wins: e.wins
									}
								}))), e[0]
							},
							j = O() && O().sort((function(e, t) {
								return parseFloat(t.wins) - parseFloat(e.wins)
							})),
							B = O() && Math.max.apply(Math, (0, Y.Z)(O().map((function(e) {
								return e.wins
							})))),
							G = [{
								name: "".concat(kt[y].score),
								value: T && !Pt(null === (n = T.playerStats) || void 0 === n ? void 0 : n.score) ? Ct(null === (r = T.playerStats) || void 0 === r ? void 0 : r.score) : "--"
							}, {
								name: "".concat(kt[y].kills),
								value: T && !Pt(null === (o = T.playerStats) || void 0 === o ? void 0 : o.kills) ? null === (l = T.playerStats) || void 0 === l ? void 0 : l.kills : "--"
							}, {
								name: "".concat(kt[y].kdRatio),
								value: T && !Pt(null === (s = T.playerStats) || void 0 === s ? void 0 : s.kdRatio) ? (100 * (null === (c = T.playerStats) || void 0 === c ? void 0 : c.kdRatio) / 100).toFixed(2) : "--"
							}, {
								name: "".concat(kt[y].damage),
								value: T && !Pt(null === (d = T.playerStats) || void 0 === d ? void 0 : d.damageDone) ? Ct(null === (m = T.playerStats) || void 0 === m ? void 0 : m.damageDone) : "--"
							}];
						return a.createElement(Ti, {
							onMouseEnter: function() {
								return h("recent")
							},
							onClick: function() {
								_(F.setSelectedTab(0)), _(F.setSelectedScreen("recents")), Wt("ui_select_alt_small")
							}
						}, a.createElement("div", {
							className: "cr-recent_header"
						}, a.createElement("div", null, kt[y].recentMatchesModes), a.createElement("div", {
							style: {
								paddingRight: "arabic" === y ? "10px" : ""
							}
						}, kt[y].recentMatchesModesDesc)), a.createElement("div", {
							className: "cr-recent_content"
						}, a.createElement("div", {
							className: "cr-recent_content-match"
						}, a.createElement("div", {
							className: "cr-recent_content-subhead"
						}, kt[y].lastMatch, ": ", a.createElement("span", null, T && T.utcEndSeconds ? T && T.utcEndSeconds && Lt(T.utcEndSeconds, kt[y].langCode) : "--")), C && T ? a.createElement("div", {
							className: "cr-recent_match-summary",
							style: {
								backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),\n                             url(https://assets.callofduty.com/cdn/app/codp/iw9/map-load/loading_".concat(null == T ? void 0 : T.map, "_bg_468x198.jpg)")
							}
						}, a.createElement("div", {
							className: "cr-recent_match_header"
						}, a.createElement("div", null, a.createElement("div", {
							className: "match-icon"
						}, I ? a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/icon_mode_mp_".concat(S[null == T ? void 0 : T.mode], "_144x144.png"),
							alt: ""
						}) : a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/icon_mode_mp_".concat(S[null == T ? void 0 : T.mode], "_54x54.png"),
							alt: ""
						})), a.createElement("div", null, a.createElement("div", {
							className: "map-title"
						}, null != T && T.map ? (null == E || null === (u = E[y]) || void 0 === u ? void 0 : u[null == T ? void 0 : T.map]) || (null == T ? void 0 : T.map) : "--"), a.createElement("div", {
							className: "cr-recent_match_mode"
						}, null != T && T.mode ? (null == w || null === (g = w[y]) || void 0 === g ? void 0 : g[null == T ? void 0 : T.mode]) || (null == T ? void 0 : T.mode) : "--"))), a.createElement("div", null, "win" === (null == T ? void 0 : T.result) && a.createElement("div", {
							className: "match_victory"
						}, kt[y].victory), "loss" === (null == T ? void 0 : T.result) && a.createElement("div", {
							className: "match_defeat"
						}, kt[y].defeat), "loss prevented" === (null == T ? void 0 : T.result) && a.createElement("div", {
							className: "match_victory"
						}, kt[y].lossPrevented))), a.createElement("div", {
							className: "cr-recent_match_stats"
						}, G.map((function(e) {
							return a.createElement("div", {
								key: e.name
							}, a.createElement("div", null, e.name), a.createElement("div", null, e.value))
						})))) : a.createElement("div", {
							className: "error-block"
						}, a.createElement("div", null, D ? kt[y].apiError : kt[y].noMatchHistory))), a.createElement("div", {
							className: "cr-recent_content-wins"
						}, a.createElement("div", {
							className: "cr-recent_content-subhead"
						}, kt[y].winsByMode), v || z ? a.createElement("div", {
							className: "error-block"
						}, a.createElement("div", null, v ? kt[y].apiError : kt[y].noModesHistory)) : a.createElement(a.Fragment, null, j && j.slice(0, 5).map((function(e) {
							var t;
							return a.createElement("div", {
								key: null == e ? void 0 : e.map,
								className: "map-data"
							}, a.createElement("div", {
								className: "cr-recent_content_sub-title"
							}, null != e && e.map ? (null == w || null === (t = w[y]) || void 0 === t ? void 0 : t[null == e ? void 0 : e.map]) || (null == e ? void 0 : e.map) : "--"), a.createElement("div", {
								key: e.map,
								style: {
									backgroundColor: "none",
									display: "flex",
									gap: "1rem"
								}
							}, a.createElement(Ci, {
								max: B,
								width: 356,
								fillColor: "#368947",
								current: (null == e ? void 0 : e.wins) || 0
							}), a.createElement("div", {
								className: "graph-label-value"
							}, null == e ? void 0 : e.wins)))
						}))))), "recent" === p && a.createElement(Di, {
							type: "recent"
						}))
					},
					zi = function(e) {
						var t = e.handleClickFilter,
							n = e.filterRecency,
							r = (0, i.v9)((function(e) {
								return e.global.language
							})),
							o = (0, i.v9)((function(e) {
								return e.record.recentMatchesLoaded
							})),
							l = (0, i.v9)((function(e) {
								return e.record.crDataLoaded
							})),
							s = (0, i.v9)((function(e) {
								return e.record.seasonDataLoaded
							})),
							c = (0, i.v9)((function(e) {
								return e.global.gameTitle
							})),
							d = (0, i.I0)(),
							m = function() {
								"Lifetime" === n && t(d, "Last 10 Games"), "Last 10 Games" === n && t(d, "Lifetime"), "Current Season" === n && t(d, "Lifetime"), Wt("ui_hilite_tab", n)
							};
						return xa(n, {
							shiftLeft: m
						}), ka(1, {
							LTRIG: m
						}), a.createElement("div", {
							className: "recency-filter"
						}, a.createElement(fa, {
							type: "LT_L2",
							width: 3,
							height: 2,
							marginLeft: .4,
							fill: "#e7e7e7"
						}), a.createElement("div", {
							className: "Lifetime" === n ? "filter-option active" : "filter-option",
							onClick: function() {
								return t(d, "Lifetime", o, l, s)
							}
						}, kt[r].lifetime), a.createElement("div", {
							className: "Last 10 Games" === n ? "filter-option active" : "filter-option",
							onClick: function() {
								return t(d, "Last 10 Games", o, l, s)
							}
						}, "dmz" === c ? kt[r].last10Deployments : kt[r].last10Games))
					},
					Oi = function(e) {
						var t, n, r, o, l, s, c, d, m, u, g, p, h, f, v, b, _ = e.selectedTile,
							y = e.setSelectedTile,
							S = e.data,
							x = e.dataError,
							R = e.dataLoaded,
							T = (0, i.I0)(),
							L = (0, i.v9)((function(e) {
								return e.global.language
							})),
							D = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							M = (0, i.v9)((function(e) {
								return e.global.gameTitle
							})),
							I = (0, i.v9)((function(e) {
								return e.record.selectedGameMode
							})),
							A = R && (null == S ? void 0 : S.modeStats),
							N = R && (null == S ? void 0 : S.modeStats) && 0 === (null == S ? void 0 : S.modeStats.length),
							C = (0, i.v9)((function(e) {
								return e.record.recentMatches
							})),
							P = (0, a.useState)((null == C ? void 0 : C.matches) && (null == C ? void 0 : C.matches[0])),
							z = (0, et.Z)(P, 2),
							O = z[0],
							j = z[1];
						(0, a.useEffect)((function() {
							T(F.setRecentMatches(null)), T(K({
								gameTitle: M,
								gameMode: I
							}))
						}), [I]), (0, a.useEffect)((function() {
							C && C.matches && j(C.matches[0])
						}), [C]);
						var B = function() {
								var e = "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/";
								return [{
									title: kt[L].quads,
									squadData: Ut(null == A ? void 0 : A.wzQuadsBestPlacement, null == A || A.wzQuadsTop5, null == A || A.wzQuadsTop10, null == A || A.wzQuadsTop15, null == A ? void 0 : A.wzQuadsWins, L),
									value: null == A ? void 0 : A.wzQuadsWins,
									image: "".concat(e, D ? "icon_mode_wz_br_quads_144x144.png" : "icon_mode_wz_br_quads_57x61.png"),
									color: Zt(null == A ? void 0 : A.wzQuadsBestPlacement)
								}, {
									title: kt[L].trios,
									squadData: Ut(null == A ? void 0 : A.wzTriosBestPlacement, null == A || A.wzTriosTop5, null == A || A.wzTriosTop10, null == A || A.wzTriosTop15, null == A ? void 0 : A.wzTriosWins, L),
									value: null == A ? void 0 : A.wzTriosWins,
									image: "".concat(e, D ? "icon_mode_wz_br_trios_144x144.png" : "icon_mode_wz_br_trios_57x61.png"),
									color: Zt(null == A ? void 0 : A.wzTriosBestPlacement)
								}, {
									title: kt[L].duos,
									squadData: Ut(null == A ? void 0 : A.wzDuosBestPlacement, null == A || A.wzDuosTop5, null == A || A.wzDuosTop10, null == A || A.wzDuosTop15, null == A ? void 0 : A.wzDuosWins, L),
									value: null == A ? void 0 : A.wzDuosWins,
									image: "".concat(e, D ? "icon_mode_wz_br_duos_144x144.png" : "icon_mode_wz_br_duos_57x61.png"),
									color: Zt(null == A ? void 0 : A.wzDuosBestPlacement)
								}, {
									title: kt[L].solos,
									squadData: Ut(null == A ? void 0 : A.wzSolosBestPlacement, null == A || A.wzSolosTop5, null == A || A.wzSolosTop10, null == A || A.wzSolosTop15, null == A ? void 0 : A.wzSolosWins, L),
									value: null == A ? void 0 : A.wzSolosWins,
									image: "".concat(e, D ? "icon_mode_wz_br_assim_144x144.png" : "icon_mode_wz_br_assim_57x61.png"),
									color: Zt(null == A ? void 0 : A.wzSolosBestPlacement)
								}]
							},
							G = [{
								name: "".concat(kt[L].score),
								value: O && !Pt(null == O || null === (t = O.genericStats) || void 0 === t ? void 0 : t.score) ? null == O || null === (n = O.genericStats) || void 0 === n ? void 0 : n.score : "--"
							}, {
								name: "".concat(kt[L].kills),
								value: O && !Pt(null == O || null === (r = O.genericStats) || void 0 === r ? void 0 : r.kills) ? null == O || null === (o = O.genericStats) || void 0 === o ? void 0 : o.kills : "--"
							}, {
								name: "".concat(kt[L].damage),
								value: O && !Pt(null == O || null === (l = O.genericStats) || void 0 === l ? void 0 : l.damageDone) ? Ct(null == O || null === (s = O.genericStats) || void 0 === s ? void 0 : s.damageDone) : "--"
							}, {
								name: "".concat(kt[L].cashSpent),
								value: O && !Pt(null == O || null === (c = O.genericStats) || void 0 === c ? void 0 : c.cashSpent) ? Nt(null == O || null === (d = O.genericStats) || void 0 === d ? void 0 : d.cashSpent) : "--"
							}];
						return a.createElement(Ti, {
							onMouseEnter: function() {
								return y("recent")
							},
							onClick: function() {
								T(K({
									gameTitle: M,
									gameMode: I
								})), T(F.setSelectedTab(0)), T(F.setSelectedScreen("recentsWz2")), Wt("ui_select_alt_small")
							}
						}, a.createElement("div", {
							className: "cr-recent_header"
						}, a.createElement("div", null, kt[L].matches), a.createElement("div", null, kt[L].previousWarzoneMatchStats)), a.createElement("div", {
							className: "cr-recent_content"
						}, a.createElement("div", {
							className: "cr-recent_content-match"
						}, a.createElement("div", {
							className: "cr-recent_content-subhead"
						}, kt[L].lastMatch, ": ", a.createElement("span", null, O && null !== (m = O.genericStats) && void 0 !== m && m.playerUtcDisconnectTimeSeconds ? O && (null === (u = O.genericStats) || void 0 === u ? void 0 : u.playerUtcDisconnectTimeSeconds) && Lt(null === (g = O.genericStats) || void 0 === g ? void 0 : g.playerUtcDisconnectTimeSeconds, kt[L].langCode) : "--")), C && O ? a.createElement("div", {
							className: "cr-recent_match-summary",
							style: {
								backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),\n                             url(https://assets.callofduty.com/cdn/app/codp/iw9/map-load/loading_".concat(null == O ? void 0 : O.map, "_bg_468x198.jpg)")
							}
						}, a.createElement("div", {
							className: "cr-recent_match_header"
						}, a.createElement("div", null, a.createElement("div", {
							className: "match-icon"
						}, D ? a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/icon_mode_".concat(k[null == O ? void 0 : O.mode], "_144x144.png")
						}) : a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/icon_mode_".concat(k[null == O ? void 0 : O.mode], "_54x54.png")
						})), a.createElement("div", null, a.createElement("div", {
							className: "map-title"
						}, null != O && O.map ? (null == E || null === (p = E[L]) || void 0 === p ? void 0 : p[null == O ? void 0 : O.map]) || (null == O ? void 0 : O.map) : "--"), a.createElement("div", {
							className: "cr-recent_match_mode"
						}, null != O && O.mode ? (null == w || null === (h = w[L]) || void 0 === h ? void 0 : h[null == O ? void 0 : O.mode]) || (null == O ? void 0 : O.mode) : "--"))), a.createElement("div", {
							className: "placement-val"
						}, null != O && null !== (f = O.genericStats) && void 0 !== f && f.placement && -1 !== (null == O || null === (v = O.genericStats) || void 0 === v ? void 0 : v.placement) ? At(null == O || null === (b = O.genericStats) || void 0 === b ? void 0 : b.placement, kt[L].langCode) : "--")), a.createElement("div", {
							className: "cr-recent_match_stats"
						}, G.map((function(e) {
							return a.createElement("div", {
								key: e.name
							}, a.createElement("div", null, e.name), a.createElement("div", null, e.value))
						})))) : a.createElement("div", {
							className: "error-block"
						}, a.createElement("div", null, x ? kt[L].apiError : kt[L].noMatchHistory))), a.createElement("div", {
							className: "finishes_section"
						}, a.createElement("div", {
							className: "cr-recent_content-subhead"
						}, kt[L].finishesBySquadSize), x || N ? a.createElement("div", {
							className: "error-block"
						}, a.createElement("div", null, x ? kt[L].apiError : kt[L].noModesHistory)) : a.createElement("div", {
							className: "finishes_box"
						}, B() && B().map((function(e, t) {
							return a.createElement("div", {
								className: !e.squadData.val && 0 !== e.squadData.val || "--" === e.squadData.val ? "empty_block finishes_block" : "finishes_block",
								key: t
							}, a.createElement("div", {
								className: "finishes-icon"
							}, a.createElement("img", {
								src: e.image
							})), a.createElement("div", {
								className: "finishes-text"
							}, e.title), a.createElement("div", {
								className: "finishes-score"
							}, e.squadData.val), a.createElement("div", {
								className: "finishes-text"
							}, e.squadData.label), a.createElement("div", {
								className: "finishes-border",
								style: {
									background: e.color
								}
							}))
						}))))), "recent" === _ && a.createElement(Di, {
							type: "recent"
						}))
					},
					ji = function(e) {
						var t, n, r, o, l, s, c, d, m, u, g, p, h, f, v = e.selectedTile,
							b = e.setSelectedTile,
							_ = e.data,
							y = e.dataError,
							w = (0, i.I0)(),
							S = (0, i.v9)((function(e) {
								return e.global.language
							})),
							k = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							x = (0, i.v9)((function(e) {
								return e.record.selectedGameMode
							})),
							R = (0, i.v9)((function(e) {
								return e.record.recentMatches
							})),
							T = (0, a.useState)((null == R ? void 0 : R.matches) && (null == R ? void 0 : R.matches[0])),
							L = (0, et.Z)(T, 2),
							D = L[0],
							M = L[1];
						(0, a.useEffect)((function() {
							w(F.setRecentMatches(null)), w(K({
								gameTitle: "dmz"
							}))
						}), [x]), (0, a.useEffect)((function() {
							R && R.matches && M(R.matches[0])
						}), [R]);
						var I, A = [{
							name: "".concat(kt[S].cash),
							value: D && !Pt(null === (t = D.genericStats) || void 0 === t ? void 0 : t.exfilCashAmount) ? Nt(null == D || null === (n = D.genericStats) || void 0 === n ? void 0 : n.exfilCashAmount) : "--"
						}, {
							name: "".concat(kt[S].aqSoldierKills),
							value: D && !Pt(null === (r = D.genericStats) || void 0 === r ? void 0 : r.aqSoldierKills) ? null == D || null === (o = D.genericStats) || void 0 === o ? void 0 : o.aqSoldierKills : "--"
						}, {
							name: "".concat(kt[S].operatorKills),
							value: D && !Pt(null === (l = D.genericStats) || void 0 === l ? void 0 : l.operatorKills) ? null == D || null === (s = D.genericStats) || void 0 === s ? void 0 : s.operatorKills : "--"
						}];
						return a.createElement(Ti, {
							onMouseEnter: function() {
								return b("recent")
							},
							onClick: function() {
								w(K({
									gameTitle: "dmz"
								})), w(F.setSelectedTab(0)), w(F.setSelectedScreen("recentsDmz")), Wt("ui_select_alt_small")
							}
						}, a.createElement("div", {
							className: "cr-recent_header"
						}, a.createElement("div", null, kt[S].deploymentsExtractedItems), a.createElement("div", null, kt[S].viewDeploymentsExtractedItems)), a.createElement("div", {
							className: "cr-recent_content"
						}, a.createElement("div", {
							className: "cr-recent_content-match"
						}, a.createElement("div", {
							className: "cr-recent_content-subhead"
						}, kt[S].lastDeployment, ": ", a.createElement("span", null, D && null !== (c = D.genericStats) && void 0 !== c && c.playerUtcDisconnectTimeSeconds ? D && (null === (d = D.genericStats) || void 0 === d ? void 0 : d.playerUtcDisconnectTimeSeconds) && Lt(null === (m = D.genericStats) || void 0 === m ? void 0 : m.playerUtcDisconnectTimeSeconds, kt[S].langCode) : "--")), R && D ? a.createElement("div", {
							className: "cr-recent_match-summary",
							style: {
								backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),\n                             url(https://assets.callofduty.com/cdn/app/codp/iw9/map-load/loading_".concat(null == D ? void 0 : D.map, "_bg_468x198.jpg)")
							}
						}, a.createElement("div", {
							className: "cr-recent_match_header"
						}, a.createElement("div", null, a.createElement("div", null), a.createElement("div", null, a.createElement("div", {
							className: "map-title"
						}, null != D && D.map ? (null == E || null === (u = E[S]) || void 0 === u ? void 0 : u[null == D ? void 0 : D.map]) || (null == D ? void 0 : D.map) : "--"))), "success" === D.result && a.createElement("div", {
							className: "match-data-item-result win"
						}, kt[S].success), "loss" === D.result && a.createElement("div", {
							className: "match-data-item-result loss"
						}, kt[S].defeat), "eliminated" === D.result && a.createElement("div", {
							className: "match-data-item-resultm eliminated"
						}, kt[S].eliminated)), a.createElement("div", {
							className: "cr-recent_match_stats"
						}, A.map((function(e) {
							return a.createElement("div", {
								key: e.name
							}, a.createElement("div", null, e.name), a.createElement("div", null, e.value))
						})))) : a.createElement("div", {
							className: "error-block"
						}, a.createElement("div", null, y ? kt[S].apiError : kt[S].noMatchHistory))), a.createElement("div", {
							className: "extracted_items_section"
						}, a.createElement("div", {
							className: "cr-recent_content-subhead"
						}, a.createElement("div", null, kt[S].extractedItems)), a.createElement("div", {
							className: "extracted_items_sub_section"
						}, a.createElement("div", {
							className: "dog-tag-section"
						}, a.createElement("div", {
							className: "dog-tag-image"
						}, a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/dmz/hud_icon_loot_dog_tag".concat((I = null == _ || null === (g = _.extractedItemsStats) || void 0 === g ? void 0 : g.highestDogTagExtractedLabel, I ? "_".concat(I.toLowerCase()) : ""), "_").concat(k ? "256x256" : "128x128", ".png")
						})), a.createElement("div", {
							className: "sub-header"
						}, kt[S].dogTags), a.createElement("div", {
							className: "sub-value"
						}, null == _ || null === (p = _.extractedItemsStats) || void 0 === p ? void 0 : p.dogTagsExtracted)), a.createElement("div", {
							className: "extracted_items_stats"
						}, a.createElement("div", {
							className: "cash-section"
						}, a.createElement("div", {
							className: "sub-header"
						}, kt[S].cash), a.createElement("div", {
							className: "sub-value"
						}, Nt(null == _ || null === (h = _.extractedItemsStats) || void 0 === h ? void 0 : h.cashExtracted))), a.createElement("div", {
							className: "weapons-section"
						}, a.createElement("div", {
							className: "sub-header"
						}, kt[S].weapons), a.createElement("div", {
							className: "sub-value"
						}, null == _ || null === (f = _.extractedItemsStats) || void 0 === f ? void 0 : f.weaponsExtracted)))))), "recent" === v && a.createElement(Di, {
							type: "recentdmz"
						}))
					},
					Bi = function(e) {
						var t = e.selectedTile,
							n = e.data,
							r = e.dataLoaded,
							o = (0, i.v9)((function(e) {
								return e.global.language
							})),
							l = null == n ? void 0 : n.genericStats;
						return a.createElement(xi, null, r && a.createElement("div", {
							className: "dmz-careers"
						}, a.createElement("div", {
							className: "header"
						}, a.createElement("div", {
							className: "header-main"
						}, kt[o].career), a.createElement("div", {
							style: {
								paddingRight: "arabic" === o ? "10px" : ""
							},
							className: "header-side"
						}, kt[o].viewDMZStats)), a.createElement("div", {
							className: "played"
						}, a.createElement("div", {
							className: "played-block"
						}, a.createElement("div", null, null != l && l.totalTimePlayed || 0 === (null == l ? void 0 : l.totalTimePlayed) ? Tt(null == l ? void 0 : l.totalTimePlayed) : "--"), a.createElement("div", null, kt[o].timePlayed)), a.createElement("div", {
							className: "played-block"
						}, a.createElement("div", null, null != l && l.totalDeployments || 0 === (null == l ? void 0 : l.totalDeployments) ? null == l ? void 0 : l.totalDeployments : "--"), a.createElement("div", null, kt[o].deployments))), a.createElement("div", {
							className: "ratios"
						}, a.createElement("div", {
							className: "exfils-stats-section"
						}, a.createElement(gi, {
							ratioVal: null != l && l.exfilSuccessRatio || 0 === (null == l ? void 0 : l.exfilSuccessRatio) ? (100 * (null == l ? void 0 : l.exfilSuccessRatio) / 100).toFixed(2) : "--",
							fillVal: (null == l ? void 0 : l.successfulExfils) / ((null == l ? void 0 : l.successfulExfils) + (null == l ? void 0 : l.eliminated)),
							color: "#3BC2E1",
							title: kt[o].exfilRatio
						}), a.createElement("div", {
							className: "exfils-stats"
						}, a.createElement("div", {
							className: "exfils-count"
						}, a.createElement("div", null), a.createElement("div", {
							className: "careers-sub-title"
						}, kt[o].successfulExfils), a.createElement("div", {
							className: "careers-sub-value"
						}, null != l && l.successfulExfils || 0 === (null == l ? void 0 : l.successfulExfils) ? null == l ? void 0 : l.successfulExfils : "--")), a.createElement("div", {
							className: "eliminated-count"
						}, a.createElement("div", null), a.createElement("div", {
							className: "careers-sub-title"
						}, kt[o].eliminated), a.createElement("div", {
							className: "careers-sub-value"
						}, null != l && l.eliminated || 0 === (null == l ? void 0 : l.eliminated) ? null == l ? void 0 : l.eliminated : "--")))), a.createElement("div", {
							className: "kill-stats-section"
						}, a.createElement("div", {
							className: "aq-kills"
						}, a.createElement("div", {
							className: "careers-sub-title"
						}, kt[o].aqSoldierKills), a.createElement("div", {
							className: "careers-sub-value"
						}, null == l ? void 0 : l.aqSoldierKills)), a.createElement("div", {
							className: "op-kills"
						}, a.createElement("div", {
							className: "careers-sub-title"
						}, kt[o].operatorKills), a.createElement("div", {
							className: "careers-sub-value"
						}, null == l ? void 0 : l.operatorKills)), a.createElement("div", {
							className: "death-count"
						}, a.createElement("div", {
							className: "careers-sub-title"
						}, kt[o].deaths), a.createElement("div", {
							className: "careers-sub-value"
						}, null == l ? void 0 : l.deaths)), a.createElement("div", {
							className: "contracts"
						}, a.createElement("div", {
							className: "careers-sub-title"
						}, kt[o].contractsCompleted), a.createElement("div", {
							className: "careers-sub-value"
						}, null == l ? void 0 : l.contractsCompleted)))), a.createElement("div", {
							className: "streaks"
						}, a.createElement("div", {
							style: {
								left: "arabic" === o ? "0" : "",
								right: "arabic" === o ? "29%" : ""
							},
							className: "streaks-title"
						}, a.createElement(Ii, {
							width: "1.4rem",
							fill: "#D3A500"
						}), a.createElement("span", {
							className: "streaks-block_personal-best"
						}, kt[o].personalBests)), a.createElement("div", {
							className: "streaks-block"
						}, a.createElement("div", {
							className: "highest-kills"
						}, a.createElement("div", null, null != l && l.highestExfilStreak || 0 === (null == l ? void 0 : l.highestExfilStreak) ? null == l ? void 0 : l.highestExfilStreak : "--"), a.createElement("div", null, kt[o].highestExfilStreak)), a.createElement("div", {
							className: "highest-score"
						}, a.createElement("div", null, null != l && l.highestAqKillPerDeployment || 0 === (null == l ? void 0 : l.highestAqKillPerDeployment) ? null == l ? void 0 : l.highestAqKillPerDeployment : "--"), a.createElement("div", null, kt[o].highestAQKills)))), "career" === t && a.createElement(Di, {
							type: "career"
						})))
					},
					Gi = function(e) {
						var t = e.selectedTile,
							n = e.setSelectedTile,
							r = e.data,
							o = e.dataError,
							l = e.dataLoaded,
							s = (0, i.I0)(),
							c = (0, i.v9)((function(e) {
								return e.global.language
							})),
							d = (0, i.v9)((function(e) {
								return e.record.sortByVal
							})),
							m = (0, a.useState)(jt(d, null != r && r.weaponStats ? null == r ? void 0 : r.weaponStats : [])),
							u = (0, et.Z)(m, 2),
							g = u[0],
							p = u[1],
							h = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							f = (0, i.v9)((function(e) {
								return e.record.selectedGameMode
							}));
						(0, a.useEffect)((function() {
							if ((null == r ? void 0 : r.gameMode) === f) {
								var e, t = [];
								"kills" === d ? t = l && (null == r ? void 0 : r.weaponStats) && Bt(null == r ? void 0 : r.weaponStats) : "aiAgentKills" === d && (t = l && (null == r ? void 0 : r.weaponStats) && Gt(null == r ? void 0 : r.weaponStats));
								var n = t.length ? jt(d, t || []) : [],
									a = 3 - (null === (e = n) || void 0 === e ? void 0 : e.length) > 0 ? 3 - n.length : 0;
								if (a) {
									var i = Array.from(Array(a), (function() {
										return {
											isEmpty: !0
										}
									}));
									n = [].concat((0, Y.Z)(n), i)
								}
								p(n)
							}
						}), [d, r, l]);
						var v = function() {
								s(F.setSelectedScreen("loadout")), s(F.setSortByValue("kills")), Wt("ui_select_confirm")
							},
							b = function(e) {
								var t = l && (null == r ? void 0 : r.weaponStats) && (null == r ? void 0 : r.weaponStats).filter((function(e) {
									return e.kills > 0 || e.aiAgentKills > 0
								}));
								s(F.setSortByValue(e)), p(jt(e, t || [])), Wt("ui_hilite_tab", "tab")
							},
							_ = function() {
								"kills" === d && b("aiAgentKills"), "aiAgentKills" === d && b("kills")
							};
						return ka(1, {
							RTRIG: _
						}), xa(d, {
							shiftRight: _
						}), a.createElement(Ri, {
							onMouseEnter: function() {
								n("loadout")
							}
						}, a.createElement("div", {
							className: "loadout_header_section"
						}, a.createElement("div", {
							onClick: function() {
								return v()
							},
							className: "loadout_header"
						}, a.createElement("div", null, kt[c].loadOut), a.createElement("div", {
							style: {
								fontSize: "japanese_full" === c || "polish_full" === c || "spanish" === c || "french" === c || "german" === c ? "calc(100% + 0.6rem)" : "",
								paddingRight: "arabic" === c ? "10px" : ""
							}
						}, kt[c].topWeaponsDesc)), "loadout" === t && g && g.length > 0 && a.createElement("div", {
							className: "sort-section"
						}, a.createElement("div", null, a.createElement(fa, {
							type: "RT_R2",
							width: 3,
							height: 2,
							fill: "#e7e7e7"
						})), a.createElement("div", {
							onClick: function() {
								return b("aiAgentKills")
							},
							className: "aiAgentKills" === d ? "active" : "inactive"
						}, "aiAgentKills" === d && a.createElement("div", {
							className: "down-arrow"
						}), kt[c].aqSoldierKills), a.createElement("div", {
							onClick: function() {
								return b("kills")
							},
							className: "kills" === d ? "active" : "inactive"
						}, "kills" === d && a.createElement("div", {
							className: "down-arrow"
						}), kt[c].operatorKills))), a.createElement("div", {
							onClick: function() {
								return v()
							}
						}, a.createElement("div", {
							style: {
								paddingRight: "arabic" === c ? "10px" : ""
							},
							className: "loadout_subheader"
						}, kt[c].topWeapons), a.createElement("div", {
							className: "loadout_weapons"
						}, o ? a.createElement("div", {
							className: "empty-weapons"
						}, kt[c].apiError) : g && g.slice(0, 3).map((function(e, t) {
							return a.createElement("div", {
								className: "loadout_weapons-block-column",
								key: t
							}, a.createElement("div", {
								className: e.isEmpty ? "weapon_num empty_weapon_num" : "weapon_num"
							}, t + 1), e.isEmpty ? a.createElement("div", {
								key: "loadout_weapons-empty-block",
								className: "loadout_weapons-block loadout_weapons-empty-block"
							}, a.createElement("div", null, kt[c].noWeapons)) : a.createElement("div", {
								key: e.key,
								className: "loadout_weapons-block"
							}, a.createElement("div", {
								className: "loadout_weapons-block--name"
							}, e.label), a.createElement("div", {
								className: "loadout_weapons-block--text loadout_weapons-block--subtitle"
							}, Mt(null == e ? void 0 : e.classLabel, c) || "--"), a.createElement("div", {
								className: "loadout_weapons-block--icon"
							}, h ? a.createElement("img", {
								style: {
									width: "30rem"
								},
								src: Rt(null == e ? void 0 : e.hudImage, "weapon", "410x112")
							}) : a.createElement("img", {
								src: Rt(null == e ? void 0 : e.hudImage, "weapon", "280x140")
							})), a.createElement("div", {
								className: "loadout_weapons-block--lower-text"
							}, a.createElement("div", {
								className: "loadout_weapons-block--text"
							}, "".concat("aiAgentKills" === d ? kt[c].aqSoldierKills : kt[c].operatorKills)), a.createElement("div", {
								className: "loadout_weapons-block--number"
							}, "aiAgentKills" === d ? e.aiAgentKills : e.kills))))
						})))), "loadout" === t && a.createElement(Di, {
							type: "loadout"
						}))
					},
					Zi = function(e) {
						var t = e.handleClickFilter,
							n = (0, i.I0)(),
							r = (0, i.v9)((function(e) {
								return e.global.isCrossConfirm
							})),
							o = (0, i.v9)((function(e) {
								return e.record.filterRecency
							})),
							l = (0, i.v9)((function(e) {
								return e.record.selectedScreen
							})),
							s = (0, i.v9)((function(e) {
								return e.record.selectedTab
							})),
							c = (0, i.v9)((function(e) {
								return e.record.selectedType
							})),
							d = (0, i.v9)((function(e) {
								return e.record.selectedTile
							})),
							m = (0, i.v9)((function(e) {
								return e.record.crData
							})),
							u = (0, i.v9)((function(e) {
								return e.record.wzData
							})),
							g = (0, i.v9)((function(e) {
								return e.record.resurgenceData
							})),
							p = (0, i.v9)((function(e) {
								return e.record.plunderData
							})),
							h = (0, i.v9)((function(e) {
								return e.record.dmzData
							})),
							f = (0, i.v9)((function(e) {
								return e.global.language
							})),
							v = (0, a.useState)(),
							b = (0, et.Z)(v, 2),
							_ = b[0],
							y = b[1],
							E = (0, a.useState)(!1),
							w = (0, et.Z)(E, 2),
							S = w[0],
							k = w[1],
							x = (0, a.useState)(!1),
							R = (0, et.Z)(x, 2),
							T = R[0],
							L = R[1],
							D = (0, i.v9)((function(e) {
								return e.global.gameTitle
							})),
							M = (0, i.v9)((function(e) {
								return e.record.selectedGameMode
							})),
							I = (0, a.useRef)(D),
							A = (0, a.useRef)(M),
							N = (0, i.v9)((function(e) {
								return e.record.recentMatches
							})),
							C = (0, i.v9)((function(e) {
								return e.record.recentMatchesError
							})),
							P = (0, i.v9)((function(e) {
								return e.record.recentMatchesLoaded
							})),
							z = (0, a.useState)(0),
							O = (0, et.Z)(z, 2),
							j = O[0],
							B = O[1],
							G = (0, a.useState)(),
							Z = (0, et.Z)(G, 2),
							U = Z[0],
							H = Z[1],
							q = function(e) {
								switch (e) {
									case "mp":
									default:
										return (0, i.v9)((function(e) {
											return e.record.crData
										}));
									case "br":
										return (0, i.v9)((function(e) {
											return e.record.wzData
										}));
									case "resurgence":
										return (0, i.v9)((function(e) {
											return e.record.resurgenceData
										}));
									case "plunder":
										return (0, i.v9)((function(e) {
											return e.record.plunderData
										}));
									case "dmz":
										return (0, i.v9)((function(e) {
											return e.record.dmzData
										}))
								}
							}(M),
							V = function(e) {
								switch (e) {
									case "mp":
									default:
										return (0, i.v9)((function(e) {
											return e.record.crDataLoaded
										}));
									case "br":
										return (0, i.v9)((function(e) {
											return e.record.wzDataLoaded
										}));
									case "resurgence":
										return (0, i.v9)((function(e) {
											return e.record.resurgenceDataLoaded
										}));
									case "plunder":
										return (0, i.v9)((function(e) {
											return e.record.plunderDataLoaded
										}));
									case "dmz":
										return (0, i.v9)((function(e) {
											return e.record.dmzDataLoaded
										}))
								}
							}(M),
							Y = function(e) {
								switch (e) {
									case "mp":
									default:
										return (0, i.v9)((function(e) {
											return e.record.crDataError
										}));
									case "br":
										return (0, i.v9)((function(e) {
											return e.record.wzDataError
										}));
									case "resurgence":
										return (0, i.v9)((function(e) {
											return e.record.resurgenceDataError
										}));
									case "plunder":
										return (0, i.v9)((function(e) {
											return e.record.plunderDataError
										}));
									case "dmz":
										return (0, i.v9)((function(e) {
											return e.record.dmzDataError
										}))
								}
							}(M),
							Q = (0, i.v9)((function(e) {
								return e.record.seasonData
							})),
							X = (0, i.v9)((function(e) {
								return e.record.seasonDataLoaded
							})),
							J = (0, i.v9)((function(e) {
								return e.record.seasonDataError
							}));
						(0, a.useEffect)((function() {
							I.current = D
						}), [D]), (0, a.useEffect)((function() {
							A.current = M
						}), [M]), (0, a.useEffect)((function() {
							var e, t;
							N && P && !C || n(K({
								gameTitle: D,
								gameMode: M
							})), q && V && !Y || n(W({
								gameTitle: D,
								gameMode: M
							})), "Lifetime" !== o || !V || _ && (null == _ ? void 0 : _.gameMode) === (null == q ? void 0 : q.gameMode) && o === U ? "Last 10 Games" !== o || !P || _ && (null == _ ? void 0 : _.gameMode) === (null == N ? void 0 : N.gameMode) && o === U ? "Current Season" !== o || !X || _ && (null == _ ? void 0 : _.gameMode) === (null == Q ? void 0 : Q.gameMode) && o === U || (y(Q), k(X), L(J)) : (y(N), k(P), L(C)) : (y(q), k(V), L(Y)), d || n(F.setSelectedTile("loadout")), null != N && N.matches && ((null == q ? void 0 : q.matchesData) && (null == q || null === (e = q.matchesData[0]) || void 0 === e ? void 0 : e.matchId)) !== ((null == N ? void 0 : N.matches) && (null == N || null === (t = N.matches[0]) || void 0 === t ? void 0 : t.matchId)) && n(W({
								gameTitle: D,
								gameMode: M
							})), n("dmz" === D ? F.setSortByValue("aiAgentKills") : F.setSortByValue("kills")), H(o)
						}), [o, q, N]), (0, a.useEffect)((function() {
							_ && B(j + 1)
						}), [_]);
						var $ = function(e) {
								n(F.setSelectedTile(e)), Wt("ui_hilite", e)
							},
							ee = function() {
								"recent" === d && (n(F.setSelectedTile("loadout")), Wt("ui_hilite", d))
							},
							te = function() {
								"loadout" === d && (n(F.setSelectedTile("recent")), Wt("ui_hilite", d))
							},
							ne = function() {
								"loadout" === d ? (n(F.setSelectedTab(0)), n(F.setSelectedScreen("loadout")), Wt("ui_select_confirm", "selectedScreen")) : "recent" === d && (n(F.setSelectedTab(0)), Wt("ui_select_confirm", "selectedScreen"), "mw2" === I.current ? (n(K({
									gameTitle: I.current
								})), n(F.setSelectedScreen("recents"))) : "wz2" === I.current && ("dmz" === A.current ? (n(K({
									gameTitle: A.current
								})), n(F.setSelectedScreen("recentsDmz"))) : (n(K({
									gameTitle: I.current,
									gameMode: A.current
								})), n(F.setSelectedScreen("recentsWz2")))))
							};
						return ka(1, {
							UP: ee,
							DOWN: te,
							RIGHT: function() {},
							LEFT: function() {},
							LB: function() {},
							RB: function() {},
							XBA_PSCROSS: r ? ne : function() {
								return va(n, l, c, s)
							},
							XBB_PSCIRCLE: r ? function() {
								return va(n, l, c, s)
							} : ne
						}), xa(d, {
							up: ee,
							down: te,
							direct: ne,
							close: function() {
								return va(n, l, c, s)
							}
						}), a.createElement(a.Fragment, null, (!V || !P && "mw2" === D) && a.createElement(ar, null), a.createElement(er, {
							tabs: [{
								title: kt[f].multiplayer,
								val: "mp",
								isDisabled: zt("mw2", "mp", m, u, g, p, h),
								key: 0
							}, {
								title: kt[f].battleRoyale,
								val: "br",
								isDisabled: zt("wz2", "br", m, u, g, p, h),
								key: 1
							}, {
								title: kt[f].resurgence,
								val: "resurgence",
								isDisabled: zt("wz2", "resurgence", m, u, g, p, h),
								key: 2
							}, {
								title: kt[f].plunder,
								val: "plunder",
								isDisabled: zt("wz2", "plunder", m, u, g, p, h),
								key: 3
							}, {
								title: kt[f].dmz,
								val: "dmz",
								isDisabled: zt("wz2", "dmz", m, u, g, p, h),
								key: 4
							}]
						}), a.createElement($a, null, a.createElement("div", null, kt[f].statusMessage)), a.createElement(Si, null, S && a.createElement("div", {
							className: "screen-content",
							key: o
						}, "dmz" === M ? a.createElement(Bi, {
							selectedTile: d,
							setSelectedTile: $,
							data: _,
							dataLoaded: S,
							dataError: T
						}) : a.createElement(Ai, {
							selectedTile: d,
							setSelectedTile: $,
							data: _,
							dataLoaded: S,
							dataError: T
						}), a.createElement("div", {
							className: "dashboard-right"
						}, "dmz" === M ? a.createElement(Gi, {
							key: j,
							selectedTile: d,
							setSelectedTile: $,
							data: _,
							dataLoaded: S,
							dataError: T
						}) : a.createElement(Ni, {
							key: j,
							selectedTile: d,
							setSelectedTile: $,
							data: _,
							dataLoaded: S,
							dataError: T
						}), function() {
							switch (M) {
								case "mp":
									return a.createElement(Pi, {
										selectedTile: d,
										setSelectedTile: $,
										data: _,
										dataLoaded: S,
										dataError: T
									});
								case "br":
								case "resurgence":
								case "plunder":
									return a.createElement(Oi, {
										selectedTile: d,
										setSelectedTile: $,
										data: _,
										dataLoaded: S,
										dataError: T
									});
								case "dmz":
									return a.createElement(ji, {
										selectedTile: d,
										setSelectedTile: $,
										data: _,
										dataLoaded: S,
										dataError: T
									});
								default:
									return a.createElement(a.Fragment, null)
							}
						}())), a.createElement(zi, {
							filterRecency: o,
							handleClickFilter: t
						})))
					};
				var Ui, Ki, Hi, Wi, qi, Fi, Vi, Yi, Qi, Xi = se.ZP.section(Ui || (Ui = (0, me.Z)(["\n    width: 100%;\n    height: 100%;\n    ", "\n    .screen-content {\n        margin: 0 9.6rem;\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .recents-right {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n    }\n    .recency-filter {\n        display: flex;\n        gap: 2rem;\n        padding: 2rem 0;\n        .filter-option {\n            font-size: 2rem;\n            text-align: center;\n            color: #555;\n            text-transform: uppercase;\n            cursor: pointer;\n            :hover {\n                color: #e7e7e7;\n            }\n        }\n        .active {\n            color: #e7e7e7;\n            text-decoration: underline;\n            text-underline-offset: 0.4rem;\n        }\n    }\n"])), (function(e) {
						return e.isArabic && (0, se.iv)(Ki || (Ki = (0, me.Z)(["\n            .match-data-item,\n            .mode-data-item,\n            .view-maps-banner {\n                direction: rtl !important;\n            }\n        "])))
					})),
					Ji = se.ZP.div(Hi || (Hi = (0, me.Z)(["\n    width: 56.5rem;\n    height: 81.8rem;\n    position: relative;\n\n    .border-box {\n        position: absolute;\n        bottom: 0;\n        width: 58rem;\n        height: 1.3rem;\n        border-bottom: 0.1rem solid rgb(85, 85, 85);\n        border-left: 0.1rem solid rgb(85, 85, 85);\n        border-right: 0.1rem solid rgb(85, 85, 85);\n    }\n\n    .recents {\n        height: 100%;\n\n        .matches_header {\n            align-items: center;\n            height: 8rem;\n            & > div:nth-of-type(1) {\n                font-size: 2.8rem;\n                text-transform: uppercase;\n                color: #fff;\n            }\n\n            & > div:nth-of-type(2) {\n                opacity: 0.7;\n                border: 0.1rem solid #555555;\n                margin: 3.3rem 0;\n            }\n        }\n    }\n    .matches_data {\n        height: 70.4rem;\n        direction: rtl;\n        padding-left: 2rem;\n        overflow-y: scroll;\n        &::-webkit-scrollbar {\n            width: 0.2rem;\n            background: transparent;\n        }\n        &::-webkit-scrollbar-track {\n            background-clip: content-box;\n        }\n        &::-webkit-scrollbar-thumb {\n            background-clip: padding-box;\n            background: #e7e7e7;\n            min-height: 1.6rem;\n        }\n    }\n    .match-data-item.active {\n        border: 0.2rem solid #79c370 ;\n        border-left: 0.8rem solid #79c370;\n        padding-left: 0.4rem;\n\n        &:hover {\n            border: 0.2rem solid #79c370 ;\n            border-left: 0.8rem solid #79c370;\n            padding-left: 0.4rem;\n        }\n    }\n\n    .match-data-item {\n        margin-bottom: 0.8rem;\n        color: ", ";\n        padding: 1rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        border: 0.2rem solid #555555;\n        direction: ltr;\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: cover;\n        background-origin: border-box;\n        &:hover {\n            border: 0.2rem solid #E7E7E7;\n        }\n        .match-data-item-image-empty {\n            background: #3b3b3a;\n        }\n        & > div:nth-of-type(1) {\n            display: flex;\n            justify-content: start;\n            align-items: center;\n            & > div:nth-of-type(1) {\n                width: 5.4rem;\n                height: 5.4rem;\n                margin-right: 0.9rem;\n            }\n            & > div:nth-of-type(2) {\n                color: ", ";\n\n                & > div:nth-of-type(1) {\n                    font-size: 2rem;\n                    text-transform: uppercase;\n                    font-weight: bold;\n                }\n                & > div:nth-of-type(2) {\n                    font-size: 1.8rem;\n                }\n                & > div:nth-of-type(3) {\n                    font-size: 1.6rem;\n                    color: ", ";\n                }\n            }\n        }\n        & > div:nth-of-type(2) {\n            text-align: end;\n            font-size: 1.8rem;\n\n            .match-data-item-result-win {\n                color: #3ecced;\n                text-transform: uppercase;\n                padding-bottom: 0.6rem;\n            }\n            .match-data-item-result-loss {\n                color: #ec4442;\n                text-transform: uppercase;\n                padding-bottom: 0.6rem;\n            }\n            .match-data-item-result-empty {\n                background: #3b3b3a;\n                width: 5.6rem;\n                height: 2rem;\n            }\n        }\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLightAlt
					})),
					$i = se.ZP.div(Wi || (Wi = (0, me.Z)(["\n    width: 114.4rem;\n    height: 81.8rem;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 3.5rem 4rem;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    .border-box {\n        position: absolute;\n        bottom: 0;\n        width: 112.4rem;\n        height: 1.3rem;\n        margin-left: -2rem;\n        border-bottom: 0.1rem solid rgb(85, 85, 85);\n        border-left: 0.1rem solid rgb(85, 85, 85);\n        border-right: 0.1rem solid rgb(85, 85, 85);\n    }\n\n    .match_header {\n        display: flex;\n        justify-content: start;\n        align-items: center;\n        & > div:nth-of-type(1) {\n            width: 14.4rem;\n            height: 14.4rem;\n        }\n        & > div:nth-of-type(2) {\n            padding-left: 1rem;\n            .map-name {\n                font-size: 7rem;\n                font-weight: bold;\n                color: ", ";\n                text-transform: uppercase;\n                margin-top: 0.5rem;\n            }\n            & > div:nth-of-type(2) {\n                padding: 0 0.6rem;\n                color: #3b3b3a;\n                display: flex;\n                .mode-name {\n                    background: #9aa39a;\n                    padding: 0.4rem 0.5rem 0 0.5rem;\n                    font-size: 2.4rem;\n                    margin-right: 1rem;\n                    text-transform: uppercase;\n                }\n                .duration {\n                    color: #9aa39a;\n                    font-size: 2rem;\n                    margin-top: 0.4rem;\n                }\n            }\n        }\n        .right_header {\n            position: absolute;\n            right: 0;\n            font-weight: bold;\n            padding-right: 4rem;\n            color: #e7e7e7;\n            font-size: 7rem;\n        }\n    }\n    .no-data {\n        height: 62rem;\n        display: flex;\n        align-items: center;\n        color: #9aa39a;\n        font-size: 2.4rem;\n        .no-data-message {\n            margin: 0 auto;\n        }\n    }\n    .match_stats-block {\n        display: flex;\n        height: 23.2rem;\n        .tile-header {\n            font-size: 1.8rem;\n            line-height: 2.2rem;\n            color: #9aa39a;\n        }\n        .tile-value {\n            font-weight: bold;\n            font-size: 3.6rem;\n            line-height: 4.3rem;\n            text-overflow: ellipsis;\n            white-space: pre;\n            overflow: hidden;\n            color: ", ";\n        }\n        .top-weapon-tile {\n            width: 50%;\n            padding: 1.6rem;\n            margin-right: 2.1rem;\n            background: rgba(231, 231, 231, 0.1);\n            clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0% 50%);\n            border-left: 0.2rem solid #e7e7e7;\n            & > div:nth-of-type(1) {\n                display: flex;\n                & > div:nth-of-type(1) {\n                    width: 50%;\n                }\n                & > div:nth-of-type(2) {\n                    display: flex;\n                    width: 50%;\n                    justify-content: space-around;\n                }\n            }\n        }\n        .match_stats-tiles {\n            display: grid;\n            grid-template-columns: repeat(3, 1fr);\n            gap: 1rem;\n            width: 50%;\n            .match_stats-tile {\n                height: 11rem;\n                padding: 1rem 1.6rem;\n                background: rgba(231, 231, 231, 0.1);\n                display: flex;\n                flex-direction: column;\n                justify-content: space-between;\n                clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0% 50%);\n                border-left: 0.2rem solid #e7e7e7;\n            }\n        }\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					})),
					eo = se.ZP.div(qi || (qi = (0, me.Z)(["\n    width: 56.5rem;\n    height: 81.8rem;\n    position: relative;\n\n    .border-box {\n        position: absolute;\n        bottom: 0;\n        width: 58rem;\n        height: 1.3rem;\n        border-bottom: 0.1rem solid rgb(85, 85, 85);\n        border-left: 0.1rem solid rgb(85, 85, 85);\n        border-right: 0.1rem solid rgb(85, 85, 85);\n    }\n\n    .modes_data {\n        overflow-y: scroll;\n        height: 71.8rem;\n        scroll-behavior: smooth;\n        scrollbar-width: none;\n        direction: rtl;\n        padding-left: 2rem;\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n        &::-webkit-scrollbar {\n            width: 0.2rem;\n            background: transparent;\n        }\n        &::-webkit-scrollbar-track {\n            background-clip: content-box;\n        }\n        &::-webkit-scrollbar-thumb {\n            background-clip: padding-box;\n            background: #e7e7e7;\n            min-height: 1.6rem;\n        }\n    }\n    .sort-section {\n        display: flex;\n        justify-content: space-between;\n        gap: 1rem;\n        padding: 1rem;\n        border-bottom: 0.1rem solid #555;\n        color: ", ";\n        font-size: 3rem;\n        direction: ltr;\n        margin-bottom: 1rem;\n        div {\n            color: #555555;\n            text-transform: uppercase;\n            font-size: 1.8rem;\n            cursor: pointer;\n            display: flex;\n            gap: 1rem;\n            :hover {\n                color: ", ";\n            }\n            &.active {\n                text-decoration: underline;\n                text-underline-offset: 0.4rem;\n                color: ", ";\n            }\n        }\n        .down-arrow {\n            clip-path: polygon(100% 0, 0% 100%, 100% 100%);\n            width: 1.3rem;\n            height: 1.4rem;\n            background: #79c370;\n        }\n        &.empty-sort-section {\n            .down-arrow {\n                background: #555555 !important;\n            }\n            .active {\n                color: #555555 !important;\n            }\n        }\n    }\n\n    .mode-data-item.active {\n        border: 0.2rem solid #79c370;\n        &:hover {\n            border: 0.2rem solid #79c370;\n        }\n    }\n\n    .mode-data-item {\n        color: ", ";\n        padding: 1rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        border: 0.2rem solid #555555;\n        direction: ltr;\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: cover;\n\n        &:hover {\n            border: 0.2rem solid #E7E7E7;\n        }\n\n        & > div:nth-of-type(1) {\n            display: flex;\n            justify-content: start;\n            align-items: center;\n            & > div:nth-of-type(1) {\n                width: 5.4rem;\n                height: 5.4rem;\n                margin-right: 0.9rem;\n            }\n            & > div:nth-of-type(2) {\n                color: ", ";\n                font-size: 2rem;\n                text-transform: uppercase;\n                font-weight: bold;\n            }\n        }\n        & > div:nth-of-type(2) {\n            text-align: end;\n            font-size: 1.8rem;\n        }\n    }\n    .view-maps-banner {\n        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), #79c370;\n        text-transform: uppercase;\n        color: #141313;\n        font-size: 2rem;\n        font-weight: bold;\n        padding: 0.5rem;\n        direction: ltr;\n        cursor: pointer;\n        display: flex;\n\n        &:hover {\n            background: linear-gradient(180deg, #5B9254 0%, #487643 100%);\n        }\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					})),
					to = se.ZP.div(Fi || (Fi = (0, me.Z)(["\n    width: 114.4rem;\n    height: 81.8rem;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    padding: 3.5rem 4rem;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    .border-box {\n        position: absolute;\n        bottom: 0;\n        width: 112.4rem;\n        height: 1.3rem;\n        margin-left: -2rem;\n        border-bottom: 0.1rem solid rgb(85, 85, 85);\n        border-left: 0.1rem solid rgb(85, 85, 85);\n        border-right: 0.1rem solid rgb(85, 85, 85);\n    }\n\n    .mode_header {\n        display: flex;\n        justify-content: start;\n        align-items: center;\n        & > div:nth-of-type(1) {\n            width: 14.4rem;\n            height: 14.4rem;\n        }\n        & > div:nth-of-type(2) {\n            padding-left: 1rem;\n            & > div:nth-of-type(1) {\n                font-size: 7rem;\n                text-transform: uppercase;\n                font-weight: bold;\n                color: ", ";\n            }\n            & > div:nth-of-type(2) {\n                padding: 0 0.6rem;\n                color: #9aa39a;\n                > div {\n                    padding: 0 0.5rem;\n                    font-size: 1.8rem;\n                }\n            }\n        }\n    }\n    .no-data {\n        height: 62rem;\n        display: flex;\n        align-items: center;\n        color: #9aa39a;\n        font-size: 2.4rem;\n        .no-data-message {\n            margin: 0 auto;\n        }\n    }\n    .sub-title {\n        font-size: 1.8rem;\n        color: #9aa39a;\n    }\n    .sub-value {\n        font-size: 3.5rem;\n        font-weight: bold;\n        line-height: 4.3rem;\n        color: ", ";\n    }\n    .time-played,\n    .matches-played,\n    .kills-count,\n    .score-count,\n    .ratios {\n        padding: 0 2rem;\n        margin: 2rem 0;\n    }\n    .kill-death-ratios {\n        display: flex;\n    }\n    .mode-stats-block {\n        margin-left: 2rem;\n        display: flex;\n        margin-top: 10rem;\n        justify-content: center;\n        > div {\n            display: flex;\n        }\n        .win-loss-ratio {\n            display: flex;\n            margin-right: 10rem;\n        }\n        .bottom-border-box {\n            width: 74.6rem;\n        }\n        .kills-stats {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n        }\n        .ja-wrap-fix {\n            word-break: keep-all;\n        }\n        .kill-count,\n        .death-count,\n        .win-count,\n        .loss-count {\n            padding: 0 4rem;\n            margin: 3rem 0;\n            display: flex;\n            flex-direction: column;\n            div {\n                margin-bottom: 1.2rem;\n            }\n        }\n        .kill-count > div,\n        .win-count > div {\n            border-radius: 0.4rem;\n            width: 2.4rem;\n        }\n        .kill-count > div:nth-of-type(1) {\n            background: #368947;\n            height: 0.4rem;\n        }\n        .win-count > div:nth-of-type(1) {\n            background: #3ecced;\n            height: 0.4rem;\n        }\n\n        .death-count > div:nth-of-type(1),\n        .loss-count > div:nth-of-type(1) {\n            background: #e7e7e7;\n            height: 0.4rem;\n            border-radius: 0.4rem;\n            width: 2.4rem;\n        }\n    }\n    .match_stats-tiles {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        width: 50%;\n        position: absolute;\n        bottom: 4rem;\n        .match_stats-tile {\n            height: 10.5rem;\n            padding: 1rem 1.6rem;\n            margin-right: 2rem;\n            background: rgba(231, 231, 231, 0.1);\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0% 50%);\n            border-left: 0.2rem solid #e7e7e7;\n        }\n        .tile-header {\n            font-size: 1.8rem;\n            line-height: 2.2rem;\n            color: #9aa39a;\n        }\n        .tile-value {\n            font-weight: bold;\n            font-size: 3.6rem;\n            line-height: 4.3rem;\n            text-overflow: ellipsis;\n            white-space: pre;\n            overflow: hidden;\n            color: ", ";\n        }\n    }\n    .map_header {\n        font-weight: bold;\n        font-size: 7rem;\n        text-transform: uppercase;\n        color: ", ";\n        padding: 2rem;\n        border-left: 0.2rem solid #79c370;\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					})),
					no = se.ZP.div(Vi || (Vi = (0, me.Z)(["\n    .footer-tab-list {\n        width: 69.5rem;\n        height: 5.5rem;\n        clip-path: polygon(0 0, 100% 0, 88% 100%, 13% 100%);\n        background: rgba(59, 59, 58, 0.25);\n        text-transform: uppercase;\n        margin: 0 auto;\n        text-align: center;\n        justify-content: center;\n        display: flex;\n        gap: 1.3rem;\n        align-items: center;\n        > div {\n            font-size: 2rem;\n            cursor: pointer;\n            :hover {\n                opacity: 1;\n            }\n        }\n        .inactive-selection {\n            text-decoration: none;\n            color: ", ";\n            opacity: 0.2;\n        }\n        .active-selection {\n            color: #fff;\n            text-decoration: underline;\n            text-underline-offset: 0.4rem;\n            opacity: 1;\n        }\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					})),
					ao = se.ZP.div(Yi || (Yi = (0, me.Z)(["\n    width: 114.4rem;\n    height: 81.8rem;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    padding: 3.5rem 4rem;\n    color: white;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    .border-box {\n        position: absolute;\n        bottom: 0;\n        width: 112.4rem;\n        height: 1.3rem;\n        margin-left: -2rem;\n        border-bottom: 0.1rem solid rgb(85, 85, 85);\n        border-left: 0.1rem solid rgb(85, 85, 85);\n        border-right: 0.1rem solid rgb(85, 85, 85);\n    }\n\n    .match_header {\n        display: flex;\n        justify-content: space-between;\n        .left_header {\n            display: flex;\n            & > div:nth-of-type(1) {\n                width: 14.4rem;\n                height: 14.4rem;\n            }\n            & > div:nth-of-type(2) {\n                padding-left: 1rem;\n                margin-top: 2.5rem;\n\n                .map-name {\n                    font-size: 7rem;\n                    font-weight: bold;\n                    color: ", ";\n                    text-transform: uppercase;\n                }\n\n                & > div:nth-of-type(2) {\n                    padding: 0 0.6rem;\n                    color: #3b3b3a;\n                    display: flex;\n                    .mode-name {\n                        background: #9aa39a;\n                        padding: 0.4rem 0.5rem 0 0.5rem;\n                        font-size: 2.4rem;\n                        margin-right: 1rem;\n                        text-transform: uppercase;\n                    }\n                    .duration {\n                        color: #9aa39a;\n                        font-size: 2rem;\n                        margin-top: 0.4rem;\n                    }\n                }\n            }\n        }\n        .right_header {\n            display: flex;\n            flex-direction: column;\n            > div {\n                display: flex;\n                justify-content: space-between;\n                margin-bottom: 2rem;\n                & > div:nth-of-type(1) {\n                    width: 5.1rem;\n                    height: 4.4rem;\n                    margin-right: 2rem;\n                }\n                & > div:nth-of-type(2) {\n                    align-self: center;\n                }\n                .team-type {\n                    font-size: 1.9rem;\n                    text-transform: uppercase;\n                }\n                .team-score {\n                    font-size: 3.6rem;\n                    font-weight: bold;\n                    margin-left: 2rem;\n                    align-self: end;\n                }\n            }\n            .first-row {\n                color: #3ecced;\n                img {\n                    filter: sepia(100%) hue-rotate(157deg) saturate(3);\n                }\n            }\n            .second-row {\n                color: #ec4442;\n                img {\n                    filter: sepia(100%) hue-rotate(320deg) saturate(5);\n                }\n            }\n        }\n    }\n    .tables-container {\n        display: flex;\n        height: 55rem;\n        overflow-y: scroll;\n        &::-webkit-scrollbar {\n            width: 0.2rem;\n            background: transparent;\n        }\n        &::-webkit-scrollbar-track {\n            background-clip: content-box;\n        }\n        &::-webkit-scrollbar-thumb {\n            background-clip: padding-box;\n            background: #e7e7e7;\n            min-height: 1.6rem;\n        }\n    }\n    table {\n        width: 49%;\n        font-size: 1.4rem;\n        margin-top: 3rem;\n        color: ", ";\n        text-transform: uppercase;\n        height: fit-content;\n        margin-right: 1rem;\n        thead {\n            background: rgb(23, 78, 92, 0.4);\n            color: #3ecced;\n        }\n        tr {\n            height: 4.8rem;\n            td {\n                padding: 1rem;\n            }\n            td:nth-of-type(4),\n            td:nth-of-type(5),\n            td:nth-of-type(6) {\n                text-align: right;\n            }\n        }\n        tbody {\n            tr {\n                background: #141313;\n                opacity: 0.75;\n            }\n        }\n    }\n    .coalition-table thead {\n        background: rgb(109, 43, 42, 0.4);\n        color: #ec4442;\n    }\n    .active-row {\n        color: #eaea43;\n        td:first-of-type {\n            border-left: 0.6rem solid #eaea43;\n        }\n    }\n    .rank-cell {\n        display: flex;\n        align-items: center;\n        gap: 0.2rem;\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					})),
					ro = se.ZP.div(Qi || (Qi = (0, me.Z)(["\n    margin-bottom: 0.8rem;\n    color: #9aa39a;\n    padding: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 0.1rem solid #3b3b3a;\n    direction: ltr;\n    & > div:nth-of-type(1) {\n        display: flex;\n        justify-content: start;\n        align-items: center;\n        & > div:nth-of-type(1) {\n            width: 5.4rem;\n            height: 5.4rem;\n            margin-right: 0.9rem;\n        }\n        & > div:nth-of-type(2) {\n            & > div:nth-of-type(1) {\n                font-size: 2rem;\n                text-transform: uppercase;\n                font-weight: bold;\n            }\n            & > div:nth-of-type(2) {\n                font-size: 1.8rem;\n            }\n            & > div:nth-of-type(3) {\n                font-size: 1.8rem;\n            }\n        }\n    }\n    & > div:nth-of-type(2) {\n        text-align: end;\n        font-size: 1.8rem;\n\n        .empty-data-item-result {\n            width: 5.6rem;\n            height: 2rem;\n        }\n    }\n"])));
				const io = function(e) {
						var t, n, r = e.active,
							o = e.match,
							l = e.handleClick,
							s = e.handleMouseEnter,
							c = (0, i.v9)((function(e) {
								return e.global.language
							})),
							d = (0, i.v9)((function(e) {
								return e.global.is4k
							}));
						return a.createElement("div", {
							className: r ? "match-data-item active" : "match-data-item",
							key: o.matchID,
							name: o.matchID,
							onClick: l,
							style: {
								backgroundImage: "linear-gradient(90.08deg, #000000 0%, #000000 30%, rgba(0, 0, 0, ".concat(r ? 0 : .5, ") 65.22%, #000000 95%, #000000 100%), url(https://assets.callofduty.com/cdn/app/codp/iw9/map-load/loading_").concat(null == o ? void 0 : o.map, "_bg_336x92.jpg)")
							},
							onMouseEnter: s
						}, a.createElement("div", {
							className: "match-data-item-left"
						}, a.createElement("div", {
							className: "match-data-item-image"
						}, d ? a.createElement("img", {
							width: "108px",
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/icon_mode_mp_".concat(S[o.mode], "_144x144.png")
						}) : a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/icon_mode_mp_".concat(S[o.mode], "_54x54.png")
						})), a.createElement("div", {
							className: "match-data-item-details"
						}, a.createElement("div", {
							className: "match-data-item-name"
						}, o.map ? (null == E || null === (t = E[c]) || void 0 === t ? void 0 : t[o.map]) || o.map : "--"), a.createElement("div", {
							className: "match-data-item-text"
						}, o.mode ? (null == w || null === (n = w[c]) || void 0 === n ? void 0 : n[o.mode]) || o.mode : "--"), a.createElement("div", {
							className: "match-data-item-mode"
						}, o.utcEndSeconds && Lt(o.utcEndSeconds, kt[c].langCode)))), a.createElement("div", {
							className: "match-data-item-right"
						}, "win" === o.result && a.createElement("div", {
							className: "match-data-item-result-win"
						}, kt[c].victory), "loss" === o.result && a.createElement("div", {
							className: "match-data-item-result-loss"
						}, kt[c].defeat), "loss prevented" === o.result && a.createElement("div", {
							className: "match-data-item-result-win"
						}, kt[c].lossPrevented), a.createElement("div", {
							className: "match-data-item-score"
						}, "".concat(o.alliesScore, " - ").concat(o.axisScore))))
					},
					oo = function() {
						return a.createElement(ro, null, a.createElement("div", {
							className: "empty-data-item-left"
						}, a.createElement("div", {
							className: "empty-data-item-image"
						}), a.createElement("div", {
							className: "empty-data-item-details"
						}, a.createElement("div", {
							className: "empty-data-item-name"
						}, "--"), a.createElement("div", {
							className: "empty-data-item-text"
						}, "--"))), a.createElement("div", {
							className: "empty-data-item-right"
						}, a.createElement("div", {
							className: "empty-data-item-result"
						}), a.createElement("div", {
							className: "empty-data-item-score"
						}, "--")))
					},
					lo = function(e) {
						var t = e.selectedMatch,
							n = e.setSelectedMatch,
							r = e.data,
							o = (0, i.v9)((function(e) {
								return e.global.language
							})),
							l = (0, i.I0)(),
							s = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							c = (0, i.v9)((function(e) {
								return e.global.gameTitle
							})),
							d = (0, i.v9)((function(e) {
								return e.record.selectedGameMode
							})),
							m = function() {
								var e = null == r ? void 0 : r.findIndex((function(e) {
									return t.matchID === e.matchID
								}));
								e < r.length - 1 && (n(r[e + 1]), l(H({
									id: r[e + 1].matchID,
									gameTitle: c,
									gameMode: d
								})), Wt("ui_hilite"));
								var a = document.getElementsByClassName("matches_data")[0],
									i = document.getElementsByName(t.matchID)[0];
								e >= 6 && a.scrollTo(0, i.offsetHeight * e)
							},
							u = function() {
								var e = null == r ? void 0 : r.findIndex((function(e) {
									return t.matchID === e.matchID
								}));
								e > 0 && (n(r[e - 1]), l(H({
									id: r[e - 1].matchID,
									gameTitle: c,
									gameMode: d
								})), Wt("ui_hilite"));
								var a = document.getElementsByClassName("matches_data")[0],
									i = document.getElementsByName(t.matchID)[0];
								e < 6 ? a.scrollBy(0, s ? -130.66 : -65.33) : a.scrollTo(0, i.offsetHeight * e)
							};
						return xa(t, {
							up: u,
							down: m,
							shiftRight: function() {},
							shiftLeft: function() {}
						}), ka(1, {
							DOWN: m,
							UP: u,
							RTRIG: function() {},
							LTRIG: function() {}
						}), a.createElement(Ji, null, a.createElement("div", {
							className: "recents"
						}, a.createElement("div", {
							className: "matches_header"
						}, a.createElement("div", null, kt[o].last10Matches), a.createElement("div", null)), a.createElement("div", {
							className: "matches_data"
						}, r && r.length > 0 ? null == r ? void 0 : r.map((function(e) {
							return a.createElement(io, {
								key: null == e ? void 0 : e.matchID,
								active: (null == t ? void 0 : t.matchID) === (null == e ? void 0 : e.matchID),
								match: e,
								name: null == e ? void 0 : e.matchID,
								handleClick: function() {
									return n(t = e), l(H({
										id: t.matchID,
										gameTitle: c,
										gameMode: d
									})), void Wt("ui_hilite");
									var t
								},
								handleMouseEnter: function() {
									Wt("ui_hilite")
								}
							})
						})) : (0, Y.Z)(Array(1)).map((function(e) {
							return a.createElement(oo, {
								key: e
							})
						})))), a.createElement("div", {
							className: "border-box"
						}))
					},
					so = function(e) {
						var t = e.selectedMode,
							n = e.setSelectedMode,
							r = e.modesData,
							o = e.sortSelection,
							l = e.sortModes,
							s = (0, i.I0)(),
							c = (0, i.v9)((function(e) {
								return e.global.language
							})),
							d = (0, i.v9)((function(e) {
								return e.record.selectedType
							})),
							m = (0, i.v9)((function(e) {
								return e.record.selectedTab
							})),
							u = (0, i.v9)((function(e) {
								return e.record.selectedScreen
							})),
							g = (0, i.v9)((function(e) {
								return e.record.selectedType
							})),
							p = (0, a.useRef)(g),
							h = (0, a.useRef)(t),
							f = function() {
								s(F.setSelectedType("map"))
							},
							v = (0, i.v9)((function(e) {
								return e.global.isCrossConfirm
							})),
							b = (0, i.v9)((function(e) {
								return e.global.is4k
							}));
						(0, a.useEffect)((function() {
							h.current = t
						}), [t]), (0, a.useEffect)((function() {
							p.current = g
						}), [g]);
						var _ = function() {
								"wins" === o && l("winLossRatio"), "winLossRatio" === o && l("wins"), Wt("ui_hilite_tab")
							},
							y = function() {
								var e = null == r ? void 0 : r.findIndex((function(e) {
									return h.current.name === e.name
								}));
								e < r.length - 1 && n(r[e + 1]);
								var t = document.getElementsByClassName("modes_data")[0],
									a = document.getElementsByName(h.current.name)[0];
								e >= 6 && t.scrollTo(0, a.offsetHeight * e), Wt("ui_hilite")
							},
							E = function() {
								var e = null == r ? void 0 : r.findIndex((function(e) {
									return h.current.name === e.name
								}));
								e > 0 && n(r[e - 1]);
								var t = document.getElementsByClassName("modes_data")[0],
									a = document.getElementsByName(h.current.name)[0];
								e < 6 ? t.scrollBy(0, b ? -130.66 : -65.33) : t.scrollTo(0, a.offsetHeight * e), Wt("ui_hilite")
							};
						return ka(1, {
							DOWN: y,
							UP: E,
							XBA_PSCROSS: v ? f : function() {
								return va(s, u, p.current, m)
							},
							XBB_PSCIRCLE: v ? function() {
								return va(s, u, p.current, m)
							} : f,
							RTRIG: _
						}), xa(d, {
							direct: f,
							up: E,
							down: y,
							shiftRight: _
						}), a.createElement(eo, null, a.createElement("div", {
							className: "maps"
						}, a.createElement("div", {
							className: r && r.length > 0 ? "sort-section" : "sort-section empty-sort-section"
						}, a.createElement("div", null, a.createElement(fa, {
							type: "RT_R2",
							width: 2,
							height: 2,
							marginLeft: 4,
							fill: "#e7e7e7"
						})), a.createElement("div", null, a.createElement("div", {
							onClick: function() {
								l("winLossRatio"), Wt("ui_hilite_tab")
							},
							className: Pa({
								active: "winLossRatio" === o
							})
						}, "winLossRatio" === o && a.createElement("div", {
							className: "down-arrow"
						}), kt[c].wlRatio), a.createElement("div", {
							onClick: function() {
								l("wins"), Wt("ui_hilite_tab")
							},
							className: Pa({
								active: "wins" === o
							})
						}, "wins" === o && a.createElement("div", {
							className: "down-arrow"
						}), kt[c].wins))), a.createElement("div", {
							className: "modes_data"
						}, r && r.length > 0 ? null == r ? void 0 : r.map((function(e) {
							var r;
							return a.createElement("div", {
								key: e.name
							}, a.createElement("div", {
								className: (null == t ? void 0 : t.name) === (null == e ? void 0 : e.name) ? "mode-data-item active" : "mode-data-item",
								name: e.name,
								onClick: function() {
									n(e), Wt("ui_hilite")
								},
								onMouseEnter: function() {
									Wt("ui_hilite")
								}
							}, a.createElement("div", {
								className: "mode-data-item-left"
							}, a.createElement("div", {
								className: "mode-data-item-image"
							}, b ? a.createElement("img", {
								width: "108px",
								src: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/icon_mode_mp_".concat(S[e.name], "_144x144.png")
							}) : a.createElement("img", {
								src: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/icon_mode_mp_".concat(S[e.name], "_54x54.png")
							})), a.createElement("div", {
								className: "mode-data-item-details"
							}, a.createElement("div", {
								className: "mode-data-item-name"
							}, e.name ? (null == w || null === (r = w[c]) || void 0 === r ? void 0 : r[e.name]) || e.name : "--"))), a.createElement("div", {
								className: "match-data-item-right"
							}, a.createElement("div", {
								className: "match-data-item-score"
							}, e[o]))), (null == t ? void 0 : t.name) === (null == e ? void 0 : e.name) && a.createElement("div", {
								onClick: function() {
									s(F.setSelectedType("map")), Wt("ui_select_alt_small")
								},
								className: "view-maps-banner"
							}, a.createElement(fa, {
								type: v ? "XBA_PSCROSS" : "XBB_PSCIRCLE",
								width: 2,
								height: 2,
								marginLeft: .4,
								marginRight: .4,
								fill: "#000000"
							}), kt[c].viewMaps))
						})) : (0, Y.Z)(Array(1)).map((function() {
							return a.createElement(oo, {
								key: "empty-list"
							})
						})))), a.createElement("div", {
							className: "border-box"
						}))
					},
					co = function(e) {
						var t, n = e.selectedMode,
							r = e.hasData,
							o = (0, i.v9)((function(e) {
								return e.global.language
							})),
							l = [{
								title: "".concat(kt[o].scorePerMinute),
								value: null != n && n.scorePerMinute || 0 === (null == n ? void 0 : n.scorePerMinute) ? null == n ? void 0 : n.scorePerMinute : "--"
							}, {
								title: "".concat(kt[o].avgKillsPerGame),
								value: null != n && n.avgKillsPerGame || 0 === (null == n ? void 0 : n.avgKillsPerGame) ? null == n ? void 0 : n.avgKillsPerGame : "--"
							}, {
								title: "".concat(kt[o].assists),
								value: null != n && n.assists || 0 === (null == n ? void 0 : n.assists) ? null == n ? void 0 : n.assists : "--"
							}],
							s = "https://assets.callofduty.com/cdn/app/codp/iw9/menu/menu_keyart_".concat(x[null == n ? void 0 : n.name], "_layer_00_1150x818.jpg"),
							c = (0, i.v9)((function(e) {
								return e.global.is4k
							}));
						return a.createElement(to, {
							style: {
								backgroundImage: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.25) 27.19%, rgba(0, 0, 0, 0.25) 36.56%, #000000 66.76%), url(".concat(s, ")")
							}
						}, r ? a.createElement("div", {
							className: "mode_header"
						}, a.createElement("div", null, a.createElement("div", null, a.createElement("img", {
							width: Pa({
								"200px": c
							}),
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/icon_mode_mp_".concat(S[null == n ? void 0 : n.name], "_144x144.png"),
							alt: ""
						}))), a.createElement("div", null, a.createElement("div", null, null != n && n.name ? (null == w || null === (t = w[o]) || void 0 === t ? void 0 : t[null == n ? void 0 : n.name]) || (null == n ? void 0 : n.name) : "--"), a.createElement("div", null, a.createElement("div", null, null == n ? void 0 : n.description), a.createElement("div", null, null == n ? void 0 : n.longDescription)))) : a.createElement("div", {
							className: "no-data"
						}, a.createElement("div", {
							className: "no-data-message"
						}, kt[o].noModesHistory)), r && a.createElement("div", {
							className: "mode-stats-block"
						}, a.createElement("div", null, a.createElement("div", {
							className: "win-loss-ratio"
						}, a.createElement("div", null, a.createElement("div", {
							className: "win-count"
						}, a.createElement("div", null), a.createElement("div", {
							className: "sub-title ja-wrap-fix"
						}, kt[o].wins), a.createElement("div", {
							className: "sub-value"
						}, null == n ? void 0 : n.wins)), a.createElement("div", {
							className: "loss-count"
						}, a.createElement("div", null), a.createElement("div", {
							className: "sub-title"
						}, kt[o].losses), a.createElement("div", {
							className: "sub-value"
						}, null == n ? void 0 : n.loss))), a.createElement("div", {
							className: "ratios"
						}, a.createElement(gi, {
							title: kt[o].winLossRatio,
							color: "#3ECCED",
							ratioVal: null != n && n.winLossRatio || 0 === (null == n ? void 0 : n.winLossRatio) ? (100 * (null == n ? void 0 : n.winLossRatio) / 100).toFixed(2) : "--",
							fillVal: (null == n ? void 0 : n.wins) / ((null == n ? void 0 : n.wins) + (null == n ? void 0 : n.loss))
						}))), a.createElement("div", {
							className: "kill-death-ratios"
						}, a.createElement("div", {
							className: "ratios"
						}, a.createElement(gi, {
							title: kt[o].killDeathRatio,
							ratioVal: null != n && n.kdRatio || 0 === (null == n ? void 0 : n.kdRatio) ? (100 * (null == n ? void 0 : n.kdRatio) / 100).toFixed(2) : "--",
							fillVal: (null == n ? void 0 : n.kills) / ((null == n ? void 0 : n.kills) + (null == n ? void 0 : n.deaths))
						})), a.createElement("div", null, a.createElement("div", {
							className: "kill-count"
						}, a.createElement("div", null), a.createElement("div", {
							className: "sub-title ja-wrap-fix"
						}, kt[o].kills), a.createElement("div", {
							className: "sub-value"
						}, null == n ? void 0 : n.kills)), a.createElement("div", {
							className: "death-count"
						}, a.createElement("div", null), a.createElement("div", {
							className: "sub-title"
						}, kt[o].deaths), a.createElement("div", {
							className: "sub-value"
						}, null == n ? void 0 : n.deaths)))))), a.createElement("div", {
							className: "match_stats-tiles"
						}, l.map((function(e) {
							return a.createElement("div", {
								key: e.title,
								className: "match_stats-tile"
							}, a.createElement("div", {
								style: {
									fontSize: "japanese_full" === o ? "calc(100% + 0.5rem)" : ""
								},
								className: "match_stats-tile--text tile-header"
							}, e.title), r ? a.createElement("div", {
								className: "match_stats-tile--number tile-value"
							}, e.value) : a.createElement("div", {
								className: "match_stats-tile--number tile-value empty-text"
							}, "--"))
						}))), a.createElement("div", {
							className: "border-box"
						}))
					},
					mo = function(e) {
						var t = e.selectedMap,
							n = e.setSelectedMap,
							r = e.data,
							o = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							l = (0, i.v9)((function(e) {
								return e.global.language
							})),
							s = function() {
								var e = null == r ? void 0 : r.findIndex((function(e) {
									return t.name === e.name
								}));
								e < r.length - 1 && (n(r[e + 1]), Wt("ui_hilite"));
								var a = document.getElementsByClassName("modes_data")[0],
									i = document.getElementsByName(t.name)[0];
								e >= 6 && a.scrollTo(0, i.offsetHeight * e)
							},
							c = function() {
								var e = null == r ? void 0 : r.findIndex((function(e) {
									return t.name === e.name
								}));
								e > 0 && (n(r[e - 1]), Wt("ui_hilite"));
								var a = document.getElementsByClassName("modes_data")[0],
									i = document.getElementsByName(t.name)[0];
								e < 6 ? (a.scrollBy(0, o ? -130.66 : -65.33), Wt("ui_hilite")) : (a.scrollTo(0, o ? 130.66 : i.offsetHeight * (e - 5)), a.scrollTo(0, i.offsetHeight * e), Wt("ui_hilite"))
							};
						return xa(t, {
							up: c,
							down: s,
							shiftRight: function() {},
							shiftLeft: function() {}
						}), ka(1, {
							DOWN: s,
							UP: c,
							RTRIG: function() {},
							LTRIG: function() {}
						}), a.createElement(eo, null, a.createElement("div", {
							className: "maps"
						}, a.createElement("div", {
							className: r && r.length > 0 ? "sort-section" : "sort-section empty-sort-section"
						}, a.createElement("div", null), a.createElement("div", null, a.createElement("div", {
							className: "active"
						}, a.createElement("div", {
							className: "down-arrow"
						}), kt[l].wins))), a.createElement("div", {
							className: "modes_data"
						}, r && r.length > 0 ? null == r ? void 0 : r.map((function(e) {
							var r;
							return a.createElement("div", {
								key: e.name
							}, a.createElement("div", {
								className: (null == t ? void 0 : t.name) === (null == e ? void 0 : e.name) ? "mode-data-item active" : "mode-data-item",
								name: e.name,
								style: {
									backgroundImage: "linear-gradient(90.08deg, #000000 0%, #000000 30%, rgba(0, 0, 0, ".concat((null == t ? void 0 : t.name) === (null == e ? void 0 : e.name) ? 0 : .5, ") 65.22%, #000000 95%, #000000 100%), url(https://assets.callofduty.com/cdn/app/codp/iw9/map-load/loading_").concat(null == e ? void 0 : e.name, "_bg_336x92.jpg)")
								},
								onClick: function() {
									n(e), Wt("ui_hilite")
								},
								onMouseEnter: function() {
									Wt("ui_hilite")
								}
							}, a.createElement("div", {
								className: "mode-data-item-left"
							}, a.createElement("div", {
								className: "mode-data-item-image"
							}), a.createElement("div", {
								className: "mode-data-item-details"
							}, a.createElement("div", {
								className: "mode-data-item-name"
							}, e.name ? (null == E || null === (r = E[l]) || void 0 === r ? void 0 : r[e.name]) || e.name : "--"))), a.createElement("div", {
								className: "match-data-item-right"
							}, a.createElement("div", {
								className: "match-data-item-score"
							}, e.wins))))
						})) : (0, Y.Z)(Array(1)).map((function() {
							return a.createElement(oo, {
								key: "empty-list-item"
							})
						})))), a.createElement("div", {
							className: "border-box"
						}))
					},
					uo = function(e) {
						var t, n = e.selectedMap,
							r = (0, i.v9)((function(e) {
								return e.global.language
							})),
							o = [{
								title: "".concat(kt[r].scorePerMinute),
								value: null != n && n.scorePerMinute || 0 === (null == n ? void 0 : n.scorePerMinute) ? null == n ? void 0 : n.scorePerMinute : "--"
							}, {
								title: "".concat(kt[r].avgKillsPerGame),
								value: null != n && n.avgKillsPerGame || 0 === (null == n ? void 0 : n.avgKillsPerGame) ? null == n ? void 0 : n.avgKillsPerGame : "--"
							}, {
								title: "".concat(kt[r].assists),
								value: null != n && n.assists || 0 === (null == n ? void 0 : n.assists) ? null == n ? void 0 : n.assists : "--"
							}],
							l = "https://assets.callofduty.com/cdn/app/codp/iw9/map-load/loading_".concat(null == n ? void 0 : n.name, "_bg_1150x818.jpg");
						return a.createElement(to, {
							style: {
								backgroundImage: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.25) 27.19%, rgba(0, 0, 0, 0.25) 36.56%, #000000 66.76%), url(".concat(l, ")")
							}
						}, a.createElement("div", {
							className: "map_header"
						}, a.createElement("div", null, null != n && n.name ? (null == E || null === (t = E[r]) || void 0 === t ? void 0 : t[null == n ? void 0 : n.name]) || (null == n ? void 0 : n.name) : "--")), a.createElement("div", {
							className: "mode-stats-block"
						}, a.createElement("div", null, a.createElement("div", {
							className: "win-loss-ratio"
						}, a.createElement("div", null, a.createElement("div", {
							className: "win-count"
						}, a.createElement("div", null), a.createElement("div", {
							className: "sub-title"
						}, kt[r].wins), a.createElement("div", {
							className: "sub-value"
						}, null == n ? void 0 : n.wins)), a.createElement("div", {
							className: "loss-count"
						}, a.createElement("div", null), a.createElement("div", {
							className: "sub-title"
						}, kt[r].losses), a.createElement("div", {
							className: "sub-value"
						}, null == n ? void 0 : n.loss))), a.createElement("div", {
							className: "ratios"
						}, a.createElement(gi, {
							title: kt[r].winLossRatio,
							color: "#3ECCED",
							ratioVal: null != n && n.winLossRatio || 0 === (null == n ? void 0 : n.winLossRatio) ? (100 * (null == n ? void 0 : n.winLossRatio) / 100).toFixed(2) : "--",
							fillVal: (null == n ? void 0 : n.wins) / ((null == n ? void 0 : n.wins) + (null == n ? void 0 : n.loss))
						}))), a.createElement("div", {
							className: "kill-death-ratios"
						}, a.createElement("div", {
							className: "ratios"
						}, a.createElement(gi, {
							title: kt[r].killDeathRatio,
							ratioVal: null != n && n.kdRatio || 0 === (null == n ? void 0 : n.kdRatio) ? (100 * (null == n ? void 0 : n.kdRatio) / 100).toFixed(2) : "--",
							fillVal: (null == n ? void 0 : n.kills) / ((null == n ? void 0 : n.kills) + (null == n ? void 0 : n.deaths))
						})), a.createElement("div", null, a.createElement("div", {
							className: "kill-count"
						}, a.createElement("div", null), a.createElement("div", {
							className: "sub-title"
						}, kt[r].kills), a.createElement("div", {
							className: "sub-value"
						}, null == n ? void 0 : n.kills)), a.createElement("div", {
							className: "death-count"
						}, a.createElement("div", null), a.createElement("div", {
							className: "sub-title"
						}, kt[r].deaths), a.createElement("div", {
							className: "sub-value"
						}, null == n ? void 0 : n.deaths)))))), a.createElement("div", {
							className: "match_stats-tiles"
						}, o.map((function(e) {
							return a.createElement("div", {
								key: e.title,
								className: "match_stats-tile"
							}, a.createElement("div", {
								className: "match_stats-tile--text tile-header"
							}, e.title), a.createElement("div", {
								className: "match_stats-tile--number tile-value"
							}, e.value))
						}))), a.createElement("div", {
							className: "border-box"
						}))
					},
					go = function(e) {
						var t = e.handleClickFilter,
							n = e.filterRecency,
							r = e.data,
							o = (0, i.v9)((function(e) {
								return e.record.sortByVal
							})),
							l = (0, i.v9)((function(e) {
								return e.global.isCrossConfirm
							})),
							s = (0, i.I0)(),
							c = (0, a.useState)((null == r ? void 0 : r.modeStats) && (0, Y.Z)(null == r ? void 0 : r.modeStats).sort(E("wins"))),
							d = (0, et.Z)(c, 2),
							m = d[0],
							u = d[1],
							g = (0, i.v9)((function(e) {
								return e.record.selectedTab
							})),
							p = (0, i.v9)((function(e) {
								return e.record.selectedScreen
							})),
							h = (0, i.v9)((function(e) {
								return e.record.selectedType
							})),
							f = (0, a.useRef)(h),
							v = (0, a.useState)(m && m[0]),
							b = (0, et.Z)(v, 2),
							_ = b[0],
							y = b[1];

						function E(e) {
							return function(t, n) {
								var a = "string" == typeof t[e] ? parseFloat(t[e]) : t[e],
									r = "string" == typeof n[e] ? parseFloat(n[e]) : n[e];
								return a > r ? -1 : a < r ? 1 : 0
							}
						}
						var w = function(e) {
								s(F.setSortByValue(e));
								var t = null != r && r.modeStats ? (0, Y.Z)(null == r ? void 0 : r.modeStats).sort(E(e)) : [];
								u(t), y(t[0])
							},
							S = (0, a.useState)(null != _ && _.maps ? (0, Y.Z)(null == _ ? void 0 : _.maps).sort(E("wins")) : []),
							k = (0, et.Z)(S, 2),
							x = k[0],
							R = k[1],
							T = (0, a.useState)(x && x[0]),
							L = (0, et.Z)(T, 2),
							D = L[0],
							M = L[1];
						return (0, a.useEffect)((function() {
							u((null == r ? void 0 : r.modeStats) || (null == r ? void 0 : r.summary));
							var e = null != _ && _.maps ? (0, Y.Z)(null == _ ? void 0 : _.maps).sort(E("wins")) : [];
							R(e), M(e && e[0]), w("wins"), s(F.setSortByValue("wins"))
						}), [h, n, r]), (0, a.useEffect)((function() {
							y(m && m.length && m[0])
						}), [n]), (0, a.useEffect)((function() {
							f.current = h
						}), [h]), ka(1, {
							XBA_PSCROSS: !l && function() {
								return va(s, p, f.current, g)
							},
							XBB_PSCIRCLE: l && function() {
								return va(s, p, f.current, g)
							}
						}), a.createElement("div", {
							className: "screen-content"
						}, "modes" === h ? a.createElement(a.Fragment, null, a.createElement("div", null, a.createElement(so, {
							modesData: m,
							selectedMode: _,
							setSelectedMode: y,
							sortSelection: o,
							setModesData: u,
							sortModes: w
						}), a.createElement(zi, {
							filterRecency: n,
							handleClickFilter: t
						})), a.createElement("div", {
							className: "recents-right"
						}, a.createElement(co, {
							selectedMode: _,
							selectedKey: null == _ ? void 0 : _.type,
							setSelectedMode: y,
							hasData: m && m.length > 0
						}))) : a.createElement(a.Fragment, null, a.createElement("div", null, a.createElement(mo, {
							data: x,
							selectedMap: D,
							setSelectedMap: M
						})), a.createElement("div", {
							className: "recents-right"
						}, a.createElement(uo, {
							selectedMap: D,
							selectedKey: null == _ ? void 0 : _.type
						}))))
					},
					po = function(e) {
						var t, n, r, o, l, s, c, d, m, u, g, p, h, f, v, b, _, y, k, x, R, T, L, D, M = e.selectedMatch,
							I = e.hasData,
							A = (0, i.v9)((function(e) {
								return e.global.language
							})),
							N = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							C = [{
								title: "".concat(kt[A].score),
								value: null != M && null !== (t = M.playerStats) && void 0 !== t && t.score || 0 === (null == M || null === (n = M.playerStats) || void 0 === n ? void 0 : n.score) ? Ct(null == M || null === (r = M.playerStats) || void 0 === r ? void 0 : r.score) : "--"
							}, {
								title: "".concat(kt[A].kills),
								value: null != M && null !== (o = M.playerStats) && void 0 !== o && o.kills || 0 === (null == M || null === (l = M.playerStats) || void 0 === l ? void 0 : l.kills) ? Ct(null == M || null === (s = M.playerStats) || void 0 === s ? void 0 : s.kills) : "--"
							}, {
								title: "".concat(kt[A].deaths),
								value: null != M && null !== (c = M.playerStats) && void 0 !== c && c.deaths || 0 === (null == M || null === (d = M.playerStats) || void 0 === d ? void 0 : d.deaths) ? Ct(null == M || null === (m = M.playerStats) || void 0 === m ? void 0 : m.deaths) : "--"
							}, {
								title: "".concat(kt[A].kdRatio),
								value: null != M && null !== (u = M.playerStats) && void 0 !== u && u.kdRatio || 0 === (null == M || null === (g = M.playerStats) || void 0 === g ? void 0 : g.kdRatio) ? (100 * (null == M || null === (p = M.playerStats) || void 0 === p ? void 0 : p.kdRatio) / 100).toFixed(2) : "--"
							}, {
								title: "".concat(kt[A].damage),
								value: null != M && null !== (h = M.playerStats) && void 0 !== h && h.damageDone || 0 === (null == M || null === (f = M.playerStats) || void 0 === f ? void 0 : f.damageDone) ? Ct(null == M || null === (v = M.playerStats) || void 0 === v ? void 0 : v.damageDone) : "--"
							}],
							P = "https://assets.callofduty.com/cdn/app/codp/iw9/map-load/loading_".concat(null == M ? void 0 : M.map, "_bg_1150x818.jpg");
						return a.createElement($i, {
							style: {
								backgroundImage: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.25) 27.19%, rgba(0, 0, 0, 0.25) 36.56%, #000000 66.76%), url(".concat(P, ")")
							}
						}, I ? a.createElement("div", {
							className: "match_header"
						}, a.createElement("div", null, a.createElement("img", {
							width: N ? "200px" : void 0,
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/icon_mode_mp_".concat(S[null == M ? void 0 : M.mode], "_144x144.png")
						})), a.createElement("div", null, a.createElement("div", {
							className: "map-name"
						}, null != M && M.map ? (null == E || null === (b = E[A]) || void 0 === b ? void 0 : b[null == M ? void 0 : M.map]) || (null == M ? void 0 : M.map) : "--"), a.createElement("div", null, a.createElement("div", {
							className: "mode-name"
						}, null != M && M.mode ? (null == w || null === (_ = w[A]) || void 0 === _ ? void 0 : _[null == M ? void 0 : M.mode]) || (null == M ? void 0 : M.mode) : "--"), a.createElement("div", {
							className: "duration",
							style: {
								paddingRight: 10
							}
						}, "".concat(kt[A].duration, ":\n                            ").concat(null != M && M.utcStartSeconds && null != M && M.utcEndSeconds ? Dt(null == M ? void 0 : M.utcStartSeconds, null == M ? void 0 : M.utcEndSeconds) : "--"))))) : a.createElement("div", {
							className: "no-data"
						}, a.createElement("div", {
							className: "no-data-message"
						}, kt[A].noMatchHistory)), a.createElement("div", {
							className: "match_stats-block"
						}, (null == M || null === (y = M.weaponStats[0]) || void 0 === y ? void 0 : y.kills) > 0 && a.createElement("div", {
							className: "top-weapon-tile"
						}, a.createElement("div", null, a.createElement("div", null, a.createElement("div", {
							className: "tile-header"
						}, kt[A].topWeapon), I ? a.createElement("div", {
							className: "tile-value"
						}, (null == M || null === (k = M.weaponStats[0]) || void 0 === k ? void 0 : k.label) || "--") : a.createElement("div", {
							className: "tile-value empty-text"
						}, "--")), a.createElement("div", null, a.createElement("div", null, a.createElement("div", {
							className: "tile-header"
						}, kt[A].kills), I ? a.createElement("div", {
							className: "tile-value"
						}, null == M || null === (x = M.weaponStats[0]) || void 0 === x ? void 0 : x.kills) : a.createElement("div", {
							className: "tile-value empty-text"
						}, "--")), a.createElement("div", null, a.createElement("div", {
							className: "tile-header"
						}, kt[A].accuracy), I ? a.createElement("div", {
							className: "tile-value"
						}, null != M && null !== (R = M.weaponStats[0]) && void 0 !== R && R.accuracy || 0 === (null == M || null === (T = M.weaponStats[0]) || void 0 === T ? void 0 : T.accuracy) ? null == M || null === (L = M.weaponStats[0]) || void 0 === L ? void 0 : L.accuracy : "--", "%") : a.createElement("div", {
							className: "tile-value empty-text"
						}, "--")))), I ? a.createElement("div", {
							style: {
								textAlign: "center"
							}
						}, a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/".concat(null == M || null === (D = M.weaponStats[0]) || void 0 === D ? void 0 : D.imageIcon, "_").concat(N ? "522x232" : "410x112", ".png")
						})) : a.createElement("div", {
							className: "empty-background"
						})), a.createElement("div", {
							className: "match_stats-tiles"
						}, null == C ? void 0 : C.map((function(e) {
							return a.createElement("div", {
								key: e.title,
								className: "match_stats-tile"
							}, a.createElement("div", {
								className: "match_stats-tile--text tile-header"
							}, e.title), I ? a.createElement("div", {
								className: "match_stats-tile--number tile-value"
							}, e.value) : a.createElement("div", {
								className: "match_stats-tile--number tile-value empty-text"
							}, "--"))
						})))), a.createElement("div", {
							className: "border-box"
						}))
					},
					ho = function(e) {
						var t = e.theadData,
							n = e.tbodyData,
							r = e.customClass;
						return a.createElement("table", {
							className: r
						}, a.createElement("thead", null, a.createElement("tr", null, t.map((function(e, t) {
							return a.createElement("td", {
								key: t,
								title: e
							}, e)
						})))), a.createElement("tbody", null, n.map((function(e, t) {
							return a.createElement("tr", {
								key: t,
								className: e.isCurrent ? "active-row" : ""
							}, e.items.map((function(e, t) {
								return a.createElement("td", {
									key: t
								}, e)
							})))
						}))))
					};

				function fo(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var a = Object.getOwnPropertySymbols(e);
						t && (a = a.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, a)
					}
					return n
				}

				function vo(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? fo(Object(n), !0).forEach((function(t) {
							(0, N.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fo(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}
				const bo = function(e) {
						var t, n, r, o, l, s, c = e.selectedMatch,
							d = e.selectedKey,
							m = (0, i.v9)((function(e) {
								return e.global.language
							})),
							u = (0, i.v9)((function(e) {
								return e.record.matchStats
							})),
							g = [],
							p = _("user_id");
						null != u && u.players && g.push(null == u ? void 0 : u.players[0].map((function(e) {
							return vo(vo({}, e.player), e.playerStats)
						})));
						var h = function(e) {
								var t = [],
									n = 0;
								return g && g[0] && g[0].map((function(a) {
									a.team === e && t.push({
										id: a.uno,
										items: [++n, a.username, a.score, a.kills, a.damageDone],
										isCurrent: a.uno === p
									})
								})), t
							},
							f = function() {
								return h("allies").filter((function(e) {
									return e.isCurrent
								})).length > 0
							},
							v = function() {
								return h("axis").filter((function(e) {
									return e.isCurrent
								})).length > 0
							},
							b = (null == c ? void 0 : c.alliesScore) > (null == c ? void 0 : c.axisScore) ? "allies" : "axis",
							y = ["#", kt[m].player, kt[m].score, kt[m].kills, kt[m].damage],
							k = "https://assets.callofduty.com/cdn/app/codp/iw9/map-load/loading_".concat(null == c ? void 0 : c.map, "_bg_1150x818.jpg");
						return a.createElement(ao, {
							style: {
								backgroundImage: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.25) 27.19%, rgba(0, 0, 0, 0.25) 36.56%, #000000 66.76%), url(".concat(k, ")")
							}
						}, c && a.createElement(a.Fragment, null, a.createElement("div", {
							className: "match_header"
						}, a.createElement("div", {
							className: "left_header"
						}, a.createElement("div", null, a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/icon_mode_mp_".concat(S[null == c ? void 0 : c.mode], "_144x144.png")
						})), a.createElement("div", null, a.createElement("div", {
							className: "map-name"
						}, null != c && c.map ? (null == E || null === (t = E[m]) || void 0 === t ? void 0 : t[null == c ? void 0 : c.map]) || (null == c ? void 0 : c.map) : "--"), a.createElement("div", null, a.createElement("div", {
							className: "mode-name"
						}, null != c && c.mode ? (null == w || null === (n = w[m]) || void 0 === n ? void 0 : n[null == c ? void 0 : c.mode]) || (null == c ? void 0 : c.mode) : "--"), a.createElement("div", {
							className: "duration"
						}, "".concat(kt[m].duration, ": ").concat(null != c && c.utcStartSeconds && null != c && c.utcEndSeconds ? Dt(null == c ? void 0 : c.utcStartSeconds, null == c ? void 0 : c.utcEndSeconds) : "--"))))), "allies" === b ? a.createElement("div", {
							className: "right_header"
						}, a.createElement("div", {
							className: f() ? "first-row" : "second-row"
						}, a.createElement("div", null, a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/icon/icon_faction_allegiance_52x52.png"
						})), a.createElement("div", null, a.createElement("div", {
							className: "team-type"
						}, null === (r = kt[m]) || void 0 === r ? void 0 : r.kortac)), a.createElement("div", {
							className: "team-score"
						}, null == c ? void 0 : c.alliesScore)), a.createElement("div", {
							className: v() ? "first-row" : "second-row"
						}, a.createElement("div", null, a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/icon/icon_faction_coalition_52x52.png"
						})), a.createElement("div", null, a.createElement("div", {
							className: "team-type"
						}, null === (o = kt[m]) || void 0 === o ? void 0 : o.specgru)), a.createElement("div", {
							className: "team-score"
						}, null == c ? void 0 : c.axisScore))) : a.createElement("div", {
							className: "right_header"
						}, a.createElement("div", {
							className: v() ? "first-row" : "second-row"
						}, a.createElement("div", null, a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/icon/icon_faction_coalition_52x52.png"
						})), a.createElement("div", null, a.createElement("div", {
							className: "team-type"
						}, null === (l = kt[m]) || void 0 === l ? void 0 : l.specgru)), a.createElement("div", {
							className: "team-score"
						}, null == c ? void 0 : c.axisScore)), a.createElement("div", {
							className: f() ? "first-row" : "second-row"
						}, a.createElement("div", null, a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/icon/icon_faction_allegiance_52x52.png"
						})), a.createElement("div", null, a.createElement("div", {
							className: "team-type"
						}, null === (s = kt[m]) || void 0 === s ? void 0 : s.kortac)), a.createElement("div", {
							className: "team-score"
						}, null == c ? void 0 : c.alliesScore)))), a.createElement("div", {
							key: d,
							className: "tables-container"
						}, f() ? a.createElement(a.Fragment, null, a.createElement(ho, {
							theadData: y,
							tbodyData: h("allies")
						}), a.createElement(ho, {
							theadData: y,
							tbodyData: h("axis"),
							customClass: "coalition-table"
						})) : a.createElement(a.Fragment, null, a.createElement(ho, {
							theadData: y,
							tbodyData: h("axis")
						}), a.createElement(ho, {
							theadData: y,
							tbodyData: h("allies"),
							customClass: "coalition-table"
						})))), a.createElement("div", {
							className: "border-box"
						}))
					},
					_o = function(e) {
						var t = e.selectedMatch,
							n = e.setSelectedMatch,
							r = e.hasData,
							o = (0, i.v9)((function(e) {
								return e.global.language
							})),
							l = (0, a.useState)(kt[o].matchSummary),
							s = (0, et.Z)(l, 2),
							c = s[0],
							d = s[1],
							m = [{
								title: kt[o].matchSummary
							}, {
								title: kt[o].scoreboard
							}],
							u = function() {
								c === kt[o].matchSummary && (d(kt[o].scoreboard), Wt("ui_radial_button_select"))
							},
							g = function() {
								c === kt[o].scoreboard && (d(kt[o].matchSummary), Wt("ui_radial_button_select"))
							};
						return ka(1, {
							RIGHT: u,
							LEFT: g
						}), xa(c, {
							next: u,
							prev: g
						}), a.createElement(no, null, c === kt[o].matchSummary ? a.createElement(po, {
							selectedMatch: t,
							selectedKey: null == t ? void 0 : t.matchID,
							setSelectedMatch: n,
							hasData: r
						}) : a.createElement(bo, {
							selectedKey: null == t ? void 0 : t.matchID,
							selectedMatch: t,
							hasData: r
						}), a.createElement("div", {
							className: "footer-tab-list"
						}, a.createElement(fa, {
							type: "DPAD_LEFT_RIGHT",
							width: 4,
							height: 4,
							marginLeft: .4,
							fill: "#e7e7e7"
						}), null == m ? void 0 : m.map((function(e) {
							return a.createElement("div", {
								key: e.title,
								onClick: function() {
									return d(e.title)
								},
								className: e.title === c ? "active-selection" : "inactive-selection"
							}, e.title)
						}))))
					};
				var yo = function(e, t) {
						return 1 === e ? null == t ? void 0 : t.weaponStats : 2 === e ? null == t ? void 0 : t.equipmentStats : 3 === e ? null == t ? void 0 : t.killStreaks : void 0
					},
					Eo = function(e, t, n) {
						return e && !t && n && n.length > 0
					},
					wo = function(e, t, n) {
						var a = "https://assets.callofduty.com/cdn/app/codp/iw9";
						return 2 === t ? "".concat(a, "/equipment/").concat(e, "_54x54.png") : "field upgrades" === t ? "".concat(a, "/field-upgrade/").concat(e, ".png") : 3 === t ? "".concat(a, "/killstreak/").concat(e, ".png") : n ? "".concat(a, "/weapon/").concat(e, "_196x108.png") : "".concat(a, "/weapon/").concat(e, "_123x54.png")
					};
				const So = function(e) {
						var t = (0, i.v9)((function(e) {
								return e.record.recentMatches
							})),
							n = (0, i.v9)((function(e) {
								return e.record.recentMatchesError
							})),
							r = (0, i.v9)((function(e) {
								return e.record.recentMatchesLoaded
							})),
							o = (0, i.v9)((function(e) {
								return e.global.gameTitle
							})),
							l = (0, i.v9)((function(e) {
								return e.record.selectedGameMode
							})),
							s = (0, i.v9)((function(e) {
								if ("mw2" === o) return e.record.crData;
								if ("wz2" === o) {
									if ("br" === l) return e.record.wzData;
									if ("resurgence" === l) return e.record.resurgenceData;
									if ("plunder" === l) return e.record.plunderData;
									if ("dmz" === l) return e.record.dmzData
								}
							})),
							c = (0, i.v9)((function(e) {
								if ("mw2" === o) return e.record.crDataLoaded;
								if ("wz2" === o) {
									if ("br" === l) return e.record.wzDataLoaded;
									if ("resurgence" === l) return e.record.resurgenceDataLoaded;
									if ("plunder" === l) return e.record.plunderDataLoaded;
									if ("dmz" === l) return e.record.dmzDataLoaded
								}
								return !1
							})),
							d = (0, i.v9)((function(e) {
								if ("mw2" === o) return e.record.crDataError;
								if ("wz2" === o) {
									if ("br" === l) return e.record.wzDataError;
									if ("resurgence" === l) return e.record.resurgenceDataError;
									if ("plunder" === l) return e.record.plunderDataError;
									if ("dmz" === l) return e.record.dmzDataError
								}
								return ""
							})),
							m = (0, i.v9)((function(e) {
								return e.record.seasonData
							})),
							u = (0, i.v9)((function(e) {
								return e.record.seasonDataLoaded
							})),
							g = (0, i.v9)((function(e) {
								return e.record.seasonDataError
							})),
							p = (0, a.useState)({}),
							h = (0, et.Z)(p, 2),
							f = h[0],
							v = h[1],
							b = (0, a.useState)(!1),
							_ = (0, et.Z)(b, 2),
							y = _[0],
							E = _[1],
							w = (0, a.useState)(!1),
							S = (0, et.Z)(w, 2),
							k = S[0],
							x = S[1];
						return (0, a.useEffect)((function() {
							"Lifetime" === e && c && (v(s), E(c), x(d)), "Last 10 Games" === e && r && (v(t), E(r), x(n)), "Current Season" === e && u && (v(m), E(u), x(g))
						}), [e, r, c, u]), {
							data: f,
							loaded: y,
							error: k
						}
					},
					ko = function() {
						var e, t = (0, i.v9)((function(e) {
								return e.record.recentMatches
							})),
							n = (0, i.v9)((function(e) {
								return e.record.recentMatchesError
							})),
							r = (0, i.v9)((function(e) {
								return e.record.recentMatchesLoaded
							})),
							o = (0, i.I0)(),
							l = (0, i.v9)((function(e) {
								return e.record.filterRecency
							})),
							s = So(l),
							c = s.data,
							d = s.loaded,
							m = s.error,
							u = (0, i.v9)((function(e) {
								return e.global.isCrossConfirm
							})),
							g = (0, i.v9)(D),
							p = (null == c ? void 0 : c.modeStats) || (null == c ? void 0 : c.summary),
							h = (0, i.v9)((function(e) {
								return e.global.language
							})),
							f = (0, i.v9)((function(e) {
								return e.global.gameTitle
							})),
							v = (0, i.v9)((function(e) {
								return e.record.selectedGameMode
							})),
							b = t && (null == t || null === (e = t.matches) || void 0 === e ? void 0 : e.length) > 0 && !n && r,
							_ = (0, a.useState)((null == t ? void 0 : t.matches) && (null == t ? void 0 : t.matches[0])),
							y = (0, et.Z)(_, 2),
							E = y[0],
							w = y[1],
							S = (0, i.v9)((function(e) {
								return e.record.selectedScreen
							})),
							k = (0, i.v9)((function(e) {
								return e.record.selectedType
							})),
							x = (0, a.useRef)(k),
							R = "mw2" === f ? [{
								title: kt[h].recentsTab[0],
								isDisabled: !Eo(r, n, null == t ? void 0 : t.matches),
								key: 0
							}, {
								title: kt[h].recentsTab[1],
								isDisabled: !Eo(d, m, p),
								key: 1
							}] : [];
						(0, a.useEffect)((function() {
							x.current = k
						}), [k]), (0, a.useEffect)((function() {
							var e;
							o(H({
								id: (null == t ? void 0 : t.matches) && (null == t || null === (e = t.matches[0]) || void 0 === e ? void 0 : e.matchID),
								gameTitle: f,
								gameMode: v
							}));
							var n = R.find((function(e) {
								return e.key === T
							}));
							if (null != n && n.isDisabled) {
								var a = R.findIndex((function(e) {
									return !1 === e.isDisabled
								}));
								o(F.setSelectedTab(a))
							}
						}), [l]);
						var T = (0, i.v9)((function(e) {
								return e.record.selectedTab
							})),
							L = function() {
								if ("mw2" === f) {
									var e, t = R.filter((function(e) {
											return !1 === e.isDisabled
										})),
										n = null == t ? void 0 : t.findIndex((function(e) {
											return e.key === T
										})),
										a = n !== R.length && (null === (e = t[n + 1]) || void 0 === e ? void 0 : e.key);
									a >= 0 && a < (null == R ? void 0 : R.length) && (o(F.setSelectedTab(a)), Wt("ui_hilite_tab"))
								}
							},
							M = function() {
								if ("mw2" === f) {
									var e, t = R.filter((function(e) {
											return !1 === e.isDisabled
										})),
										n = null == t ? void 0 : t.findIndex((function(e) {
											return e.key === T
										})),
										a = null === (e = t[n - 1]) || void 0 === e ? void 0 : e.key;
									a >= 0 && (o(F.setSelectedTab(a)), Wt("ui_hilite_tab"))
								}
							};
						return xa(T, {
							LB: g ? L : M,
							RB: g ? M : L,
							close: function() {
								return va(o, S, x.current, T)
							}
						}), ka(1, {
							LB: g ? L : M,
							RB: g ? M : L,
							XBA_PSCROSS: !u && function() {
								return va(o, S, x.current, T)
							},
							XBB_PSCIRCLE: u && function() {
								return va(o, S, x.current, T)
							}
						}), a.createElement(a.Fragment, null, (!d || !r) && a.createElement(ar, null), a.createElement(er, {
							tabs: R
						}), a.createElement($a, null, a.createElement("div", null, kt[h].statusMessage)), a.createElement(Xi, {
							isArabic: g
						}, 0 === T ? a.createElement("div", {
							className: "screen-content"
						}, a.createElement(lo, {
							data: null == t ? void 0 : t.matches,
							selectedMatch: E,
							setSelectedMatch: w
						}), a.createElement("div", {
							className: "recents-right"
						}, a.createElement(_o, {
							selectedMatch: E,
							selectedKey: null == E ? void 0 : E.matchID,
							setSelectedMatch: w,
							hasData: b
						}))) : a.createElement(go, {
							filterRecency: l,
							data: c,
							handleClickFilter: ba
						})))
					};
				var xo, Ro, To, Lo, Do, Mo, Io, Ao, No, Co = se.ZP.section(xo || (xo = (0, me.Z)(["\n    width: 100%;\n    height: 100%;\n    ", "\n    .screen-content {\n        margin: 0 9.6rem;\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .recents-right {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n    }\n    .recency-filter {\n        display: flex;\n        gap: 2rem;\n        padding: 2rem 0;\n        .filter-option {\n            font-size: 2rem;\n            text-align: center;\n            color: #555;\n            text-transform: uppercase;\n            cursor: pointer;\n            :hover {\n                color: #e7e7e7;\n            }\n        }\n        .active {\n            color: #e7e7e7;\n            text-decoration: underline;\n            text-underline-offset: 0.4rem;\n        }\n    }\n"])), (function(e) {
						return e.isArabic && (0, se.iv)(Ro || (Ro = (0, me.Z)(["\n            .match-data-item,\n            .mode-data-item,\n            .view-maps-banner {\n                direction: rtl !important;\n            }\n        "])))
					})),
					Po = se.ZP.div(To || (To = (0, me.Z)(["\n    width: 56.5rem;\n    height: 81.8rem;\n    position: relative;\n\n    .border-box {\n        position: absolute;\n        bottom: 0;\n        width: 58rem;\n        height: 1.3rem;\n        border-bottom: 0.1rem solid rgb(85, 85, 85);\n        border-left: 0.1rem solid rgb(85, 85, 85);\n        border-right: 0.1rem solid rgb(85, 85, 85);\n    }\n\n    .recents {\n        height: 100%;\n\n        .matches_header {\n            align-items: center;\n            height: 8rem;\n            & > div:nth-of-type(1) {\n                font-size: 2.8rem;\n                text-transform: uppercase;\n                color: #fff;\n            }\n\n            & > div:nth-of-type(2) {\n                opacity: 0.7;\n                border: 0.1rem solid #555555;\n                margin: 3.3rem 0;\n            }\n        }\n    }\n    .matches_data {\n        height: 70.4rem;\n        direction: rtl;\n        padding-left: 2rem;\n        overflow-y: scroll;\n        &::-webkit-scrollbar {\n            width: 0.2rem;\n            background: transparent;\n        }\n        &::-webkit-scrollbar-track {\n            background-clip: content-box;\n        }\n        &::-webkit-scrollbar-thumb {\n            background-clip: padding-box;\n            background: #e7e7e7;\n            min-height: 1.6rem;\n        }\n    }\n    .match-data-item.active {\n        border: 0.2rem solid #79c370;\n        border-left: 0.8rem solid #79c370;\n        padding-left: 0.4rem;\n\n        &:hover {\n            border: 0.2rem solid #79c370 ;\n            border-left: 0.8rem solid #79c370;\n            padding-left: 0.4rem;\n        }\n    }\n\n    .match-data-item {\n        margin-bottom: 0.8rem;\n        color: ", ";\n        padding: 1rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        border: 0.2rem solid #555555;\n        direction: ltr;\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: cover;\n        background-origin: border-box;\n        &:hover {\n            border: 0.2rem solid #E7E7E7;\n        }\n        .match-data-item-image-empty {\n            background: #3b3b3a;\n        }\n        & > div:nth-of-type(1) {\n            display: flex;\n            justify-content: start;\n            align-items: center;\n            & > div:nth-of-type(1) {\n                width: 5.4rem;\n                height: 5.4rem;\n                margin-right: 0.9rem;\n            }\n            & > div:nth-of-type(2) {\n                color: ", ";\n\n                & > div:nth-of-type(1) {\n                    font-size: 2rem;\n                    text-transform: uppercase;\n                    font-weight: bold;\n                }\n                & > div:nth-of-type(2) {\n                    font-size: 1.8rem;\n                }\n                & > div:nth-of-type(3) {\n                    font-size: 1.6rem;\n                    color: ", ";\n                }\n            }\n        }\n        & > div:nth-of-type(2) {\n            text-align: end;\n            font-size: 1.8rem;\n\n            .match-data-item-result-win {\n                color: #3ecced;\n                text-transform: uppercase;\n                padding-bottom: 0.6rem;\n            }\n            .match-data-item-result-loss {\n                color: #ec4442;\n                text-transform: uppercase;\n                padding-bottom: 0.6rem;\n            }\n            .match-data-item-result-empty {\n                background: #3b3b3a;\n                width: 5.6rem;\n                height: 2rem;\n            }\n        }\n        .match-data-item-placement {\n            font-size: 2.8rem;\n            font-weight: bold;\n        }\n    }\n    .win-placement {\n        color: #3ecced;\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLightAlt
					})),
					zo = se.ZP.div(Lo || (Lo = (0, me.Z)(["\n    width: 114.4rem;\n    height: 81.8rem;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 3.5rem 4rem;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    .border-box {\n        position: absolute;\n        bottom: 0;\n        width: 112.4rem;\n        height: 1.3rem;\n        margin-left: -2rem;\n        border-bottom: 0.1rem solid rgb(85, 85, 85);\n        border-left: 0.1rem solid rgb(85, 85, 85);\n        border-right: 0.1rem solid rgb(85, 85, 85);\n    }\n\n    .match_header {\n        display: flex;\n        justify-content: start;\n        align-items: center;\n        & > div:nth-of-type(1) {\n            width: 14.4rem;\n            height: 14.4rem;\n        }\n        & > div:nth-of-type(2) {\n            padding-left: 1rem;\n            .mode-name {\n                font-size: 7rem;\n                font-weight: bold;\n                color: ", ";\n                text-transform: uppercase;\n            }\n            & > div:nth-of-type(2) {\n                padding: 0 0.6rem;\n                color: #3b3b3a;\n                display: flex;\n                & > div:nth-of-type(1) {\n                    background: #9aa39a;\n                    padding: 0.4rem 0.5rem 0 0.5rem;\n                    font-size: 2.4rem;\n                    margin-right: 1rem;\n                    text-transform: uppercase;\n                }\n                .duration {\n                    color: #9aa39a;\n                    font-size: 2rem;\n                    margin-top: 0.7rem;\n                }\n            }\n        }\n        .right_header_wz {\n            position: absolute;\n            right: 0;\n            top: 6rem;\n            font-weight: bold;\n            padding-right: 4rem;\n            color: #e7e7e7;\n            font-size: 7rem;\n            &.placement_win {\n                color: #3ecced;\n            }\n        }\n    }\n    .no-data {\n        height: 62rem;\n        display: flex;\n        align-items: center;\n        color: #9aa39a;\n        font-size: 2.4rem;\n        .no-data-message {\n            margin: 0 auto;\n        }\n    }\n    .match_stats-block {\n        display: flex;\n        height: 23.2rem;\n        .tile-header {\n            font-size: 1.8rem;\n            line-height: 2.2rem;\n            color: #9aa39a;\n        }\n        .tile-value {\n            font-weight: bold;\n            font-size: 3.6rem;\n            line-height: 4.3rem;\n            text-overflow: ellipsis;\n            white-space: pre;\n            overflow: hidden;\n            color: ", ";\n        }\n        .match_stats-block-weapon {\n            width: 50%;\n            padding: 1.6rem;\n            margin-right: 2.1rem;\n            background: rgba(231, 231, 231, 0.1);\n            clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0% 50%);\n            border-left: 0.2rem solid #e7e7e7;\n            & > div:nth-of-type(1) {\n                display: flex;\n                & > div:nth-of-type(1) {\n                    width: 50%;\n                }\n                & > div:nth-of-type(2) {\n                    display: flex;\n                    width: 50%;\n                    justify-content: space-around;\n                }\n            }\n        }\n        .match_stats-tiles {\n            display: grid;\n            grid-template-columns: repeat(3, 1fr);\n            gap: 1rem;\n            width: 50%;\n            .match_stats-tile {\n                height: 11rem;\n                padding: 1rem 1.6rem;\n                background: rgba(231, 231, 231, 0.1);\n                display: flex;\n                flex-direction: column;\n                justify-content: space-between;\n                clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0% 50%);\n                border-left: 0.2rem solid #e7e7e7;\n            }\n        }\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					})),
					Oo = (se.ZP.div(Do || (Do = (0, me.Z)(["\n    width: 56.5rem;\n    height: 81.8rem;\n    position: relative;\n\n    .border-box {\n        position: absolute;\n        bottom: 0;\n        width: 58rem;\n        height: 1.3rem;\n        border-bottom: 0.1rem solid rgb(85, 85, 85);\n        border-left: 0.1rem solid rgb(85, 85, 85);\n        border-right: 0.1rem solid rgb(85, 85, 85);\n    }\n\n    .modes_data {\n        overflow-y: scroll;\n        height: 71.8rem;\n        scroll-behavior: smooth;\n        scrollbar-width: none;\n        direction: rtl;\n        padding-left: 2rem;\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n        &::-webkit-scrollbar {\n            width: 0.2rem;\n            background: transparent;\n        }\n        &::-webkit-scrollbar-track {\n            background-clip: content-box;\n        }\n        &::-webkit-scrollbar-thumb {\n            background-clip: padding-box;\n            background: #e7e7e7;\n            min-height: 1.6rem;\n        }\n    }\n    .sort-section {\n        display: flex;\n        justify-content: space-between;\n        gap: 1rem;\n        padding: 1rem;\n        border-bottom: 0.1rem solid #555;\n        color: ", ";\n        font-size: 3rem;\n        direction: ltr;\n        margin-bottom: 1rem;\n        div {\n            color: #555555;\n            text-transform: uppercase;\n            font-size: 1.8rem;\n            cursor: pointer;\n            display: flex;\n            gap: 1rem;\n            :hover {\n                color: ", ";\n            }\n            &.active {\n                text-decoration: underline;\n                text-underline-offset: 0.4rem;\n                color: ", ";\n            }\n        }\n        .down-arrow {\n            clip-path: polygon(100% 0, 0% 100%, 100% 100%);\n            width: 1.3rem;\n            height: 1.4rem;\n            background: #79c370;\n        }\n        &.empty-sort-section {\n            .down-arrow {\n                background: #555555 !important;\n            }\n            .active {\n                color: #555555 !important;\n            }\n        }\n    }\n\n    .mode-data-item.active {\n        border: 0.2rem solid #79c370;\n        border-left: 0.8rem solid #79c370;\n    }\n\n    .mode-data-item {\n        color: ", ";\n        padding: 1rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        border: 0.2rem solid #555555;\n        direction: ltr;\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: cover;\n        cursor: pointer;\n\n        & > div:nth-of-type(1) {\n            display: flex;\n            justify-content: start;\n            align-items: center;\n            & > div:nth-of-type(1) {\n                width: 5.4rem;\n                height: 5.4rem;\n                margin-right: 0.9rem;\n            }\n            & > div:nth-of-type(2) {\n                color: ", ";\n                font-size: 2rem;\n                text-transform: uppercase;\n                font-weight: bold;\n            }\n        }\n        & > div:nth-of-type(2) {\n            text-align: end;\n            font-size: 1.8rem;\n        }\n    }\n    .view-maps-banner {\n        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), #79c370;\n        text-transform: uppercase;\n        color: #141313;\n        font-size: 2rem;\n        font-weight: bold;\n        padding: 0.5rem;\n        direction: ltr;\n        cursor: pointer;\n        display: flex;\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					})), se.ZP.div(Mo || (Mo = (0, me.Z)(["\n    width: 114.4rem;\n    height: 81.8rem;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    padding: 3.5rem 4rem;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    .border-box {\n        position: absolute;\n        bottom: 0;\n        width: 112.4rem;\n        height: 1.3rem;\n        margin-left: -2rem;\n        border-bottom: 0.1rem solid rgb(85, 85, 85);\n        border-left: 0.1rem solid rgb(85, 85, 85);\n        border-right: 0.1rem solid rgb(85, 85, 85);\n    }\n\n    .mode_header {\n        display: flex;\n        justify-content: start;\n        align-items: center;\n        & > div:nth-of-type(1) {\n            width: 14.4rem;\n            height: 14.4rem;\n        }\n        & > div:nth-of-type(2) {\n            padding-left: 1rem;\n            & > div:nth-of-type(1) {\n                font-size: 7rem;\n                text-transform: uppercase;\n                font-weight: bold;\n                color: ", ";\n            }\n            & > div:nth-of-type(2) {\n                padding: 0 0.6rem;\n                color: #9aa39a;\n                > div {\n                    padding: 0 0.5rem;\n                    font-size: 1.8rem;\n                }\n            }\n        }\n    }\n    .no-data {\n        height: 62rem;\n        display: flex;\n        align-items: center;\n        color: #9aa39a;\n        font-size: 2.4rem;\n        .no-data-message {\n            margin: 0 auto;\n        }\n    }\n    .sub-title {\n        font-size: 1.8rem;\n        color: #9aa39a;\n    }\n    .sub-value {\n        font-size: 3.5rem;\n        font-weight: bold;\n        line-height: 4.3rem;\n        color: ", ";\n    }\n    .time-played,\n    .matches-played,\n    .kills-count,\n    .score-count,\n    .ratios {\n        padding: 0 2rem;\n        margin: 2rem 0;\n    }\n    .kill-death-ratios {\n        display: flex;\n    }\n    .mode-stats-block {\n        margin-left: 2rem;\n        display: flex;\n        margin-top: 10rem;\n        justify-content: center;\n        > div {\n            display: flex;\n        }\n        .win-loss-ratio {\n            display: flex;\n            margin-right: 10rem;\n        }\n        .bottom-border-box {\n            width: 74.6rem;\n        }\n        .kills-stats {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n        }\n        .ja-wrap-fix {\n            word-break: keep-all;\n        }\n        .kill-count,\n        .death-count,\n        .win-count,\n        .loss-count {\n            padding: 0 4rem;\n            margin: 3rem 0;\n            display: flex;\n            flex-direction: column;\n            div {\n                margin-bottom: 1.2rem;\n            }\n        }\n        .kill-count > div,\n        .win-count > div {\n            border-radius: 0.4rem;\n            width: 2.4rem;\n        }\n        .kill-count > div:nth-of-type(1) {\n            background: #368947;\n            height: 0.4rem;\n        }\n        .win-count > div:nth-of-type(1) {\n            background: #3ecced;\n            height: 0.4rem;\n        }\n\n        .death-count > div:nth-of-type(1),\n        .loss-count > div:nth-of-type(1) {\n            background: #e7e7e7;\n            height: 0.4rem;\n            border-radius: 0.4rem;\n            width: 2.4rem;\n        }\n    }\n    .match_stats-tiles {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        width: 50%;\n        position: absolute;\n        bottom: 4rem;\n        .match_stats-tile {\n            height: 10.5rem;\n            padding: 1rem 1.6rem;\n            margin-right: 2rem;\n            background: rgba(231, 231, 231, 0.1);\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0% 50%);\n            border-left: 0.2rem solid #e7e7e7;\n        }\n        .tile-header {\n            font-size: 1.8rem;\n            line-height: 2.2rem;\n            color: #9aa39a;\n        }\n        .tile-value {\n            font-weight: bold;\n            font-size: 3.6rem;\n            line-height: 4.3rem;\n            text-overflow: ellipsis;\n            white-space: pre;\n            overflow: hidden;\n            color: ", ";\n        }\n    }\n    .map_header {\n        font-weight: bold;\n        font-size: 7rem;\n        color: ", ";\n        padding: 2rem;\n        border-left: 0.2rem solid #79c370;\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					})), se.ZP.div(Io || (Io = (0, me.Z)(["\n    .footer-tab-list {\n        width: 69.5rem;\n        height: 5.5rem;\n        clip-path: polygon(0 0, 100% 0, 88% 100%, 13% 100%);\n        background: rgba(59, 59, 58, 0.25);\n        text-transform: uppercase;\n        margin: 0 auto;\n        text-align: center;\n        justify-content: center;\n        display: flex;\n        gap: 1.3rem;\n        align-items: center;\n        > div {\n            font-size: 2rem;\n            cursor: pointer;\n            :hover {\n                opacity: 1;\n            }\n        }\n        .inactive-selection {\n            text-decoration: none;\n            color: ", ";\n            opacity: 0.2;\n        }\n        .active-selection {\n            color: #fff;\n            text-decoration: underline;\n            text-underline-offset: 0.4rem;\n            opacity: 1;\n        }\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}))),
					jo = se.ZP.div(Ao || (Ao = (0, me.Z)(["\n    width: 114.4rem;\n    height: 81.8rem;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    padding: 3.5rem 4rem;\n    color: white;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    .border-box {\n        position: absolute;\n        bottom: 0;\n        width: 112.4rem;\n        height: 1.3rem;\n        margin-left: -2rem;\n        border-bottom: 0.1rem solid rgb(85, 85, 85);\n        border-left: 0.1rem solid rgb(85, 85, 85);\n        border-right: 0.1rem solid rgb(85, 85, 85);\n    }\n\n    .match_header {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        .left_header {\n            display: flex;\n            align-items: center;\n            & > div:nth-of-type(1) {\n                width: 14.4rem;\n                height: 14.4rem;\n            }\n            & > div:nth-of-type(2) {\n                padding-left: 1rem;\n\n                .mode-name {\n                    font-size: 7rem;\n                    font-weight: bold;\n                    color: ", ";\n                    text-transform: uppercase;\n                }\n\n                & > div:nth-of-type(2) {\n                    padding: 0 0.6rem;\n                    color: #3b3b3a;\n                    display: flex;\n                    align-items: baseline;\n                    & > div:nth-of-type(1) {\n                        background: #9aa39a;\n                        padding: 0.4rem 0.5rem 0 0.5rem;\n                        font-size: 2.4rem;\n                        margin-right: 1rem;\n                        text-transform: uppercase;\n                    }\n\n                    & > div:nth-of-type(2) {\n                        color: #9aa39a;\n                        font-size: 2rem;\n                    }\n                }\n            }\n        }\n        .right_header_wz {\n            position: absolute;\n            right: 0;\n            top: 6rem;\n            font-weight: bold;\n            padding-right: 4rem;\n            color: #e7e7e7;\n            font-size: 7rem;\n            &.placement_win {\n                color: #3ecced;\n            }\n        }\n    }\n    .tables-container {\n        display: flex;\n        height: 55rem;\n        overflow-y: scroll;\n        &::-webkit-scrollbar {\n            width: 0.2rem;\n            background: transparent;\n        }\n        &::-webkit-scrollbar-track {\n            background-clip: content-box;\n        }\n        &::-webkit-scrollbar-thumb {\n            background-clip: padding-box;\n            background: #e7e7e7;\n            min-height: 1.6rem;\n        }\n    }\n    .wz2-tables-container {\n        display: flex;\n        overflow-y: scroll;\n        position: relative;\n        top: 31.2rem;\n        width: 100%;\n        height: 31.2rem;\n        &::-webkit-scrollbar {\n            width: 0.2rem;\n            background: transparent;\n        }\n        &::-webkit-scrollbar-track {\n            background-clip: content-box;\n        }\n        &::-webkit-scrollbar-thumb {\n            background-clip: padding-box;\n            background: #e7e7e7;\n            min-height: 1.6rem;\n        }\n        table {\n            width: 100% !important;\n            thead {\n                color: #e7e7e7;\n                background: rgba(231, 231, 231, 0.12);\n                height: 2.6rem;\n            }\n        }\n    }\n    table {\n        width: 49%;\n        font-size: 1.4rem;\n        margin-top: 3rem;\n        color: ", ";\n        text-transform: uppercase;\n        height: fit-content;\n        margin-right: 1rem;\n        thead {\n            background: rgb(23, 78, 92, 0.4);\n            color: #3ecced;\n        }\n        tr {\n            height: 4.8rem;\n            td {\n                padding: 1rem;\n            }\n            td:nth-of-type(4),\n            td:nth-of-type(5),\n            td:nth-of-type(6) {\n                text-align: right;\n            }\n        }\n        tbody {\n            tr {\n                background: #141313;\n                opacity: 0.75;\n            }\n        }\n    }\n    .coalition-table thead {\n        background: rgb(109, 43, 42, 0.4);\n        color: #ec4442;\n    }\n    .active-row {\n        color: #eaea43;\n        td:first-of-type {\n            border-left: 0.6rem solid #eaea43;\n        }\n    }\n    .rank-cell {\n        display: flex;\n        align-items: center;\n        gap: 0.2rem;\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					})),
					Bo = se.ZP.div(No || (No = (0, me.Z)(["\n    margin-bottom: 0.8rem;\n    color: #9aa39a;\n    padding: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 0.1rem solid #3b3b3a;\n    direction: ltr;\n    & > div:nth-of-type(1) {\n        display: flex;\n        justify-content: start;\n        align-items: center;\n        & > div:nth-of-type(1) {\n            width: 5.4rem;\n            height: 5.4rem;\n            margin-right: 0.9rem;\n        }\n        & > div:nth-of-type(2) {\n            & > div:nth-of-type(1) {\n                font-size: 2rem;\n                text-transform: uppercase;\n                font-weight: bold;\n            }\n            & > div:nth-of-type(2) {\n                font-size: 1.8rem;\n            }\n            & > div:nth-of-type(3) {\n                font-size: 1.8rem;\n            }\n        }\n    }\n    & > div:nth-of-type(2) {\n        text-align: end;\n        font-size: 1.8rem;\n\n        .empty-data-item-result {\n            width: 5.6rem;\n            height: 2rem;\n        }\n    }\n"])));
				const Go = function(e) {
						var t, n, r, o, l, s, c, d = e.active,
							m = e.match,
							u = e.handleClick,
							g = (0, i.v9)((function(e) {
								return e.global.language
							})),
							p = (0, i.v9)((function(e) {
								return e.global.is4k
							}));
						return a.createElement("div", {
							className: d ? "match-data-item active" : "match-data-item",
							key: m.matchId,
							name: m.matchId,
							onClick: u
						}, a.createElement("div", {
							className: "match-data-item-left"
						}, a.createElement("div", {
							className: "match-data-item-image"
						}, p ? a.createElement("img", {
							width: "108px",
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/icon_mode_".concat(k[m.mode], "_144x144.png")
						}) : a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/icon_mode_".concat(k[m.mode], "_54x54.png")
						})), a.createElement("div", {
							className: "match-data-item-details"
						}, a.createElement("div", {
							className: "match-data-item-name"
						}, m.mode ? (null == w || null === (t = w[g]) || void 0 === t ? void 0 : t[m.mode]) || m.mode : "--"), a.createElement("div", {
							className: "match-data-item-text"
						}, m.map ? (null == E || null === (n = E[g]) || void 0 === n ? void 0 : n[m.map]) || m.map : "--"), a.createElement("div", {
							className: "match-data-item-mode"
						}, (null == m || null === (r = m.genericStats) || void 0 === r ? void 0 : r.playerUtcDisconnectTimeSeconds) && Lt(null == m || null === (o = m.genericStats) || void 0 === o ? void 0 : o.playerUtcDisconnectTimeSeconds, kt[g].langCode)))), a.createElement("div", {
							className: "match-data-item-right"
						}, a.createElement("div", {
							className: "match-data-item-placement"
						}, null != m && null !== (l = m.genericStats) && void 0 !== l && l.placement && -1 !== (null == m || null === (s = m.genericStats) || void 0 === s ? void 0 : s.placement) ? At(null == m || null === (c = m.genericStats) || void 0 === c ? void 0 : c.placement, kt[g].langCode) : "--")))
					},
					Zo = function() {
						return a.createElement(Bo, null, a.createElement("div", {
							className: "empty-data-item-left"
						}, a.createElement("div", {
							className: "empty-data-item-image"
						}), a.createElement("div", {
							className: "empty-data-item-details"
						}, a.createElement("div", {
							className: "empty-data-item-name"
						}, "--"), a.createElement("div", {
							className: "empty-data-item-text"
						}, "--"))), a.createElement("div", {
							className: "empty-data-item-right"
						}, a.createElement("div", {
							className: "empty-data-item-result"
						}), a.createElement("div", {
							className: "empty-data-item-score"
						}, "--")))
					},
					Uo = function(e) {
						var t = e.selectedMatch,
							n = e.setSelectedMatch,
							r = e.data,
							o = (0, i.v9)((function(e) {
								return e.global.language
							})),
							l = (0, i.I0)(),
							s = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							c = (0, i.v9)((function(e) {
								return e.global.gameTitle
							})),
							d = (0, i.v9)((function(e) {
								return e.record.selectedGameMode
							})),
							m = function() {
								var e = null == r ? void 0 : r.findIndex((function(e) {
									return t.matchId === e.matchId
								}));
								e < r.length - 1 && (n(r[e + 1]), l(H({
									id: r[e + 1].matchId,
									gameTitle: c,
									gameMode: d
								})), Wt("ui_hilite"));
								var a = document.getElementsByClassName("matches_data")[0],
									i = document.getElementsByName(t.matchId)[0];
								e >= 6 && a.scrollTo(0, i.offsetHeight * e)
							},
							u = function() {
								var e = null == r ? void 0 : r.findIndex((function(e) {
									return t.matchId === e.matchId
								}));
								e > 0 && (n(r[e - 1]), l(H({
									id: r[e - 1].matchId,
									gameTitle: c,
									gameMode: d
								})), Wt("ui_hilite"));
								var a = document.getElementsByClassName("matches_data")[0],
									i = document.getElementsByName(t.matchId)[0];
								e < 6 ? a.scrollBy(0, s ? -130.66 : -65.33) : a.scrollTo(0, i.offsetHeight * e)
							};
						return xa(t, {
							up: u,
							down: m,
							shiftRight: function() {},
							shiftLeft: function() {}
						}), ka(1, {
							DOWN: m,
							UP: u,
							RTRIG: function() {},
							LTRIG: function() {}
						}), a.createElement(Po, null, a.createElement("div", {
							className: "recents"
						}, a.createElement("div", {
							className: "matches_header"
						}, a.createElement("div", null, kt[o].last10Matches), a.createElement("div", null)), a.createElement("div", {
							className: "matches_data"
						}, r && r.length > 0 ? null == r ? void 0 : r.map((function(e) {
							return a.createElement(Go, {
								key: null == e ? void 0 : e.matchId,
								active: (null == t ? void 0 : t.matchId) === (null == e ? void 0 : e.matchId),
								match: e,
								name: null == e ? void 0 : e.matchId,
								handleClick: function() {
									return n(t = e), l(H({
										id: t.matchId,
										gameTitle: c,
										gameMode: d
									})), void Wt("ui_hilite");
									var t
								}
							})
						})) : (0, Y.Z)(Array(1)).map((function() {
							return a.createElement(Zo, {
								key: "empty-list"
							})
						})))), a.createElement("div", {
							className: "border-box"
						}))
					},
					Ko = function(e) {
						var t, n, r, o, l, s, c, d, m, u, g, p, h, f, v, b, _, y, S, x, R, T, L, D, M, I, A, N, C, P, z, O = e.selectedMatch,
							j = e.hasData,
							B = (0, i.v9)((function(e) {
								return e.global.language
							})),
							G = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							Z = [{
								title: "".concat(kt[B].score),
								value: null != O && null !== (t = O.genericStats) && void 0 !== t && t.score || 0 === (null == O || null === (n = O.genericStats) || void 0 === n ? void 0 : n.score) ? Ct(null == O || null === (r = O.genericStats) || void 0 === r ? void 0 : r.score) : "--"
							}, {
								title: "".concat(kt[B].operatorKills),
								value: null != O && null !== (o = O.genericStats) && void 0 !== o && o.kills || 0 === (null == O || null === (l = O.genericStats) || void 0 === l ? void 0 : l.kills) ? Ct(null == O || null === (s = O.genericStats) || void 0 === s ? void 0 : s.kills) : "--"
							}, {
								title: "".concat(kt[B].damage),
								value: null != O && null !== (c = O.genericStats) && void 0 !== c && c.damageDone || 0 === (null == O || null === (d = O.genericStats) || void 0 === d ? void 0 : d.damageDone) ? Ct(null == O || null === (m = O.genericStats) || void 0 === m ? void 0 : m.damageDone) : "--"
							}, {
								title: "".concat(kt[B].cashSpent),
								value: null != O && null !== (u = O.genericStats) && void 0 !== u && u.cashSpent || 0 === (null == O || null === (g = O.genericStats) || void 0 === g ? void 0 : g.cashSpent) ? "".concat(Nt(null == O || null === (p = O.genericStats) || void 0 === p ? void 0 : p.cashSpent)) : "--"
							}, {
								title: "".concat(kt[B].aqSoldierKilled),
								value: null != O && null !== (h = O.genericStats) && void 0 !== h && h.aiAgentKills || 0 === (null == O || null === (f = O.genericStats) || void 0 === f ? void 0 : f.aiAgentKills) ? Ct(null == O || null === (v = O.genericStats) || void 0 === v ? void 0 : v.aiAgentKills) : "--"
							}],
							U = null != O && O.map ? "https://assets.callofduty.com/cdn/app/codp/iw9/map-load/loading_".concat(null == O ? void 0 : O.map, "_bg_1150x818.jpg") : "";
						return a.createElement(zo, {
							style: {
								backgroundImage: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.25) 27.19%, rgba(0, 0, 0, 0.25) 36.56%, #000000 66.76%), url(".concat(U, ")")
							}
						}, j ? a.createElement("div", {
							className: "match_header"
						}, a.createElement("div", null, a.createElement("img", {
							width: G ? "200px" : void 0,
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/icon_mode_".concat(k[null == O ? void 0 : O.mode], "_144x144.png")
						})), a.createElement("div", null, a.createElement("div", {
							className: "mode-name"
						}, null != O && O.mode ? (null == w || null === (b = w[B]) || void 0 === b ? void 0 : b[null == O ? void 0 : O.mode]) || (null == O ? void 0 : O.mode) : "--"), a.createElement("div", null, a.createElement("div", {
							className: "map-name"
						}, null != O && O.map ? (null == E || null === (_ = E[B]) || void 0 === _ ? void 0 : _[null == O ? void 0 : O.map]) || (null == O ? void 0 : O.map) : "--"), a.createElement("div", {
							className: "duration"
						}, "".concat(kt[B].duration, ":\n                                            ").concat(null != O && null !== (y = O.genericStats) && void 0 !== y && y.playerUtcConnectTimeSeconds && null != O && null !== (S = O.genericStats) && void 0 !== S && S.playerUtcDisconnectTimeSeconds ? Dt(null == O || null === (x = O.genericStats) || void 0 === x ? void 0 : x.playerUtcConnectTimeSeconds, null == O || null === (R = O.genericStats) || void 0 === R ? void 0 : R.playerUtcDisconnectTimeSeconds) : "--")))), a.createElement("div", {
							className: "right_header_wz"
						}, a.createElement("div", null, null != O && null !== (T = O.genericStats) && void 0 !== T && T.placement && -1 !== (null == O || null === (L = O.genericStats) || void 0 === L ? void 0 : L.placement) ? At(null == O || null === (D = O.genericStats) || void 0 === D ? void 0 : D.placement, kt[B].langCode) : "--"))) : a.createElement("div", {
							className: "no-data"
						}, a.createElement("div", {
							className: "no-data-message"
						}, kt[B].noMatchHistory)), a.createElement("div", {
							className: "match_stats-block"
						}, (null == O || null === (M = O.topWeapon) || void 0 === M ? void 0 : M.kills) && a.createElement("div", {
							className: "match_stats-block-weapon"
						}, a.createElement("div", null, a.createElement("div", null, a.createElement("div", {
							className: "tile-header"
						}, kt[B].topWeapon), j ? a.createElement("div", {
							className: "tile-value"
						}, (null == O || null === (I = O.topWeapon) || void 0 === I ? void 0 : I.label) || "--") : a.createElement("div", {
							className: "tile-value empty-text"
						}, "--")), a.createElement("div", null, a.createElement("div", null, a.createElement("div", {
							className: "tile-header"
						}, kt[B].kills), j ? a.createElement("div", {
							className: "tile-value"
						}, null == O || null === (A = O.topWeapon) || void 0 === A ? void 0 : A.kills) : a.createElement("div", {
							className: "tile-value empty-text"
						}, "--")), a.createElement("div", null, a.createElement("div", {
							className: "tile-header"
						}, kt[B].accuracy), j ? a.createElement("div", {
							className: "tile-value"
						}, null != O && null !== (N = O.topWeapon) && void 0 !== N && N.accuracy || 0 === (null == O || null === (C = O.topWeapon) || void 0 === C ? void 0 : C.accuracy) ? null == O || null === (P = O.topWeapon) || void 0 === P ? void 0 : P.accuracy : "--", "%") : a.createElement("div", {
							className: "tile-value empty-text"
						}, "--")))), j ? a.createElement("div", {
							style: {
								textAlign: "center"
							}
						}, a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/".concat(null == O || null === (z = O.topWeapon) || void 0 === z ? void 0 : z.imageIcon, "_").concat(G ? "522x232" : "410x112", ".png"),
							alt: ""
						})) : a.createElement("div", {
							className: "empty-background"
						})), a.createElement("div", {
							className: "match_stats-tiles"
						}, null == Z ? void 0 : Z.map((function(e) {
							return a.createElement("div", {
								key: e.title,
								className: "match_stats-tile"
							}, a.createElement("div", {
								className: "match_stats-tile--text tile-header"
							}, e.title), j ? a.createElement("div", {
								className: "match_stats-tile--number tile-value"
							}, e.value) : a.createElement("div", {
								className: "match_stats-tile--number tile-value empty-text"
							}, "--"))
						})))), a.createElement("div", {
							className: "border-box"
						}))
					},
					Ho = function(e) {
						var t = e.theadData,
							n = e.tbodyData,
							r = e.customClass;
						return a.createElement("table", {
							className: r
						}, a.createElement("thead", null, a.createElement("tr", null, t.map((function(e, t) {
							return a.createElement("td", {
								key: t,
								title: e
							}, e)
						})))), a.createElement("tbody", null, n.map((function(e, t) {
							return a.createElement("tr", {
								key: t,
								className: e.isCurrent ? "active-row" : ""
							}, e.items.map((function(e, t) {
								return a.createElement("td", {
									key: t
								}, e)
							})))
						}))))
					},
					Wo = function(e) {
						var t, n, r, o, l, s, c, d, m, u, g, p, h = e.selectedMatch,
							f = e.selectedKey,
							v = (0, i.v9)((function(e) {
								return e.global.language
							})),
							b = (0, i.v9)((function(e) {
								return e.record.matchStats
							})),
							y = _("user_id"),
							S = ["#", kt[v].name, kt[v].score, kt[v].kills, kt[v].damage],
							x = "https://assets.callofduty.com/cdn/app/codp/iw9/map-load/loading_".concat(null == h ? void 0 : h.map, "_bg_1150x818.jpg");
						return a.createElement(jo, {
							style: {
								backgroundImage: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.25) 27.19%, rgba(0, 0, 0, 0.25) 36.56%, #000000 66.76%), url(".concat(x, ")")
							}
						}, h && a.createElement(a.Fragment, null, a.createElement("div", {
							className: "match_header"
						}, a.createElement("div", {
							className: "left_header"
						}, a.createElement("div", null, a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/game-mode/icon_mode_".concat(k[null == h ? void 0 : h.mode], "_144x144.png")
						})), a.createElement("div", null, a.createElement("div", {
							className: "mode-name"
						}, null != h && h.mode ? (null == w || null === (t = w[v]) || void 0 === t ? void 0 : t[null == h ? void 0 : h.mode]) || (null == h ? void 0 : h.mode) : "--"), a.createElement("div", null, a.createElement("div", {
							className: "map-name"
						}, null != h && h.map ? (null == E || null === (n = E[v]) || void 0 === n ? void 0 : n[null == h ? void 0 : h.map]) || (null == h ? void 0 : h.map) : "--"), a.createElement("div", {
							className: "duration"
						}, "".concat(kt[v].duration, ":\n                                            ").concat(null != h && null !== (r = h.genericStats) && void 0 !== r && r.playerUtcConnectTimeSeconds && null != h && null !== (o = h.genericStats) && void 0 !== o && o.playerUtcDisconnectTimeSeconds ? Dt(null == h || null === (l = h.genericStats) || void 0 === l ? void 0 : l.playerUtcConnectTimeSeconds, null == h || null === (s = h.genericStats) || void 0 === s ? void 0 : s.playerUtcDisconnectTimeSeconds) : "--"))))), a.createElement("div", {
							className: "right_header_wz"
						}, a.createElement("div", null, null != h && null !== (c = h.genericStats) && void 0 !== c && c.placement && -1 !== (null == h || null === (d = h.genericStats) || void 0 === d ? void 0 : d.placement) ? At(null == h || null === (m = h.genericStats) || void 0 === m ? void 0 : m.placement, kt[v].langCode) : "--"))), a.createElement("div", {
							key: f,
							className: "wz2-tables-container"
						}, a.createElement(Ho, {
							theadData: S,
							tbodyData: (g = [], p = 0, null == b || null === (u = b.players) || void 0 === u || u.map((function(e) {
								g.push({
									id: e.unoId,
									items: [++p, e.username, e.score, e.kills, e.damage],
									isCurrent: e.unoId === y
								})
							})), g)
						}))), a.createElement("div", {
							className: "border-box"
						}))
					},
					qo = function(e) {
						var t = e.selectedMatch,
							n = e.setSelectedMatch,
							r = e.matches,
							o = e.hasData,
							l = (0, i.v9)((function(e) {
								return e.global.language
							})),
							s = (0, a.useState)(kt[l].matchSummary),
							c = (0, et.Z)(s, 2),
							d = c[0],
							m = c[1],
							u = [{
								title: kt[l].matchSummary
							}, {
								title: kt[l].scoreboard
							}],
							g = function() {
								d === kt[l].matchSummary && (m(kt[l].scoreboard), Wt("ui_radial_button_select"))
							};
						(0, a.useEffect)((function() {
							t || n(r && r[0])
						}), []);
						var p = function() {
							d === kt[l].scoreboard && (m(kt[l].matchSummary), Wt("ui_radial_button_select"))
						};
						return ka(1, {
							RIGHT: g,
							LEFT: p
						}), xa(d, {
							next: g,
							prev: p
						}), a.createElement(Oo, null, d === kt[l].matchSummary ? a.createElement(Ko, {
							selectedMatch: t,
							selectedKey: null == t ? void 0 : t.matchId,
							setSelectedMatch: n,
							hasData: o
						}) : a.createElement(Wo, {
							selectedKey: null == t ? void 0 : t.matchId,
							selectedMatch: t,
							hasData: o
						}), a.createElement("div", {
							className: "footer-tab-list"
						}, a.createElement(fa, {
							type: "DPAD_LEFT_RIGHT",
							width: 4,
							height: 4,
							marginLeft: .4,
							fill: "#e7e7e7"
						}), null == u ? void 0 : u.map((function(e) {
							return a.createElement("div", {
								key: e.title,
								onClick: function() {
									return m(e.title)
								},
								className: e.title === d ? "active-selection" : "inactive-selection"
							}, e.title)
						}))))
					},
					Fo = function() {
						var e = (0, i.v9)((function(e) {
								return e.record.recentMatches
							})),
							t = (0, i.v9)((function(e) {
								return e.record.recentMatchesError
							})),
							n = (0, i.v9)((function(e) {
								return e.record.recentMatchesLoaded
							})),
							r = (0, i.I0)(),
							o = (0, i.v9)((function(e) {
								return e.record.filterRecency
							})),
							l = So(o).loaded,
							s = (0, i.v9)((function(e) {
								return e.global.isCrossConfirm
							})),
							c = (0, i.v9)(D),
							d = (0, i.v9)((function(e) {
								return e.global.language
							})),
							m = (0, i.v9)((function(e) {
								return e.global.gameTitle
							})),
							u = (0, i.v9)((function(e) {
								return e.record.selectedGameMode
							})),
							g = null == e ? void 0 : e.matches,
							p = (0, i.v9)((function(e) {
								return e.record.wzData
							})),
							h = e && (null == g ? void 0 : g.length) > 0 && !t && n,
							f = (0, a.useState)(g && g[0]),
							v = (0, et.Z)(f, 2),
							b = v[0],
							_ = v[1],
							y = (0, i.v9)((function(e) {
								return e.record.selectedScreen
							})),
							E = (0, i.v9)((function(e) {
								return e.record.selectedType
							}));
						return (0, a.useEffect)((function() {
							var t, a, i, o;
							((null == p ? void 0 : p.matchesData) && (null == p || null === (t = p.matchesData[0]) || void 0 === t ? void 0 : t.matchId)) !== ((null == e ? void 0 : e.matches) && (null == e || null === (a = e.matches[0]) || void 0 === a ? void 0 : a.matchId)) && n && r(W({
								gameTitle: "wz2",
								gameMode: "wz"
							})), g && null !== (i = g[0]) && void 0 !== i && i.matchId && r(H({
								id: g && (null === (o = g[0]) || void 0 === o ? void 0 : o.matchId),
								gameTitle: m,
								gameMode: u
							}))
						}), [o, n]), xa(o, {
							close: function() {
								return va(r, y, E)
							}
						}), ka(1, {
							XBA_PSCROSS: !s && function() {
								return va(r, y, E)
							},
							XBB_PSCIRCLE: s && function() {
								return va(r, y, E)
							}
						}), a.createElement(a.Fragment, null, (!l || !n) && a.createElement(ar, null), a.createElement(er, null), a.createElement($a, null, a.createElement("div", null, kt[d].statusMessage)), a.createElement(Co, {
							isArabic: c
						}, n && a.createElement("div", {
							className: "screen-content"
						}, a.createElement(Uo, {
							data: g,
							selectedMatch: b,
							setSelectedMatch: _
						}), a.createElement("div", {
							className: "recents-right"
						}, a.createElement(qo, {
							selectedMatch: b,
							selectedKey: null == b ? void 0 : b.matchId,
							setSelectedMatch: _,
							hasData: h,
							matches: g
						})))))
					},
					Vo = function(e) {
						var t = e.className,
							n = e.children,
							r = e.title,
							i = e.icon,
							o = void 0 === i ? void 0 : i;
						return a.createElement("div", {
							className: t
						}, a.createElement("div", {
							className: "careers-sub-header"
						}, o, r), a.createElement("div", {
							className: "top-border-box"
						}), n, a.createElement("div", {
							className: "bottom-border-box"
						}))
					};
				var Yo, Qo, Xo, Jo, $o = se.ZP.section(Yo || (Yo = (0, me.Z)(["\n    width: 100%;\n    height: 100%;\n    .screen-content {\n        background-color: rgba(0, 0, 0, 0.6);\n    }\n    .careers {\n        &-sub-header {\n            font-size: 2rem;\n            font-weight: bold;\n            color: rgba(85, 85, 85, 0.7);\n            text-transform: uppercase;\n        }\n        &-sub-title {\n            font-size: 1.8rem;\n            color: #9aa39a;\n        }\n        &-sub-value {\n            font-size: 3.5rem;\n            font-weight: bold;\n            line-height: 4.3rem;\n            color: ", ";\n        }\n    }\n    .top-border-box {\n        padding: 0.6rem;\n        border: 0.2rem solid #555555;\n        border-bottom: 0;\n    }\n    .bottom-border-box {\n        padding: 0.6rem;\n        border: 0.2rem solid #555555;\n        border-top: 0;\n        width: 100%;\n    }\n    .screen-content {\n        margin: 0 9.6rem;\n        display: flex;\n    }\n\n    .careers-right {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					})),
					el = se.ZP.div(Qo || (Qo = (0, me.Z)(["\n    padding: 5rem 3rem 7rem 9.6rem;\n    width: 56.4rem;\n    height: 81.8rem;\n    .bottom-border-box {\n        width: 43.8rem !important;\n    }\n    .left-section {\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        & > div:nth-of-type(1) {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            margin-top: 4.2rem;\n\n            .rank-image {\n                height: 23.8rem;\n                margin-bottom: 1.2rem;\n            }\n            .rank-header {\n                font-size: 3.6rem;\n                font-weight: bold;\n                margin-bottom: 1.2rem;\n                color: #79c370;\n                text-transform: uppercase;\n            }\n            .rank-title {\n                margin-bottom: 1.2rem;\n                color: #9aa39a;\n                font-size: 3.2rem;\n            }\n            .rank-level {\n                text-transform: uppercase;\n                font-size: 4rem;\n                font-weight: bold;\n                color: #9aa39a;\n                margin-top: 4rem;\n            }\n        }\n        & > div:nth-of-type(2) {\n            display: flex;\n            flex-direction: column;\n            align-items: start;\n            margin: 0 auto;\n            margin-bottom: 5rem;\n\n            & > div:nth-of-type(1) {\n                font-weight: bold;\n                font-size: 2rem;\n                margin-bottom: 2rem;\n                color: #9aa39a;\n                border-bottom: 0.2rem solid #555555;\n            }\n            & > div:nth-of-type(2) {\n                display: flex;\n                flex-direction: row;\n                align-items: center;\n                & > div:nth-of-type(1) {\n                    width: 7.2rem;\n                    height: 7.2rem;\n                    background: blue;\n                    margin-right: 2rem;\n                }\n                & > div:nth-of-type(2) {\n                    width: 31rem;\n                    height: 7.8rem;\n                    background: blue;\n                }\n            }\n        }\n    }\n"]))),
					tl = se.ZP.div(Xo || (Xo = (0, me.Z)(["\n    height: 50%;\n\n    .bottom-right-section {\n        display: flex;\n        flex-direction: row;\n    }\n    .win-count,\n    .loss-count,\n    .kill-streak,\n    .highest-kills,\n    .highest-score {\n        padding: 0 2rem;\n        margin: 2rem 0;\n    }\n\n    .victory-defeat-section,\n    .personal-bests-section {\n        width: 48.5rem;\n        height: fit-content;\n        .bottom-border-box {\n            width: 48.5em;\n        }\n    }\n    .personal-bests-section {\n        margin-left: 2rem;\n\n        .bottom-border-box {\n            border: 0.2rem solid #d3a500;\n            border-top: 0;\n        }\n        .top-border-box {\n            border: 0.2rem solid #d3a500;\n            border-bottom: 0;\n        }\n    }\n    .victory-defeat-section {\n        .results-stats {\n            display: flex;\n        }\n    }\n    .bottom-right-section {\n        display: flex;\n        flex-direction: row;\n        height: 50%;\n    }\n    .results-stats {\n        justify-content: space-evenly;\n        .win-count > div:nth-of-type(1) {\n            background: #3ecced;\n            height: 0.4rem;\n            border-radius: 0.4rem;\n            width: 2.4rem;\n            margin-bottom: 1.4rem;\n        }\n        .loss-count > div:nth-of-type(1) {\n            border: #e7e7e7;\n            height: 0.4rem;\n            border-radius: 0.4rem;\n            width: 2.4rem;\n            margin-bottom: 1.4rem;\n        }\n        .win-count,\n        .loss-count {\n            padding: 0 4rem;\n            margin: 3rem 0;\n            display: flex;\n            flex-direction: column;\n        }\n    }\n    .personal-best-tiles {\n        padding-left: 0.1rem;\n        background-image: url('https://assets.callofduty.com/cdn/app/codp/iw9/background/personalbest_bkgd_trophy_482x287.png');\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: center;\n        .first-row {\n            display: flex;\n            justify-content: space-between;\n        }\n        .kill-streak,\n        .highest-score,\n        .highest-kills {\n            height: 10.5rem;\n            padding: 1rem 1.6rem;\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            border-left: 0.2rem solid #d3a500;\n            > div:nth-of-type(2) {\n                color: #d3a500;\n            }\n        }\n    }\n"]))),
					nl = se.ZP.div(Jo || (Jo = (0, me.Z)(["\n    display: flex;\n    flex-direction: column;\n    margin-top: 5rem;\n    .top-right-section {\n        display: flex;\n        flex-direction: row;\n        height: 46%;\n        position: relative;\n        margin-bottom: 2rem;\n    }\n    .matches-section {\n        width: 22.3rem;\n        .bottom-border-box {\n            width: 22.3rem;\n        }\n    }\n    .time-played,\n    .matches-played,\n    .kills-count,\n    .score-count {\n        padding: 0 2rem;\n        margin: 2rem 0;\n        border-left: 0.2rem solid #555555;\n    }\n    .ratios {\n        padding: 2rem;\n    }\n    .kill-death-ratios {\n        display: flex;\n    }\n    .kills-section {\n        width: 74.6rem;\n        margin-left: 2rem;\n        .bottom-border-box {\n            width: 74.6rem;\n        }\n        .kills-stats {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n        }\n        .kill-count,\n        .death-count {\n            padding: 0 4rem;\n            margin: 3rem 0;\n            display: flex;\n            flex-direction: column;\n        }\n        .kill-count > div:nth-of-type(1) {\n            background: #368947;\n            height: 0.4rem;\n            border-radius: 0.4rem;\n            width: 2.4rem;\n            margin-bottom: 1.4rem;\n        }\n        .death-count > div:nth-of-type(1) {\n            background: #e7e7e7;\n            height: 0.4rem;\n            border-radius: 0.4rem;\n            width: 2.4rem;\n            margin-bottom: 1.4rem;\n        }\n    }\n    .top-right-career {\n        height: 29.7rem;\n    }\n    .bottom-right-career {\n        height: 32rem;\n    }\n"])));
				const al = function(e) {
						var t, n, r, o, l, s, c, d, m, u, g, p, h, f, v, b, _, y = e.careerData,
							E = (0, i.v9)((function(e) {
								return e.global.language
							}));
						return a.createElement(tl, null, a.createElement("div", {
							className: "bottom-right-section"
						}, a.createElement(Vo, {
							className: "victory-defeat-section",
							title: kt[E].victoryDefeat
						}, a.createElement("div", {
							className: "results-stats bottom-right-career"
						}, a.createElement("div", {
							className: "ratios"
						}, a.createElement(gi, {
							ratioVal: null != y && null !== (t = y.genericStats) && void 0 !== t && t.winLossRatio || 0 === (null == y || null === (n = y.genericStats) || void 0 === n ? void 0 : n.winLossRatio) ? (100 * (null == y || null === (r = y.genericStats) || void 0 === r ? void 0 : r.winLossRatio) / 100).toFixed(2) : "--",
							fillVal: (null == y || null === (o = y.genericStats) || void 0 === o ? void 0 : o.wins) / ((null == y || null === (l = y.genericStats) || void 0 === l ? void 0 : l.wins) + (null == y || null === (s = y.genericStats) || void 0 === s ? void 0 : s.losses)),
							title: kt[E].winLossRatio,
							color: "#3ECCED"
						})), a.createElement("div", null, a.createElement("div", {
							className: "win-count"
						}, a.createElement("div", null), a.createElement("div", {
							className: "careers-sub-title"
						}, kt[E].wins), a.createElement("div", {
							className: "careers-sub-value"
						}, null == y || null === (c = y.genericStats) || void 0 === c ? void 0 : c.wins)), a.createElement("div", {
							className: "loss-count"
						}, a.createElement("div", null), a.createElement("div", {
							className: "careers-sub-title"
						}, kt[E].losses), a.createElement("div", {
							className: "careers-sub-value"
						}, null == y || null === (d = y.genericStats) || void 0 === d ? void 0 : d.losses))))), a.createElement(Vo, {
							className: "personal-bests-section",
							title: a.createElement("div", {
								style: {
									display: "inline-block",
									marginLeft: "1rem"
								}
							}, kt[E].personalBests),
							icon: a.createElement(Ii, {
								width: "1.4rem",
								fill: "#D3A500"
							})
						}, a.createElement("div", {
							className: "personal-best-tiles bottom-right-career"
						}, a.createElement("div", {
							className: "first-row"
						}, a.createElement("div", {
							className: "kill-streak"
						}, a.createElement("div", {
							className: "careers-sub-title"
						}, kt[E].highestKillStreak), a.createElement("div", {
							className: "careers-sub-value"
						}, null != y && null !== (m = y.genericStats) && void 0 !== m && m.highestKillStreak || 0 === (null == y || null === (u = y.genericStats) || void 0 === u ? void 0 : u.highestKillStreak) ? null == y || null === (g = y.genericStats) || void 0 === g ? void 0 : g.highestKillStreak : "--")), a.createElement("div", {
							className: "highest-score"
						}, a.createElement("div", {
							className: "careers-sub-title"
						}, kt[E].highestKillsPerGame), a.createElement("div", {
							className: "careers-sub-value"
						}, null != y && null !== (p = y.genericStats) && void 0 !== p && p.highestKillsPerGame || 0 === (null == y || null === (h = y.genericStats) || void 0 === h ? void 0 : h.highestKillsPerGame) ? null == y || null === (f = y.genericStats) || void 0 === f ? void 0 : f.highestKillsPerGame : "--"))), a.createElement("div", {
							className: "highest-kills"
						}, a.createElement("div", {
							className: "careers-sub-title"
						}, kt[E].highestScorePerGame), a.createElement("div", {
							className: "careers-sub-value"
						}, null != y && null !== (v = y.genericStats) && void 0 !== v && v.highestScorePerGame || 0 === (null == y || null === (b = y.genericStats) || void 0 === b ? void 0 : b.highestScorePerGame) ? null == y || null === (_ = y.genericStats) || void 0 === _ ? void 0 : _.highestScorePerGame : "--"))))))
					},
					rl = function(e) {
						var t, n, r, o, l, s, c, d, m, u, g, p, h, f, v, b, _, y, E, w, S, k, x, R, T = e.careerData,
							L = (0, i.v9)((function(e) {
								return e.global.language
							}));
						return a.createElement(nl, null, a.createElement("div", {
							className: "top-right-section"
						}, a.createElement(Vo, {
							className: "matches-section",
							title: "".concat(kt[L].bootsOnGround)
						}, a.createElement("div", {
							className: "top-right-career"
						}, a.createElement("div", {
							className: "time-played"
						}, a.createElement("div", {
							className: "careers-sub-title"
						}, kt[L].timePlayed), a.createElement("div", {
							className: "careers-sub-value"
						}, null != T && null !== (t = T.genericStats) && void 0 !== t && t.totalTimePlayed || 0 === (null == T || null === (n = T.genericStats) || void 0 === n ? void 0 : n.totalTimePlayed) ? Tt(null == T || null === (r = T.genericStats) || void 0 === r ? void 0 : r.totalTimePlayed) : "--")), a.createElement("div", {
							className: "matches-played"
						}, a.createElement("div", {
							className: "careers-sub-title"
						}, kt[L].matchesPlayed), a.createElement("div", {
							className: "careers-sub-value"
						}, null != T && null !== (o = T.genericStats) && void 0 !== o && o.totalGamesPlayed || 0 === (null == T || null === (l = T.genericStats) || void 0 === l ? void 0 : l.totalGamesPlayed) ? null == T || null === (s = T.genericStats) || void 0 === s ? void 0 : s.totalGamesPlayed : "--")))), a.createElement(Vo, {
							className: "kills-section",
							title: "".concat(kt[L].killOrBeKilled)
						}, a.createElement("div", {
							className: "kills-stats top-right-career"
						}, a.createElement("div", null, a.createElement("div", {
							className: "kills-count"
						}, a.createElement("div", {
							className: "careers-sub-title"
						}, kt[L].avgKillsPerGame), a.createElement("div", {
							className: "careers-sub-value"
						}, null != T && null !== (c = T.genericStats) && void 0 !== c && c.avgKillsPerGame || 0 === (null == T || null === (d = T.genericStats) || void 0 === d ? void 0 : d.avgKillsPerGame) ? null == T || null === (m = T.genericStats) || void 0 === m ? void 0 : m.avgKillsPerGame : "--")), a.createElement("div", {
							className: "score-count"
						}, a.createElement("div", {
							className: "careers-sub-title"
						}, kt[L].scorePerMinute), a.createElement("div", {
							className: "careers-sub-value"
						}, null != T && null !== (u = T.genericStats) && void 0 !== u && u.scorePerMinute || 0 === (null == T || null === (g = T.genericStats) || void 0 === g ? void 0 : g.scorePerMinute) ? (100 * (null == T || null === (p = T.genericStats) || void 0 === p ? void 0 : p.scorePerMinute) / 100).toFixed(2) : "--"))), a.createElement("div", {
							className: "kill-death-ratios"
						}, a.createElement("div", {
							className: "ratios"
						}, a.createElement(gi, {
							title: kt[L].killDeathRatio,
							ratioVal: null != T && null !== (h = T.genericStats) && void 0 !== h && h.killDeathRatio || 0 === (null == T || null === (f = T.genericStats) || void 0 === f ? void 0 : f.killDeathRatio) ? (100 * (null == T || null === (v = T.genericStats) || void 0 === v ? void 0 : v.killDeathRatio) / 100).toFixed(2) : "--",
							fillVal: (null == T || null === (b = T.genericStats) || void 0 === b ? void 0 : b.kills) / ((null == T || null === (_ = T.genericStats) || void 0 === _ ? void 0 : _.kills) + (null == T || null === (y = T.genericStats) || void 0 === y ? void 0 : y.deaths))
						})), a.createElement("div", null, a.createElement("div", {
							className: "kill-count"
						}, a.createElement("div", null), a.createElement("div", {
							className: "careers-sub-title"
						}, kt[L].kills), a.createElement("div", {
							className: "careers-sub-value"
						}, null != T && null !== (E = T.genericStats) && void 0 !== E && E.kills || 0 === (null == T || null === (w = T.genericStats) || void 0 === w ? void 0 : w.kills) ? null == T || null === (S = T.genericStats) || void 0 === S ? void 0 : S.kills : "--")), a.createElement("div", {
							className: "death-count"
						}, a.createElement("div", null), a.createElement("div", {
							className: "careers-sub-title"
						}, kt[L].deaths), a.createElement("div", {
							className: "careers-sub-value"
						}, null != T && null !== (k = T.genericStats) && void 0 !== k && k.deaths || 0 === (null == T || null === (x = T.genericStats) || void 0 === x ? void 0 : x.deaths) ? null == T || null === (R = T.genericStats) || void 0 === R ? void 0 : R.deaths : "--"))))))), a.createElement(al, {
							careerData: T
						}))
					},
					il = function() {
						var e, t, n, r, o, l, s, c, d, m, u, g, p = (0, i.v9)((function(e) {
								return e.global.language
							})),
							h = (0, i.v9)((function(e) {
								return e.record.crData
							})),
							f = (0, i.I0)(),
							v = (0, i.v9)((function(e) {
								return e.global.isCrossConfirm
							})),
							b = (0, i.v9)((function(e) {
								return e.record.selectedScreen
							})),
							_ = (0, i.v9)((function(e) {
								return e.record.selectedTab
							})),
							y = (0, i.v9)((function(e) {
								return e.record.selectedType
							}));
						(0, a.useEffect)((function() {}), []), ka(1, {
							XBA_PSCROSS: !v && function() {
								return va(f, b, y, _)
							},
							XBB_PSCIRCLE: v && function() {
								return va(f, b, y, _)
							}
						}), xa(y, {
							close: function() {
								return va(f, b, y, _)
							}
						});
						var E = null != h && null !== (e = h.genericStats) && void 0 !== e && e.prestige ? (null == h || null === (t = h.genericStats) || void 0 === t ? void 0 : t.prestige).toString().padStart(2, "0") : "--",
							w = null != h && null !== (n = h.genericStats) && void 0 !== n && n.level ? (null == h || null === (r = h.genericStats) || void 0 === r ? void 0 : r.level).toString().padStart(2, "0") : "--";
						return a.createElement(a.Fragment, null, a.createElement(er, null), a.createElement($a, null, a.createElement("div", null, kt[p].statusMessage)), a.createElement($o, null, a.createElement("div", {
							className: "screen-content"
						}, a.createElement(el, null, a.createElement("div", {
							className: "careers-sub-header"
						}, a.createElement("div", {
							style: {
								display: "inline-block",
								marginRight: "1rem"
							}
						}, a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/logo/icon_branding_mwii_watermark_med.png"
						})), a.createElement("div", {
							style: {
								display: "inline-block"
							}
						}, kt[p].progression)), a.createElement("div", {
							className: "top-border-box"
						}), a.createElement("div", {
							className: "left-section"
						}, null != h && null !== (o = h.genericStats) && void 0 !== o && o.prestige ? a.createElement("div", null, a.createElement("div", {
							className: "rank-header"
						}, "Prestige ".concat(E || 0 === E ? E : "--")), a.createElement("div", {
							className: "rank-image"
						}, a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/rank/icon_rank_prestige_".concat(E, "_221x221.png")
						})), a.createElement("div", {
							className: "rank-level"
						}, "LEVEL ".concat(null != h && null !== (l = h.genericStats) && void 0 !== l && l.level || 0 === (null == h || null === (s = h.genericStats) || void 0 === s ? void 0 : s.level) ? null == h || null === (c = h.genericStats) || void 0 === c ? void 0 : c.level : "--"))) : a.createElement("div", null, a.createElement("div", {
							className: "rank-header"
						}, "Level", " ", null != h && null !== (d = h.genericStats) && void 0 !== d && d.level || 0 === (null == h || null === (m = h.genericStats) || void 0 === m ? void 0 : m.level) ? null == h || null === (u = h.genericStats) || void 0 === u ? void 0 : u.level : "--"), a.createElement("div", {
							className: "rank-title"
						}, (null == h || null === (g = h.genericstats) || void 0 === g ? void 0 : g.title) || "--"), a.createElement("div", {
							className: "rank-image"
						}, a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/rank/icon_rank_".concat(w, "_221x221.png")
						})))), a.createElement("div", {
							className: "bottom-border-box"
						})), a.createElement(rl, {
							careerData: h
						}))))
					},
					ol = function(e) {
						var t = e.totalKills,
							n = e.kills,
							r = e.first,
							o = e.maxValue,
							l = (0, i.v9)((function(e) {
								return e.global.language
							})),
							s = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							c = s ? 472 : 236,
							d = s ? 960 : 480,
							m = s ? 200 : 100,
							u = t,
							g = function(e) {
								return String(Math.round(e)).length > 3
							},
							p = function() {
								for (var e = 0; e < 5; e++) {
									var t = e + Math.ceil(o / .95);
									if (t % 5 == 0) return t
								}
							}(),
							h = Array.from({
								length: 6
							}, (function(e, t) {
								return t
							})).map((function(e) {
								return g(p / 5 * e) ? "".concat((p / 1e3 * e / 5).toFixed(1), "k") : Math.round(p * e / 5)
							})),
							f = (0, ui.BYU)().domain([0, 500]).range([0, d]);
						return a.createElement("div", {
							style: {
								backgroundColor: "#191919",
								width: c,
								height: d,
								position: "absolute",
								bottom: 0
							}
						}, a.createElement("svg", {
							width: c,
							height: d,
							fill: "#191919"
						}, f.ticks(5).map((function(e, t) {
							return a.createElement("g", {
								key: e,
								className: "tick"
							}, a.createElement("line", {
								stroke: "#5e5e5e",
								strokeDasharray: 0 !== t ? "5,5" : "0",
								transform: 0 === e ? "translate(0, ".concat(s ? 1e3 : 492, ")") : "translate(0,".concat(s ? 160 * t : 80 * t, ")"),
								x2: c
							}), r && a.createElement("text", {
								fill: "#9ca49c",
								y: s ? d - 160 * t - 5 : d - 80 * t - 5,
								x: s ? 8 : 4,
								style: {
									fontSize: "".concat(s ? 24 : 12),
									background: "red",
									zIndex: "111"
								}
							}, h[t]))
						})), a.createElement("g", {
							transform: "translate(".concat(c / 2 - m / 2, ",0)")
						}, a.createElement("svg", {
							width: m
						}, t && n && a.createElement("rect", {
							fill: "#191919",
							width: m,
							height: s ? t / p * 800 : t / p * 400,
							y: s ? d - t / p * 800 : d - t / p * 400
						}), t && n && a.createElement("rect", {
							fill: "#79c370",
							width: m,
							height: s ? n / p * 800 : n / p * 400,
							y: s ? d - n / p * 800 : d - n / p * 400
						}), t && n && Array.from({
							length: s ? 40 : 30
						}, (function(e, t) {
							return t
						})).map((function(e) {
							return a.createElement("line", {
								key: e,
								transform: "translate(0, ".concat(t > 0 ? s ? d - t / p * 798 : d - t / p * 399 : s ? d - 798 : d - 399, ")"),
								x1: m - 13 * (e + 1),
								x2: m + 5,
								y2: s ? 36 * (e + 1) : 18 * (e + 1),
								stroke: "#999999",
								style: {
									opacity: "60%"
								}
							})
						})), t && n && a.createElement("rect", {
							fill: "#79c370",
							width: m,
							height: s ? 8 : 4,
							y: s ? d - n / p * 800 : d - n / p * 400
						}), t && n && a.createElement("rect", {
							fill: "#fff",
							width: m,
							height: s ? 8 : 4,
							y: t > 0 ? s ? d - t / p * 800 : d - t / p * 400 : s ? d - 800 : d - 400
						}), a.createElement("g", {
							transform: "translate(".concat(m / 2, ",\n                            ").concat(s ? d - t / p * 800 - 15 : d - t / p * 400 - 15, ")")
						}, a.createElement("text", {
							fill: "#e7e7e7",
							y: s ? -40 : -20,
							textAnchor: "middle",
							style: {
								fontSize: "".concat(s ? 52 : 28)
							}
						}, g(t) ? t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : u), a.createElement("text", {
							fill: "#9aa39a",
							textAnchor: "middle",
							style: {
								fontSize: "".concat(s ? 32 : 18)
							}
						}, kt[l].totalKills)))), a.createElement("g", {
							transform: "translate(".concat(m + 100, ",\n              ").concat(s ? d - n / p * 800 + 24 : d - n / p * 400 + 24, ")")
						}, a.createElement("text", {
							fill: "#79c370",
							y: -28,
							x: s ? 60 : 0,
							textAnchor: "middle",
							style: {
								fontSize: "".concat(s ? 32 : 18),
								fontWeight: 500
							}
						}, g(n) ? "".concat((n / 1e3).toFixed(1), "k") : n))))
					};
				var ll, sl, cl, dl, ml = se.ZP.div(ll || (ll = (0, me.Z)(["\n    .border-box {\n        width: 172.8rem;\n        height: 1.1rem;\n        margin: 0 9.4rem;\n        border-bottom: 0.1rem solid #555555;\n        border-left: 0.1rem solid #555555;\n        border-right: 0.1rem solid #555555;\n    }\n    .footer-section {\n        display: flex;\n    }\n    .footer-tab-list {\n        width: 69.5rem;\n        height: 5.5rem;\n        clip-path: polygon(0 0, 100% 0, 88% 100%, 13% 100%);\n        background: rgba(59, 59, 58, 0.25);\n        text-transform: uppercase;\n        margin: 0 auto;\n        text-align: center;\n        justify-content: center;\n        display: flex;\n        gap: 1.3rem;\n        align-items: center;\n        > div {\n            font-size: 2rem;\n            cursor: pointer;\n            :hover {\n                opacity: 1;\n            }\n        }\n        .inactive-selection {\n            text-decoration: none;\n            color: ", ";\n            opacity: 0.2;\n        }\n        .active-selection {\n            color: #fff;\n            text-decoration: underline;\n            text-underline-offset: 0.4rem;\n            opacity: 1;\n        }\n    }\n    .kills-filter {\n        display: flex;\n        gap: 1rem;\n        padding-right: 10rem;\n        position: relative;\n        float: right;\n        bottom: 3rem;\n        div {\n            color: #555555;\n            text-transform: uppercase;\n            font-size: 1.8rem;\n            cursor: pointer;\n            display: flex;\n            gap: 1rem;\n        }\n        div.active {\n            text-decoration: underline;\n            text-underline-offset: 0.4rem;\n            color: ", ";\n        }\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					})),
					ul = se.ZP.section(sl || (sl = (0, me.Z)(["\n    display: flex;\n    justify-content: center;\n    height: 81.8rem;\n"]))),
					gl = se.ZP.div(cl || (cl = (0, me.Z)(["\n    width: 23.6rem;\n\n    &:not(:first-child) {\n        margin-left: 0.8rem;\n    }\n\n    .type {\n        font-size: 2rem;\n        background: #2d2e2e;\n        text-transform: uppercase;\n        display: flex;\n        align-items: end;\n        justify-content: center;\n        height: 5rem;\n        padding: 1.2rem;\n        color: ", ";\n    }\n\n    .bar-container {\n        background: #191919;\n        padding-top: 1.2rem;\n        height: 49.6rem;\n        position: relative;\n    }\n\n    .overview {\n        height: 27.7rem;\n        background: #2d2e2e;\n        padding: 2rem 1.6rem;\n        line-height: 1;\n\n        div:nth-of-type(1) {\n            color: #9aa39a;\n            font-size: 1.8rem;\n            margin-bottom: 0.8rem;\n        }\n\n        div:nth-of-type(2) {\n            color: ", ";\n            font-size: 2.8rem;\n            margin-bottom: 0.8rem;\n            text-transform: uppercase;\n        }\n\n        div:nth-of-type(3) {\n            height: 10.8rem;\n            display: flex;\n            align-items: center;\n        }\n        .empty-weapon-icon {\n            opacity: 20%;\n            height: 10.8rem;\n            display: flex;\n            align-items: center;\n        }\n\n        .kills-block {\n            margin-top: 1rem;\n            padding-left: 0.8rem;\n            border-left: 0.2rem solid ", ";\n\n            div:nth-of-type(1) {\n                color: ", ";\n                margin-bottom: 0.4rem;\n                font-size: 1.8rem;\n            }\n\n            div:nth-of-type(2) {\n                color: ", ";\n                font-size: 2.8rem;\n            }\n        }\n        .empty-kills-block {\n            border-left: 0.2rem solid ", ";\n        }\n    }\n    .no-weapons-section {\n        background: #191919;\n        position: absolute;\n        bottom: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: #9aa39a;\n        font-size: 1.8rem;\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.primaryGreen
					}), (function(e) {
						return e.theme.colors.neutralLightAlt
					}), (function(e) {
						return e.theme.colors.primaryGreen
					}), (function(e) {
						return e.theme.colors.neutralLightAlt
					})),
					pl = se.ZP.div(dl || (dl = (0, me.Z)(["\n    width: 23.6rem;\n    background: #141313;\n    &:not(:first-child) {\n        margin-left: 0.8rem;\n    }\n\n    .type {\n        font-size: 2rem;\n        text-transform: uppercase;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 1.2rem;\n        height: 5rem;\n        color: #3b3b3a;\n    }\n\n    .bar-container {\n        padding-top: 1.2rem;\n        height: 49.6rem;\n        position: relative;\n    }\n\n    .overview {\n        height: 27.7rem;\n        padding: 2rem 1.6rem;\n        line-height: 1;\n\n        div:nth-of-type(1) {\n            color: #9aa39a;\n            font-size: 1.8rem;\n            margin-bottom: 0.8rem;\n        }\n\n        div:nth-of-type(2) {\n            color: ", ";\n            font-size: 2.8rem;\n            margin-bottom: 0.8rem;\n            text-transform: uppercase;\n        }\n\n        div:nth-of-type(3) {\n            height: 10.8rem;\n        }\n        .empty-weapon-icon {\n            opacity: 20%;\n            height: 10.8rem;\n            display: flex;\n            align-items: center;\n        }\n\n        .kills-block {\n            margin-top: 1rem;\n            padding-left: 0.8rem;\n            border-left: 0.2rem solid ", ";\n\n            div:nth-of-type(1) {\n                color: ", ";\n                margin-bottom: 0.4rem;\n                font-size: 1.8rem;\n            }\n\n            div:nth-of-type(2) {\n                color: ", ";\n                font-size: 2.8rem;\n            }\n        }\n        .empty-kills-block {\n            border-left: 0.2rem solid ", ";\n        }\n    }\n    .no-weapons-section {\n        img {\n            position: absolute;\n            bottom: 0;\n        }\n        .no-weapons-container {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n        position: absolute;\n        bottom: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: #9aa39a;\n        font-size: 1.8rem;\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.primaryGreen
					}), (function(e) {
						return e.theme.colors.neutralLightAlt
					}), (function(e) {
						return e.theme.colors.primaryGreen
					}), (function(e) {
						return e.theme.colors.neutralLightAlt
					}));
				const hl = function() {
					var e = (0, i.v9)((function(e) {
							return e.global.language
						})),
						t = (0, i.v9)((function(e) {
							return e.global.is4k
						})),
						n = t ? 472 : 236,
						r = t ? 960 : 480;
					return a.createElement("div", {
						className: "no-weapons-section",
						style: {
							width: n,
							height: r
						}
					}, a.createElement("div", {
						className: "no-weapons-container"
					}, a.createElement("div", null, kt[e].noWeaponClassHistory), a.createElement("img", {
						style: {
							top: t ? "30%" : "21%"
						},
						width: t ? "230px" : "166px",
						src: "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/no-weapon-class-icon_100x168.png"
					})))
				};

				function fl(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var a = Object.getOwnPropertySymbols(e);
						t && (a = a.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, a)
					}
					return n
				}

				function vl(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? fl(Object(n), !0).forEach((function(t) {
							(0, N.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fl(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}
				const bl = function(e) {
						var t = e.data,
							n = e.first,
							r = e.maxValue,
							o = e.killsSelection,
							l = (0, i.v9)((function(e) {
								return e.global.language
							})),
							s = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							c = t.topWeaponName,
							d = t.totalKillsByWeaponClass,
							m = t.topWeaponkills,
							u = t.title,
							g = t.defaultImage,
							p = (0, i.v9)((function(e) {
								return e.global.gameTitle
							})),
							h = (0, i.v9)((function(e) {
								return e.record.selectedGameMode
							})),
							f = (0, i.v9)((function(e) {
								if ("mw2" === p) return e.record.crData;
								if ("wz2" === p) {
									if ("br" === h) return e.record.wzData;
									if ("resurgence" === h) return e.record.resurgenceData;
									if ("plunder" === h) return e.record.plunderData;
									if ("dmz" === h) return e.record.dmzData
								}
							})),
							v = function() {
								return "mw2" === p ? kt[l].kills : "wz2" === p ? "dmz" === h ? "kills" === o ? kt[l].kills : kt[l].aqSoldierKills : kt[l].operatorKills : void 0
							},
							b = null == f ? void 0 : f.weaponStats,
							_ = c && function(e, t, n, a) {
								var r = null == e ? void 0 : e.find((function(e) {
									return e.label === t
								}));
								if (null != r && r.hudImage) return "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/".concat(null == r ? void 0 : r.hudImage, a ? "_410x112.png" : "_196x108.png");
								var i = null == e ? void 0 : e.find((function(e) {
									return e.classLabel === n.name
								}));
								return null != i && i.hudImage ? "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/".concat(null == i ? void 0 : i.hudImage, a ? "_410x112.png" : "_196x108.png") : void 0
							}(b, c, t, s);
						return a.createElement(a.Fragment, null, c && d && m ? a.createElement(gl, null, a.createElement("div", {
							className: "type"
						}, u), a.createElement("div", {
							className: "bar-container"
						}, a.createElement(ol, {
							totalKills: d,
							kills: m,
							first: n,
							maxValue: r
						})), a.createElement("div", {
							className: "overview"
						}, a.createElement("div", null, kt[l].topWeapon), a.createElement("div", null, c || "--"), a.createElement("div", null, a.createElement("img", {
							src: _
						})), a.createElement("div", {
							className: "kills-block"
						}, a.createElement("div", null, " ", v()), a.createElement("div", null, m || 0)))) : a.createElement(pl, null, a.createElement("div", null, a.createElement("div", {
							className: "type"
						}, u), a.createElement("div", {
							className: "bar-container"
						}, a.createElement(hl, null)), a.createElement("div", {
							className: "overview"
						}, a.createElement("div", {
							className: "empty-text"
						}, kt[l].topWeapon), a.createElement("div", {
							className: "empty-text"
						}, "--"), a.createElement("div", {
							className: "empty-weapon-icon"
						}, a.createElement("img", {
							src: g
						})), a.createElement("div", {
							className: "kills-block empty-kills-block"
						}, a.createElement("div", {
							className: "empty-text"
						}, v()), a.createElement("div", {
							className: "empty-text"
						}, "--"))))))
					},
					_l = function(e) {
						var t, n, r = e.closeFromScreen,
							o = e.data,
							l = (0, i.v9)((function(e) {
								return e.global.language
							})),
							s = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							c = (0, a.useState)(0),
							d = (0, et.Z)(c, 2),
							m = d[0],
							u = d[1],
							g = (0, a.useState)("kills"),
							p = (0, et.Z)(g, 2),
							h = p[0],
							f = p[1],
							v = [{
								title: kt[l].primaries
							}, {
								title: kt[l].secondaries
							}],
							b = (0, i.v9)((function(e) {
								return e.global.isCrossConfirm
							})),
							_ = (0, a.useState)(null == o ? void 0 : o.weaponClassStats),
							y = (0, et.Z)(_, 2),
							E = y[0],
							w = y[1],
							S = (0, i.v9)((function(e) {
								return e.global.gameTitle
							}));
						(0, a.useEffect)((function() {
							w("aiAgentKills" === h ? null == o ? void 0 : o.weaponClassAiStats : null == o ? void 0 : o.weaponClassStats)
						}), [h, o]);
						var k = function() {
								0 === m && (u(1), Wt("ui_radial_button_select"))
							},
							x = function() {
								1 === m && (u(0), Wt("ui_radial_button_select"))
							},
							R = function() {
								Wt("ui_hilite_tab"), "kills" === h && f("aiAgentKills"), "aiAgentKills" === h && f("kills")
							};
						xa(h, {
							next: k,
							prev: x,
							shiftRight: R
						}), ka(1, {
							RTRIG: R,
							XBA_PSCROSS: !b && r,
							XBB_PSCIRCLE: b && r,
							RIGHT: k,
							LEFT: x
						});
						var T = o && E && Math.max.apply(Math, (0, Y.Z)(E.map((function(e) {
							return e.totalKillsByWeaponClass ? e.totalKillsByWeaponClass : 0
						}))));
						return a.createElement(ml, null, 0 === m ? a.createElement(ul, null, null === (t = function(e, t, n) {
							var a = n ? "410x112" : "196x108",
								r = [{
									name: "assault",
									title: kt[t].assaultRifles,
									order: 0,
									defaultImage: "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/hud_icon_weapon_ar_mike4_".concat(a, ".png")
								}, {
									name: "smg",
									title: kt[t].smgs,
									order: 1,
									defaultImage: "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/hud_icon_weapon_sm_mpapa5_".concat(a, ".png")
								}, {
									name: "lmg",
									title: kt[t].lmgs,
									order: 2,
									defaultImage: "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/hud_icon_weapon_lm_kilo21_".concat(a, ".png")
								}, {
									name: "shotgun",
									title: kt[t].shotguns,
									order: 3,
									defaultImage: "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/hud_icon_weapon_sh_mbravo_".concat(a, ".png")
								}, {
									name: "sniper",
									title: kt[t].sniperRifles,
									order: 4,
									defaultImage: "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/hud_icon_weapon_sn_alpha50_".concat(a, ".png")
								}, {
									name: "dmr",
									title: kt[t].marksmanRifles,
									order: 5,
									defaultImage: "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/hud_icon_weapon_dm_sbeta_".concat(a, ".png")
								}, {
									name: "battle",
									title: kt[t].battleRifles,
									order: 6,
									defaultImage: "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/hud_icon_weapon_br_soscar14_".concat(a, ".png")
								}],
								i = e && e.filter((function(e) {
									return "primary" === e.classType
								}));
							return r.map((function(e) {
								return vl(vl({}, null == i ? void 0 : i.find((function(t) {
									return t.name === e.name && t.order === e.order && t
								}))), e)
							}))
						}(E, l, s)) || void 0 === t ? void 0 : t.map((function(e, t) {
							return a.createElement(bl, {
								key: e.name,
								data: e,
								maxValue: T,
								first: 0 === t,
								killsSelection: h
							})
						}))) : a.createElement(ul, null, null === (n = function(e, t, n) {
							var a = n ? "410x112" : "196x108",
								r = [{
									name: "pistol",
									title: kt[t].handGuns,
									order: 0,
									defaultImage: "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/hud_icon_weapon_pi_golf17_".concat(a, ".png")
								}, {
									name: "melee",
									title: kt[t].melee,
									order: 1,
									defaultImage: "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/hud_icon_weapon_me_knife_".concat(a, ".png")
								}, {
									name: "projectile",
									title: kt[t].launchers,
									order: 2,
									defaultImage: "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/hud_icon_weapon_la_rpapa7_".concat(a, ".png")
								}],
								i = e && e.filter((function(e) {
									return "secondary" === e.classType
								}));
							return r.map((function(e) {
								return vl(vl({}, null == i ? void 0 : i.find((function(t) {
									return t.name === e.name && t.order === e.order && t
								}))), e)
							}))
						}(E, l, s)) || void 0 === n ? void 0 : n.map((function(e, t) {
							return a.createElement(bl, {
								key: e.name,
								data: e,
								maxValue: T,
								first: 0 === t,
								killsSelection: h
							})
						}))), a.createElement("div", {
							className: "border-box"
						}), a.createElement("div", {
							className: "footer-section"
						}, a.createElement("div", {
							className: "footer-tab-list"
						}, a.createElement(fa, {
							type: "DPAD_LEFT_RIGHT",
							width: 4,
							height: 4,
							marginLeft: .4,
							fill: "#e7e7e7"
						}), null == v ? void 0 : v.map((function(e, t) {
							return a.createElement("div", {
								key: e.title,
								onClick: function() {
									u(t), Wt("ui_radial_button_select")
								},
								className: t === m ? "active-selection" : "inactive-selection"
							}, e.title)
						})))), "dmz" === S && a.createElement("div", {
							className: "kills-filter"
						}, a.createElement("div", null, a.createElement(fa, {
							type: "RT_R2",
							width: 3,
							height: 2,
							fill: "#e7e7e7"
						})), a.createElement("div", {
							onClick: function() {
								return f("kills")
							},
							className: "kills" === h ? "active" : ""
						}, kt[l].operatorKills), a.createElement("div", {
							onClick: function() {
								return f("aiAgentKills")
							},
							className: "aiAgentKills" === h ? "active" : ""
						}, kt[l].aqSoldierKills)))
					};
				var yl, El, wl, Sl = se.ZP.section(yl || (yl = (0, me.Z)(["\n    display: flex;\n    height: 81.8rem;\n    margin: 0 9.6rem;\n\n    .empty-background {\n        background: #3b3b3a !important;\n    }\n    .empty-text {\n        color: #9aa39a !important;\n    }\n"]))),
					kl = se.ZP.section(El || (El = (0, me.Z)(["\n    width: 56.5rem;\n    position: relative;\n\n    .border-box {\n        position: absolute;\n        width: 56rem;\n        height: 1.4rem;\n        bottom: 0.3rem;\n        border-bottom: 0.1rem solid rgb(85, 85, 85);\n        border-left: 0.1rem solid rgb(85, 85, 85);\n        border-right: 0.1rem solid rgb(85, 85, 85);\n    }\n\n    .list_header {\n        padding: 1rem;\n        border-bottom: 0.1rem solid #555;\n        color: ", ";\n        font-size: 3rem;\n        direction: ltr;\n        margin-bottom: 1rem;\n        .sub-header {\n            font-size: 3.6rem;\n            font-weight: bold;\n            text-transform: uppercase;\n        }\n    }\n\n    .loadout-data {\n        overflow-y: scroll;\n        height: 67.6rem;\n        scroll-behavior: smooth;\n        direction: rtl;\n        padding-left: 2rem;\n        margin-right: 2rem;\n        &::-webkit-scrollbar {\n            width: 0.2rem;\n            background: transparent;\n        }\n        &::-webkit-scrollbar-track {\n            background-clip: content-box;\n        }\n        &::-webkit-scrollbar-thumb {\n            background-clip: padding-box;\n            background: #e7e7e7;\n            min-height: 1.6rem;\n        }\n    }\n    .list-data-item {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        text-transform: uppercase;\n        padding: 0.8rem 1.6rem 0.8rem 2.4rem;\n        color: ", ";\n        background: #000000;\n        margin-bottom: 1rem;\n        font-size: 1.8rem;\n        direction: ltr;\n        border: 0.2rem solid rgba(85, 85, 85, 0.4);\n\n        &:hover {\n            border: 0.2rem solid #e7e7e7;\n        }\n    }\n    .empty-list-data-item {\n        color: #9aa39a;\n        border: 0.2rem solid #555;\n    }\n    .list-item-details {\n        width: 18rem;\n    }\n    .list-item-score {\n        width: 5rem;\n        text-align: right;\n    }\n    .list-data-item.active {\n        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), #79c370;\n        color: #000000;\n        border: none;\n    }\n    .list-item-icon {\n        height: 2.4rem;\n        width: 2.4rem;\n    }\n    .list-item-image {\n        width: 10.8rem;\n        height: 5.4rem;\n    }\n    .list-item-image-empty {\n        width: 12.3rem;\n        height: 5.4rem;\n    }\n    progress {\n        text-align: center;\n        color: ", ";\n        border-radius: 0;\n        height: 0.4rem;\n    }\n    .empty-sort-section {\n        .down-arrow {\n            background: #555555 !important;\n        }\n        .active {\n            color: #555555 !important;\n        }\n    }\n    .inactive-button {\n        opacity: 20%;\n    }\n    .sort-section {\n        display: flex;\n        justify-content: space-between;\n        gap: 1rem;\n        padding: 1rem 0;\n        .sort-options {\n            color: ", ";\n            text-transform: uppercase;\n            font-size: 1.8rem;\n            font-family: 'DIN Next LT Pro';\n            cursor: pointer;\n            display: flex;\n            gap: 1rem;\n            > div {\n                opacity: 20%;\n                display: flex;\n                gap: 1rem;\n                :hover {\n                    opacity: 100%;\n                }\n                &.active {\n                    text-decoration: underline;\n                    text-underline-offset: 0.4rem;\n                    opacity: 100%;\n                }\n            }\n        }\n        .down-arrow {\n            clip-path: polygon(100% 0, 0% 100%, 100% 100%);\n            width: 1.3rem;\n            height: 1.4rem;\n            background: #79c370;\n        }\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					})),
					xl = se.ZP.div(wl || (wl = (0, me.Z)(["\n    width: 114.4rem;\n    height: 77.8rem;\n    background-repeat: no-repeat !important;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    margin: 3.5rem 0 3.5rem 4rem;\n\n    .border-box {\n        position: absolute;\n        bottom: 0;\n        width: 112.4rem;\n        height: 1.3rem;\n        border-bottom: 0.1rem solid rgb(85, 85, 85);\n        border-left: 0.1rem solid rgb(85, 85, 85);\n        border-right: 0.1rem solid rgb(85, 85, 85);\n    }\n\n    &.weapons-bg {\n        background-size: auto !important;\n    }\n    &.weapons-4k-bg {\n        background-size: contain !important;\n    }\n    &.loadouts-bg {\n        background-size: cover !important;\n    }\n    .details_header {\n        margin: 3.5rem 4rem;\n        align-items: center;\n        padding-left: 4rem;\n        height: 17.5rem;\n        border-left: 0.4rem solid #79c370;\n        .main-title {\n            font-size: 7rem;\n            text-transform: uppercase;\n            font-weight: bold;\n            color: ", ";\n        }\n        .sub-title {\n            padding: 0.3rem 0.6rem 0 0.6rem;\n            text-transform: uppercase;\n            color: #3b3b3a;\n            background: #9aa39a;\n            font-size: 1.8rem;\n            width: fit-content;\n        }\n    }\n    .no-data {\n        margin: 3.5rem 4rem;\n        height: 62rem;\n        display: flex;\n        align-items: center;\n        color: #9aa39a;\n        font-size: 2.4rem;\n        .no-data-message {\n            margin: 0 auto;\n        }\n    }\n    .weapon-image {\n        height: 64rem;\n        margin-top: -14rem;\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: 89.3rem;\n    }\n    .stats-tiles {\n        margin: 0 4rem;\n        display: flex;\n        position: absolute;\n        bottom: 4rem;\n        width: 100%;\n\n        .stats-tile {\n            height: 10.5rem;\n            width: 16.1rem;\n            padding: 1rem 1.6rem;\n            background: rgba(231, 231, 231, 0.1);\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0% 50%);\n            border-left: 0.2rem solid #e7e7e7;\n            &.stats-tile-headshot {\n                width: 24.1rem;\n                clip-path: polygon(0px 0px, 100% 0px, 100% 90%, 94% 100%, 0px 100%, 0% 50%);\n            }\n        }\n\n        .stats-tile-section {\n            display: flex;\n            align-items: flex-end;\n            margin-right: 2rem;\n        }\n        .active-tile {\n            margin: 0;\n        }\n        .active-stats-tile {\n            clip-path: polygon(100% 0%, 0% 100%, 100% 100%);\n            width: 2rem;\n            height: 2rem;\n            background: #79c370;\n            position: relative;\n            right: 2rem;\n            &.empty-tile-arrow {\n                background: #555;\n            }\n        }\n        .stats-tile-header {\n            font-size: 1.8rem;\n            line-height: 2.2rem;\n            color: #9aa39a;\n        }\n        .stats-tile-value {\n            font-weight: bold;\n            font-size: 3.6rem;\n            line-height: 4.3rem;\n            text-overflow: ellipsis;\n            white-space: pre;\n            overflow: hidden;\n            color: ", ";\n        }\n    }\n    .killstreak-message {\n        font-style: italic;\n        color: #494949;\n        position: absolute;\n        bottom: 1rem;\n        font-size: 1.8rem;\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}));
				const Rl = function(e) {
						var t = e.selectedItem,
							n = e.setSelectedItem,
							r = e.loadoutsData,
							o = e.sortList,
							l = e.hasData,
							s = e.sortSelection,
							c = (0, i.v9)((function(e) {
								return e.global.language
							})),
							d = (0, i.v9)((function(e) {
								return e.record.selectedTab
							})),
							m = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							u = (0, i.v9)((function(e) {
								return e.global.gameTitle
							})),
							g = (0, i.v9)((function(e) {
								return e.record.selectedGameMode
							}));
						return a.createElement(kl, null, a.createElement("div", {
							className: "list_header"
						}, a.createElement("div", {
							className: "sub-header"
						}, function(e, t) {
							return 1 === e ? kt[t].allWeapons : 2 === e ? kt[t].equipment : kt[t].killstreaks
						}(d, c)), a.createElement("div", null), a.createElement("div", {
							className: l ? "sort-section" : "sort-section empty-sort-section"
						}, a.createElement("div", {
							className: 1 === d || "dmz" === g ? "active-button" : "inactive-button"
						}, a.createElement(fa, {
							type: "RT_R2",
							width: 2,
							height: 2,
							marginLeft: 1,
							fill: "#e7e7e7"
						})), 1 === d ? a.createElement("div", {
							className: "sort-options"
						}, a.createElement("div", {
							onClick: function() {
								o("headshotsPercentage"), Wt("ui_hilite_tab")
							},
							className: Pa({
								active: "headshotsPercentage" === s
							})
						}, "headshotsPercentage" === s && a.createElement("div", {
							className: "down-arrow"
						}), "dmz" === g ? kt[c].operatorHeadshotPercent : kt[c].headshotPercent), "dmz" !== g && a.createElement("div", {
							onClick: function() {
								o("kdRatio"), Wt("ui_hilite_tab")
							},
							className: Pa({
								active: "kdRatio" === s
							})
						}, "kdRatio" === s && a.createElement("div", {
							className: "down-arrow"
						}), kt[c].kdRatio), a.createElement("div", {
							onClick: function() {
								o("kills"), Wt("ui_hilite_tab")
							},
							className: Pa({
								active: "kills" === s
							})
						}, "kills" === s && a.createElement("div", {
							className: "down-arrow"
						}), "mw2" === u ? kt[c].kills : kt[c].operatorKills), "dmz" === g && a.createElement("div", {
							onClick: function() {
								o("aiAgentKills"), Wt("ui_hilite_tab")
							},
							className: Pa({
								active: "aiAgentKills" === s
							})
						}, "aiAgentKills" === s && a.createElement("div", {
							className: "down-arrow"
						}), kt[c].aqSoldierKills)) : a.createElement("div", {
							className: "sort-options"
						}, a.createElement("div", {
							onClick: function() {
								o("kills"), Wt("ui_hilite_tab")
							},
							className: Pa({
								active: "kills" === s
							})
						}, "kills" === s && a.createElement("div", {
							className: "down-arrow"
						}), "mw2" === u ? kt[c].kills : kt[c].operatorKills), "dmz" === g && a.createElement("div", {
							onClick: function() {
								o("aiAgentKills"), Wt("ui_hilite_tab")
							},
							className: Pa({
								active: "aiAgentKills" === s
							})
						}, "aiAgentKills" === s && a.createElement("div", {
							className: "down-arrow"
						}), kt[c].aqSoldierKills)))), a.createElement("div", {
							className: "loadout-data"
						}, l ? null == r ? void 0 : r.map((function(e, i) {
							return a.createElement("div", {
								className: (null == t ? void 0 : t.name) === (null == e ? void 0 : e.name) ? "list-data-item active" : "list-data-item",
								key: i,
								name: null == e ? void 0 : e.name,
								onClick: function() {
									n(e), Wt("ui_hilite")
								},
								onMouseEnter: function() {
									Wt("ui_hilite")
								}
							}, a.createElement("div", {
								className: "list-item"
							}, a.createElement("div", {
								className: "list-item-details"
							}, a.createElement("div", {
								className: "list-item-name"
							}, It(d, c, null == e ? void 0 : e.label, null == e ? void 0 : e.name)), a.createElement("div", null, a.createElement(Ci, {
								max: (o = r, l = s, o ? Math.max.apply(Math, (0, Y.Z)(o.map((function(e) {
									return e[l]
								})))) : 0),
								current: e[s] || 0
							})))), a.createElement("div", {
								className: "list-item-image"
							}, a.createElement("img", {
								height: Pa({
									"100px": m && 1 !== d
								}),
								src: wo(null == e ? void 0 : e.hudImage, d, m)
							})), a.createElement("div", {
								className: "list-item-score"
							}, e[s]));
							var o, l
						})) : (0, Y.Z)(Array(1)).map((function(e, t) {
							return a.createElement("div", {
								key: t,
								className: "list-data-item empty-list-data-item"
							}, a.createElement("div", {
								className: "list-item"
							}, a.createElement("div", {
								className: "list-item-details"
							}, a.createElement("div", {
								className: "list-item-name"
							}, "--"), a.createElement("div", {
								style: {
									backgroundColor: "#000"
								}
							}, a.createElement("svg", {
								width: 180,
								height: 4
							}, a.createElement("rect", {
								fill: "#3b3b3a",
								width: 180,
								height: 3
							}))))), a.createElement("div", {
								className: "list-item-image-empty"
							}), a.createElement("div", {
								className: "list-item-score"
							}, "--"))
						}))), a.createElement("div", {
							className: "border-box"
						}))
					},
					Tl = function(e) {
						var t = e.selectedItem,
							n = e.data,
							r = e.hasData,
							o = e.sortSelection,
							l = (0, i.v9)((function(e) {
								return e.record.selectedTab
							})),
							s = function(e, t) {
								var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
									a = "https://assets.callofduty.com/cdn/app/codp/iw9";
								if (2 === t) {
									var r;
									return r = e && e.search("hud_icon") > -1 ? e && e.replace("hud_icon", "icon_barracks") : e && e.replace("icon", "icon_barracks"), "".concat(a, "/equipment/").concat(r, ".png")
								}
								return "field upgrades" === t ? "".concat(a, "/field-upgrade/").concat(e, ".jpg") : 3 === t ? "".concat(a, "/killstreak/").concat(e, ".jpg") : "".concat(a, "/weapon/").concat(e, "_").concat(n, ".png")
							}(null == t ? void 0 : t.imageIcon, l, "893x245"),
							c = (0, i.v9)((function(e) {
								return e.global.language
							})),
							d = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							m = (0, i.v9)((function(e) {
								return e.record.filterRecency
							})),
							u = (0, i.v9)((function(e) {
								return e.global.gameTitle
							})),
							g = function(e) {
								var t;
								return "headshotsPercentage" === (null == e ? void 0 : e.label) ? "stats-tile stats-tile-headshot" : (null == o ? void 0 : o.toLowerCase()) === (null == e || null === (t = e.label) || void 0 === t ? void 0 : t.toLowerCase()) ? "active-tile stats-tile" : "stats-tile"
							};
						return a.createElement(xl, {
							style: {
								background: 1 === l ? "url(https://assets.callofduty.com/cdn/app/codp/iw9/background/combat_record_weapons_1146x674.png)" : "linear-gradient(to right, #000000 0%, #000000 14.32%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%), url(".concat(s, ")")
							},
							className: 1 === l ? d ? "weapons-4k-bg" : "weapons-bg" : "loadouts-bg"
						}, r ? a.createElement("div", {
							className: "details_header"
						}, a.createElement("div", null, a.createElement("div", {
							className: r ? "main-title" : "main-title empty-text"
						}, It(l, c, null == t ? void 0 : t.label, null == t ? void 0 : t.name)), a.createElement("div", {
							className: r ? "sub-title" : "sub-title empty-text empty-background"
						}, 1 === l ? Mt(null == t ? void 0 : t.classLabel, c) || "--" : function(e, t) {
							return 2 === e ? kt[t].equipment : 3 === e ? kt[t].killstreak : void 0
						}(l, c) || "--"))) : a.createElement("div", {
							className: "no-data"
						}, a.createElement("div", {
							className: "no-data-message"
						}, function(e, t) {
							return 2 === e ? kt[t].noEquipmentHistory : "field upgrades" === e ? kt[t].noFieldUpgradeHistory : 3 === e ? kt[t].noKillstreakHistory : kt[t].noWeaponsHistory
						}(l, c))), 1 === l && a.createElement("div", {
							style: {
								backgroundImage: "url(".concat(s, ")")
							},
							className: "weapon-image"
						}), a.createElement("div", {
							className: "stats-tiles"
						}, n.map((function(e) {
							var t, n;
							return a.createElement("div", {
								key: null == e ? void 0 : e.title,
								className: (null == o ? void 0 : o.toLowerCase()) === (null == e || null === (t = e.label) || void 0 === t ? void 0 : t.toLowerCase()) ? "active-tile stats-tile-section" : "stats-tile-section"
							}, a.createElement("div", {
								key: null == e ? void 0 : e.title,
								className: g(e)
							}, a.createElement("div", {
								className: r ? "stats-tile-header" : "stats-tile-header empty-text"
							}, null == e ? void 0 : e.title), a.createElement("div", {
								className: r ? "stats-tile-value" : "stats-tile-value empty-text"
							}, null != e && e.value || 0 === (null == e ? void 0 : e.value) ? null == e ? void 0 : e.value : "--")), (null == o ? void 0 : o.toLowerCase()) === (null == e || null === (n = e.label) || void 0 === n ? void 0 : n.toLowerCase()) && a.createElement("div", {
								className: r ? "active-stats-tile" : "active-stats-tile empty-tile-arrow"
							}))
						}))), 3 === l && "Lifetime" === m && "mw2" === u && a.createElement("div", {
							className: "killstreak-message"
						}, kt[c].killstreakMessage), a.createElement("div", {
							className: "border-box"
						}))
					},
					Ll = function(e) {
						var t = e.moveLeft,
							n = e.moveRight,
							r = e.data,
							o = e.loaded,
							l = e.error,
							s = (0, i.v9)((function(e) {
								return e.record.selectedTab
							})),
							c = (0, i.v9)((function(e) {
								return e.record.filterRecency
							})),
							d = (0, i.v9)((function(e) {
								return e.global.gameTitle
							})),
							m = (0, i.v9)((function(e) {
								return e.record.selectedGameMode
							})),
							u = yo(s, r),
							g = (0, a.useState)(u && u[0]),
							p = (0, et.Z)(g, 2),
							h = p[0],
							f = p[1],
							v = function(e, t, n, a, r) {
								var o = (0, i.v9)((function(e) {
										return e.global.language
									})),
									l = [{
										title: "mw2" === a ? kt[o].kills : kt[o].operatorKills,
										value: null == e ? void 0 : e.kills,
										label: "kills"
									}, {
										title: kt[o].killDeathRatio,
										value: null == e ? void 0 : e.kdRatio,
										label: "kdRatio"
									}, {
										title: kt[o].headshotPercent,
										value: null == e ? void 0 : e.headshotsPercentage,
										label: "headshotsPercentage"
									}],
									s = [{
										title: kt[o].aqSoldierKills,
										value: null == e ? void 0 : e.aiAgentKills,
										label: "aiAgentKills"
									}, {
										title: kt[o].operatorKills,
										value: null == e ? void 0 : e.kills,
										label: "kills"
									}, {
										title: kt[o].operatorHeadshotPercent,
										value: null == e ? void 0 : e.headshotsPercentage,
										label: "headshotsPercentage"
									}];
								return 1 === t ? {
									tilesData: "dmz" !== r ? l : s
								} : 2 === t ? {
									tilesData: "dmz" === r ? [{
										title: kt[o].aqSoldierKills,
										value: null == e ? void 0 : e.aiAgentKills,
										label: "aiAgentKills"
									}, {
										title: kt[o].operatorKills,
										value: null == e ? void 0 : e.kills,
										label: "kills"
									}] : [{
										title: "mw2" === a ? kt[o].kills : kt[o].operatorKills,
										value: null == e ? void 0 : e.kills,
										label: "kills"
									}]
								} : "field upgrades" === t ? {
									tilesData: [{
										title: kt[o].kills,
										value: null == e ? void 0 : e.kills,
										label: "kills"
									}]
								} : {
									tilesData: "dmz" === r ? [{
										title: kt[o].aqSoldierKills,
										value: null == e ? void 0 : e.aiAgentKills,
										label: "aiAgentKills"
									}, {
										title: kt[o].operatorKills,
										value: null == e ? void 0 : e.kills,
										label: "kills"
									}] : [{
										title: kt[o].kills,
										value: null == e ? void 0 : e.kills,
										label: "uses"
									}]
								}
							}(h, s, 0, d, m),
							b = v.tilesData,
							_ = Eo(o, l, u),
							y = (0, i.v9)((function(e) {
								return e.record.sortByVal
							})),
							E = (0, a.useState)(u ? jt("dmz" === m ? "aiAgentKills" : "kills", u) : []),
							w = (0, et.Z)(E, 2),
							S = w[0],
							k = w[1],
							x = (0, i.I0)(),
							R = (0, i.v9)((function(e) {
								return e.global.is4k
							}));
						(0, a.useEffect)((function() {
							k(u ? jt("dmz" === m ? "aiAgentKills" : "kills", u) : []), x(F.setSortByValue("dmz" === m ? "aiAgentKills" : "kills")), f(u && jt("dmz" === m ? "aiAgentKills" : "kills", u)[0])
						}), [s, c, r]), (0, a.useEffect)((function() {
							k(u ? jt(y, u) : [])
						}), [y]);
						var T = function(e) {
								x(F.setSortByValue(e)), k(jt(e, u))
							},
							L = function() {
								var e = S.findIndex((function(e) {
									return h.name === e.name
								}));
								e < S.length - 1 && (f(S[e + 1]), Wt("ui_hilite"));
								var t = document.getElementsByClassName("loadout-data")[0],
									n = document.getElementsByName(h.name)[0];
								t.scrollTo(0, n.offsetHeight * e)
							},
							D = function() {
								var e = S.findIndex((function(e) {
									return h.name === e.name
								}));
								e > 0 && (f(S[e - 1]), Wt("ui_hilite"));
								var t = document.getElementsByClassName("loadout-data")[0],
									n = document.getElementsByName(h.name)[0];
								e < 6 ? t.scrollBy(0, R ? -130.66 : -65.33) : t.scrollTo(0, n.offsetHeight * (e - 5))
							},
							M = function() {
								if (1 === s) {
									var e = ["aiAgentKills", "headshotsPercentage", "kills"],
										t = ["kills", "headshotsPercentage", "kdRatio"],
										n = ["kills", "headshotsPercentage", "kdRatio"],
										a = function() {
											return "mw2" === d ? t : "wz2" === d ? "dmz" === m ? e : n : void 0
										},
										r = a().indexOf(y) + 1;
									r === e.length && (r = 0), T(a()[r]), Wt("ui_hilite_tab")
								} else "dmz" === m && ("kills" === y && (T("aiAgentKills"), Wt("ui_hilite_tab")), "aiAgentKills" === y && (T("kills"), Wt("ui_hilite_tab")))
							};
						return xa(h, {
							up: D,
							down: L,
							moveRight: n,
							moveLeft: t,
							shiftRight: M
						}), ka(1, {
							DOWN: L,
							UP: D,
							RTRIG: M
						}), (0, a.useEffect)((function() {
							f(u && jt(y, u)[0]), _ = Eo(o, l, u)
						}), [y]), a.createElement(Sl, null, a.createElement(Rl, {
							key: s,
							selectedItem: h,
							setSelectedItem: f,
							hasData: _,
							sortSelection: y,
							loadoutsData: S,
							setLoadoutsData: k,
							sortList: T
						}), a.createElement(Tl, {
							selectedItem: h,
							sortSelection: y,
							data: b,
							hasData: _
						}))
					};
				var Dl, Ml, Il = se.ZP.div(Dl || (Dl = (0, me.Z)(["\n    ", "\n    .recency-filter {\n        display: flex;\n        margin: 2rem;\n        padding: 2rem 0;\n        gap: 2rem;\n        .filter-option {\n            font-size: 2rem;\n            text-align: center;\n            color: #555;\n            text-transform: uppercase;\n            cursor: pointer;\n            :hover {\n                color: #e7e7e7;\n            }\n        }\n        .active {\n            color: #e7e7e7;\n            text-decoration: underline;\n            text-underline-offset: 0.4rem;\n        }\n    }\n"])), (function(e) {
					return e.isArabic && (0, se.iv)(Ml || (Ml = (0, me.Z)(["\n            .list-data-item,\n            .list_header {\n                direction: rtl !important;\n            }\n        "])))
				}));
				const Al = function(e) {
					var t = e.handleClickFilter,
						n = (0, i.I0)(),
						r = (0, i.v9)((function(e) {
							return e.record.filterRecency
						})),
						o = (0, i.v9)(D),
						l = (0, i.v9)((function(e) {
							return e.global.language
						})),
						s = So(r),
						c = s.data,
						d = s.loaded,
						m = s.error;
					(0, a.useEffect)((function() {
						n(F.setSelectedTab(0))
					}), []);
					var u = (0, i.v9)((function(e) {
							return e.record.selectedTab
						})),
						g = (0, i.v9)((function(e) {
							return e.record.selectedScreen
						})),
						p = (0, i.v9)((function(e) {
							return e.record.selectedType
						})),
						h = (0, i.v9)((function(e) {
							return e.global.isCrossConfirm
						}));
					return ka(1, {
						XBA_PSCROSS: !h && function() {
							return va(n, g, p, u)
						},
						XBB_PSCIRCLE: h && function() {
							return va(n, g, p, u)
						}
					}), xa(u, {
						close: function() {
							return va(n, g, p, u)
						}
					}), a.createElement(a.Fragment, null, !d && a.createElement(ar, null), a.createElement(a.Fragment, null, d && a.createElement(er, {
						tabs: [{
							title: kt[l].loadoutTabs[0],
							isDisabled: !1,
							key: 0
						}, {
							title: kt[l].loadoutTabs[1],
							isDisabled: !Eo(d, m, yo(1, c)),
							key: 1
						}, {
							title: kt[l].loadoutTabs[2],
							isDisabled: !Eo(d, m, yo(2, c)),
							key: 2
						}, {
							title: kt[l].loadoutTabs[3],
							isDisabled: !Eo(d, m, yo(3, c)),
							key: 3
						}]
					}), a.createElement($a, null, a.createElement("div", null, kt[l].statusMessage)), a.createElement(Il, {
						isArabic: o
					}, 0 === u ? a.createElement(_l, {
						closeFromScreen: function() {
							return va(n, g, p, u)
						},
						filterRecency: r,
						data: c,
						loaded: d,
						error: m
					}) : a.createElement(Ll, {
						data: c,
						loaded: d,
						error: m,
						closeFromScreen: function() {
							return va(n, g, p, u)
						}
					}), a.createElement(zi, {
						filterRecency: r,
						handleClickFilter: t
					}))))
				};
				var Nl, Cl, Pl, zl, Ol, jl, Bl, Gl, Zl, Ul, Kl, Hl, Wl, ql, Fl = se.ZP.section(Nl || (Nl = (0, me.Z)(["\n    width: 100%;\n    height: 100%;\n    ", "\n    .match_header {\n        display: flex;\n        justify-content: space-between;\n        .left_header {\n            display: flex;\n            justify-content: start;\n            align-items: center;\n            & > div:nth-of-type(1) {\n                padding-left: 1rem;\n                .map-name {\n                    font-size: 7rem;\n                    font-weight: bold;\n                    color: ", ";\n                    text-transform: uppercase;\n                }\n                & > div:nth-of-type(2) {\n                    padding: 0 0.6rem;\n                    color: #3b3b3a;\n                    display: flex;\n\n                    & > div:nth-of-type(1) {\n                        color: #9aa39a;\n                        font-size: 2rem;\n                    }\n                }\n            }\n        }\n        .right_header {\n            position: absolute;\n            right: 0;\n            font-weight: bold;\n            padding-right: 4rem;\n            color: #e7e7e7;\n            font-size: 3.2rem;\n            text-transform: uppercase;\n            .success {\n                color: #3ecced;\n            }\n            .loss {\n                color: #9aa39a;\n            }\n        }\n    }\n    .screen-content {\n        margin: 0 9.6rem;\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .recents-right {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n    }\n    .recency-filter {\n        display: flex;\n        gap: 2rem;\n        padding: 2rem 0;\n        .filter-option {\n            font-size: 2rem;\n            text-align: center;\n            color: #555;\n            text-transform: uppercase;\n            cursor: pointer;\n            :hover {\n                color: #e7e7e7;\n            }\n        }\n        .active {\n            color: #e7e7e7;\n            text-decoration: underline;\n            text-underline-offset: 0.4rem;\n        }\n    }\n    .extracted-item-screen {\n        display: flex;\n        flex-direction: column;\n    }\n"])), (function(e) {
						return e.isArabic && (0, se.iv)(Cl || (Cl = (0, me.Z)(["\n            .match-data-item,\n            .mode-data-item,\n            .view-maps-banner {\n                direction: rtl !important;\n            }\n            .right_header {\n                left: 0 !important;\n                right: unset !important;\n                padding-left: 4rem;\n            }\n        "])))
					}), (function(e) {
						return e.theme.colors.neutralLight
					})),
					Vl = se.ZP.div(Pl || (Pl = (0, me.Z)(["\n    width: 56.5rem;\n    height: 81.8rem;\n    position: relative;\n\n    .border-box {\n        position: absolute;\n        bottom: 0;\n        width: 58rem;\n        height: 1.3rem;\n        border-bottom: 0.1rem solid rgb(85, 85, 85);\n        border-left: 0.1rem solid rgb(85, 85, 85);\n        border-right: 0.1rem solid rgb(85, 85, 85);\n    }\n\n    .recents {\n        height: 100%;\n\n        .matches_header {\n            align-items: center;\n            height: 8rem;\n            & > div:nth-of-type(1) {\n                font-size: 2.8rem;\n                text-transform: uppercase;\n                color: #fff;\n            }\n\n            & > div:nth-of-type(2) {\n                opacity: 0.7;\n                border: 0.1rem solid #555555;\n                margin: 3.3rem 0;\n            }\n        }\n    }\n    .matches_data {\n        height: 70.4rem;\n        direction: rtl;\n        padding-left: 2rem;\n        overflow-y: scroll;\n        &::-webkit-scrollbar {\n            width: 0.2rem;\n            background: transparent;\n        }\n        &::-webkit-scrollbar-track {\n            background-clip: content-box;\n        }\n        &::-webkit-scrollbar-thumb {\n            background-clip: padding-box;\n            background: #e7e7e7;\n            min-height: 1.6rem;\n        }\n    }\n    .match-data-item.active {\n        border: 0.2rem solid #79c370;\n        border-left: 0.8rem solid #79c370;\n        padding-left: 0.4rem;\n\n        &:hover {\n            border: 0.2rem solid #79c370 ;\n            border-left: 0.8rem solid #79c370;\n            padding-left: 0.4rem;\n        }\n    }\n\n    .match-data-item {\n        margin-bottom: 0.8rem;\n        color: ", ";\n        padding: 1rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        border: 0.2rem solid #555555;\n        direction: ltr;\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: cover;\n        background-origin: border-box;\n        height: 9.6rem;\n        &:hover {\n            border: 0.2rem solid #E7E7E7;\n        }\n        .match-data-item-image-empty {\n            background: #3b3b3a;\n        }\n        & > div:nth-of-type(1) {\n            display: flex;\n            justify-content: start;\n            align-items: center;\n\n            & > div:nth-of-type(1) {\n                color: ", ";\n                gap: 0.5rem;\n                display: flex;\n                flex-direction: column;\n\n                & > div:nth-of-type(1) {\n                    font-size: 2rem;\n                    text-transform: uppercase;\n                    font-weight: bold;\n                }\n                & > div:nth-of-type(2) {\n                    font-size: 1.6rem;\n                    color: #9aa39a;\n                }\n                & > div:nth-of-type(3) {\n                    font-size: 1.8rem;\n                }\n            }\n        }\n        & > div:nth-of-type(2) {\n            text-align: end;\n            font-size: 1.8rem;\n\n            .match-data-item-result-win {\n                color: #3ecced;\n                text-transform: uppercase;\n                padding-bottom: 0.2rem;\n            }\n            .match-data-item-result-eliminated {\n                color: #9aa39a;\n                text-transform: uppercase;\n                padding-bottom: 0.2rem;\n            }\n            .match-data-item-result-empty {\n                background: #3b3b3a;\n                width: 5.6rem;\n                height: 2rem;\n            }\n        }\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					})),
					Yl = se.ZP.div(zl || (zl = (0, me.Z)(["\n    width: 114.4rem;\n    height: 81.8rem;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 3.5rem 4rem;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    .border-box {\n        position: absolute;\n        bottom: 0;\n        width: 112.4rem;\n        height: 1.3rem;\n        margin-left: -2rem;\n        border-bottom: 0.1rem solid rgb(85, 85, 85);\n        border-left: 0.1rem solid rgb(85, 85, 85);\n        border-right: 0.1rem solid rgb(85, 85, 85);\n    }\n\n    .no-data {\n        height: 62rem;\n        display: flex;\n        align-items: center;\n        color: #9aa39a;\n        font-size: 2.4rem;\n        .no-data-message {\n            margin: 0 auto;\n        }\n    }\n    .match_stats-block {\n        display: flex;\n        height: 23.2rem;\n        .tile-header {\n            font-size: 1.8rem;\n            line-height: 2.2rem;\n            color: #9aa39a;\n        }\n        .tile-value {\n            font-weight: bold;\n            font-size: 3.6rem;\n            line-height: 4.3rem;\n            text-overflow: ellipsis;\n            white-space: pre;\n            overflow: hidden;\n            color: ", ";\n        }\n        .match_stats-block-weapon {\n            width: 50%;\n            padding: 1.6rem;\n            margin-right: 2.1rem;\n            background: rgba(231, 231, 231, 0.1);\n            clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0% 50%);\n            border-left: 0.2rem solid #e7e7e7;\n            & > div:nth-of-type(1) {\n                display: flex;\n                & > div:nth-of-type(1) {\n                    width: 50%;\n                }\n                & > div:nth-of-type(2) {\n                    display: flex;\n                    width: 50%;\n                    justify-content: space-around;\n                }\n            }\n        }\n        .match_stats-tiles {\n            display: grid;\n            grid-template-columns: repeat(3, 1fr);\n            gap: 1rem;\n            width: 50%;\n            .match_stats-tile {\n                height: 11rem;\n                padding: 1rem 1.6rem;\n                background: rgba(231, 231, 231, 0.1);\n                display: flex;\n                flex-direction: column;\n                justify-content: space-between;\n                clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0% 50%);\n                border-left: 0.2rem solid #e7e7e7;\n            }\n        }\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					})),
					Ql = (se.ZP.div(Ol || (Ol = (0, me.Z)(["\n    width: 56.5rem;\n    height: 81.8rem;\n    position: relative;\n\n    .border-box {\n        position: absolute;\n        bottom: 0;\n        width: 58rem;\n        height: 1.3rem;\n        border-bottom: 0.1rem solid rgb(85, 85, 85);\n        border-left: 0.1rem solid rgb(85, 85, 85);\n        border-right: 0.1rem solid rgb(85, 85, 85);\n    }\n\n    .modes_data {\n        overflow-y: scroll;\n        height: 71.8rem;\n        scroll-behavior: smooth;\n        scrollbar-width: none;\n        direction: rtl;\n        padding-left: 2rem;\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n        &::-webkit-scrollbar {\n            width: 0.2rem;\n            background: transparent;\n        }\n        &::-webkit-scrollbar-track {\n            background-clip: content-box;\n        }\n        &::-webkit-scrollbar-thumb {\n            background-clip: padding-box;\n            background: #e7e7e7;\n            min-height: 1.6rem;\n        }\n    }\n    .sort-section {\n        display: flex;\n        justify-content: space-between;\n        gap: 1rem;\n        padding: 1rem;\n        border-bottom: 0.1rem solid #555;\n        color: ", ";\n        font-size: 3rem;\n        direction: ltr;\n        margin-bottom: 1rem;\n        div {\n            color: #555555;\n            text-transform: uppercase;\n            font-size: 1.8rem;\n            cursor: pointer;\n            display: flex;\n            gap: 1rem;\n            :hover {\n                color: ", ";\n            }\n            &.active {\n                text-decoration: underline;\n                text-underline-offset: 0.4rem;\n                color: ", ";\n            }\n        }\n        .down-arrow {\n            clip-path: polygon(100% 0, 0% 100%, 100% 100%);\n            width: 1.3rem;\n            height: 1.4rem;\n            background: #79c370;\n        }\n        &.empty-sort-section {\n            .down-arrow {\n                background: #555555 !important;\n            }\n            .active {\n                color: #555555 !important;\n            }\n        }\n    }\n\n    .mode-data-item.active {\n        border: 0.2rem solid #79c370;\n        border-left: 0.8rem solid #79c370;\n    }\n\n    .mode-data-item {\n        color: ", ";\n        padding: 1rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        border: 0.2rem solid #555555;\n        direction: ltr;\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: cover;\n\n        & > div:nth-of-type(1) {\n            display: flex;\n            justify-content: start;\n            align-items: center;\n            & > div:nth-of-type(1) {\n                width: 5.4rem;\n                height: 5.4rem;\n                margin-right: 0.9rem;\n            }\n            & > div:nth-of-type(2) {\n                color: ", ";\n                font-size: 2rem;\n                text-transform: uppercase;\n                font-weight: bold;\n            }\n        }\n        & > div:nth-of-type(2) {\n            text-align: end;\n            font-size: 1.8rem;\n        }\n    }\n    .view-maps-banner {\n        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), #79c370;\n        text-transform: uppercase;\n        color: #141313;\n        font-size: 2rem;\n        font-weight: bold;\n        padding: 0.5rem;\n        direction: ltr;\n        cursor: pointer;\n        display: flex;\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					})), se.ZP.div(jl || (jl = (0, me.Z)(["\n    width: 114.4rem;\n    height: 81.8rem;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    padding: 3.5rem 4rem;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    .border-box {\n        position: absolute;\n        bottom: 0;\n        width: 112.4rem;\n        height: 1.3rem;\n        margin-left: -2rem;\n        border-bottom: 0.1rem solid rgb(85, 85, 85);\n        border-left: 0.1rem solid rgb(85, 85, 85);\n        border-right: 0.1rem solid rgb(85, 85, 85);\n    }\n\n    .mode_header {\n        display: flex;\n        justify-content: start;\n        align-items: center;\n        & > div:nth-of-type(1) {\n            width: 14.4rem;\n            height: 14.4rem;\n        }\n        & > div:nth-of-type(2) {\n            padding-left: 1rem;\n            & > div:nth-of-type(1) {\n                font-size: 7rem;\n                text-transform: uppercase;\n                font-weight: bold;\n                color: ", ";\n            }\n            & > div:nth-of-type(2) {\n                padding: 0 0.6rem;\n                color: #9aa39a;\n                > div {\n                    padding: 0 0.5rem;\n                    font-size: 1.8rem;\n                }\n            }\n        }\n    }\n    .no-data {\n        height: 62rem;\n        display: flex;\n        align-items: center;\n        color: #9aa39a;\n        font-size: 2.4rem;\n        .no-data-message {\n            margin: 0 auto;\n        }\n    }\n    .sub-title {\n        font-size: 1.8rem;\n        color: #9aa39a;\n    }\n    .sub-value {\n        font-size: 3.5rem;\n        font-weight: bold;\n        line-height: 4.3rem;\n        color: ", ";\n    }\n    .time-played,\n    .matches-played,\n    .kills-count,\n    .score-count,\n    .ratios {\n        padding: 0 2rem;\n        margin: 2rem 0;\n    }\n    .kill-death-ratios {\n        display: flex;\n    }\n    .mode-stats-block {\n        margin-left: 2rem;\n        display: flex;\n        margin-top: 10rem;\n        justify-content: center;\n        > div {\n            display: flex;\n        }\n        .win-loss-ratio {\n            display: flex;\n            margin-right: 10rem;\n        }\n        .bottom-border-box {\n            width: 74.6rem;\n        }\n        .kills-stats {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n        }\n        .ja-wrap-fix {\n            word-break: keep-all;\n        }\n        .kill-count,\n        .death-count,\n        .win-count,\n        .loss-count {\n            padding: 0 4rem;\n            margin: 3rem 0;\n            display: flex;\n            flex-direction: column;\n            div {\n                margin-bottom: 1.2rem;\n            }\n        }\n        .kill-count > div,\n        .win-count > div {\n            border-radius: 0.4rem;\n            width: 2.4rem;\n        }\n        .kill-count > div:nth-of-type(1) {\n            background: #368947;\n            height: 0.4rem;\n        }\n        .win-count > div:nth-of-type(1) {\n            background: #3ecced;\n            height: 0.4rem;\n        }\n\n        .death-count > div:nth-of-type(1),\n        .loss-count > div:nth-of-type(1) {\n            background: #e7e7e7;\n            height: 0.4rem;\n            border-radius: 0.4rem;\n            width: 2.4rem;\n        }\n    }\n    .match_stats-tiles {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        width: 50%;\n        position: absolute;\n        bottom: 4rem;\n        .match_stats-tile {\n            height: 10.5rem;\n            padding: 1rem 1.6rem;\n            margin-right: 2rem;\n            background: rgba(231, 231, 231, 0.1);\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0% 50%);\n            border-left: 0.2rem solid #e7e7e7;\n        }\n        .tile-header {\n            font-size: 1.8rem;\n            line-height: 2.2rem;\n            color: #9aa39a;\n        }\n        .tile-value {\n            font-weight: bold;\n            font-size: 3.6rem;\n            line-height: 4.3rem;\n            text-overflow: ellipsis;\n            white-space: pre;\n            overflow: hidden;\n            color: ", ";\n        }\n    }\n    .map_header {\n        font-weight: bold;\n        font-size: 7rem;\n        color: ", ";\n        padding: 2rem;\n        border-left: 0.2rem solid #79c370;\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					}), (function(e) {
						return e.theme.colors.neutralLight
					})), se.ZP.div(Bl || (Bl = (0, me.Z)(["\n    .footer-tab-list {\n        width: 79.5rem;\n        height: 5.5rem;\n        clip-path: polygon(0 0, 100% 0, 92% 100%, 8% 100%);\n        background: rgba(59, 59, 58, 0.25);\n        text-transform: uppercase;\n        margin: 0 auto;\n        text-align: center;\n        justify-content: center;\n        display: flex;\n        gap: 1.3rem;\n        align-items: center;\n        > div {\n            font-size: 2rem;\n            cursor: pointer;\n            :hover {\n                opacity: 1;\n            }\n        }\n        .inactive-selection {\n            text-decoration: none;\n            color: ", ";\n            opacity: 0.2;\n        }\n        .active-selection {\n            color: #fff;\n            text-decoration: underline;\n            text-underline-offset: 0.4rem;\n            opacity: 1;\n        }\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					}))),
					Xl = se.ZP.div(Gl || (Gl = (0, me.Z)(["\n    width: 114.4rem;\n    height: 81.8rem;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    padding: 3.5rem 4rem;\n    color: white;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    .border-box {\n        position: absolute;\n        bottom: 0;\n        width: 112.4rem;\n        height: 1.3rem;\n        margin-left: -2rem;\n        border-bottom: 0.1rem solid rgb(85, 85, 85);\n        border-left: 0.1rem solid rgb(85, 85, 85);\n        border-right: 0.1rem solid rgb(85, 85, 85);\n    }\n\n    .wz2-tables-container {\n        display: flex;\n        overflow-y: scroll;\n        position: relative;\n        top: 31.2rem;\n        width: 100%;\n        height: 31.2rem;\n        &::-webkit-scrollbar {\n            width: 0.2rem;\n            background: transparent;\n        }\n        &::-webkit-scrollbar-track {\n            background-clip: content-box;\n        }\n        &::-webkit-scrollbar-thumb {\n            background-clip: padding-box;\n            background: #e7e7e7;\n            min-height: 1.6rem;\n        }\n        table {\n            width: 100% !important;\n            thead {\n                color: #e7e7e7;\n                background: rgba(231, 231, 231, 0.12);\n                height: 2.6rem;\n            }\n        }\n    }\n    table {\n        width: 49%;\n        font-size: 1.4rem;\n        margin-top: 3rem;\n        color: ", ";\n        text-transform: uppercase;\n        height: fit-content;\n        margin-right: 1rem;\n        thead {\n            background: rgb(23, 78, 92, 0.4);\n            color: #3ecced;\n        }\n        tr {\n            height: 4.8rem;\n            td {\n                padding: 1rem;\n            }\n            td:nth-of-type(4),\n            td:nth-of-type(5),\n            td:nth-of-type(6) {\n                text-align: right;\n            }\n        }\n        tbody {\n            tr {\n                background: #141313;\n                opacity: 0.75;\n            }\n        }\n    }\n    .coalition-table thead {\n        background: rgb(109, 43, 42, 0.4);\n        color: #ec4442;\n    }\n    .active-row {\n        color: #eaea43;\n        td:first-of-type {\n            border-left: 0.6rem solid #eaea43;\n        }\n    }\n    .rank-cell {\n        display: flex;\n        align-items: center;\n        gap: 0.2rem;\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					})),
					Jl = se.ZP.div(Zl || (Zl = (0, me.Z)(["\n    width: 114.4rem;\n    height: 81.8rem;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    padding: 3.5rem 4rem;\n    color: white;\n    background-repeat: no-repeat;\n    background-size: cover;\n    .wz2-tables-container {\n        display: flex;\n        overflow-y: scroll;\n        position: relative;\n        top: 31.2rem;\n        width: 100%;\n        height: 31.2rem;\n        &::-webkit-scrollbar {\n            width: 0.2rem;\n            background: transparent;\n        }\n        &::-webkit-scrollbar-track {\n            background-clip: content-box;\n        }\n        &::-webkit-scrollbar-thumb {\n            background-clip: padding-box;\n            background: #e7e7e7;\n            min-height: 1.6rem;\n        }\n        table {\n            width: 100% !important;\n            thead {\n                color: #e7e7e7;\n                background: rgba(231, 231, 231, 0.12);\n                height: 2.6rem;\n            }\n        }\n    }\n    table {\n        width: 49%;\n        font-size: 1.4rem;\n        margin-top: 3rem;\n        color: ", ";\n        text-transform: uppercase;\n        height: fit-content;\n        margin-right: 1rem;\n        thead {\n            background: rgb(23, 78, 92, 0.4);\n            color: #3ecced;\n        }\n        tr {\n            height: 4.8rem;\n            td {\n                padding: 1rem;\n            }\n            td:nth-of-type(4),\n            td:nth-of-type(5),\n            td:nth-of-type(6) {\n                text-align: right;\n            }\n        }\n        tbody {\n            tr {\n                background: #141313;\n                opacity: 0.75;\n            }\n        }\n    }\n    .coalition-table thead {\n        background: rgb(109, 43, 42, 0.4);\n        color: #ec4442;\n    }\n    .active-row {\n        color: #eaea43;\n        td:first-of-type {\n            border-left: 0.6rem solid #eaea43;\n        }\n    }\n    .rank-cell {\n        display: flex;\n        align-items: center;\n        gap: 0.2rem;\n    }\n    .main-section {\n        padding: 4rem;\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n        > div {\n            color: #e7e7e7;\n            font-size: 2.6rem;\n            font-weight: bold;\n        }\n        .generic-tiles,\n        .weapons-section,\n        .equip-section,\n        .gears-section {\n            display: flex;\n            gap: 1rem;\n        }\n        .gear-tile {\n            width: 17.3rem;\n        }\n        .vertical-line {\n            height: 8rem;\n            border-left: 0.2rem solid #666a66;\n            margin-right: 1rem;\n        }\n    }\n"])), (function(e) {
						return e.theme.colors.neutralLight
					})),
					$l = se.ZP.div(Ul || (Ul = (0, me.Z)(["\n    margin-bottom: 0.8rem;\n    color: #9aa39a;\n    padding: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 0.1rem solid #3b3b3a;\n    direction: ltr;\n    & > div:nth-of-type(1) {\n        display: flex;\n        justify-content: start;\n        align-items: center;\n        & > div:nth-of-type(1) {\n            width: 5.4rem;\n            height: 5.4rem;\n            margin-right: 0.9rem;\n        }\n        & > div:nth-of-type(2) {\n            & > div:nth-of-type(1) {\n                font-size: 2rem;\n                text-transform: uppercase;\n                font-weight: bold;\n            }\n            & > div:nth-of-type(2) {\n                font-size: 1.8rem;\n            }\n            & > div:nth-of-type(3) {\n                font-size: 1.8rem;\n            }\n        }\n    }\n    & > div:nth-of-type(2) {\n        text-align: end;\n        font-size: 1.8rem;\n\n        .empty-data-item-result {\n            width: 5.6rem;\n            height: 2rem;\n        }\n    }\n"]))),
					es = se.ZP.div(Kl || (Kl = (0, me.Z)(["\n    ", "\n    .sub-title {\n        font-size: 1.6rem;\n        color: #9aa39a;\n    }\n    .sub-value {\n        font-size: 1.6rem;\n        font-weight: bold;\n        color: ", ";\n        text-transform: uppercase;\n    }\n"])), (function(e) {
						return (0, se.iv)(Hl || (Hl = (0, me.Z)(["\n            width: ", "rem;\n            min-width: ", "rem;\n            height: ", "rem;\n            padding: 1rem 1.6rem;\n            background: rgba(231, 231, 231, 0.15);\n            clip-path: polygon(0 0, 100% 0, 100% 80%, 96% 100%, 0 100%, 0% 50%);\n            border-left: 0.2rem solid #666a66;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n        "])), e.width, e.width, e.height)
					}), (function(e) {
						return e.theme.colors.neutralLight
					})),
					ts = se.ZP.div(Wl || (Wl = (0, me.Z)(["\n    ", "\n\n  .empty-block {\n    position: absolute;\n    inset: 0.2rem;\n    padding: 1rem 1.5rem;\n    background: rgba(231, 231, 231, 0.1);\n    clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0% 50%);\n  }\n  &.empty-tile {\n    position: relative;\n    border: none;\n  }\n    .sub-title {\n        font-size: 1.6rem;\n        color: #9aa39a;\n    }\n    .sub-value {\n        font-size: 1.6rem;\n        font-weight: bold;\n        color: ", ";\n        text-transform: uppercase;\n    }\n    .tile-footer {\n        display: flex;\n        gap: 0.5rem;\n    }\n    .tile-header {\n        display: flex;\n        flex-direction: column;\n        gap: 0.5rem;\n    }\n    .icon-text {\n        font-size: 3.6rem;\n        text-transform: uppercase;\n        font-weight: bold;\n        text-align: center;\n        display: flex;\n        align-items: center;\n        img {\n          margin: 0 auto;\n        }\n      }\n    }\n"])), (function(e) {
						return (0, se.iv)(ql || (ql = (0, me.Z)(["\n            width: ", "rem;\n            min-width: ", "rem;\n            height: ", "rem;\n            padding: 1rem 1.6rem;\n            background: rgba(231, 231, 231, 0.15);\n            clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0% 50%);\n            border-left: 0.2rem solid #666a66;\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n        "])), e.width, e.width, e.height)
					}), (function(e) {
						return e.theme.colors.neutralLight
					}));
				const ns = function(e) {
						var t, n, r, o = e.active,
							l = e.match,
							s = e.handleClick,
							c = (0, i.v9)((function(e) {
								return e.global.language
							}));
						return a.createElement("div", {
							className: o ? "match-data-item active" : "match-data-item",
							key: l.matchId,
							name: l.matchId,
							onClick: s
						}, a.createElement("div", {
							className: "match-data-item-left"
						}, a.createElement("div", {
							className: "match-data-item-details"
						}, a.createElement("div", {
							className: "match-data-item-name"
						}, l.map ? (null == E || null === (t = E[c]) || void 0 === t ? void 0 : t[l.map]) || l.map : "--"), a.createElement("div", {
							className: "match-data-item-time"
						}, (null == l || null === (n = l.genericStats) || void 0 === n ? void 0 : n.playerUtcDisconnectTimeSeconds) && Lt(null == l || null === (r = l.genericStats) || void 0 === r ? void 0 : r.playerUtcDisconnectTimeSeconds, kt[c].langCode)))), a.createElement("div", {
							className: "match-data-item-right"
						}, "success" === l.result && a.createElement("div", {
							className: "match-data-item-result-win"
						}, kt[c].success), "eliminated" === l.result && a.createElement("div", {
							className: "match-data-item-result-eliminated"
						}, kt[c].eliminated)))
					},
					as = function() {
						return a.createElement($l, null, a.createElement("div", {
							className: "empty-data-item-left"
						}, a.createElement("div", {
							className: "empty-data-item-details"
						}, a.createElement("div", {
							className: "empty-data-item-name"
						}, "--"))), a.createElement("div", {
							className: "empty-data-item-right"
						}, a.createElement("div", {
							className: "empty-data-item-result"
						})))
					},
					rs = function(e) {
						var t = e.selectedMatch,
							n = e.setSelectedMatch,
							r = e.data,
							o = (0, i.v9)((function(e) {
								return e.global.language
							})),
							l = (0, i.I0)(),
							s = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							c = function() {
								var e = null == r ? void 0 : r.findIndex((function(e) {
									return t.matchId === e.matchId
								}));
								e < r.length - 1 && (n(r[e + 1]), l(H({
									id: r[e + 1].matchId,
									gameTitle: "dmz"
								})), Wt("ui_hilite"));
								var a = document.getElementsByClassName("matches_data")[0],
									i = document.getElementsByName(t.matchId)[0];
								e >= 6 && a.scrollTo(0, i.offsetHeight * e)
							},
							d = function() {
								var e = null == r ? void 0 : r.findIndex((function(e) {
									return t.matchId === e.matchId
								}));
								e > 0 && (n(r[e - 1]), l(H({
									id: r[e - 1].matchId,
									gameTitle: "dmz"
								})), Wt("ui_hilite"));
								var a = document.getElementsByClassName("matches_data")[0],
									i = document.getElementsByName(t.matchId)[0];
								e < 6 ? a.scrollBy(0, s ? -130.66 : -65.33) : a.scrollTo(0, i.offsetHeight * e)
							};
						return xa(t, {
							up: d,
							down: c,
							shiftRight: function() {},
							shiftLeft: function() {}
						}), ka(1, {
							DOWN: c,
							UP: d,
							RTRIG: function() {},
							LTRIG: function() {}
						}), a.createElement(Vl, null, a.createElement("div", {
							className: "recents"
						}, a.createElement("div", {
							className: "matches_header"
						}, a.createElement("div", null, kt[o].last10Deployments), a.createElement("div", null)), a.createElement("div", {
							className: "matches_data"
						}, r && r.length > 0 ? null == r ? void 0 : r.map((function(e) {
							return a.createElement(ns, {
								active: (null == t ? void 0 : t.matchId) === (null == e ? void 0 : e.matchId),
								match: e,
								name: null == e ? void 0 : e.matchId,
								key: null == e ? void 0 : e.matchId,
								handleClick: function() {
									return n(t = e), l(H({
										id: t.matchId,
										gameTitle: "dmz"
									})), void Wt("ui_hilite");
									var t
								}
							})
						})) : (0, Y.Z)(Array(1)).map((function() {
							return a.createElement(as, {
								key: "empty-list"
							})
						})))), a.createElement("div", {
							className: "border-box"
						}))
					},
					is = function(e) {
						var t, n, r, o, l, s = e.selectedMatch,
							c = (0, i.v9)((function(e) {
								return e.global.language
							}));
						return a.createElement("div", {
							className: "match_header"
						}, a.createElement("div", {
							className: "left_header"
						}, a.createElement("div", null, a.createElement("div", {
							className: "map-name"
						}, null != s && s.map ? (null == E || null === (t = E[c]) || void 0 === t ? void 0 : t[null == s ? void 0 : s.map]) || (null == s ? void 0 : s.map) : "--"), a.createElement("div", null, a.createElement("div", {
							className: "duration"
						}, "".concat(kt[c].duration, " :\n                            ").concat(null != s && null !== (n = s.genericStats) && void 0 !== n && n.playerUtcConnectTimeSeconds && null != s && null !== (r = s.genericStats) && void 0 !== r && r.playerUtcDisconnectTimeSeconds ? Dt(null == s || null === (o = s.genericStats) || void 0 === o ? void 0 : o.playerUtcConnectTimeSeconds, null == s || null === (l = s.genericStats) || void 0 === l ? void 0 : l.playerUtcDisconnectTimeSeconds) : "--"))))), a.createElement("div", {
							className: "right_header"
						}, "success" === (null == s ? void 0 : s.result) && a.createElement("div", {
							className: "success"
						}, kt[c].success), "eliminated" === (null == s ? void 0 : s.result) && a.createElement("div", {
							className: "loss"
						}, kt[c].eliminated)))
					},
					os = function(e) {
						var t, n, r, o, l, s, c, d, m, u, g, p, h, f, v, b, _, y, E, w = e.selectedMatch,
							S = e.hasData,
							k = (0, i.v9)((function(e) {
								return e.global.language
							})),
							x = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							R = [{
								title: "".concat(kt[k].aqSoldierKills),
								value: null != w && null !== (t = w.genericStats) && void 0 !== t && t.aqSoldierKills || 0 === (null == w || null === (n = w.genericStats) || void 0 === n ? void 0 : n.aqSoldierKills) ? Ct(null == w || null === (r = w.genericStats) || void 0 === r ? void 0 : r.aqSoldierKills) : "--"
							}, {
								title: "".concat(kt[k].teammatesRevived),
								value: null != w && null !== (o = w.genericStats) && void 0 !== o && o.revives || 0 === (null == w || null === (l = w.genericStats) || void 0 === l ? void 0 : l.revives) ? Ct(null == w || null === (s = w.genericStats) || void 0 === s ? void 0 : s.revives) : "--"
							}, {
								title: "".concat(kt[k].lootedContainers),
								value: null != w && null !== (c = w.genericStats) && void 0 !== c && c.containersOpen || 0 === (null == w || null === (d = w.genericStats) || void 0 === d ? void 0 : d.containersOpen) ? Ct(null == w || null === (m = w.genericStats) || void 0 === m ? void 0 : m.containersOpen) : "--"
							}, {
								title: "".concat(kt[k].operatorKills),
								value: null != w && null !== (u = w.genericStats) && void 0 !== u && u.operatorKills || 0 === (null == w || null === (g = w.genericStats) || void 0 === g ? void 0 : g.operatorKills) ? Ct(null == w || null === (p = w.genericStats) || void 0 === p ? void 0 : p.operatorKills) : "--"
							}],
							T = "https://assets.callofduty.com/cdn/app/codp/iw9/map-load/loading_".concat(null == w ? void 0 : w.map, "_bg_1150x818.jpg");
						return a.createElement(Yl, {
							style: {
								backgroundImage: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.25) 27.19%, rgba(0, 0, 0, 0.25) 36.56%, #000000 66.76%), url(".concat(T, ")")
							}
						}, S && w ? a.createElement(is, {
							selectedMatch: w
						}) : a.createElement("div", {
							className: "no-data"
						}, a.createElement("div", {
							className: "no-data-message"
						}, kt[k].noMatchHistory)), a.createElement("div", {
							className: "match_stats-block"
						}, (null == w || null === (h = w.topWeapon) || void 0 === h ? void 0 : h.aiAgentKills) > 0 && a.createElement("div", {
							className: "match_stats-block-weapon"
						}, a.createElement("div", null, a.createElement("div", null, a.createElement("div", {
							className: "tile-header"
						}, kt[k].topWeapon), S ? a.createElement("div", {
							className: "tile-value"
						}, (null == w || null === (f = w.topWeapon) || void 0 === f ? void 0 : f.label) || "--") : a.createElement("div", {
							className: "tile-value empty-text"
						}, "--")), a.createElement("div", null, a.createElement("div", null, a.createElement("div", {
							className: "tile-header"
						}, kt[k].aqSoldierKills), S ? a.createElement("div", {
							className: "tile-value"
						}, null == w || null === (v = w.topWeapon) || void 0 === v ? void 0 : v.aiAgentKills) : a.createElement("div", {
							className: "tile-value empty-text"
						}, "--")), a.createElement("div", null, a.createElement("div", {
							className: "tile-header"
						}, kt[k].accuracy), S ? a.createElement("div", {
							className: "tile-value"
						}, null != w && null !== (b = w.topWeapon) && void 0 !== b && b.accuracy || 0 === (null == w || null === (_ = w.topWeapon) || void 0 === _ ? void 0 : _.accuracy) ? null == w || null === (y = w.topWeapon) || void 0 === y ? void 0 : y.accuracy : "--", "%") : a.createElement("div", {
							className: "tile-value empty-text"
						}, "--")))), S ? a.createElement("div", {
							style: {
								textAlign: "center"
							}
						}, a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/".concat(null == w || null === (E = w.topWeapon) || void 0 === E ? void 0 : E.imageIcon, "_").concat(x ? "522x232" : "410x112", ".png")
						})) : a.createElement("div", {
							className: "empty-background"
						})), a.createElement("div", {
							className: "match_stats-tiles"
						}, null == R ? void 0 : R.map((function(e) {
							return a.createElement("div", {
								key: e.title,
								className: "match_stats-tile"
							}, a.createElement("div", {
								className: "match_stats-tile--text tile-header"
							}, e.title), S ? a.createElement("div", {
								className: "match_stats-tile--number tile-value"
							}, e.value) : a.createElement("div", {
								className: "match_stats-tile--number tile-value empty-text"
							}, "--"))
						})))), a.createElement("div", {
							className: "border-box"
						}))
					},
					ls = function(e) {
						var t = e.theadData,
							n = e.tbodyData,
							r = e.customClass;
						return a.createElement("table", {
							className: r
						}, a.createElement("thead", null, a.createElement("tr", null, t.map((function(e, t) {
							return a.createElement("td", {
								key: t,
								title: e
							}, e)
						})))), a.createElement("tbody", null, n.map((function(e, t) {
							return a.createElement("tr", {
								key: t,
								className: e.isCurrent ? "active-row" : ""
							}, e.items.map((function(e, t) {
								return a.createElement("td", {
									key: t
								}, e)
							})))
						}))))
					},
					ss = function(e) {
						var t, n, r, o = e.selectedMatch,
							l = e.selectedKey,
							s = (0, i.v9)((function(e) {
								return e.global.language
							})),
							c = (0, i.v9)((function(e) {
								return e.record.matchStats
							})),
							d = _("user_id"),
							m = ["#", kt[s].name, kt[s].aqSoldierKills, kt[s].operatorKills, kt[s].teammatesRevived, kt[s].lootedContainers],
							u = "https://assets.callofduty.com/cdn/app/codp/iw9/map-load/loading_".concat(null == o ? void 0 : o.map, "_bg_1150x818.jpg");
						return a.createElement(Xl, {
							style: {
								backgroundImage: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.25) 27.19%, rgba(0, 0, 0, 0.25) 36.56%, #000000 66.76%), url(".concat(u, ")")
							}
						}, o && a.createElement(a.Fragment, null, a.createElement(is, {
							selectedMatch: o
						}), a.createElement("div", {
							key: l,
							className: "wz2-tables-container"
						}, a.createElement(ls, {
							theadData: m,
							tbodyData: (n = [], r = 0, null == c || null === (t = c.players) || void 0 === t || t.map((function(e) {
								n.push({
									id: e.unoId,
									items: [++r, e.username, e.aiAgentKills, e.kills, e.reviveCount, e.containerOpenCount],
									isCurrent: e.unoId === d
								})
							})), n)
						}))), a.createElement("div", {
							className: "border-box"
						}))
					},
					cs = function(e) {
						var t = e.width,
							n = e.height,
							r = e.titleLabel,
							i = e.title,
							o = e.iconHeight,
							l = e.subLabel,
							s = e.subVal,
							c = e.iconUrl,
							d = e.iconText,
							m = e.isEmpty;
						return i || void 0 !== s ? a.createElement(ts, {
							width: t,
							height: n
						}, a.createElement("div", {
							className: "tile-header"
						}, a.createElement("div", {
							className: "sub-title"
						}, r), a.createElement("div", {
							className: "sub-value"
						}, i)), a.createElement("div", {
							style: {
								height: o
							},
							className: "icon-text"
						}, d || a.createElement("img", {
							src: c
						})), Da(s) && a.createElement("div", {
							className: "tile-footer"
						}, a.createElement("div", {
							className: "sub-title"
						}, l), a.createElement("div", {
							className: "sub-value"
						}, s))) : a.createElement(ts, {
							width: t,
							height: n,
							className: "empty-tile"
						}, a.createElement("div", {
							className: "empty-block"
						}, !m && a.createElement("div", {
							className: "tile-header"
						}, a.createElement("div", {
							className: "sub-title"
						}, r), a.createElement("div", {
							className: "sub-value"
						}, i || "--"))))
					},
					ds = function(e) {
						var t, n, r, o, l, s, c, d, m, u, g, p, h, f, v, b, _, y, E, w, S, k, x, R, T, L, D, M, I, A, N, C, P, z, O, j, B, G, Z, U, K, H, W, q, F, V, Q, X, J, $, ee, te, ne, ae, re, ie, oe, le = e.selectedMatch,
							se = (0, i.v9)((function(e) {
								return e.global.language
							})),
							ce = (0, i.v9)((function(e) {
								return e.global.is4k
							})),
							de = (null == le || null === (t = le.extractedItems) || void 0 === t || null === (n = t.genericItems) || void 0 === n ? void 0 : n.length) < 9 ? 9 - (null == le || null === (r = le.extractedItems) || void 0 === r || null === (o = r.genericItems) || void 0 === o ? void 0 : o.length) : 0,
							me = "https://assets.callofduty.com/cdn/app/codp/iw9/map-load/loading_".concat(null == le ? void 0 : le.map, "_bg_1150x818.jpg"),
							ue = (null == le || null === (l = le.extractedItems) || void 0 === l || null === (s = l.genericItems) || void 0 === s ? void 0 : s.length) > 9 ? null == le || null === (c = le.extractedItems) || void 0 === c || null === (d = c.genericItems) || void 0 === d ? void 0 : d.slice(0, 9) : null == le || null === (m = le.extractedItems) || void 0 === m ? void 0 : m.genericItems;
						return a.createElement(Jl, {
							style: {
								backgroundImage: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.25) 27.19%, rgba(0, 0, 0, 0.25) 36.56%, #000000 66.76%), url(".concat(me, ")")
							}
						}, le && a.createElement(a.Fragment, null, a.createElement(is, {
							selectedMatch: le
						}), a.createElement("div", {
							className: "main-section"
						}, a.createElement("div", null, kt[se].extractedItems), a.createElement("div", {
							className: "weapons-section"
						}, a.createElement(cs, {
							title: null == le || null === (u = le.extractedItems) || void 0 === u || null === (g = u.weapon1) || void 0 === g ? void 0 : g.label,
							titleLabel: kt[se].weapon,
							width: 34.3,
							height: 18.6,
							iconUrl: "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/".concat(null == le || null === (p = le.extractedItems) || void 0 === p || null === (h = p.weapon1) || void 0 === h ? void 0 : h.hudImage, "_").concat(ce ? "410x112" : "224x112", ".png"),
							iconHeight: "11.2rem"
						}), a.createElement(cs, {
							title: null == le || null === (f = le.extractedItems) || void 0 === f || null === (v = f.weapon2) || void 0 === v ? void 0 : v.label,
							titleLabel: kt[se].weapon,
							width: 34.3,
							height: 18.6,
							iconUrl: "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/".concat(null == le || null === (b = le.extractedItems) || void 0 === b || null === (_ = b.weapon2) || void 0 === _ ? void 0 : _.hudImage, "_").concat(ce ? "410x112" : "224x112", ".png"),
							iconHeight: "11.2rem"
						}), a.createElement(cs, {
							title: null == le || null === (y = le.extractedItems) || void 0 === y || null === (E = y.weapon3) || void 0 === E ? void 0 : E.label,
							titleLabel: kt[se].weapon,
							width: 34.3,
							height: 18.6,
							iconUrl: "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/".concat(null == le || null === (w = le.extractedItems) || void 0 === w || null === (S = w.weapon3) || void 0 === S ? void 0 : S.hudImage, "_").concat(ce ? "410x112" : "224x112", ".png"),
							iconHeight: "11.2rem"
						})), a.createElement("div", {
							className: "equip-section"
						}, a.createElement(cs, {
							title: null == le || null === (k = le.extractedItems) || void 0 === k || null === (x = k.lethalEquipment) || void 0 === x ? void 0 : x.label,
							titleLabel: kt[se].lethal,
							width: 22.2,
							height: 12.1,
							iconUrl: "https://assets.callofduty.com/cdn/app/codp/iw9/dmz/".concat(null == le || null === (R = le.extractedItems) || void 0 === R || null === (T = R.lethalEquipment) || void 0 === T ? void 0 : T.hudImage, "_").concat("60x60", ".png"),
							iconHeight: "6rem"
						}), a.createElement(cs, {
							title: null == le || null === (L = le.extractedItems) || void 0 === L || null === (D = L.tacticalEquipment) || void 0 === D ? void 0 : D.label,
							titleLabel: kt[se].tacticalEquipment,
							width: 22.2,
							height: 12.1,
							iconUrl: "https://assets.callofduty.com/cdn/app/codp/iw9/dmz/".concat(null == le || null === (M = le.extractedItems) || void 0 === M || null === (I = M.tacticalEquipment) || void 0 === I ? void 0 : I.hudImage, "_").concat("60x60", ".png"),
							iconHeight: "6rem"
						}), a.createElement(cs, {
							title: null == le || null === (A = le.extractedItems) || void 0 === A || null === (N = A.fieldUpgrade) || void 0 === N ? void 0 : N.label,
							titleLabel: kt[se].fieldUpgrade,
							width: 22.2,
							height: 12.1,
							iconUrl: "https://assets.callofduty.com/cdn/app/codp/iw9/dmz/".concat(null == le || null === (C = le.extractedItems) || void 0 === C || null === (P = C.fieldUpgrade) || void 0 === P ? void 0 : P.hudImage, "_").concat("60x60", ".png"),
							iconHeight: "6rem"
						})), a.createElement("div", {
							className: "gears-section"
						}, a.createElement(cs, {
							title: kt[se].cash,
							width: 22.2,
							height: 12.1,
							iconText: null == le || null === (z = le.extractedItems) || void 0 === z ? void 0 : z.cash,
							iconHeight: "6rem",
							subLabel: kt[se].xp,
							subVal: null == le || null === (O = le.extractedItems) || void 0 === O ? void 0 : O.cashXp
						}), a.createElement(es, {
							width: 70.5,
							height: 12.1
						}, a.createElement("div", {
							className: "gear-tile"
						}, a.createElement("div", {
							className: "tile-header"
						}, a.createElement("div", {
							className: "sub-title"
						}, kt[se].armorCarrier), a.createElement("div", {
							className: "sub-value"
						}, (null == le || null === (j = le.extractedItems) || void 0 === j || null === (B = j.gear1) || void 0 === B ? void 0 : B.label) || "--")), a.createElement("div", {
							className: "icon-text"
						}, (null == le || null === (G = le.extractedItems) || void 0 === G || null === (Z = G.gear1) || void 0 === Z ? void 0 : Z.hudImage) && a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/dmz/".concat(null == le || null === (U = le.extractedItems) || void 0 === U || null === (K = U.gear1) || void 0 === K ? void 0 : K.hudImage, "_").concat(ce ? "80x80" : "40x40", ".png"),
							alt: ""
						}))), a.createElement("div", {
							className: "vertical-line"
						}), a.createElement("div", {
							className: "gear-tile"
						}, a.createElement("div", {
							className: "tile-header"
						}, a.createElement("div", {
							className: "sub-title"
						}, kt[se].gasMask), a.createElement("div", {
							className: "sub-value"
						}, null == le || null === (H = le.extractedItems.gear2) || void 0 === H ? void 0 : H.label)), a.createElement("div", {
							className: "icon-text"
						}, (null == le || null === (W = le.extractedItems) || void 0 === W || null === (q = W.gear2) || void 0 === q ? void 0 : q.hudImage) && a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/dmz/".concat(null == le || null === (F = le.extractedItems) || void 0 === F || null === (V = F.gear2) || void 0 === V ? void 0 : V.hudImage, "_").concat(ce ? "80x80" : "40x40", ".png")
						}))), a.createElement("div", {
							className: "vertical-line"
						}), a.createElement("div", {
							className: "gear-tile"
						}, a.createElement("div", {
							className: "tile-header"
						}, a.createElement("div", {
							className: "sub-title"
						}, kt[se].killStreak), a.createElement("div", {
							className: "sub-value"
						}, null == le || null === (Q = le.extractedItems) || void 0 === Q || null === (X = Q.gear3) || void 0 === X ? void 0 : X.label)), a.createElement("div", {
							className: "icon-text"
						}, (null == le || null === (J = le.extractedItems) || void 0 === J || null === ($ = J.gear3) || void 0 === $ ? void 0 : $.hudImage) && a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/dmz/".concat(null == le || null === (ee = le.extractedItems) || void 0 === ee || null === (te = ee.gear3) || void 0 === te ? void 0 : te.hudImage, "_").concat(ce ? "80x80" : "40x40", ".png")
						}))), a.createElement("div", {
							className: "vertical-line"
						}), a.createElement("div", {
							className: "gear-tile"
						}, a.createElement("div", {
							className: "tile-header"
						}, a.createElement("div", {
							className: "sub-title"
						}, kt[se].selfRevive), a.createElement("div", {
							className: "sub-value"
						}, null == le || null === (ne = le.extractedItems.gear4) || void 0 === ne ? void 0 : ne.label)), a.createElement("div", {
							className: "icon-text"
						}, (null == le || null === (ae = le.extractedItems) || void 0 === ae || null === (re = ae.gear4) || void 0 === re ? void 0 : re.hudImage) && a.createElement("img", {
							src: "https://assets.callofduty.com/cdn/app/codp/iw9/dmz/".concat(null == le || null === (ie = le.extractedItems) || void 0 === ie || null === (oe = ie.gear4) || void 0 === oe ? void 0 : oe.hudImage, "_").concat(ce ? "80x80" : "40x40", ".png")
						}))))), a.createElement("div", {
							className: "generic-tiles"
						}, null == ue ? void 0 : ue.map((function(e) {
							return a.createElement(cs, {
								key: e.label,
								width: 10.5,
								height: 10.1,
								iconUrl: "https://assets.callofduty.com/cdn/app/codp/iw9/dmz/".concat(e.hudImage, "_").concat(ce ? "66x66" : "33x33", ".png"),
								iconHeight: "3.3rem",
								subLabel: kt[se].xp,
								subVal: null == e ? void 0 : e.xp
							})
						})), (0, Y.Z)(Array(de)).map((function(e) {
							return a.createElement(cs, {
								key: e,
								width: 10.5,
								height: 10.1,
								isEmpty: !0,
								iconHeight: "3.3rem"
							})
						}))))))
					},
					ms = function(e) {
						var t = e.selectedMatch,
							n = e.setSelectedMatch,
							r = e.hasData,
							o = (0, i.v9)((function(e) {
								return e.global.language
							})),
							l = (0, a.useState)(kt[o].matchSummary),
							s = (0, et.Z)(l, 2),
							c = s[0],
							d = s[1],
							m = [{
								title: kt[o].matchSummary
							}, {
								title: kt[o].scoreboard
							}],
							u = function() {
								c === kt[o].matchSummary && (d(kt[o].scoreboard), Wt("ui_radial_button_select"))
							},
							g = function() {
								c === kt[o].scoreboard && (d(kt[o].matchSummary), Wt("ui_radial_button_select"))
							};
						return ka(1, {
							RIGHT: u,
							LEFT: g
						}), xa(c, {
							next: u,
							prev: g
						}), a.createElement(Ql, null, c === kt[o].matchSummary && a.createElement(os, {
							selectedMatch: t,
							selectedKey: null == t ? void 0 : t.matchID,
							setSelectedMatch: n,
							hasData: r
						}), c === kt[o].extractedItems && a.createElement(ds, {
							selectedKey: null == t ? void 0 : t.matchID,
							selectedMatch: t,
							hasData: r
						}), c === kt[o].scoreboard && a.createElement(ss, {
							selectedKey: null == t ? void 0 : t.matchID,
							selectedMatch: t,
							hasData: r
						}), a.createElement("div", {
							className: "footer-tab-list"
						}, a.createElement(fa, {
							type: "DPAD_LEFT_RIGHT",
							width: 4,
							height: 4,
							marginLeft: .4,
							fill: "#e7e7e7"
						}), null == m ? void 0 : m.map((function(e) {
							return a.createElement("div", {
								key: e.title,
								onClick: function() {
									return d(e.title)
								},
								className: e.title === c ? "active-selection" : "inactive-selection"
							}, e.title)
						}))))
					};
				var us, gs, ps = se.ZP.section(us || (us = (0, me.Z)(["\n    width: 100%;\n    height: 100%;\n    margin: 0rem 10rem;\n    padding: 8rem 0rem;\n    display: flex;\n    gap: 2rem;\n    .extracted-items {\n        &-header {\n            font-size: 2rem;\n            font-weight: bold;\n            color: rgba(85, 85, 85, 0.7);\n            text-transform: uppercase;\n            margin-bottom: 1rem;\n        }\n        &-sub-header {\n            font-size: 2rem;\n            font-weight: bold;\n            color: rgba(85, 85, 85, 0.7);\n            text-transform: uppercase;\n        }\n        &-sub-title {\n            font-size: 1.8rem;\n            color: #9aa39a;\n        }\n        &-sub-value {\n            font-size: 3.5rem;\n            font-weight: bold;\n            line-height: 4.3rem;\n            color: ", ";\n        }\n    }\n    .top-border-box {\n        padding: 0.6rem;\n        border: 0.2rem solid #555555;\n        border-bottom: 0;\n        width: 100%;\n    }\n    .bottom-border-box {\n        padding: 0.6rem;\n        border: 0.2rem solid #555555;\n        border-top: 0;\n        width: 100%;\n    }\n\n    .cash-section,\n    .dog-tags-section,\n    .weapons-section {\n        display: flex;\n        flex-direction: column;\n    }\n    .cash-extracted-content,\n    .dog-tags-content,\n    .weapons-content {\n        height: 60rem;\n    }\n    .border-left {\n        padding: 0 2rem;\n        margin: 2rem 0;\n        height: 10.5rem;\n        display: flex;\n        flex-direction: column;\n        gap: 1.2rem;\n        border-left: 0.2rem solid #555555;\n    }\n    .border-gold {\n        border-left: 0.2rem solid #d3a500;\n    }\n    .gold-text {\n        color: #d3a500;\n    }\n    .trophy-icon {\n        ", "\n        margin-right: 0.5rem;\n    }\n    .weapons-section {\n        display: flex;\n        flex-flow: row wrap;\n    }\n    .extracted-weapons-block {\n        padding-left: 2rem;\n    }\n    .weapon-block {\n        display: flex;\n        width: 34.3rem;\n        height: 18.6rem;\n        flex-direction: column;\n        padding: 1.6rem;\n        margin-right: 2.1rem;\n        background: rgba(231, 231, 231, 0.1);\n        clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0% 50%);\n        border-left: 0.2rem solid #666a66;\n        margin-top: 1.2rem;\n\n        .empty-block {\n            position: absolute;\n            inset: 0.2rem;\n            padding: 1rem 1.5rem;\n            background: rgba(231, 231, 231, 0.1);\n            clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0% 50%);\n        }\n        &.empty-weapon-block {\n            position: relative;\n            border: none;\n        }\n        .weapon-stats {\n            display: flex;\n            justify-content: space-between;\n        }\n        .tile-header {\n            font-size: 1.8rem;\n            line-height: 2.2rem;\n            color: #9aa39a;\n        }\n        .tile-value {\n            font-weight: bold;\n            font-size: 2rem;\n            text-overflow: ellipsis;\n            white-space: pre;\n            text-transform: uppercase;\n            overflow: hidden;\n            color: ", ";\n        }\n        .weapon-image {\n            img {\n                width: 24rem;\n                height: 12rem;\n            }\n        }\n    }\n"])), (function(e) {
					return e.theme.colors.neutralLight
				}), (function(e) {
					return e.isArabic && (0, se.iv)(gs || (gs = (0, me.Z)(["\n                margin-left: 0.5rem;\n            "])))
				}), (function(e) {
					return e.theme.colors.neutralLight
				}));
				const hs = function(e) {
						var t = e.className,
							n = e.children,
							r = e.title,
							i = e.width,
							o = void 0 === i ? "37rem" : i,
							l = e.icon,
							s = void 0 === l ? void 0 : l;
						return a.createElement("div", {
							className: t,
							style: {
								width: o
							}
						}, a.createElement("div", {
							className: "extracted-items-header"
						}, s, r), a.createElement("div", {
							className: "top-border-box"
						}), n, a.createElement("div", {
							className: "bottom-border-box"
						}))
					},
					fs = function() {
						var e, t, n, r, o, l, s, c, d, m, u, g, p = (0, i.I0)(),
							h = (0, i.v9)((function(e) {
								return e.record.filterRecency
							})),
							f = So(h).data,
							v = (0, i.v9)((function(e) {
								return e.global.isCrossConfirm
							})),
							b = (0, i.v9)(D),
							_ = (0, i.v9)((function(e) {
								return e.global.language
							})),
							y = ((0, i.v9)((function(e) {
								return e.global.is4k
							})), (0, i.v9)((function(e) {
								return e.record.selectedScreen
							}))),
							E = (0, i.v9)((function(e) {
								return e.record.selectedType
							})),
							w = (null == f || null === (e = f.extractedItemsStats) || void 0 === e || null === (t = e.mostExtractedWeapons) || void 0 === t ? void 0 : t.length) < 4 ? 4 - (null == f || null === (n = f.extractedItemsStats) || void 0 === n || null === (r = n.mostExtractedWeapons) || void 0 === r ? void 0 : r.length) : 0,
							S = [{
								title: kt[_].deployments,
								isDisabled: !1,
								key: 0
							}, {
								title: kt[_].extractedItems,
								isDisabled: !1,
								key: 1
							}];
						(0, a.useEffect)((function() {
							var e = S.find((function(e) {
								return e.key === k
							}));
							if (null != e && e.isDisabled) {
								var t = S.findIndex((function(e) {
									return !1 === e.isDisabled
								}));
								p(F.setSelectedTab(t))
							}
						}), [h, f]);
						var k = (0, i.v9)((function(e) {
								return e.record.selectedTab
							})),
							x = function() {
								var e, t = S.filter((function(e) {
										return !1 === e.isDisabled
									})),
									n = null == t ? void 0 : t.findIndex((function(e) {
										return e.key === k
									})),
									a = n !== S.length && (null === (e = t[n + 1]) || void 0 === e ? void 0 : e.key);
								a >= 0 && a < (null == S ? void 0 : S.length) && (p(F.setSelectedTab(a)), Wt("ui_hilite_tab"))
							},
							T = function() {
								var e, t = S.filter((function(e) {
										return !1 === e.isDisabled
									})),
									n = null == t ? void 0 : t.findIndex((function(e) {
										return e.key === k
									})),
									a = null === (e = t[n - 1]) || void 0 === e ? void 0 : e.key;
								a >= 0 && (p(F.setSelectedTab(a)), Wt("ui_hilite_tab"))
							};
						return xa(k, {
							moveRight: x,
							moveLeft: T,
							close: function() {
								return va(p, y, E, k)
							}
						}), ka(1, {
							LB: b ? x : T,
							RB: b ? T : x,
							XBA_PSCROSS: !v && function() {
								return va(p, y, E, k)
							},
							XBB_PSCIRCLE: v && function() {
								return va(p, y, E, k)
							}
						}), a.createElement("div", {
							className: "screen-content"
						}, a.createElement("div", {
							className: "extracted-item-screen"
						}, a.createElement(ps, {
							isArabic: b
						}, a.createElement(hs, {
							className: "cash-section",
							title: kt[_].cash
						}, a.createElement("div", {
							className: "cash-extracted-content"
						}, a.createElement("div", {
							className: "border-left"
						}, a.createElement("div", null), a.createElement("div", {
							className: "extracted-items-sub-title"
						}, kt[_].cashExtracted), a.createElement("div", {
							className: "extracted-items-sub-value"
						}, Nt(null == f || null === (o = f.extractedItemsStats) || void 0 === o ? void 0 : o.cashExtracted))), a.createElement("div", {
							className: "border-left border-gold"
						}, a.createElement("div", null), a.createElement("div", {
							className: "extracted-items-sub-title"
						}, a.createElement(Ii, {
							width: "1.4rem",
							fill: "#D3A500",
							className: "trophy-icon"
						}), kt[_].mostCashExtracted), a.createElement("div", {
							className: "extracted-items-sub-value gold-text"
						}, Nt(null == f || null === (l = f.extractedItemsStats) || void 0 === l ? void 0 : l.mostCashExtracted))))), a.createElement(hs, {
							className: "dog-tags-section",
							title: kt[_].dogTags
						}, a.createElement("div", {
							className: "dog-tags-content"
						}, a.createElement("div", {
							className: "border-left"
						}, a.createElement("div", {
							className: "extracted-items-sub-title"
						}, kt[_].dogTagsExtracted), a.createElement("div", {
							className: "extracted-items-sub-value"
						}, null == f || null === (s = f.extractedItemsStats) || void 0 === s ? void 0 : s.dogTagsExtracted)), a.createElement("div", {
							className: "border-left border-gold"
						}, a.createElement("div", {
							className: "extracted-items-sub-title"
						}, a.createElement(Ii, {
							width: "1.4rem",
							fill: "#D3A500",
							className: "trophy-icon"
						}), kt[_].highestDogTagExtracted), a.createElement("div", {
							className: "extracted-items-sub-title gold-text"
						}, null == R || null === (c = R[_]) || void 0 === c ? void 0 : c[null == f || null === (d = f.extractedItemsStats) || void 0 === d ? void 0 : d.highestDogTagExtractedLabel]), a.createElement("div", {
							className: "extracted-items-sub-value gold-text"
						}, null == f || null === (m = f.extractedItemsStats) || void 0 === m ? void 0 : m.highestDogTagExtracted)))), a.createElement(hs, {
							className: "weapons-section",
							title: kt[_].weapons,
							width: "75.7rem"
						}, a.createElement("div", {
							className: "weapons-content"
						}, a.createElement("div", {
							className: "border-left"
						}, a.createElement("div", {
							className: "extracted-items-sub-title"
						}, kt[_].weaponsExtracted), a.createElement("div", {
							className: "extracted-items-sub-value"
						}, null == f || null === (u = f.extractedItemsStats) || void 0 === u ? void 0 : u.weaponsExtracted)), a.createElement("div", {
							className: "extracted-weapons-block"
						}, a.createElement("div", {
							className: "extracted-items-sub-title"
						}, kt[_].mostExtractedWeapons), a.createElement("div", {
							className: "weapons-section"
						}, null == f || null === (g = f.extractedItemsStats) || void 0 === g ? void 0 : g.mostExtractedWeapons.map((function(e) {
							return a.createElement("div", {
								key: null == e ? void 0 : e.label,
								className: "weapon-block"
							}, a.createElement("div", {
								className: "weapon-stats"
							}, a.createElement("div", null, a.createElement("div", {
								className: "tile-header"
							}, kt[_].weapon), a.createElement("div", {
								className: "tile-value"
							}, (null == e ? void 0 : e.label) || "--")), a.createElement("div", null, a.createElement("div", {
								className: "tile-header"
							}, kt[_].timesExtracted), a.createElement("div", {
								className: "tile-value"
							}, null == e ? void 0 : e.extracted))), a.createElement("div", {
								className: "weapon-image"
							}, a.createElement("div", {
								style: {
									textAlign: "center"
								}
							}, a.createElement("img", {
								src: "https://assets.callofduty.com/cdn/app/codp/iw9/weapon/".concat(null == e ? void 0 : e.hudImage, "_240x120.png")
							}))))
						})), (0, Y.Z)(Array(w)).map((function(e) {
							return a.createElement("div", {
								key: e,
								className: "weapon-block empty-weapon-block"
							}, a.createElement("div", {
								className: "empty-block"
							}))
						}))))))), a.createElement(zi, {
							filterRecency: h,
							handleClickFilter: ba
						})))
					},
					vs = function() {
						var e, t = (0, i.v9)((function(e) {
								return e.record.recentMatches
							})),
							n = (0, i.v9)((function(e) {
								return e.record.recentMatchesError
							})),
							r = (0, i.v9)((function(e) {
								return e.record.recentMatchesLoaded
							})),
							o = (0, i.I0)(),
							l = (0, i.v9)((function(e) {
								return e.record.filterRecency
							})),
							s = So(l).loaded,
							c = (0, i.v9)((function(e) {
								return e.global.isCrossConfirm
							})),
							d = (0, i.v9)(D),
							m = (0, i.v9)((function(e) {
								return e.global.language
							})),
							u = (0, i.v9)((function(e) {
								return e.record.dmzData
							})),
							g = t && (null == t || null === (e = t.matches) || void 0 === e ? void 0 : e.length) > 0 && !n && r,
							p = (0, a.useState)((null == t ? void 0 : t.matches) && (null == t ? void 0 : t.matches[0])),
							h = (0, et.Z)(p, 2),
							f = h[0],
							v = h[1],
							b = (0, i.v9)((function(e) {
								return e.record.selectedScreen
							})),
							_ = (0, i.v9)((function(e) {
								return e.record.selectedType
							})),
							y = [{
								title: kt[m].deployments,
								isDisabled: !1,
								key: 0
							}, {
								title: kt[m].extractedItems,
								isDisabled: !1,
								key: 1
							}];
						(0, a.useEffect)((function() {
							((null == u ? void 0 : u.matchesData) && (null == u ? void 0 : u.matchesData[0].matchId)) !== ((null == t ? void 0 : t.matches) && (null == t ? void 0 : t.matches[0].matchId)) && r && o(W({
								gameTitle: "dmz"
							}))
						}), [l, r]), (0, a.useEffect)((function() {
							var e = (null == t ? void 0 : t.matches) && (null == t ? void 0 : t.matches[0]),
								n = null == e ? void 0 : e.matchId;
							if (void 0 !== n) {
								v(e), o(H({
									id: n,
									gameTitle: "dmz"
								}));
								var a = y.find((function(e) {
									return e.key === E
								}));
								if (null != a && a.isDisabled) {
									var r = y.findIndex((function(e) {
										return !1 === e.isDisabled
									}));
									o(F.setSelectedTab(r))
								}
							}
						}), [l, t]);
						var E = (0, i.v9)((function(e) {
								return e.record.selectedTab
							})),
							w = function() {
								var e, t = y.filter((function(e) {
										return !1 === e.isDisabled
									})),
									n = null == t ? void 0 : t.findIndex((function(e) {
										return e.key === E
									})),
									a = n !== y.length && (null === (e = t[n + 1]) || void 0 === e ? void 0 : e.key);
								a >= 0 && a < (null == y ? void 0 : y.length) && (o(F.setSelectedTab(a)), Wt("ui_hilite_tab"))
							},
							S = function() {
								var e, t = y.filter((function(e) {
										return !1 === e.isDisabled
									})),
									n = null == t ? void 0 : t.findIndex((function(e) {
										return e.key === E
									})),
									a = null === (e = t[n - 1]) || void 0 === e ? void 0 : e.key;
								a >= 0 && (o(F.setSelectedTab(a)), Wt("ui_hilite_tab"))
							};
						return xa(E, {
							moveRight: w,
							moveLeft: S,
							close: function() {
								return va(o, b, _, E)
							}
						}), ka(1, {
							LB: d ? w : S,
							RB: d ? S : w,
							XBA_PSCROSS: !c && function() {
								return va(o, b, _, E)
							},
							XBB_PSCIRCLE: c && function() {
								return va(o, b, _, E)
							}
						}), a.createElement(a.Fragment, null, (!s || !r) && a.createElement(ar, null), a.createElement(er, {
							tabs: y
						}), a.createElement($a, null, a.createElement("div", null, kt[m].statusMessage)), a.createElement(Fl, {
							isArabic: d
						}, 0 === E ? a.createElement("div", {
							className: "screen-content"
						}, a.createElement(rs, {
							data: null == t ? void 0 : t.matches,
							selectedMatch: f,
							setSelectedMatch: v
						}), f && a.createElement("div", {
							className: "recents-right"
						}, a.createElement(ms, {
							selectedMatch: f,
							selectedKey: null == f ? void 0 : f.matchID,
							setSelectedMatch: v,
							hasData: g
						}))) : a.createElement(fs, null)))
					},
					bs = function() {
						var e = (0, i.v9)((function(e) {
								return e.record.selectedScreen
							})),
							t = (0, i.v9)(D),
							n = (0, i.v9)((function(e) {
								return e.record.activeCrTitle
							})),
							r = (0, i.v9)((function(e) {
								return e.record.selectedGameMode
							})),
							o = (0, i.v9)((function(e) {
								return e.record.activeLbTitle
							})),
							l = (0, i.I0)(),
							s = ir[0].gameType["mw2" === o ? 0 : 1],
							c = (0, i.v9)((function(e) {
								return e.global.selectedMainTabIndex
							}));
						return (0, a.useEffect)((function() {
							l(ie.setSelectedScreen(e))
						}), [e]), a.createElement(Re, {
							isArabic: t,
							className: "entryscreen" === e ? 0 === c ? "mp" === r ? "entry-screen-background mw-bg" : "br" === r ? "entry-screen-background wz-bg" : "resurgence" === r ? "entry-screen-background resurgence-bg" : "plunder" === r ? "entry-screen-background plunder-bg" : "dmz" === r ? "entry-screen-background dmz-bg" : "wz2" === n ? "entry-screen-background wz-bg" : "entry-screen-background dmz-bg" : "mw2" === o ? "entry-screen-background lb mw-bg" : "entry-screen-background lb wz-bg" : "lbentryscreen" === e ? "mw2" === o ? "entry-screen-background lb mw-bg" : "entry-screen-background lb wz-bg" : "default-background",
							bgImage: s.bgImage
						}, ("entryscreen" === e || "lbentryscreen" === e) && a.createElement(Rr, {
							activeCrTitle: n,
							setActiveCrTitle: function(e) {
								return l(F.setActiveCrTitle(e))
							},
							activeLbTitle: o,
							setActiveLbTitle: function(e) {
								return l(F.setActiveLbTitle(e))
							},
							lbTileData: ir,
							selectedMainTabIndex: c
						}), "dashboard" === e && a.createElement(Zi, {
							handleClickFilter: ba
						}), "recents" === e && a.createElement(ko, null), "recentsWz2" === e && a.createElement(Fo, null), "recentsDmz" === e && a.createElement(vs, null), "career" === e && a.createElement(il, null), "loadout" === e && a.createElement(Al, {
							handleClickFilter: ba
						}), "leaderboards" === e && a.createElement(mi, null))
					},
					_s = function() {
						var e = (0, i.I0)(),
							t = (0, i.v9)((function(e) {
								return e.global.authToken
							})),
							n = (0, i.v9)((function(e) {
								return e.global.env
							}));
						return (0, a.useEffect)((function() {
							window.Telescope_CB_LastInputDeviceUpdated = function(t, n) {
								e(M.setLastInputDevice(t)), e(M.setLastInputGamepad(n))
							}, window.Telescope_CB_GainFocus = function() {
								e(M.setIsFocused(!0))
							}, window.Telescope_CB_LoseFocus = function() {
								e(M.setIsFocused(!1))
							}, "undefined" != typeof Telescope_API_LoadComplete ? Telescope_API_LoadComplete(true) : y("Telescope_API_LoadComplete not defined")
						}), []), (0, a.useEffect)((function() {
							e(M.setLastInputDevice(_("last_input_device", !0))), e(M.setLastInputGamepad(_("last_input_gamepad", !0)))
						}), [_("last_input_device", !0), _("last_input_gamepad", !0)]), "dev" !== n && "shaqa" !== n || t ? a.createElement(de, null, a.createElement(_e, null), a.createElement("main", null, a.createElement(bs, null))) : a.createElement("div", null)
					};
				window.__telescope__ = !0, (0, r.render)(a.createElement(i.zt, {
					store: le
				}, a.createElement(_s, null)), document.querySelector("#root"))
			},
			63210: (e, t, n) => {
				var a = {
					"./_lib/buildFormatLongFn/index.js": 20289,
					"./_lib/buildLocalizeFn/index.js": 16245,
					"./_lib/buildMatchFn/index.js": 43421,
					"./_lib/buildMatchPatternFn/index.js": 78926,
					"./af/_lib/formatDistance/index.js": 41146,
					"./af/_lib/formatLong/index.js": 60358,
					"./af/_lib/formatRelative/index.js": 31310,
					"./af/_lib/localize/index.js": 82714,
					"./af/_lib/match/index.js": 33185,
					"./af/index.js": 74156,
					"./ar-DZ/_lib/formatDistance/index.js": 10258,
					"./ar-DZ/_lib/formatLong/index.js": 38384,
					"./ar-DZ/_lib/formatRelative/index.js": 12923,
					"./ar-DZ/_lib/localize/index.js": 50996,
					"./ar-DZ/_lib/match/index.js": 53463,
					"./ar-DZ/index.js": 79307,
					"./ar-EG/_lib/formatDistance/index.js": 70405,
					"./ar-EG/_lib/formatLong/index.js": 59137,
					"./ar-EG/_lib/formatRelative/index.js": 19798,
					"./ar-EG/_lib/localize/index.js": 20303,
					"./ar-EG/_lib/match/index.js": 2527,
					"./ar-EG/index.js": 56379,
					"./ar-MA/_lib/formatDistance/index.js": 56716,
					"./ar-MA/_lib/formatLong/index.js": 92086,
					"./ar-MA/_lib/formatRelative/index.js": 79302,
					"./ar-MA/_lib/localize/index.js": 89105,
					"./ar-MA/_lib/match/index.js": 18092,
					"./ar-MA/index.js": 22739,
					"./ar-SA/_lib/formatDistance/index.js": 56224,
					"./ar-SA/_lib/formatLong/index.js": 22041,
					"./ar-SA/_lib/formatRelative/index.js": 90046,
					"./ar-SA/_lib/localize/index.js": 16274,
					"./ar-SA/_lib/match/index.js": 7161,
					"./ar-SA/index.js": 51730,
					"./ar-TN/_lib/formatDistance/index.js": 98818,
					"./ar-TN/_lib/formatLong/index.js": 19048,
					"./ar-TN/_lib/formatRelative/index.js": 30005,
					"./ar-TN/_lib/localize/index.js": 7649,
					"./ar-TN/_lib/match/index.js": 34357,
					"./ar-TN/index.js": 37650,
					"./ar/_lib/formatDistance/index.js": 29226,
					"./ar/_lib/formatLong/index.js": 45604,
					"./ar/_lib/formatRelative/index.js": 77237,
					"./ar/_lib/localize/index.js": 72890,
					"./ar/_lib/match/index.js": 53372,
					"./ar/index.js": 18137,
					"./az/_lib/formatDistance/index.js": 67580,
					"./az/_lib/formatLong/index.js": 3381,
					"./az/_lib/formatRelative/index.js": 5895,
					"./az/_lib/localize/index.js": 79557,
					"./az/_lib/match/index.js": 74390,
					"./az/index.js": 77356,
					"./be-tarask/_lib/formatDistance/index.js": 45515,
					"./be-tarask/_lib/formatLong/index.js": 49505,
					"./be-tarask/_lib/formatRelative/index.js": 37233,
					"./be-tarask/_lib/localize/index.js": 22623,
					"./be-tarask/_lib/match/index.js": 96427,
					"./be-tarask/index.js": 53336,
					"./be/_lib/formatDistance/index.js": 564,
					"./be/_lib/formatLong/index.js": 87682,
					"./be/_lib/formatRelative/index.js": 28206,
					"./be/_lib/localize/index.js": 13533,
					"./be/_lib/match/index.js": 71682,
					"./be/index.js": 9624,
					"./bg/_lib/formatDistance/index.js": 79681,
					"./bg/_lib/formatLong/index.js": 45930,
					"./bg/_lib/formatRelative/index.js": 21185,
					"./bg/_lib/localize/index.js": 91641,
					"./bg/_lib/match/index.js": 45152,
					"./bg/index.js": 94719,
					"./bn/_lib/formatDistance/index.js": 67835,
					"./bn/_lib/formatLong/index.js": 32076,
					"./bn/_lib/formatRelative/index.js": 36520,
					"./bn/_lib/localize/index.js": 12674,
					"./bn/_lib/match/index.js": 35920,
					"./bn/index.js": 82182,
					"./bs/_lib/formatDistance/index.js": 95963,
					"./bs/_lib/formatLong/index.js": 25711,
					"./bs/_lib/formatRelative/index.js": 44374,
					"./bs/_lib/localize/index.js": 28113,
					"./bs/_lib/match/index.js": 69866,
					"./bs/index.js": 32181,
					"./ca/_lib/formatDistance/index.js": 49280,
					"./ca/_lib/formatLong/index.js": 16686,
					"./ca/_lib/formatRelative/index.js": 54470,
					"./ca/_lib/localize/index.js": 50683,
					"./ca/_lib/match/index.js": 73146,
					"./ca/index.js": 44732,
					"./cs/_lib/formatDistance/index.js": 79434,
					"./cs/_lib/formatLong/index.js": 18336,
					"./cs/_lib/formatRelative/index.js": 3003,
					"./cs/_lib/localize/index.js": 48793,
					"./cs/_lib/match/index.js": 63626,
					"./cs/index.js": 76105,
					"./cy/_lib/formatDistance/index.js": 90305,
					"./cy/_lib/formatLong/index.js": 32132,
					"./cy/_lib/formatRelative/index.js": 68527,
					"./cy/_lib/localize/index.js": 17863,
					"./cy/_lib/match/index.js": 53494,
					"./cy/index.js": 96227,
					"./da/_lib/formatDistance/index.js": 96569,
					"./da/_lib/formatLong/index.js": 20658,
					"./da/_lib/formatRelative/index.js": 31002,
					"./da/_lib/localize/index.js": 55578,
					"./da/_lib/match/index.js": 3393,
					"./da/index.js": 80925,
					"./de-AT/_lib/localize/index.js": 56443,
					"./de-AT/index.js": 73210,
					"./de/_lib/formatDistance/index.js": 82376,
					"./de/_lib/formatLong/index.js": 6749,
					"./de/_lib/formatRelative/index.js": 91805,
					"./de/_lib/localize/index.js": 56105,
					"./de/_lib/match/index.js": 83996,
					"./de/index.js": 76119,
					"./el/_lib/formatDistance/index.js": 96170,
					"./el/_lib/formatLong/index.js": 22761,
					"./el/_lib/formatRelative/index.js": 5093,
					"./el/_lib/localize/index.js": 79919,
					"./el/_lib/match/index.js": 20320,
					"./el/index.js": 71511,
					"./en-AU/_lib/formatLong/index.js": 47483,
					"./en-AU/index.js": 51971,
					"./en-CA/_lib/formatDistance/index.js": 16925,
					"./en-CA/_lib/formatLong/index.js": 17156,
					"./en-CA/index.js": 23654,
					"./en-GB/_lib/formatLong/index.js": 90125,
					"./en-GB/index.js": 22709,
					"./en-IE/index.js": 84511,
					"./en-IN/_lib/formatLong/index.js": 44649,
					"./en-IN/index.js": 56635,
					"./en-NZ/_lib/formatLong/index.js": 88738,
					"./en-NZ/index.js": 3557,
					"./en-US/_lib/formatDistance/index.js": 71924,
					"./en-US/_lib/formatLong/index.js": 95062,
					"./en-US/_lib/formatRelative/index.js": 5102,
					"./en-US/_lib/localize/index.js": 87839,
					"./en-US/_lib/match/index.js": 9796,
					"./en-US/index.js": 82512,
					"./en-ZA/_lib/formatLong/index.js": 12820,
					"./en-ZA/index.js": 55585,
					"./eo/_lib/formatDistance/index.js": 60509,
					"./eo/_lib/formatLong/index.js": 61709,
					"./eo/_lib/formatRelative/index.js": 76297,
					"./eo/_lib/localize/index.js": 83419,
					"./eo/_lib/match/index.js": 66460,
					"./eo/index.js": 46050,
					"./es/_lib/formatDistance/index.js": 17308,
					"./es/_lib/formatLong/index.js": 19983,
					"./es/_lib/formatRelative/index.js": 54011,
					"./es/_lib/localize/index.js": 389,
					"./es/_lib/match/index.js": 71365,
					"./es/index.js": 19962,
					"./et/_lib/formatDistance/index.js": 37961,
					"./et/_lib/formatLong/index.js": 50363,
					"./et/_lib/formatRelative/index.js": 87335,
					"./et/_lib/localize/index.js": 50794,
					"./et/_lib/match/index.js": 60084,
					"./et/index.js": 58170,
					"./eu/_lib/formatDistance/index.js": 85454,
					"./eu/_lib/formatLong/index.js": 56183,
					"./eu/_lib/formatRelative/index.js": 94237,
					"./eu/_lib/localize/index.js": 5966,
					"./eu/_lib/match/index.js": 64402,
					"./eu/index.js": 9042,
					"./fa-IR/_lib/formatDistance/index.js": 87201,
					"./fa-IR/_lib/formatLong/index.js": 81884,
					"./fa-IR/_lib/formatRelative/index.js": 91912,
					"./fa-IR/_lib/localize/index.js": 97188,
					"./fa-IR/_lib/match/index.js": 43043,
					"./fa-IR/index.js": 13537,
					"./fi/_lib/formatDistance/index.js": 67380,
					"./fi/_lib/formatLong/index.js": 99532,
					"./fi/_lib/formatRelative/index.js": 15561,
					"./fi/_lib/localize/index.js": 64354,
					"./fi/_lib/match/index.js": 27530,
					"./fi/index.js": 95999,
					"./fr-CA/_lib/formatLong/index.js": 53860,
					"./fr-CA/index.js": 82580,
					"./fr-CH/_lib/formatLong/index.js": 96065,
					"./fr-CH/_lib/formatRelative/index.js": 16372,
					"./fr-CH/index.js": 89718,
					"./fr/_lib/formatDistance/index.js": 66522,
					"./fr/_lib/formatLong/index.js": 34325,
					"./fr/_lib/formatRelative/index.js": 22162,
					"./fr/_lib/localize/index.js": 38803,
					"./fr/_lib/match/index.js": 58213,
					"./fr/index.js": 63126,
					"./fy/_lib/formatDistance/index.js": 36945,
					"./fy/_lib/formatLong/index.js": 84905,
					"./fy/_lib/formatRelative/index.js": 50776,
					"./fy/_lib/localize/index.js": 82930,
					"./fy/_lib/match/index.js": 98756,
					"./fy/index.js": 8848,
					"./gd/_lib/formatDistance/index.js": 52646,
					"./gd/_lib/formatLong/index.js": 88030,
					"./gd/_lib/formatRelative/index.js": 11398,
					"./gd/_lib/localize/index.js": 77390,
					"./gd/_lib/match/index.js": 34044,
					"./gd/index.js": 93698,
					"./gl/_lib/formatDistance/index.js": 22523,
					"./gl/_lib/formatLong/index.js": 75618,
					"./gl/_lib/formatRelative/index.js": 2698,
					"./gl/_lib/localize/index.js": 68154,
					"./gl/_lib/match/index.js": 27475,
					"./gl/index.js": 68846,
					"./gu/_lib/formatDistance/index.js": 22933,
					"./gu/_lib/formatLong/index.js": 82513,
					"./gu/_lib/formatRelative/index.js": 46840,
					"./gu/_lib/localize/index.js": 98528,
					"./gu/_lib/match/index.js": 18201,
					"./gu/index.js": 56209,
					"./he/_lib/formatDistance/index.js": 75736,
					"./he/_lib/formatLong/index.js": 45218,
					"./he/_lib/formatRelative/index.js": 64125,
					"./he/_lib/localize/index.js": 20379,
					"./he/_lib/match/index.js": 15430,
					"./he/index.js": 16309,
					"./hi/_lib/formatDistance/index.js": 51734,
					"./hi/_lib/formatLong/index.js": 78241,
					"./hi/_lib/formatRelative/index.js": 56683,
					"./hi/_lib/localize/index.js": 65282,
					"./hi/_lib/match/index.js": 50248,
					"./hi/index.js": 37056,
					"./hr/_lib/formatDistance/index.js": 7792,
					"./hr/_lib/formatLong/index.js": 77910,
					"./hr/_lib/formatRelative/index.js": 45339,
					"./hr/_lib/localize/index.js": 77677,
					"./hr/_lib/match/index.js": 16436,
					"./hr/index.js": 97276,
					"./ht/_lib/formatDistance/index.js": 61245,
					"./ht/_lib/formatLong/index.js": 67737,
					"./ht/_lib/formatRelative/index.js": 39803,
					"./ht/_lib/localize/index.js": 19400,
					"./ht/_lib/match/index.js": 97695,
					"./ht/index.js": 55389,
					"./hu/_lib/formatDistance/index.js": 91898,
					"./hu/_lib/formatLong/index.js": 19266,
					"./hu/_lib/formatRelative/index.js": 41544,
					"./hu/_lib/localize/index.js": 69353,
					"./hu/_lib/match/index.js": 85370,
					"./hu/index.js": 79675,
					"./hy/_lib/formatDistance/index.js": 41839,
					"./hy/_lib/formatLong/index.js": 45625,
					"./hy/_lib/formatRelative/index.js": 80528,
					"./hy/_lib/localize/index.js": 74391,
					"./hy/_lib/match/index.js": 1824,
					"./hy/index.js": 74403,
					"./id/_lib/formatDistance/index.js": 95223,
					"./id/_lib/formatLong/index.js": 27166,
					"./id/_lib/formatRelative/index.js": 65673,
					"./id/_lib/localize/index.js": 98045,
					"./id/_lib/match/index.js": 10798,
					"./id/index.js": 51872,
					"./is/_lib/formatDistance/index.js": 67527,
					"./is/_lib/formatLong/index.js": 73003,
					"./is/_lib/formatRelative/index.js": 75440,
					"./is/_lib/localize/index.js": 53162,
					"./is/_lib/match/index.js": 75101,
					"./is/index.js": 28677,
					"./it-CH/_lib/formatLong/index.js": 98347,
					"./it-CH/index.js": 12264,
					"./it/_lib/formatDistance/index.js": 12642,
					"./it/_lib/formatLong/index.js": 96714,
					"./it/_lib/formatRelative/index.js": 74501,
					"./it/_lib/localize/index.js": 82713,
					"./it/_lib/match/index.js": 37281,
					"./it/index.js": 59629,
					"./ja-Hira/_lib/formatDistance/index.js": 65047,
					"./ja-Hira/_lib/formatLong/index.js": 44818,
					"./ja-Hira/_lib/formatRelative/index.js": 20942,
					"./ja-Hira/_lib/localize/index.js": 97031,
					"./ja-Hira/_lib/match/index.js": 71636,
					"./ja-Hira/index.js": 81590,
					"./ja/_lib/formatDistance/index.js": 15525,
					"./ja/_lib/formatLong/index.js": 45161,
					"./ja/_lib/formatRelative/index.js": 85071,
					"./ja/_lib/localize/index.js": 85598,
					"./ja/_lib/match/index.js": 93509,
					"./ja/index.js": 42180,
					"./ka/_lib/formatDistance/index.js": 87414,
					"./ka/_lib/formatLong/index.js": 27355,
					"./ka/_lib/formatRelative/index.js": 91402,
					"./ka/_lib/localize/index.js": 5552,
					"./ka/_lib/match/index.js": 75108,
					"./ka/index.js": 36501,
					"./kk/_lib/formatDistance/index.js": 52071,
					"./kk/_lib/formatLong/index.js": 99466,
					"./kk/_lib/formatRelative/index.js": 52400,
					"./kk/_lib/localize/index.js": 31814,
					"./kk/_lib/match/index.js": 5574,
					"./kk/index.js": 34996,
					"./km/_lib/formatDistance/index.js": 97263,
					"./km/_lib/formatLong/index.js": 66355,
					"./km/_lib/formatRelative/index.js": 34833,
					"./km/_lib/localize/index.js": 99273,
					"./km/_lib/match/index.js": 7916,
					"./km/index.js": 38684,
					"./kn/_lib/formatDistance/index.js": 56071,
					"./kn/_lib/formatLong/index.js": 78505,
					"./kn/_lib/formatRelative/index.js": 8440,
					"./kn/_lib/localize/index.js": 23283,
					"./kn/_lib/match/index.js": 27211,
					"./kn/index.js": 43434,
					"./ko/_lib/formatDistance/index.js": 36136,
					"./ko/_lib/formatLong/index.js": 91257,
					"./ko/_lib/formatRelative/index.js": 52593,
					"./ko/_lib/localize/index.js": 93558,
					"./ko/_lib/match/index.js": 97948,
					"./ko/index.js": 2666,
					"./lb/_lib/formatDistance/index.js": 40714,
					"./lb/_lib/formatLong/index.js": 73815,
					"./lb/_lib/formatRelative/index.js": 1395,
					"./lb/_lib/localize/index.js": 45973,
					"./lb/_lib/match/index.js": 34308,
					"./lb/index.js": 84048,
					"./lt/_lib/formatDistance/index.js": 42067,
					"./lt/_lib/formatLong/index.js": 83573,
					"./lt/_lib/formatRelative/index.js": 63963,
					"./lt/_lib/localize/index.js": 16687,
					"./lt/_lib/match/index.js": 79884,
					"./lt/index.js": 2536,
					"./lv/_lib/formatDistance/index.js": 41340,
					"./lv/_lib/formatLong/index.js": 47090,
					"./lv/_lib/formatRelative/index.js": 54550,
					"./lv/_lib/localize/index.js": 44306,
					"./lv/_lib/match/index.js": 94305,
					"./lv/index.js": 3610,
					"./mk/_lib/formatDistance/index.js": 83350,
					"./mk/_lib/formatLong/index.js": 30299,
					"./mk/_lib/formatRelative/index.js": 21154,
					"./mk/_lib/localize/index.js": 49324,
					"./mk/_lib/match/index.js": 45603,
					"./mk/index.js": 1057,
					"./mn/_lib/formatDistance/index.js": 64216,
					"./mn/_lib/formatLong/index.js": 10562,
					"./mn/_lib/formatRelative/index.js": 69683,
					"./mn/_lib/localize/index.js": 48637,
					"./mn/_lib/match/index.js": 64094,
					"./mn/index.js": 14893,
					"./ms/_lib/formatDistance/index.js": 79522,
					"./ms/_lib/formatLong/index.js": 14333,
					"./ms/_lib/formatRelative/index.js": 51140,
					"./ms/_lib/localize/index.js": 97118,
					"./ms/_lib/match/index.js": 14396,
					"./ms/index.js": 83148,
					"./mt/_lib/formatDistance/index.js": 92252,
					"./mt/_lib/formatLong/index.js": 64778,
					"./mt/_lib/formatRelative/index.js": 69682,
					"./mt/_lib/localize/index.js": 57669,
					"./mt/_lib/match/index.js": 7438,
					"./mt/index.js": 22598,
					"./nb/_lib/formatDistance/index.js": 5979,
					"./nb/_lib/formatLong/index.js": 54727,
					"./nb/_lib/formatRelative/index.js": 91423,
					"./nb/_lib/localize/index.js": 99726,
					"./nb/_lib/match/index.js": 38558,
					"./nb/index.js": 46815,
					"./nl-BE/_lib/formatDistance/index.js": 70218,
					"./nl-BE/_lib/formatLong/index.js": 14661,
					"./nl-BE/_lib/formatRelative/index.js": 51573,
					"./nl-BE/_lib/localize/index.js": 20174,
					"./nl-BE/_lib/match/index.js": 87601,
					"./nl-BE/index.js": 25778,
					"./nl/_lib/formatDistance/index.js": 98562,
					"./nl/_lib/formatLong/index.js": 30221,
					"./nl/_lib/formatRelative/index.js": 96665,
					"./nl/_lib/localize/index.js": 90384,
					"./nl/_lib/match/index.js": 15009,
					"./nl/index.js": 70390,
					"./nn/_lib/formatDistance/index.js": 49714,
					"./nn/_lib/formatLong/index.js": 29983,
					"./nn/_lib/formatRelative/index.js": 35458,
					"./nn/_lib/localize/index.js": 87563,
					"./nn/_lib/match/index.js": 12324,
					"./nn/index.js": 72495,
					"./oc/_lib/formatDistance/index.js": 77553,
					"./oc/_lib/formatLong/index.js": 79329,
					"./oc/_lib/formatRelative/index.js": 10556,
					"./oc/_lib/localize/index.js": 86354,
					"./oc/_lib/match/index.js": 23180,
					"./oc/index.js": 3824,
					"./pl/_lib/formatDistance/index.js": 7325,
					"./pl/_lib/formatLong/index.js": 50807,
					"./pl/_lib/formatRelative/index.js": 66002,
					"./pl/_lib/localize/index.js": 12885,
					"./pl/_lib/match/index.js": 84817,
					"./pl/index.js": 63618,
					"./pt-BR/_lib/formatDistance/index.js": 38877,
					"./pt-BR/_lib/formatLong/index.js": 23903,
					"./pt-BR/_lib/formatRelative/index.js": 41897,
					"./pt-BR/_lib/localize/index.js": 78076,
					"./pt-BR/_lib/match/index.js": 13550,
					"./pt-BR/index.js": 81333,
					"./pt/_lib/formatDistance/index.js": 1092,
					"./pt/_lib/formatLong/index.js": 10063,
					"./pt/_lib/formatRelative/index.js": 29479,
					"./pt/_lib/localize/index.js": 81235,
					"./pt/_lib/match/index.js": 51549,
					"./pt/index.js": 63086,
					"./ro/_lib/formatDistance/index.js": 6666,
					"./ro/_lib/formatLong/index.js": 60333,
					"./ro/_lib/formatRelative/index.js": 67125,
					"./ro/_lib/localize/index.js": 39408,
					"./ro/_lib/match/index.js": 9480,
					"./ro/index.js": 66088,
					"./ru/_lib/formatDistance/index.js": 88770,
					"./ru/_lib/formatLong/index.js": 83233,
					"./ru/_lib/formatRelative/index.js": 53566,
					"./ru/_lib/localize/index.js": 81348,
					"./ru/_lib/match/index.js": 45195,
					"./ru/index.js": 66754,
					"./sk/_lib/formatDistance/index.js": 46732,
					"./sk/_lib/formatLong/index.js": 21831,
					"./sk/_lib/formatRelative/index.js": 50560,
					"./sk/_lib/localize/index.js": 31044,
					"./sk/_lib/match/index.js": 58923,
					"./sk/index.js": 78259,
					"./sl/_lib/formatDistance/index.js": 76930,
					"./sl/_lib/formatLong/index.js": 9273,
					"./sl/_lib/formatRelative/index.js": 83070,
					"./sl/_lib/localize/index.js": 42958,
					"./sl/_lib/match/index.js": 83296,
					"./sl/index.js": 1139,
					"./sq/_lib/formatDistance/index.js": 36794,
					"./sq/_lib/formatLong/index.js": 62624,
					"./sq/_lib/formatRelative/index.js": 19232,
					"./sq/_lib/localize/index.js": 76880,
					"./sq/_lib/match/index.js": 57930,
					"./sq/index.js": 43852,
					"./sr-Latn/_lib/formatDistance/index.js": 26261,
					"./sr-Latn/_lib/formatLong/index.js": 40214,
					"./sr-Latn/_lib/formatRelative/index.js": 619,
					"./sr-Latn/_lib/localize/index.js": 25494,
					"./sr-Latn/_lib/match/index.js": 70091,
					"./sr-Latn/index.js": 62394,
					"./sr/_lib/formatDistance/index.js": 94963,
					"./sr/_lib/formatLong/index.js": 9572,
					"./sr/_lib/formatRelative/index.js": 32195,
					"./sr/_lib/localize/index.js": 63747,
					"./sr/_lib/match/index.js": 59555,
					"./sr/index.js": 32397,
					"./sv/_lib/formatDistance/index.js": 93283,
					"./sv/_lib/formatLong/index.js": 45853,
					"./sv/_lib/formatRelative/index.js": 46304,
					"./sv/_lib/localize/index.js": 62185,
					"./sv/_lib/match/index.js": 31379,
					"./sv/index.js": 29779,
					"./ta/_lib/formatDistance/index.js": 74639,
					"./ta/_lib/formatLong/index.js": 83101,
					"./ta/_lib/formatRelative/index.js": 14179,
					"./ta/_lib/localize/index.js": 88574,
					"./ta/_lib/match/index.js": 6042,
					"./ta/index.js": 32718,
					"./te/_lib/formatDistance/index.js": 15919,
					"./te/_lib/formatLong/index.js": 23003,
					"./te/_lib/formatRelative/index.js": 15927,
					"./te/_lib/localize/index.js": 28739,
					"./te/_lib/match/index.js": 46028,
					"./te/index.js": 52275,
					"./th/_lib/formatDistance/index.js": 73448,
					"./th/_lib/formatLong/index.js": 29011,
					"./th/_lib/formatRelative/index.js": 46945,
					"./th/_lib/localize/index.js": 44017,
					"./th/_lib/match/index.js": 65534,
					"./th/index.js": 98492,
					"./tr/_lib/formatDistance/index.js": 91742,
					"./tr/_lib/formatLong/index.js": 66075,
					"./tr/_lib/formatRelative/index.js": 38897,
					"./tr/_lib/localize/index.js": 81281,
					"./tr/_lib/match/index.js": 20941,
					"./tr/index.js": 41062,
					"./ug/_lib/formatDistance/index.js": 31914,
					"./ug/_lib/formatLong/index.js": 70065,
					"./ug/_lib/formatRelative/index.js": 4128,
					"./ug/_lib/localize/index.js": 19758,
					"./ug/_lib/match/index.js": 60663,
					"./ug/index.js": 61505,
					"./uk/_lib/formatDistance/index.js": 2647,
					"./uk/_lib/formatLong/index.js": 71831,
					"./uk/_lib/formatRelative/index.js": 80507,
					"./uk/_lib/localize/index.js": 31882,
					"./uk/_lib/match/index.js": 88845,
					"./uk/index.js": 25490,
					"./uz-Cyrl/_lib/formatDistance/index.js": 59074,
					"./uz-Cyrl/_lib/formatLong/index.js": 16798,
					"./uz-Cyrl/_lib/formatRelative/index.js": 65283,
					"./uz-Cyrl/_lib/localize/index.js": 10755,
					"./uz-Cyrl/_lib/match/index.js": 56523,
					"./uz-Cyrl/index.js": 93757,
					"./uz/_lib/formatDistance/index.js": 55965,
					"./uz/_lib/formatLong/index.js": 59606,
					"./uz/_lib/formatRelative/index.js": 81632,
					"./uz/_lib/localize/index.js": 52970,
					"./uz/_lib/match/index.js": 29633,
					"./uz/index.js": 26466,
					"./vi/_lib/formatDistance/index.js": 72198,
					"./vi/_lib/formatLong/index.js": 32592,
					"./vi/_lib/formatRelative/index.js": 20022,
					"./vi/_lib/localize/index.js": 48125,
					"./vi/_lib/match/index.js": 8624,
					"./vi/index.js": 52358,
					"./zh-CN/_lib/formatDistance/index.js": 31526,
					"./zh-CN/_lib/formatLong/index.js": 87969,
					"./zh-CN/_lib/formatRelative/index.js": 6915,
					"./zh-CN/_lib/localize/index.js": 6890,
					"./zh-CN/_lib/match/index.js": 95454,
					"./zh-CN/index.js": 24602,
					"./zh-HK/_lib/formatDistance/index.js": 84231,
					"./zh-HK/_lib/formatLong/index.js": 47076,
					"./zh-HK/_lib/formatRelative/index.js": 53082,
					"./zh-HK/_lib/localize/index.js": 13653,
					"./zh-HK/_lib/match/index.js": 88357,
					"./zh-HK/index.js": 96835,
					"./zh-TW/_lib/formatDistance/index.js": 63106,
					"./zh-TW/_lib/formatLong/index.js": 27177,
					"./zh-TW/_lib/formatRelative/index.js": 13238,
					"./zh-TW/_lib/localize/index.js": 46341,
					"./zh-TW/_lib/match/index.js": 7768,
					"./zh-TW/index.js": 68368
				};

				function r(e) {
					var t = i(e);
					return n(t)
				}

				function i(e) {
					if (!n.o(a, e)) {
						var t = new Error("Cannot find module '" + e + "'");
						throw t.code = "MODULE_NOT_FOUND", t
					}
					return a[e]
				}
				r.keys = function() {
					return Object.keys(a)
				}, r.resolve = i, e.exports = r, r.id = 63210
			}
		},
		n = {};

	function a(e) {
		var r = n[e];
		if (void 0 !== r) return r.exports;
		var i = n[e] = {
			exports: {}
		};
		return t[e](i, i.exports, a), i.exports
	}
	a.m = t, e = [], a.O = (t, n, r, i) => {
		if (!n) {
			var o = 1 / 0;
			for (d = 0; d < e.length; d++) {
				for (var [n, r, i] = e[d], l = !0, s = 0; s < n.length; s++)(!1 & i || o >= i) && Object.keys(a.O).every((e => a.O[e](n[s]))) ? n.splice(s--, 1) : (l = !1, i < o && (o = i));
				if (l) {
					e.splice(d--, 1);
					var c = r();
					void 0 !== c && (t = c)
				}
			}
			return t
		}
		i = i || 0;
		for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
		e[d] = [n, r, i]
	}, a.n = e => {
		var t = e && e.__esModule ? () => e.default : () => e;
		return a.d(t, {
			a: t
		}), t
	}, a.d = (e, t) => {
		for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		})
	}, a.g = function() {
		if ("object" == typeof globalThis) return globalThis;
		try {
			return this || new Function("return this")()
		} catch (e) {
			if ("object" == typeof window) return window
		}
	}(), a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
		var e;
		a.g.importScripts && (e = a.g.location + "");
		var t = a.g.document;
		if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
			var n = t.getElementsByTagName("script");
			if (n.length)
				for (var r = n.length - 1; r > -1 && !e;) e = n[r--].src
		}
		/*if (!e) throw new Error("Automatic publicPath is not supported in this browser");
		e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), a.p = e*/
	})(), (() => {
		var e = {
			179: 0
		};
		a.O.j = t => 0 === e[t];
		var t = (t, n) => {
				var r, i, [o, l, s] = n,
					c = 0;
				if (o.some((t => 0 !== e[t]))) {
					for (r in l) a.o(l, r) && (a.m[r] = l[r]);
					if (s) var d = s(a)
				}
				for (t && t(n); c < o.length; c++) i = o[c], a.o(e, i) && e[i] && e[i][0](), e[i] = 0;
				return a.O(d)
			},
			/*n = self.webpackChunk_telescope_monorepo = self.webpackChunk_telescope_monorepo || [];*/
		/*n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
	})();
	var r = a.O(void 0, [918], (() => a(29374)));*/
	r = a.O(r)
})();
