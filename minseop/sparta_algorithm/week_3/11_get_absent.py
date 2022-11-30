all_students = ["나연", "정연", "모모", "사나", "지효", "미나", "다현", "채영", "쯔위"]
present_students = ["정연", "모모", "채영", "쯔위", "사나", "나연", "미나", "다현"]


def get_absent_student(all_array, present_array):
    studnet = {}
    for key in all_array:
        studnet[key] = True

    for key in present_array:
        del studnet[key]

    for key in studnet.keys():
        return key




print(get_absent_student(all_students, present_students))