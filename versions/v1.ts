#include<iostream>
#include<vector>
#include<algorithm>
#include<fstream>

using namespace std;

class student
{
    public:
    string name;
    string id;
    //-1分为缺考
    int score1;
    int score2;
    int score3;
    int score4;
    int score5;
    int score6;
};
vector<student> class1;
vector<student> class2;

bool insert(vector<student>&classtemp)
{
    student temp;
    cout<<"请输入学生姓名：";
    cin>>temp.name;
    cout<<"请输入学生学号：";
    cin>>temp.id;
    cout<<"请输入学生成绩（6次考试）：";
    cin>>temp.score1>>temp.score2>>temp.score3>>temp.score4>>temp.score5>>temp.score6;
    classtemp.push_back(temp);
    return 1;
}
bool search_by_id(string id)
{
    for(int i=0;i<class1.size();i++)
    {
        if(class1[i].id==id)
        {
            cout<<"学生姓名："<<class1[i].name<<endl;
            cout<<"学生学号："<<class1[i].id<<endl;
            cout<<"学生成绩："<<class1[i].score1<<" "<<class1[i].score2<<" "<<class1[i].score3<<" "<<class1[i].score4<<" "<<class1[i].score5<<" "<<class1[i].score6<<endl;
            return 1;
        }
    }
    for(int i=0;i<class2.size();i++)
    {
        if(class2[i].id==id)
        {
            cout<<"学生姓名："<<class2[i].name<<endl;
            cout<<"学生学号："<<class2[i].id<<endl;
            cout<<"学生成绩："<<class2[i].score1<<" "<<class2[i].score2<<" "<<class2[i].score3<<" "<<class2[i].score4<<" "<<class2[i].score5<<" "<<class2[i].score6<<endl;
            return 1;
        }
    }
    cout<<"未找到该学生信息"<<endl;
    return 0;
}
bool del_by_id(string id)
{
    for(int i=0;i<class1.size();i++)
    {
        if(class1[i].id==id)
        {
            class1.erase(class1.begin()+i);
            cout<<"删除成功"<<endl;
            return 1;
        }
    }
     for(int i=0;i<class2.size();i++)
    {
        if(class2[i].id==id)
        {
            class2.erase(class2.begin()+i);
            cout<<"删除成功"<<endl;
            return 1;
        }
    }
    cout<<"未找到该学生信息"<<endl;
    return 0;
}
bool del_by_name(string name)
{
    for(int i=0;i<class1.size();i++)
    {
        if(class1[i].name==name)
        {
            class1.erase(class1.begin()+i);
            cout<<"删除成功"<<endl;
            return 1;
        }
    }
     for(int i=0;i<class2.size();i++)
    {
        if(class2[i].name==name)
        {
            class2.erase(class2.begin()+i);
            cout<<"删除成功"<<endl;
            return 1;
        }
    }
    cout<<"未找到该学生信息"<<endl;
    return 0;
}
bool change(string id,vector<student>&classtemp)
{
    int choice;
    cout<<"请输入待修改内容："<<endl;
    cout<<"1. 学生姓名"<<endl;
    cout<<"2. 学生学号"<<endl;      
    cout<<"(3---8). 学生各科成绩"<<endl;
    cin>>choice;
    if(choice<1||choice>8)
    {
        cout<<"输入错误"<<endl;
        return 0;
    }
    for(int i=0;i<classtemp.size();i++)
    {
        if(classtemp[i].id==id)
        {
            switch(choice)
            {
                case 1:
                {
                    cout<<"请输入新的学生姓名：";
                    cin>>classtemp[i].name;
                    cout<<"修改成功"<<endl;
                    return 1;
                }
                case 2:
                {
                    cout<<"请输入新的学生学号：";
                    cin>>classtemp[i].id;
                    cout<<"修改成功"<<endl;
                    return 1;
                }
                case 3:
                {
                    cout<<"请输入新的学生成绩（第一科）：";
                    cin>>classtemp[i].score1;
                    cout<<"修改成功"<<endl;
                    return 1;
                }
                case 4:
                {
                    cout<<"请输入新的学生成绩（第二科）：";
                    cin>>classtemp[i].score2;
                    cout<<"修改成功"<<endl;
                    return 1;
                }
                case 5:
                {
                    cout<<"请输入新的学生成绩（第三科）：";
                    cin>>classtemp[i].score3;
                    cout<<"修改成功"<<endl;
                    return 1;
                }
                case 6:
                {
                    cout<<"请输入新的学生成绩（第四科）：";
                    cin>>classtemp[i].score4;
                    cout<<"修改成功"<<endl;
                    return 1;
                }
                case 7:
                {
                    cout<<"请输入新的学生成绩（第五科）：";
                    cin>>classtemp[i].score5;
                    cout<<"修改成功"<<endl;
                    return 1;
                }
                case 8:
                {
                    cout<<"请输入新的学生成绩（第六科）：";
                    cin>>classtemp[i].score6;
                    cout<<"修改成功"<<endl;
                    return 1;
                }
            }
        }
    }
    cout<<"未找到该学生信息"<<endl;
    return 0;
}
bool read_file(string filename,vector<student>&classtemp)
{
    ifstream fin;
    fin.open(filename);
    if(!fin)return 0;
    student temp;
    while(fin>>temp.name
             >>temp.id
             >>temp.score1
             >>temp.score2
             >>temp.score3
             >>temp.score4
             >>temp.score5
             >>temp.score6)
    {
        classtemp.push_back(temp);
    }
    fin.close();
    return 1;
}
bool write_file(string filename,vector<student>&classtemp)
{
    ofstream fout;
    fout.open(filename);
    if(!fout)return 0;
    for(int i=0;i<classtemp.size();i++)
    {
        fout<<classtemp[i].name<<" "
            <<classtemp[i].id<<" "
            <<classtemp[i].score1<<" "
            <<classtemp[i].score2<<" "
            <<classtemp[i].score3<<" "
            <<classtemp[i].score4<<" "
            <<classtemp[i].score5<<" "
            <<classtemp[i].score6<<endl;
    }
    fout.close();
    return 1;
}
void search_by_name(string name)
{
    int count=0;
    for(int i=0;i<class1.size();i++)
    {
    string temp_name=class1[i].name;
    auto it=search(temp_name.begin(),temp_name.end(),name.begin(),name.end());
    if(it==temp_name.end()){}
    else
    {
        cout<<"学生姓名："<<class1[i].name<<endl;
        cout<<"学生学号："<<class1[i].id<<endl;
        cout<<"学生成绩："<<class1[i].score1<<" "<<class1[i].score2<<" "<<class1[i].score3<<" "<<class1[i].score4<<" "<<class1[i].score5<<" "<<class1[i].score6<<endl;
        count++;
    }
    }
    for(int i=0;i<class2.size();i++)
    {
    string temp_name=class2[i].name;
    auto it=search(temp_name.begin(),temp_name.end(),name.begin(),name.end());
    if(it==temp_name.end()){}
    else
    {
        cout<<"学生姓名："<<class2[i].name<<endl;
        cout<<"学生学号："<<class2[i].id<<endl;
        cout<<"学生成绩："<<class2[i].score1<<" "<<class2[i].score2<<" "<<class2[i].score3<<" "<<class2[i].score4<<" "<<class2[i].score5<<" "<<class2[i].score6<<endl;
        count++;
    }
    }
    if(count==0)
    {
        cout<<"未发现该学生"<<endl;
        return;
    }
    return;
}
void search_by_score()
{
    int count=0;

    int choice;
    cout<<"请输入查询条件："<<endl;
    cout<<"1. 优秀分数（85分及以上）"<<endl;
    cout<<"2. 挂科（60分以下）"<<endl;
    cin>>choice;
    if(choice != 1 && choice != 2)
{
    cout << "查询条件输入错误" << endl;
    return;
}
    
    int number;
    cout<<"请输入待查询成绩的考试编号（1---6）：";
    cin>>number;
    if(number < 1 || number > 6)
    {
    cout << "考试编号输入错误" << endl;
    return;
    }
    
    for(int i=0;i<class1.size();i++)
    {
        int temp_score;
        switch(number)
        {
            case 1:temp_score=class1[i].score1;break;
            case 2:temp_score=class1[i].score2;break;   
            case 3:temp_score=class1[i].score3;break;
            case 4:temp_score=class1[i].score4;break;
            case 5:temp_score=class1[i].score5;break;
            case 6:temp_score=class1[i].score6;break;
        }
        if(choice==1&&temp_score>=85)
        {
            count++;
            cout<<"一班，学生姓名："<<class1[i].name
            <<"   学生成绩："<<temp_score<<endl;
        }
        else if(choice==2&&temp_score<60&&temp_score>=0)
        {
            count++;
            cout<<"一班，学生姓名："<<class1[i].name
            <<"   学生成绩："<<temp_score<<endl;
        }
    }
    for(int i=0;i<class2.size();i++)
    {
        int temp_score;
        switch(number)
        {
            case 1:temp_score=class2[i].score1;break;
            case 2:temp_score=class2[i].score2;break;   
            case 3:temp_score=class2[i].score3;break;
            case 4:temp_score=class2[i].score4;break;
            case 5:temp_score=class2[i].score5;break;
            case 6:temp_score=class2[i].score6;break;
        }
        if(choice==1&&temp_score>=85)
        {
            count++;
            cout<<"二班，学生姓名："<<class2[i].name
            <<"   学生成绩："<<temp_score<<endl;
        }
        else if(choice==2&&temp_score<60&&temp_score>=0)
        {
            count++;
            cout<<"二班，学生姓名："<<class2[i].name
            <<"   学生成绩："<<temp_score<<endl;
        }
    }
    if(count==0)
    {
        cout<<"未发现符合条件的学生"<<endl;
    }
}
void stastic(vector<student>&classtemp)
{
    if(classtemp.empty())
{
    cout << "该班级暂无学生信息" << endl;
    return;
}
    int choice;
    cout<<"请输入统计条件："<<endl;
    cout<<"1. 各次考试平均分"<<endl;
    cout<<"2. 各次考试最高分"<<endl;
    cout<<"3. 各次考试最低分"<<endl;
    cout<<"4. 不及格人数"<<endl;
    cout<<"5. 优秀人数"<<endl;
    cout<<"6. 缺考名单"<<endl;
    cin >> choice;
    if(choice < 1 || choice > 6)
    {
    cout << "统计条件输入错误" << endl;
    return;
    }
    int sum1=0,sum2=0,sum3=0,sum4=0,sum5=0,sum6=0;
    if(choice==3)
    {sum1=101;sum2=101; sum3=101; sum4=101; sum5=101;sum6=101;}
    int pos1=0,pos2=0,pos3=0,pos4=0,pos5=0,pos6=0;
    int cnt1=0, cnt2=0, cnt3=0, cnt4=0, cnt5=0, cnt6=0;
    for(int i=0;i<classtemp.size();i++)
    {
        int temp_score1=classtemp[i].score1;
        int temp_score2=classtemp[i].score2;
        int temp_score3=classtemp[i].score3;
        int temp_score4=classtemp[i].score4;
        int temp_score5=classtemp[i].score5;
        int temp_score6=classtemp[i].score6;
        switch(choice)
        {
            case 1:
            {
                if(temp_score1 >= 0) { sum1 += temp_score1; cnt1++; }
                if(temp_score2 >= 0) { sum2 += temp_score2; cnt2++; }
                if(temp_score3 >= 0) { sum3 += temp_score3; cnt3++; }
                if(temp_score4 >= 0) { sum4 += temp_score4; cnt4++; }
                if(temp_score5 >= 0) { sum5 += temp_score5; cnt5++; }
                if(temp_score6 >= 0) { sum6 += temp_score6; cnt6++; }
                break;
            }
            case 2:
            {
                if(temp_score1>sum1){sum1=temp_score1;pos1=i;}
                if(temp_score2>sum2){sum2=temp_score2;pos2=i;}
                if(temp_score3>sum3){sum3=temp_score3;pos3=i;}
                if(temp_score4>sum4){sum4=temp_score4;pos4=i;}
                if(temp_score5>sum5){sum5=temp_score5;pos5=i;}
                if(temp_score6>sum6){sum6=temp_score6;pos6=i;}
                break;
            }
            case 3:
            {
                if(temp_score1<sum1&&temp_score1>=0){sum1=temp_score1;pos1=i;}
                if(temp_score2<sum2&&temp_score2>=0){sum2=temp_score2;pos2=i;}
                if(temp_score3<sum3&&temp_score3>=0){sum3=temp_score3;pos3=i;}
                if(temp_score4<sum4&&temp_score4>=0){sum4=temp_score4;pos4=i;}
                if(temp_score5<sum5&&temp_score5>=0){sum5=temp_score5;pos5=i;}
                if(temp_score6<sum6&&temp_score6>=0){sum6=temp_score6;pos6=i;}
                break;
            }
            case 4:
            {
                if(temp_score1>=0&&temp_score1<60)sum1++;
                if(temp_score2>=0&&temp_score2<60)sum2++;
                if(temp_score3>=0&&temp_score3<60)sum3++;
                if(temp_score4>=0&&temp_score4<60)sum4++;
                if(temp_score5>=0&&temp_score5<60)sum5++;
                if(temp_score6>=0&&temp_score6<60)sum6++;
                break;
            }
            case 5:
            {
                if(temp_score1>=85)sum1++;
                if(temp_score2>=85)sum2++;
                if(temp_score3>=85)sum3++;
                if(temp_score4>=85)sum4++;
                if(temp_score5>=85)sum5++;
                if(temp_score6>=85)sum6++;
                break;
            }
            case 6: 
            {
                if(temp_score1==-1||temp_score2==-1||temp_score3==-1||temp_score4==-1||temp_score5==-1||temp_score6==-1)
                cout<<"缺考学生姓名："<<classtemp[i].name<<"  学号："<<classtemp[i].id<<endl;
                if(temp_score1==-1)cout<<"  考试编号：1缺考. ";
                if(temp_score2==-1)cout<<"  考试编号：2缺考. ";
                if(temp_score3==-1)cout<<"  考试编号：3缺考. " ;
                if(temp_score4==-1)cout<<"  考试编号：4缺考. ";
                if(temp_score5==-1)cout<<"  考试编号：5缺考. ";
                if(temp_score6==-1)cout<<"  考试编号：6缺考. ";
                if(temp_score1==-1||temp_score2==-1||temp_score3==-1||temp_score4==-1||temp_score5==-1||temp_score6==-1)
                cout<<endl;
                break;
            }
        }
    }
    switch(choice)
        {
            case 1:
            {
                if(cnt1 != 0) cout << "第1次考试平均分：" << sum1 * 1.0 / cnt1 << endl;
                else cout << "第1次考试无人参加" << endl;
                if(cnt2 != 0) cout << "第2次考试平均分：" << sum2 * 1.0 / cnt2 << endl;
                else cout << "第2次考试无人参加" << endl;
                if(cnt3 != 0) cout << "第3次考试平均分：" << sum3 * 1.0 / cnt3 << endl;
                else cout << "第3次考试无人参加" << endl;
                if(cnt4 != 0) cout << "第4次考试平均分：" << sum4 * 1.0 / cnt4 << endl;
                else cout << "第4次考试无人参加" << endl;
                if(cnt5 != 0) cout << "第5次考试平均分：" << sum5 * 1.0 / cnt5 << endl;
                else cout << "第5次考试无人参加" << endl;
                if(cnt6 != 0) cout << "第6次考试平均分：" << sum6 * 1.0 / cnt6 << endl;
                else cout << "第6次考试无人参加" << endl;
                break;
            }
            case 2:
            {
                cout<<"第 "<<1<<" 次考试最高分为"<<classtemp[pos1].name<<"同学"<<"  成绩为"<<sum1<<endl;
                cout<<"第 "<<2<<" 次考试最高分为"<<classtemp[pos2].name<<"同学"<<"  成绩为"<<sum2<<endl;
                cout<<"第 "<<3<<" 次考试最高分为"<<classtemp[pos3].name<<"同学"<<"  成绩为"<<sum3<<endl;
                cout<<"第 "<<4<<" 次考试最高分为"<<classtemp[pos4].name<<"同学"<<"  成绩为"<<sum4<<endl;
                cout<<"第 "<<5<<" 次考试最高分为"<<classtemp[pos5].name<<"同学"<<"  成绩为"<<sum5<<endl;
                cout<<"第 "<<6<<" 次考试最高分为"<<classtemp[pos6].name<<"同学"<<"  成绩为"<<sum6<<endl;

                break;
            }
            case 3:
            {
                cout<<"第 "<<1<<" 次考试最低分为"<<classtemp[pos1].name<<"同学"<<"  成绩为"<<sum1<<endl;
                cout<<"第 "<<2<<" 次考试最低分为"<<classtemp[pos2].name<<"同学"<<"  成绩为"<<sum2<<endl;
                cout<<"第 "<<3<<" 次考试最低分为"<<classtemp[pos3].name<<"同学"<<"  成绩为"<<sum3<<endl;
                cout<<"第 "<<4<<" 次考试最低分为"<<classtemp[pos4].name<<"同学"<<"  成绩为"<<sum4<<endl;
                cout<<"第 "<<5<<" 次考试最低分为"<<classtemp[pos5].name<<"同学"<<"  成绩为"<<sum5<<endl;
                cout<<"第 "<<6<<" 次考试最低分为"<<classtemp[pos6].name<<"同学"<<"  成绩为"<<sum6<<endl;
                break;
            }
            case 4:
            {
                cout<<"第 "<<1<<" 次考试不及格人数："<<sum1<<endl;
                cout<<"第 "<<2<<" 次考试不及格人数："<<sum2<<endl;
                cout<<"第 "<<3<<" 次考试不及格人数："<<sum3<<endl;
                cout<<"第 "<<4<<" 次考试不及格人数："<<sum4<<endl;
                cout<<"第 "<<5<<" 次考试不及格人数："<<sum5<<endl;
                cout<<"第 "<<6<<" 次考试不及格人数："<<sum6<<endl;
                break;
            }
            case 5:
            {
                cout<<"第 "<<1<<" 次考试优秀人数："<<sum1<<endl;
                cout<<"第 "<<2<<" 次考试优秀人数："<<sum2<<endl;
                cout<<"第 "<<3<<" 次考试优秀人数："<<sum3<<endl;
                cout<<"第 "<<4<<" 次考试优秀人数："<<sum4<<endl;
                cout<<"第 "<<5<<" 次考试优秀人数："<<sum5<<endl;
                cout<<"第 "<<6<<" 次考试优秀人数："<<sum6<<endl;
                break;
            }
        }
}
void display_by_score()
{
    
    int number;
    cout<<"请输入待查询成绩的考试编号(1---6):";
    cin>>number;
    if(number < 1 || number > 6)
    {
    cout << "考试编号输入错误" << endl;
    return;
    }
    vector<student> temp_class;
    vector<student> temp_class1;
    vector<student> temp_class2;
    for(int i=0;i<class1.size();i++)
        temp_class1.push_back(class1[i]);
    for(int i=0;i<class2.size();i++)
        temp_class2.push_back(class2[i]);
    for(int i=0;i<class1.size();i++)
        temp_class.push_back(class1[i]);
    for(int i=0;i<class2.size();i++)
        temp_class.push_back(class2[i]);
    sort(temp_class.begin(),temp_class.end(),[number](student a,student b)
    {
        int score_a,score_b;
        switch(number)
        {
            case 1:score_a=a.score1;score_b=b.score1;break;
            case 2:score_a=a.score2;score_b=b.score2;break;   
            case 3:score_a=a.score3;score_b=b.score3;break;
            case 4:score_a=a.score4;score_b=b.score4;break;
            case 5:score_a=a.score5;score_b=b.score5;break;
            case 6:score_a=a.score6;score_b=b.score6;break;
        }
        return score_a>score_b;
    });
    sort(temp_class1.begin(),temp_class1.end(),[number](student a,student b)
    {
        int score_a,score_b;
        switch(number)
        {
            case 1:score_a=a.score1;score_b=b.score1;break;
            case 2:score_a=a.score2;score_b=b.score2;break;   
            case 3:score_a=a.score3;score_b=b.score3;break;
            case 4:score_a=a.score4;score_b=b.score4;break;
            case 5:score_a=a.score5;score_b=b.score5;break;
            case 6:score_a=a.score6;score_b=b.score6;break;
        }
        return score_a>score_b;
    });
    sort(temp_class2.begin(),temp_class2.end(),[number](student a,student b)
    {
        int score_a,score_b;
        switch(number)
        {
            case 1:score_a=a.score1;score_b=b.score1;break;
            case 2:score_a=a.score2;score_b=b.score2;break;   
            case 3:score_a=a.score3;score_b=b.score3;break;
            case 4:score_a=a.score4;score_b=b.score4;break;
            case 5:score_a=a.score5;score_b=b.score5;break;
            case 6:score_a=a.score6;score_b=b.score6;break;
        }
        return score_a>score_b;
    });
    int rank=1;

    for(int i=0;i<temp_class.size();i++)
    {
    if(i>0)
    {
        int score_current,score_previous;
        switch(number)
        {
            case 1:score_current=temp_class[i].score1;score_previous=temp_class[i-1].score1;break;
            case 2:score_current=temp_class[i].score2;score_previous=temp_class[i-1].score2;break;   
            case 3:score_current=temp_class[i].score3;score_previous=temp_class[i-1].score3;break;
            case 4:score_current=temp_class[i].score4;score_previous=temp_class[i-1].score4;break;
            case 5:score_current=temp_class[i].score5;score_previous=temp_class[i-1].score5;break;
            case 6:score_current=temp_class[i].score6;score_previous=temp_class[i-1].score6;break;
        }
        if(score_current<score_previous)rank=i+1;
    }
    int temp_class_rank=1;
    int class_rank=1;
    for(int j=0;j<temp_class1.size();j++)
    {
    if(j>0)           
        {
        int score_current,score_previous;
        switch(number)
        {
            case 1:score_current=temp_class1[j].score1;score_previous=temp_class1[j-1].score1;break;
            case 2:score_current=temp_class1[j].score2;score_previous=temp_class1[j-1].score2;break;   
            case 3:score_current=temp_class1[j].score3;score_previous=temp_class1[j-1].score3;break;
            case 4:score_current=temp_class1[j].score4;score_previous=temp_class1[j-1].score4;break;                case 5:score_current=temp_class1[j].score5;score_previous=temp_class1[j-1].score5;break;                    case 6:score_current=temp_class1[j].score6;score_previous=temp_class1[j-1].score6;break;
        }
            if(score_current<score_previous)temp_class_rank=j+1;
        }
        if(temp_class[i].id==temp_class1[j].id)
        {
            class_rank=temp_class_rank;
            break;
        }
    }
        temp_class_rank=1;  
    for(int j=0;j<temp_class2.size();j++)
    {
        if(j>0)           
        {
            int score_current,score_previous;
            switch(number)
            {
                case 1:score_current=temp_class2[j].score1;score_previous=temp_class2[j-1].score1;break;
                case 2:score_current=temp_class2[j].score2;score_previous=temp_class2[j-1].score2;break;   
                case 3:score_current=temp_class2[j].score3;score_previous=temp_class2[j-1].score3;break;
                case 4:score_current=temp_class2[j].score4;score_previous=temp_class2[j-1].score4;break;
                case 5:score_current=temp_class2[j].score5;score_previous=temp_class2[j-1].score5;break;                    case 6:score_current=temp_class2[j].score6;score_previous=temp_class2[j-1].score6;break;
            }
                if(score_current<score_previous)temp_class_rank=j+1;
        }
        if(temp_class[i].id==temp_class2[j].id)
        {
            class_rank=temp_class_rank;
            break;
        }
    }
       
    cout<<"级排名"<<rank<<"  班排名"<<class_rank<<"  学生姓名："<<temp_class[i].name<<"  学生成绩：";
    switch(number)
    {
        case 1:cout<<temp_class[i].score1<<endl;break;
        case 2:cout<<temp_class[i].score2<<endl;break;   
        case 3:cout<<temp_class[i].score3<<endl;break;
        case 4:cout<<temp_class[i].score4<<endl;break;
        case 5:cout<<temp_class[i].score5<<endl;break;
        case 6:cout<<temp_class[i].score6<<endl;break;
    }
    }
}
void additional_recording()
{
    int number;
    cout<<"请输入待查询成绩的考试编号(1---6):";
    cin>>number;
    for(int i=0;i<class1.size()+class2.size();i++)
    {
        int temp_score;
       
        if(i<class1.size())
        {
                switch(number)
                {
                case 1:temp_score=class1[i].score1;break;
                case 2:temp_score=class1[i].score2;break;   
                case 3:temp_score=class1[i].score3;break;
                case 4:temp_score=class1[i].score4;break;
                case 5:temp_score=class1[i].score5;break;
            }
        }
        else
        {
            switch(number)
            {
                case 1:temp_score=class2[i-class1.size()].score1;break;
                case 2:temp_score=class2[i-class1.size()].score2;break;
                case 3:temp_score=class2[i-class1.size()].score3;break;
                case 4:temp_score=class2[i-class1.size()].score4;break;
                case 5:temp_score=class2[i-class1.size()].score5;break;
                case 6:temp_score=class2[i-class1.size()].score6;break;
            }
        }
        if(temp_score==-1&&i<class1.size())
        {
            cout<<"一班，学生姓名："<<class1[i].name<<"无成绩"<<endl;
            cout<<"请输入该学生的成绩：";
            cin>>temp_score;
            switch(number)
            {
                case 1:class1[i].score1=temp_score;break;
                case 2:class1[i].score2=temp_score;break;
                case 3:class1[i].score3=temp_score;break;
                case 4:class1[i].score4=temp_score;break;
                case 5:class1[i].score5=temp_score;break;
                case 6:class1[i].score6=temp_score;break;
            }
        }
        else if(temp_score==-1&&i>=class1.size())
        {
            cout<<"二班，学生姓名："<<class2[i-class1.size()].name<<"无成绩"<<endl;
            cout<<"请输入该学生的成绩：";
            cin>>temp_score;
            switch(number)
            {
                case 1:class2[i-class1.size()].score1=temp_score;break;
                case 2:class2[i-class1.size()].score2=temp_score;break;
                case 3:class2[i-class1.size()].score3=temp_score;break;
                case 4:class2[i-class1.size()].score4=temp_score;break;
                case 5:class2[i-class1.size()].score5=temp_score;break;
                case 6:class2[i-class1.size()].score6=temp_score;break;
            }
        }
    }
}


int main()
{
    read_file("class1.txt", class1);
    read_file("class2.txt", class2);

    int choice;

    while(true)
    {
        cout << endl;
        cout << "========== 学生成绩管理系统 ==========" << endl;
        cout << "1. 查询学生信息" << endl;
        cout << "2. 成绩显示与排名" << endl;
        cout << "3. 成绩统计" << endl;
        cout << "4. 学生信息维护" << endl;
        cout << "5. 保存数据" << endl;
        cout << "0. 退出系统" << endl;
        cout << "请输入你的选择：";
        cin >> choice;

        switch(choice)
        {
            case 1:
            {
                int qchoice;
                while(true)
                {
                    cout << endl;
                    cout << "========== 查询学生信息 ==========" << endl;
                    cout << "1. 按学号查询" << endl;
                    cout << "2. 按姓名查询" << endl;
                    cout << "3. 按成绩查询优秀 / 挂科学生" << endl;
                    cout << "0. 返回主菜单" << endl;
                    cout << "请输入你的选择：";
                    cin >> qchoice;

                    if(qchoice == 0) break;

                    if(qchoice == 1)
                    {
                        string id;
                        cout << "请输入学生学号：";
                        cin >> id;
                        search_by_id(id);
                    }
                    else if(qchoice == 2)
                    {
                        string name;
                        cout << "请输入学生姓名：";
                        cin >> name;
                        search_by_name(name);
                    }
                    else if(qchoice == 3)
                    {
                        search_by_score();
                    }
                    else
                    {
                        cout << "输入错误，请重新输入。" << endl;
                    }
                }
                break;
            }

            case 2:
            {
                int dchoice;
                while(true)
                {
                    cout << endl;
                    cout << "========== 成绩显示与排名 ==========" << endl;
                    cout << "1. 按某次考试成绩显示排名" << endl;
                    cout << "0. 返回主菜单" << endl;
                    cout << "请输入你的选择：";
                    cin >> dchoice;

                    if(dchoice == 0) break;

                    if(dchoice == 1)
                    {
                        display_by_score();
                    }
                    else
                    {
                        cout << "输入错误，请重新输入。" << endl;
                    }
                }
                break;
            }

            case 3:
            {
                int schoice;
                while(true)
                {
                    cout << endl;
                    cout << "========== 成绩统计 ==========" << endl;
                    cout << "1. 统计一班" << endl;
                    cout << "2. 统计二班" << endl;
                    cout << "3. 统计全年级" << endl;
                    cout << "0. 返回主菜单" << endl;
                    cout << "请输入你的选择：";
                    cin >> schoice;

                    if(schoice == 0) break;

                    if(schoice == 1)
                    {
                        stastic(class1);
                    }
                    else if(schoice == 2)
                    {
                        stastic(class2);
                    }
                    else if(schoice == 3)
                    {
                        vector<student> all;

                        for(int i = 0; i < class1.size(); i++)
                        {
                            all.push_back(class1[i]);
                        }

                        for(int i = 0; i < class2.size(); i++)
                        {
                            all.push_back(class2[i]);
                        }

                        stastic(all);
                    }
                    else
                    {
                        cout << "输入错误，请重新输入。" << endl;
                    }
                }
                break;
            }

            case 4:
            {
                int mchoice;
                while(true)
                {
                    cout << endl;
                    cout << "========== 学生信息维护 ==========" << endl;
                    cout << "1. 添加学生信息" << endl;
                    cout << "2. 删除学生信息" << endl;
                    cout << "3. 修改学生信息" << endl;
                    cout << "4. 补录缺考成绩" << endl;
                    cout << "0. 返回主菜单" << endl;
                    cout << "请输入你的选择：";
                    cin >> mchoice;

                    if(mchoice == 0) break;

                    if(mchoice == 1)
                    {
                        int class_choice;
                        cout << "请选择添加到哪个班：" << endl;
                        cout << "1. 一班" << endl;
                        cout << "2. 二班" << endl;
                        cout << "请输入你的选择：";
                        cin >> class_choice;

                        if(class_choice == 1)
                        {
                            insert(class1);
                            cout << "添加成功。" << endl;
                        }
                        else if(class_choice == 2)
                        {
                            insert(class2);
                            cout << "添加成功。" << endl;
                        }
                        else
                        {
                            cout << "班级输入错误。" << endl;
                        }
                    }
                    else if(mchoice == 2)
                    {
                        int del_choice;
                        cout << "请选择删除方式：" << endl;
                        cout << "1. 按学号删除" << endl;
                        cout << "2. 按姓名删除" << endl;
                        cout << "请输入你的选择：";
                        cin >> del_choice;

                        if(del_choice == 1)
                        {
                            string id;
                            cout << "请输入待删除学生学号：";
                            cin >> id;
                            del_by_id(id);
                        }
                        else if(del_choice == 2)
                        {
                            string name;
                            cout << "请输入待删除学生姓名：";
                            cin >> name;
                            del_by_name(name);
                        }
                        else
                        {
                            cout << "输入错误。" << endl;
                        }
                    }
                    else if(mchoice == 3)
                    {
                        int class_choice;
                        string id;

                        cout << "请选择学生所在班级：" << endl;
                        cout << "1. 一班" << endl;
                        cout << "2. 二班" << endl;
                        cout << "请输入你的选择：";
                        cin >> class_choice;

                        cout << "请输入待修改学生学号：";
                        cin >> id;

                        if(class_choice == 1)
                        {
                            change(id, class1);
                        }
                        else if(class_choice == 2)
                        {
                            change(id, class2);
                        }
                        else
                        {
                            cout << "班级输入错误。" << endl;
                        }
                    }
                    else if(mchoice == 4)
                    {
                    additional_recording();
                    }
                    else
                    {
                        cout << "输入错误，请重新输入。" << endl;
                    }
                }
                break;
            }

            case 5:
            {
                write_file("class1.txt", class1);
                write_file("class2.txt", class2);
                cout << "保存成功。" << endl;
                break;
            }

            case 0:
            {
                write_file("class1.txt", class1);
                write_file("class2.txt", class2);
                cout << "数据已保存，系统退出。" << endl;
                return 0;
            }

            default:
            {
                cout << "输入错误，请重新输入。" << endl;
                break;
            }
        }
    }

    return 0;
}


