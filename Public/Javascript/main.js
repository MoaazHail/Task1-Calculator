let arrow = document.getElementById("arrow")
let show = document.querySelector('.advanced')
arrow.addEventListener('click',()=>{
    show.style.display = "grid"
})

let Calculator=
{ 
    screen:document.getElementById('screen'),
    content : document.querySelector('.history .content'),
    first_value: null,
    second_value: null,
    operator: null,
    user_history:[],
    write_text:function(number)
    {
        Calculator.screen.value += number
    },
    delete:function()
    {
        this.screen.value = ""
        this.first_value = null
        this.second_value = null
        this.operator = null

        console.log(this.first_value,this.second_value,this.operator)
    },
    click_operator:function(sign)
    {
        this.first_value = parseFloat(this.screen.value)
        this.screen.value = ""
        this.operator = sign

        console.log(Calculator.first_value,Calculator.operator)
    },
    click_equal:function()
    {
        let result = 0
        this.second_value = parseFloat(this.screen.value)
        this.screen.value = ""
        switch(this.operator)
        {
            case '+':
                result = this.first_value + this.second_value
                this.screen.value += result
                break
            case '-':
                result = this.first_value - this.second_value
                this.screen.value += result
                break
            case 'X':
                result = this.first_value * this.second_value
                this.screen.value += result
                break
            case '/':
                result = this.first_value / this.second_value
                this.screen.value += result
                break

            case 'sin':
                result = Math.sin(this.second_value)
                this.screen.value += result
                break
            case 'cos':
                result = Math.cos(this.second_value)
                this.screen.value += result
                break
            case 'tan':
                result = Math.tan(this.second_value)
                this.screen.value +=  result
                break
            case '^':
                result = this.first_value ** this.second_value
                this.screen.value += result
                break
            case '!':
                let mult=1
                for(let i=1;i<=this.first_value;i++)
                    mult = mult*i
                result = mult
                this.screen.value += result
                break
        }
        this.user_history.push(this.first_value +this.operator + this.second_value + " = " + result)
        this.content.innerText = ""
        for(let i=0;i < this.user_history.length;i++)
            this.content.innerHTML+="<li>"+this.user_history[i]+"</li>"
    },
}


let History =
{
    icon:document.getElementById('icon'),
    content:document.querySelector('.history .content'),
    show:function()
    {
        Calculator.content.style.display='block'
    },
}