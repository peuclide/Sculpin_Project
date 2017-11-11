
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file:///C:/Users/Administrator/Desktop/WinArl35/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (alr_scul_ONandChamp_2016.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 16/12/16 at 09:08:04", "alr_scul_ONandChamp_2016.xml#16_12_16at09_08_04"))
	insDoc(aux1, gLnk("R", "Settings", "alr_scul_ONandChamp_2016.xml#16_12_16at09_08_04_run_information"))
		aux2 = insFld(aux1, gFld("Samples", ""))
		insDoc(aux2, gLnk("R", "Barber1", "alr_scul_ONandChamp_2016.xml#16_12_16at09_08_04_group0"))
		insDoc(aux2, gLnk("R", "Grand Is", "alr_scul_ONandChamp_2016.xml#16_12_16at09_08_04_group1"))
		insDoc(aux2, gLnk("R", "ISN", "alr_scul_ONandChamp_2016.xml#16_12_16at09_08_04_group2"))
		insDoc(aux2, gLnk("R", "ISS", "alr_scul_ONandChamp_2016.xml#16_12_16at09_08_04_group3"))
		insDoc(aux2, gLnk("R", "mallets", "alr_scul_ONandChamp_2016.xml#16_12_16at09_08_04_group4"))
		insDoc(aux2, gLnk("R", "shelburne bay", "alr_scul_ONandChamp_2016.xml#16_12_16at09_08_04_group5"))
		insDoc(aux2, gLnk("R", "Sunset Is", "alr_scul_ONandChamp_2016.xml#16_12_16at09_08_04_group6"))
		insDoc(aux2, gLnk("R", "Fairhaven_LO", "alr_scul_ONandChamp_2016.xml#16_12_16at09_08_04_group7"))
		insDoc(aux2, gLnk("R", "Hamilton_LO", "alr_scul_ONandChamp_2016.xml#16_12_16at09_08_04_group8"))
		aux2 = insFld(aux1, gFld("Within-samples summary", ""))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "alr_scul_ONandChamp_2016.xml#16_12_16at09_08_04_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "alr_scul_ONandChamp_2016.xml#16_12_16at09_08_04_pop_amova"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "alr_scul_ONandChamp_2016.xml#16_12_16at09_08_04_pop_pairw_diff"))
		insDoc(aux2, gLnk("R", "Exact tests", "alr_scul_ONandChamp_2016.xml#16_12_16at09_08_04_pop_exct_tests"))
	aux1 = insFld(foldersTree, gFld("Run of 16/12/16 at 11:37:12", "alr_scul_ONandChamp_2016.xml#16_12_16at11_37_12"))
	insDoc(aux1, gLnk("R", "Settings", "alr_scul_ONandChamp_2016.xml#16_12_16at11_37_12_run_information"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "alr_scul_ONandChamp_2016.xml#16_12_16at11_37_12_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "alr_scul_ONandChamp_2016.xml#16_12_16at11_37_12_pop_pairw_diff"))
	aux1 = insFld(foldersTree, gFld("Run of 16/12/16 at 14:18:01", "alr_scul_ONandChamp_2016.xml#16_12_16at14_18_01"))
	insDoc(aux1, gLnk("R", "Settings", "alr_scul_ONandChamp_2016.xml#16_12_16at14_18_01_run_information"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "alr_scul_ONandChamp_2016.xml#16_12_16at14_18_01_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "AMOVA", "alr_scul_ONandChamp_2016.xml#16_12_16at14_18_01_pop_amova"))
	aux1 = insFld(foldersTree, gFld("Run of 16/12/16 at 14:31:45", "alr_scul_ONandChamp_2016.xml#16_12_16at14_31_45"))
	insDoc(aux1, gLnk("R", "Settings", "alr_scul_ONandChamp_2016.xml#16_12_16at14_31_45_run_information"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "alr_scul_ONandChamp_2016.xml#16_12_16at14_31_45_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "alr_scul_ONandChamp_2016.xml#16_12_16at14_31_45_pop_pairw_diff"))
