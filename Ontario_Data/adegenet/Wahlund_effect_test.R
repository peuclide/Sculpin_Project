library("adegenet")
library("pegas")
library("hierfstat")

setwd("~/Dropbox/Genetics/Sculpin_analysis/Ontario_Data/adegenet")

C <- read.genepop("GIAExSculpinAllLoc_Wahlund_6-1-17.gen", quiet = TRUE)
data <- import2genind("GIAExSculpinAllLoc_Wahlund_6-2-17.gen")
div <- summary(data)
plot(div$Hobs, xlab="Loci number", ylab="Observed Heterozygosity", 
    main="Observed heterozygosity per locus")
plot(div$Hobs, div$Hexp, xlab="Observed Heterozygosity", ylab="Expected Heterozygosity", 
     main="Expected heterozygosity as a function of observed heterozygosity per locus")



bartlett.test(list(div$Hexp, div$Hobs))
hw.test(data, B = 0)
fstat(data)
