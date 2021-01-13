from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth.models import User

# Create your models here.
class InteractionStatus(models.Model):
    interaction_status = models.CharField(max_length=100, help_text='Enter interaction status (Need to check, Sended, Wait for answer, Denied, With answer, In progress)')

class TypeOfInvestor(models.Model):
    type_of_investor = models.CharField(max_length=100, help_text='Enter type of investor (Ukraine VC, Ukraine Angel, International VC, International Angel, Aggregators)')

class Investor(models.Model):
    company_name = models.CharField(max_length=200)
    company_description = models.CharField(max_length=2000)
    #type_of_investor = models.CharField(max_length=100)
    type_of_investor = models.ManyToManyField(TypeOfInvestor, help_text='Select a type of this investor')
    email = models.EmailField(max_length=100, unique=True)
    investment_focus = models.CharField(max_length=1000)
    #interaction_status = models.CharField(max_length=100)
    # owner = models.ForeignKey(User, related_name="investors", on_delete=models.CASCADE, null=True)
    interaction_status = models.ManyToManyField(InteractionStatus, help_text='Select a status for this investor')
    investor_rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)])
    investor_portfolio = models.CharField(max_length=500)
    investor_location = models.CharField(max_length=200)
    website_url = models.CharField(max_length=200, default='NO EMAIl')
    created_at = models.DateTimeField(auto_now_add=True)
 