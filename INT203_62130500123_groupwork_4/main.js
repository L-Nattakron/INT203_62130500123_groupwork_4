    const app = {
        data() {
            return {
               members:[
                   {id:'1',name:'RM',img:'images/rm.jpg',like:false},
                   {id:'2',name:'JIN',img:'images/jin.jpg',like:false},
                   {id:'3',name:'SUGA',img:'images/suga.jpg',like:false},
                   {id:'4',name:'J-HOPE',img:'images/jhope.jpg',like:false},
                   {id:'5',name:'JIMIN',img:'images/jimin.jpg',like:false},
                   {id:'6',name:'V',img:'images/v.jpg',like:false},
                   {id:'7',name:'JUNGKOOK',img:'images/jk.jpg',like:false}
               ],
               isHidden: true,
               inputSearch:''
            }
        },
        methods:{
            toggleLike(index){
                this.members[index].like = !this.members[index].like
            },
            popupImage(id){
                for (let index = 0; index < this.members.length; index++) {
                    if (this.members[index].id == id) {
                        this.members[index].show = !this.members[index].show;
                    } 
                }
            },
            toggleCancel(){
                this.inputSearch = '';
                this.isHidden = !this.isHidden;
            }
        },
        computed:{
            countLiked(){
                return this.members.filter( m => m.like).length
            },
            searchQuery() {
                if (this.isHidden == true || this.inputSearch == '') {
                    return this.members;
                }else{
                    return this.members.filter(member => {
                        return member.name.toLowerCase().includes(this.inputSearch.toLowerCase())
                      })
                }
               
            }
        }


    }
Vue.createApp(app).mount('#app')
