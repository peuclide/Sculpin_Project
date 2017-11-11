###Sculpin PCA for lake ontario sculpin
setwd("~/Dropbox/Genetics/Sculpin_analysis/Ontario_Data/PCA")
library(adegenet)
library(pegas)
library(hierfstat)
library(ggplot2)
library(ggfortify)

#all data grouped by sample site
data <- import2genind("genpop_champ_ontarioScul.gen")
#data from champlain only grouped by basin
data <- import2genind("genpop_champScul.gen")

data<- import2genind("genpop_champScul1.gen")

dataInd <- data 
div <- summary(dataInd)
hw.test(dataInd, B = 0)
bartlett.test(list(div$Hexp, div$Hobs)) # difference of means 
fstat(dataInd)

#if you want to measure based on population
dataPop <- genind2genpop(dataInd)
#


#find individual names for
individual_names <- read.csv("~/Dropbox/Genetics/Sculpin_analysis/Ontario_Data/GenAIEx/GIAExSculpinAllLoc_12-15-16.csv")
individual_names <- individual_names[3:nrow(individual_names),1:2]



##make PCA plot of individuals

#### first convert all missing data NAs using scaleGen

sum(is.na(dataInd$tab))

#There are 0 missing data. They will all be replaced by scaleGen:
X <- scaleGen(dataInd, NA.method="mean") #populations
#X <- scaleGen(dataInd, NA.method="mean") #individuals
class(X)
dim(X)

pca1 <- dudi.pca(X,cent=FALSE,scale=FALSE,scannf=FALSE,nf=3)

#pot eigenvalues
barplot(pca1$eig[1:50],main="PCA eigenvalues", col=heat.colors(50))
#variance spread across all values (not surprising for simumaltion data)


s.label(pca1$li, clabel = 0, cpoint = 2)
title("PCA of sculpin populations", outer = T)


#set row names
sculPCA <- pca1$li
rownames(sculPCA) <- individual_names[,1]
sculPCA$site <- individual_names[,2]

ggplot(sculPCA, aes(Axis1, Axis2, colour = site, label = rownames(sculPCA)))+
  #xlim(-5, 5)+
  geom_point(size = 3) + geom_text(vjust = 3.5, nudge_y = 0.5, nudge_x = .5, size = 3)+
  #scale_color_manual(values=c("#000000", "#E69F00", "#56B4E9"))+
  #ylim(-5,5)+
  geom_vline(xintercept = 0)+
  geom_hline(yintercept = 0)

#####===========================================================
###DAPC analysis (disctiminate analysis of principal components)

#find number of clusters
grp <- find.clusters(dataInd, max.n.clust = 40)

grp$grp

x <- dapc(dataInd,grp$grp)
#keep 40 PCs (approximate value after plot levels off)
#keep first 5 discriminant fuctions (approximate amount before info explained is negligable)
scatter(x)


