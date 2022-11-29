def get_melon_best_album(genre_array, play_array):
    melon_dic = {}
    melon_arr = []
    result = []

    # 최대 빈도수를 구하는 식
    for music in zip(genre_array, play_array):
        if music[0] in melon_dic:
            melon_dic[music[0]] += music[1]
        else:
            melon_dic[music[0]] = music[1]
        melon_arr.append(music)
    # 내림차순으로 정렬
    melon_dic = sorted(melon_dic.items(),
                       key=lambda item: item[1], reverse=True)

    melon_arr.sort(reverse=True)

    while len(melon_dic) != 0:
        genre_many = melon_dic.pop(0)[0]
        count = 0
        for pop_music in melon_arr:
            # while count != 2:
            if genre_many == pop_music[0]:
                for i, music in enumerate(zip(genre_array, play_array)):
                    if pop_music == music:
                        result.append(i)
                        count += 1
                        if count == 2:
                            break
            if count == 2:
                break
    return result


print("정답 = [4, 1, 3, 0] / 현재 풀이 값 = ", get_melon_best_album(["classic",
      "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]))
print("정답 = [0, 6, 5, 2, 4, 1] / 현재 풀이 값 = ", get_melon_best_album(["hiphop", "classic",
      "pop", "classic", "classic", "pop", "hiphop"], [2000, 500, 600, 150, 800, 2500, 2000]))
