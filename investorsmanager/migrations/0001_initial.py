# Generated by Django 3.1.5 on 2021-01-05 14:16

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='InteractionStatus',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('interaction_status', models.CharField(help_text='Enter interaction status (Need to check, Sended, Wait for answer, Denied, With answer, In progress)', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='TypeOfInvestor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type_of_investor', models.CharField(help_text='Enter type of investor (Ukraine VC, Ukraine Angel, International VC, International Angel, Aggregators)', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Investor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(max_length=200)),
                ('company_description', models.CharField(max_length=2000)),
                ('email', models.EmailField(max_length=100, unique=True)),
                ('investment_focus', models.CharField(max_length=1000)),
                ('investor_rating', models.IntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(10)])),
                ('investor_portfolio', models.CharField(max_length=500)),
                ('investor_location', models.CharField(max_length=200)),
                ('interaction_status', models.ManyToManyField(help_text='Select a status for this investor', to='investorsmanager.InteractionStatus')),
                ('type_of_investor', models.ManyToManyField(help_text='Select a type of this investor', to='investorsmanager.TypeOfInvestor')),
            ],
        ),
    ]
