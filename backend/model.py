from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier 
import pandas as pd


def modelPred(s1,s2,s3,s4,s5):

    db = pd.read_csv(r"Training.csv",index_col='prognosis')
    db.replace({'prognosis':{'Fungal infection':0,'Allergy':1,'GERD':2,'Chronic cholestasis':3,'Drug Reaction':4,
    'Peptic ulcer diseae':5,'AIDS':6,'Diabetes ':7,'Gastroenteritis':8,'Bronchial Asthma':9,'Hypertension ':10,
    'Migraine':11,'Cervical spondylosis':12,
    'Paralysis (brain hemorrhage)':13,'Jaundice':14,'Malaria':15,'Chicken pox':16,'Dengue':17,'Typhoid':18,'hepatitis A':19,
    'Hepatitis B':20,'Hepatitis C':21,'Hepatitis D':22,'Hepatitis E':23,'Alcoholic hepatitis':24,'Tuberculosis':25,
    'Common Cold':26,'Pneumonia':27,'Dimorphic hemmorhoids(piles)':28,'Heart attack':29,'Varicose veins':30,'Hypothyroidism':31,
    'Hyperthyroidism':32,'Hypoglycemia':33,'Osteoarthristis':34,'Arthritis':35,
    '(vertigo) Paroymsal  Positional Vertigo':36,'Acne':37,'Urinary tract infection':38,'Psoriasis':39,
    'Impetigo':40}},inplace=True)
    disease =['Fungal infection','Allergy','GERD','Chronic cholestasis','Drug Reaction',
    'Peptic ulcer diseae','AIDS','Diabetes ','Gastroenteritis','Bronchial Asthma','Hypertension ',
    'Migraine','Cervical spondylosis',
    'Paralysis (brain hemorrhage)','Jaundice','Malaria','Chicken pox','Dengue','Typhoid','hepatitis A',
    'Hepatitis B','Hepatitis C','Hepatitis D','Hepatitis E','Alcoholic hepatitis','Tuberculosis',
    'Common Cold','Pneumonia','Dimorphic hemmorhoids(piles)','Heart attack','Varicose veins','Hypothyroidism',
    'Hyperthyroidism','Hypoglycemia','Osteoarthristis','Arthritis',
    '(vertigo) Paroymsal  Positional Vertigo','Acne','Urinary tract infection','Psoriasis',
    'Impetigo']
    l1 = db.columns

    l2 = [0]*131
    x = db.iloc[:,:-1]
    y = db.iloc[:, :1]
    x_train,x_test,y_train,y_test= train_test_split(x,y,test_size=0.25)


    m1 = DecisionTreeClassifier() 
    m1 = m1.fit(x_train.values,y_train.values)

    psymptoms = [s1,s2,s3,s4,s5]
    for k in range(0,len(l1)):
        for z in psymptoms:
            if(z == l1[k]):
                l2[k]=1

    inputtest = [l2]
    predict = m1.predict(inputtest)
    predicted=predict


    for a in range(0,len(disease)):
        if(predicted == a):
            return disease[a]

# ans = modelPred("itching", "skin_rash","nodal_skin_eruptions","continuous_sneezing","shivering")
# print(ans)
# http://localhost:5000/itching/skin_rash/nodal_skin_eruptions/continuous_sneezing/shivering