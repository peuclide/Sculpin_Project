
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file:///C:/Users/Administrator/Desktop/WinArl35/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (alr_scul_ONandChamp_12-20-2016.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 20/12/16 at 14:23:05", "alr_scul_ONandChamp_12-20-2016.xml#20_12_16at14_23_05"))
	insDoc(aux1, gLnk("R", "Settings", "alr_scul_ONandChamp_12-20-2016.xml#20_12_16at14_23_05_run_information"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "alr_scul_ONandChamp_12-20-2016.xml#20_12_16at14_23_05_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "alr_scul_ONandChamp_12-20-2016.xml#20_12_16at14_23_05_pop_pairw_diff"))
	aux1 = insFld(foldersTree, gFld("Run of 20/12/16 at 14:23:14", "alr_scul_ONandChamp_12-20-2016.xml#20_12_16at14_23_14"))
	insDoc(aux1, gLnk("R", "Settings", "alr_scul_ONandChamp_12-20-2016.xml#20_12_16at14_23_14_run_information"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "alr_scul_ONandChamp_12-20-2016.xml#20_12_16at14_23_14_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "alr_scul_ONandChamp_12-20-2016.xml#20_12_16at14_23_14_pop_pairw_diff"))
