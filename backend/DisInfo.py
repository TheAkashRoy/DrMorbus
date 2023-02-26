# {'Disease': 'Drug Reaction', 'Precaution_1': 'stop irritation', 'Precaution_2': 'consult nearest hospital', 'Precaution_3': 'stop taking drug', 'Precaution_4': 'follow up'}
from csv import DictReader
def precaution(name):
    with open("disease_precaution.csv", 'r') as f:
        
        dict_reader = DictReader(f)
        
        list_of_precautions = list(dict_reader)
        index = next((index for (index, d) in enumerate(list_of_precautions) if d["Disease"] == str(name)), None)
        # return list_of_precautions[index]
        return list(list_of_precautions[index].items())

        # print(list_of_dict)
def symptom(name):
    with open("disease_symptoms.csv", 'r') as f:
        
        dict_reader = DictReader(f)
        
        list_of_symptoms = list(dict_reader)
        index = next((index for (index, d) in enumerate(list_of_symptoms) if d["Disease"] == str(name)), None)

        #print(list_of_symptoms[index])
        
        # return list_of_symptoms[index]
        # print(list_of_symptoms[index])
        return list(list_of_symptoms[index].items())

def riskf(name):
    with open("disease_riskFactors.csv", 'r') as f:
        
        dict_reader = DictReader(f)
        
        list_of_riskFactors = list(dict_reader)
        index = next((index for (index, d) in enumerate(list_of_riskFactors) if d["Disease"] == str(name)), None)
        # return (list_of_riskFactors[index])["RISKFAC"]
        # print(list_of_riskFactors[index])
        return list(list_of_riskFactors[index].items())





# def all():
#     with open("disease_symptoms.csv", 'r') as f:
        
#         dict_reader = DictReader(f)
        
#         list_of_symptoms = list(dict_reader)
#         index = [d["Disease"] for d in list_of_symptoms]

#         # print(list_of_symptoms[index])
#         return index
# a=all()
# print(a)
symptom("Dengue")