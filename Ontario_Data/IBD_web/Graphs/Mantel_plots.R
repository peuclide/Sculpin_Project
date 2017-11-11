setwd("~/Dropbox/Genetics/Sculpin_analysis/Ontario_Data/IBD_web/Graphs")
library(ggplot2)

datRst <- read.csv("dist_scul_champ.csv")
datFst <- read.csv("Fstdist_scul_champ.csv")

#Plot of Rst vs km
ggplot(datRst, aes(x = km, y = Rst))+
  geom_point()+
  stat_smooth(method = "lm")+
  theme_bw()+
  theme(
    axis.line.x = element_line(colour = "black"),
    axis.line.y = element_line(colour = "black"), 
    panel.border = element_blank(), 
    panel.grid.major = element_blank(),
    panel.grid.minor = element_blank())

#plot of Fst vs km
ggplot(datFst, aes(x = km, y = Fst))+
  geom_point()+
  stat_smooth(method = "lm", color = "black", se = FALSE)+
  theme_bw()+
  theme(
    text = element_text(size=20),
    axis.line.x = element_line(colour = "black"),
    axis.line.y = element_line(colour = "black"), 
    panel.border = element_blank(), 
    panel.grid.major = element_blank(),
    panel.grid.minor = element_blank())