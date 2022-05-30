def char_count(str):
  # Your code here
  new_list = []
  for x in str:
    count = str.count(x)
    if [x,count] not in new_list:
      new_list.append([x, count])
  new_list.sort(key=lambda x:x[1],reverse=True)
  return new_list


#   -=-=-=-=- new_list.sort(key=lambda x:x[1],reverse=True) -=-=-=-=-
#   good for reverse sorting a list by the second element, 
#   however it does not sort the list alphabeticaly for the same number of elements